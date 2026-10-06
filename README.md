# llms.txt Checker and Generator

**Проверка и генератор llms.txt** · [English](#english) · [Русский](#русский)

[![test](https://github.com/aksanovdgtl-cmyk/llms-txt-generator/actions/workflows/test.yml/badge.svg)](https://github.com/aksanovdgtl-cmyk/llms-txt-generator/actions/workflows/test.yml) [![License: MIT](https://img.shields.io/badge/license-MIT-22f360.svg)](LICENSE) [![Live tool](https://img.shields.io/badge/live-hitz.agency-232323.svg)](https://hitz.agency/en/tools/llms-txt)

## English

Check a website's llms.txt and generate a new one. The checker loads `/llms.txt` from the site root and scores it from 0 to 100. The generator builds a ready file from four fields right in the browser, with preview, copy and download.

- **Live tool:** [hitz.agency/en/tools/llms-txt](https://hitz.agency/en/tools/llms-txt) (Russian: [hitz.agency/tools/llms-txt](https://hitz.agency/tools/llms-txt))
- **This repository:** the same page and the same server check that run on hitz.agency, ready to self-host on Cloudflare Workers.

llms.txt is a proposed Markdown file that gives language models a short map of a site: a title, a one-line description and links to the key pages. Format: [llmstxt.org](https://llmstxt.org/). Support differs between AI systems; the file complements robots.txt and sitemap.xml and does not replace them.

### What the checker scores

| Check | Points | Passes when |
|---|---|---|
| Access | 25 | `/llms.txt` answers with a 2xx status |
| Content | 15 | the file is not empty |
| Title | 15 | exactly one `# H1` line |
| Description | 10 | at least one `> ` blockquote line |
| Sections | 15 | at least one `## H2` line |
| Links | 20 | at least one Markdown link with an absolute `http(s)://` URL |

404 and 410 mean there is no file: score 0. The response groups the result into four cards: access, structure (number of H2 sections), description and links (number of absolute links).

### Generator

Fill in the site name, URL, a short description and the important pages, one per line as `path | title`. Relative paths become absolute URLs on the site's domain:

```markdown
# Example Store

> Home goods with delivery across Almaty.

## Key pages

- [Catalog](https://example.com/catalog)
- [Delivery](https://example.com/delivery)
```

The Russian page writes the section as `## Основные страницы`. Nothing is sent to a server: the file is built in the browser.

### API

```http
GET /api/tools/llms-check?url=https://example.com
```

```json
{
  "exists": true,
  "score": 100,
  "status": 200,
  "checkedUrl": "https://example.com/llms.txt",
  "checks": [
    { "label": "Доступ", "value": "200", "state": "ok", "title": "Файл доступен", "copy": "llms.txt найден в корне сайта." },
    { "label": "Структура", "value": "2", "state": "ok", "title": "Структура читается", "copy": "Есть главный заголовок и разделы." },
    { "label": "Описание", "value": "Есть", "state": "ok", "title": "Описание найдено", "copy": "Короткое описание помогает понять назначение сайта." },
    { "label": "Ссылки", "value": "3", "state": "ok", "title": "Ссылки найдены", "copy": "В файле есть абсолютные ссылки на страницы." }
  ]
}
```

`state` is `ok`, `warning` or `error`. Texts are in Russian, as on hitz.agency; the English page translates them in the browser. Add `lang=en` for English error messages.

| Status | When |
|---|---|
| 400 | no `url`; not http(s); login or password in the URL; non-standard port; IP address, localhost or a host that resolves to a private network; llms.txt over 200 KB |
| 403 | browser request from another origin |
| 429 | more than 10 requests per minute from one IP, or 300 in total |
| 502 | the site timed out, sent a broken redirect or redirected too many times |

### Safety

The Worker fetches public websites only: before every request, including each redirect (up to 3), the hostname is resolved through DNS over HTTPS and rejected if it points to a private, loopback, link-local or reserved address. Timeout is 10 seconds.

### Related guides (in Russian)

- [llms.txt: что это, зачем нужен и как настроить](https://hitz.agency/blog/chto-takoe-llms-txt)
- [AI-краулеры и robots.txt: каких ботов пускать на сайт](https://hitz.agency/blog/ai-kraulery-robots-txt)

### Run locally

Requires Node.js 22.18 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:8787 for the Russian interface or http://localhost:8787/en/ for English. The page calls the API on the same origin: `GET /api/tools/llms-check`.

### Deploy to Cloudflare Workers

```sh
npx wrangler login
npm run deploy
```

One Worker serves `public/` as static assets and answers `/api/tools/llms-check`. The free Workers plan is enough. HTML is parsed with [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/), which is built into the Workers runtime.

### Tests

`npm test` runs unit tests and API tests. API tests build the Worker with Wrangler and run it in Miniflare, the local Cloudflare runtime. DNS lookups and site responses come from fixtures, so no request leaves your machine. `npm run check` type-checks the TypeScript.

### Project structure

```text
public/              page (Russian at /, English at /en/), styles, scripts, fonts
src/worker.ts        Worker entry: /api/* goes to the API, everything else to static assets
src/api.ts           route, Origin check, rate limit, error messages
src/core/            the checks themselves (net.ts, llms.ts)
test/                unit tests and API tests in Miniflare
provenance.json      where each file comes from on hitz.agency, with checksums
CITATION.cff         citation metadata
```

### More free GEO tools by HITZ

| Tool | Live version | Source |
|---|---|---|
| AI Crawler Access Checker | [hitz.agency/en/tools/ai-crawler-check](https://hitz.agency/en/tools/ai-crawler-check) | [ai-crawler-check](https://github.com/aksanovdgtl-cmyk/ai-crawler-check) |
| Prompt Map Generator | [hitz.agency/en/tools/prompt-map](https://hitz.agency/en/tools/prompt-map) | [geo-prompt-map](https://github.com/aksanovdgtl-cmyk/geo-prompt-map) |
| GEO Page Audit | [hitz.agency/en/tools/geo-audit](https://hitz.agency/en/tools/geo-audit) | [geo-audit](https://github.com/aksanovdgtl-cmyk/geo-audit) |
| Brand Entity Check | [hitz.agency/en/tools/brand-entity](https://hitz.agency/en/tools/brand-entity) | [brand-entity-check](https://github.com/aksanovdgtl-cmyk/brand-entity-check) |
| Schema / JSON-LD Checker | [hitz.agency/en/tools/schema-check](https://hitz.agency/en/tools/schema-check) | [jsonld-schema-check](https://github.com/aksanovdgtl-cmyk/jsonld-schema-check) |

Catalog with guides: [hitz-geo-tools](https://github.com/aksanovdgtl-cmyk/hitz-geo-tools) · [hitz.agency/en/tools](https://hitz.agency/en/tools)

### How to cite

Use **Cite this repository** on GitHub ([CITATION.cff](CITATION.cff)) or:

> HITZ. llms.txt Checker and Generator. https://hitz.agency/en/tools/llms-txt

A link to the live tool is appreciated when you mention it in an article or a talk. The MIT license only requires keeping the copyright notice in copies of the code.

### About HITZ

[HITZ](https://hitz.agency/en) is a GEO agency based in Almaty and Tashkent. We help brands get mentioned and cited in answers from ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews and Yandex Alice. This tool is part of our free [GEO toolkit](https://hitz.agency/en/tools).

### License

[MIT](LICENSE) © 2026 HITZ. The fonts in `public/assets/fonts` are under the SIL Open Font License 1.1. The HITZ name and logo are not covered by the MIT license.

---

## Русский

Проверка llms.txt сайта и генератор нового файла. Проверка загружает `/llms.txt` из корня сайта и ставит оценку от 0 до 100. Генератор собирает готовый файл из четырех полей прямо в браузере: с предпросмотром, копированием и скачиванием.

- **Онлайн-версия:** [hitz.agency/tools/llms-txt](https://hitz.agency/tools/llms-txt) (английская: [hitz.agency/en/tools/llms-txt](https://hitz.agency/en/tools/llms-txt))
- **Этот репозиторий:** та же страница и та же серверная проверка, что работают на hitz.agency. Можно развернуть у себя в Cloudflare Workers.

llms.txt это предложенный формат Markdown-файла с короткой картой сайта для языковых моделей: название, описание в одну строку и ссылки на главные страницы. Формат: [llmstxt.org](https://llmstxt.org/). Поддержка у AI-систем разная; файл дополняет robots.txt и sitemap.xml, а не заменяет их.

### Что оценивает проверка

| Проверка | Баллы | Засчитывается, когда |
|---|---|---|
| Доступ | 25 | `/llms.txt` отвечает кодом 2xx |
| Наполнение | 15 | файл не пустой |
| Заголовок | 15 | ровно одна строка `# H1` |
| Описание | 10 | есть хотя бы одна цитата `> ` |
| Разделы | 15 | есть хотя бы одна строка `## H2` |
| Ссылки | 20 | есть хотя бы одна Markdown-ссылка с абсолютным адресом `http(s)://` |

Коды 404 и 410 значат, что файла нет: 0 баллов. В ответе результат собран в четыре карточки: доступ, структура (число разделов H2), описание и ссылки (число абсолютных ссылок).

### Генератор

Укажите название сайта, адрес, короткое описание и важные страницы, по одной в строке в виде `путь | название`. Относительные пути превращаются в абсолютные адреса на домене сайта:

```markdown
# Example Store

> Товары для дома с доставкой по Алматы.

## Основные страницы

- [Каталог](https://example.com/catalog)
- [Доставка](https://example.com/delivery)
```

На английской странице раздел называется `## Key pages`. На сервер ничего не отправляется: файл собирается в браузере.

### API

```http
GET /api/tools/llms-check?url=https://example.com
```

Ответ: признак наличия файла, балл, код ответа, проверенный адрес и массив `checks` из четырех карточек (пример в английском разделе). Поле `state`: `ok`, `warning` или `error`. С параметром `lang=en` ошибки приходят по-английски.

| Код | Когда |
|---|---|
| 400 | нет `url`; не http(s); логин или пароль в адресе; нестандартный порт; IP-адрес, localhost или имя, которое указывает во внутреннюю сеть; llms.txt больше 200 КБ |
| 403 | запрос браузера с чужого домена |
| 429 | больше 10 запросов в минуту с одного IP или 300 на всех |
| 502 | сайт не ответил вовремя, перенаправление некорректное или их слишком много |

### Безопасность

Worker загружает только публичные сайты: перед каждым запросом, включая перенаправления (до 3), имя сайта проверяется через DNS over HTTPS, частные, локальные, служебные и зарезервированные адреса отклоняются. Ожидание ответа до 10 секунд.

### Разборы по теме

- [llms.txt: что это, зачем нужен и как настроить](https://hitz.agency/blog/chto-takoe-llms-txt)
- [AI-краулеры и robots.txt: каких ботов пускать на сайт](https://hitz.agency/blog/ai-kraulery-robots-txt)

### Запуск

Нужен Node.js 22.18 или новее.

```sh
npm install
npm run dev
```

Откройте http://localhost:8787 (русский интерфейс) или http://localhost:8787/en/ (английский). Страница обращается к API на своем домене: `GET /api/tools/llms-check`.

### Публикация в Cloudflare Workers

```sh
npx wrangler login
npm run deploy
```

Один Worker отдает статику из `public/` и отвечает на `/api/tools/llms-check`. Бесплатного тарифа Workers достаточно. HTML разбирается через [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/), он встроен в среду Workers.

### Проверки

`npm test` запускает модульные тесты и тесты API. Для тестов API Worker собирается Wrangler и работает в Miniflare, локальной среде Cloudflare. DNS и ответы сайтов подставляются из фикстур: запросы в интернет не уходят. `npm run check` проверяет типы TypeScript.

### Структура

```text
public/              страница (русская на /, английская на /en/), стили, скрипты, шрифты
src/worker.ts        вход Worker: /api/* в API, остальное в статику
src/api.ts           маршрут, проверка Origin, лимит запросов, тексты ошибок
src/core/            сами проверки (net.ts, llms.ts)
test/                модульные тесты и тесты API в Miniflare
provenance.json      откуда взят каждый файл на hitz.agency, контрольные суммы
CITATION.cff         данные для цитирования
```

### Другие бесплатные инструменты HITZ

| Инструмент | Онлайн | Исходный код |
|---|---|---|
| Проверка доступа AI-краулеров | [hitz.agency/tools/ai-crawler-check](https://hitz.agency/tools/ai-crawler-check) | [ai-crawler-check](https://github.com/aksanovdgtl-cmyk/ai-crawler-check) |
| Генератор карты промтов | [hitz.agency/tools/prompt-map](https://hitz.agency/tools/prompt-map) | [geo-prompt-map](https://github.com/aksanovdgtl-cmyk/geo-prompt-map) |
| GEO-аудит страницы | [hitz.agency/tools/geo-audit](https://hitz.agency/tools/geo-audit) | [geo-audit](https://github.com/aksanovdgtl-cmyk/geo-audit) |
| Проверка сущности бренда | [hitz.agency/tools/brand-entity](https://hitz.agency/tools/brand-entity) | [brand-entity-check](https://github.com/aksanovdgtl-cmyk/brand-entity-check) |
| Проверка и генератор Schema / JSON-LD | [hitz.agency/tools/schema-check](https://hitz.agency/tools/schema-check) | [jsonld-schema-check](https://github.com/aksanovdgtl-cmyk/jsonld-schema-check) |

Каталог с разборами: [hitz-geo-tools](https://github.com/aksanovdgtl-cmyk/hitz-geo-tools) · [hitz.agency/tools](https://hitz.agency/tools)

### Как сослаться

Кнопка GitHub **Cite this repository** ([CITATION.cff](CITATION.cff)) или строка:

> HITZ. Проверка и генератор llms.txt. https://hitz.agency/tools/llms-txt

Если упоминаете инструмент в статье или докладе, будем рады ссылке на онлайн-версию. Лицензия MIT требует только сохранить уведомление об авторстве в копиях кода.

### О HITZ

[HITZ](https://hitz.agency/) - GEO-агентство из Алматы и Ташкента. Помогаем брендам попадать в ответы ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews и Алисы. Инструмент входит в набор [бесплатных GEO-инструментов](https://hitz.agency/tools).

### Лицензия

[MIT](LICENSE) © 2026 HITZ. Шрифты в `public/assets/fonts` распространяются по SIL Open Font License 1.1. Название и логотип HITZ под лицензию MIT не подпадают.
