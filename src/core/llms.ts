// Проверка llms.txt: доступ, структура, описание, ссылки, балл 0-100.
// Источник: сервер инструментов hitz.agency (https://hitz.agency/tools).
import { assertPublicWebsiteUrl, fetchWithSafeRedirects, readLimitedText } from './net.ts';

export async function checkLlmsTxt(rawUrl: string) {
  const siteUrl = assertPublicWebsiteUrl(rawUrl);
  const checkedUrl = new URL('/llms.txt', siteUrl.origin);
  const response = await fetchWithSafeRedirects(checkedUrl);
  const status = response.status;

  if (status === 404 || status === 410) {
    return {
      exists: false,
      score: 0,
      status,
      checkedUrl: checkedUrl.href,
      checks: [
        { label: 'Доступ', value: String(status), state: 'error', title: 'Файл не найден', copy: 'Создайте llms.txt в корне сайта.' },
        { label: 'Структура', value: '0', state: 'warning', title: 'Нет данных для проверки', copy: 'После публикации проверим заголовки и разделы.' },
        { label: 'Описание', value: 'Нет', state: 'warning', title: 'Описание не найдено', copy: 'Добавьте короткое описание сайта.' },
        { label: 'Ссылки', value: '0', state: 'warning', title: 'Ссылки не найдены', copy: 'Добавьте ссылки на ключевые страницы.' },
      ],
    };
  }

  const text = await readLimitedText(response);
  const body = text.trim();
  const lines = body ? body.split(/\r?\n/) : [];
  const h1Count = lines.filter((line) => /^#\s+\S/.test(line.trim())).length;
  const h2Count = lines.filter((line) => /^##\s+\S/.test(line.trim())).length;
  const hasDescription = lines.some((line) => /^>\s+\S/.test(line.trim()));
  const markdownLinks = [...body.matchAll(/\[[^\]]+\]\((https?:\/\/[^)\s]+)\)/gi)];
  const linkCount = markdownLinks.length;
  const exists = response.ok && body.length > 0;

  let score = 0;
  if (response.ok) score += 25;
  if (body.length > 0) score += 15;
  if (h1Count === 1) score += 15;
  if (hasDescription) score += 10;
  if (h2Count > 0) score += 15;
  if (linkCount > 0) score += 20;
  score = Math.min(100, score);

  return {
    exists,
    score,
    status,
    checkedUrl: checkedUrl.href,
    checks: [
      {
        label: 'Доступ',
        value: String(status),
        state: response.ok ? 'ok' : 'error',
        title: response.ok ? 'Файл доступен' : 'Сервер вернул ошибку',
        copy: response.ok ? 'llms.txt найден в корне сайта.' : 'Проверьте публикацию файла и ответ сервера.',
      },
      {
        label: 'Структура',
        value: h2Count ? String(h2Count) : '0',
        state: h1Count === 1 && h2Count > 0 ? 'ok' : 'warning',
        title: h1Count === 1 && h2Count > 0 ? 'Структура читается' : 'Структуру стоит дополнить',
        copy: h1Count === 1 && h2Count > 0 ? 'Есть главный заголовок и разделы.' : 'Нужны один H1 и разделы второго уровня.',
      },
      {
        label: 'Описание',
        value: hasDescription ? 'Есть' : 'Нет',
        state: hasDescription ? 'ok' : 'warning',
        title: hasDescription ? 'Описание найдено' : 'Описание не найдено',
        copy: hasDescription ? 'Короткое описание помогает понять назначение сайта.' : 'Добавьте строку описания после заголовка.',
      },
      {
        label: 'Ссылки',
        value: String(linkCount),
        state: linkCount > 0 ? 'ok' : 'warning',
        title: linkCount > 0 ? 'Ссылки найдены' : 'Ссылки не найдены',
        copy: linkCount > 0 ? 'В файле есть абсолютные ссылки на страницы.' : 'Добавьте абсолютные ссылки на ключевые страницы.',
      },
    ],
  };
}
