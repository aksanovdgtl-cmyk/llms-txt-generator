// Тесты API в Miniflare: GET /api/tools/llms-check?url=... с подставными llms.txt.
import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { startWorker, text } from './helpers/worker.mjs';

const GOOD = `# Example Store

> Магазин товаров для дома с доставкой по Алматы.

## Каталог

- [Посуда](https://example.com/catalog/dishes): тарелки, чашки, наборы
- [Текстиль](https://example.com/catalog/textile): полотенца и пледы

## Покупателям

- [Доставка](https://example.com/delivery): сроки и стоимость
`;

let worker;

before(async () => {
  worker = await startWorker({
    sites: {
      'https://example.com/llms.txt': () => text(GOOD),
      'https://plain.example/llms.txt': () => text('Example\nссылки: /catalog, /delivery\n'),
      'https://empty.example/llms.txt': () => text(''),
      'https://missing.example/llms.txt': () => text('Not found', { status: 404 }),
      'https://gone.example/llms.txt': () => text('Gone', { status: 410 }),
      'https://error.example/llms.txt': () => text('Error', { status: 503 }),
    },
  });
});

after(() => worker.dispose());

const check = async (url) => {
  const response = await worker.fetch(`/api/tools/llms-check?url=${encodeURIComponent(url)}`);
  return { status: response.status, body: await response.json() };
};
const states = (body) => Object.fromEntries(body.checks.map((c) => [c.label, [c.value, c.state]]));

test('файл по спецификации - 100 баллов', async () => {
  const { status, body } = await check('https://example.com/any/page');
  assert.equal(status, 200);
  assert.equal(body.checkedUrl, 'https://example.com/llms.txt');
  assert.equal(body.exists, true);
  assert.equal(body.score, 100);
  assert.deepEqual(states(body), {
    Доступ: ['200', 'ok'],
    Структура: ['2', 'ok'],
    Описание: ['Есть', 'ok'],
    Ссылки: ['3', 'ok'],
  });
});

test('файл без H1, описания и абсолютных ссылок - только доступ и наполнение', async () => {
  const { body } = await check('https://plain.example');
  assert.equal(body.score, 40);
  assert.deepEqual(states(body), {
    Доступ: ['200', 'ok'],
    Структура: ['0', 'warning'],
    Описание: ['Нет', 'warning'],
    Ссылки: ['0', 'warning'],
  });
});

test('пустой файл: доступен, но не считается найденным', async () => {
  const { body } = await check('https://empty.example');
  assert.equal(body.exists, false);
  assert.equal(body.score, 25);
});

test('404 и 410 - файла нет, 0 баллов', async () => {
  for (const host of ['missing.example', 'gone.example']) {
    const { status, body } = await check(`https://${host}`);
    assert.equal(status, 200);
    assert.equal(body.exists, false);
    assert.equal(body.score, 0);
    assert.equal(body.checks[0].title, 'Файл не найден');
  }
});

test('ошибка сервера - ответ с кодом и состоянием error', async () => {
  const { body } = await check('https://error.example');
  assert.equal(body.exists, false);
  assert.deepEqual(states(body).Доступ, ['503', 'error']);
});

test('адрес не публичного сайта - 400', async () => {
  const response = await worker.fetch('/api/tools/llms-check?url=http://localhost:3000');
  assert.equal(response.status, 400);
});
