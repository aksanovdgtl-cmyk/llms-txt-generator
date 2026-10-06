const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const checkForm = $('#check-form');
const resultSection = $('#result');
const checksGrid = $('#checks-grid');
const scoreValue = $('#score-value');
const statusPill = $('#status-pill');
const statusTitle = $('#status-title');
const statusCopy = $('#status-copy');
const resultTitle = $('#result-title');
const resultCta = $('#result-cta');
const toast = $('#toast');

function normalizeUrl(value) {
  const candidate = /^https?:\/\//i.test(value.trim()) ? value.trim() : `https://${value.trim()}`;
  return new URL(candidate).origin;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('lt-is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('lt-is-visible'), 1800);
}

function renderChecks(checks) {
  checksGrid.innerHTML = checks.map((item) => `
    <article class="lt-check-card ${item.state === 'warning' ? 'lt-is-warning' : item.state === 'error' ? 'lt-is-error' : ''}"> <div class="lt-check-card-top"><span>${item.label}</span><b>${item.value}</b></div> <h4>${item.title}</h4> <p>${item.copy}</p> </article>
  `).join('');
}

function loadingResult(domain) {
  resultSection.hidden = false;
  resultTitle.textContent = domain;
  scoreValue.textContent = '…';
  statusPill.textContent = 'Проверяем';
  statusTitle.textContent = 'Загружаем llms.txt';
  statusCopy.textContent = 'Проверяем доступность, структуру и ссылки.';
  checksGrid.innerHTML = Array.from({ length: 4 }, (_, index) => `
    <article class="lt-check-card"><div class="lt-check-card-top"><span>0${index + 1}</span><b>…</b></div><h4>Проверяем</h4><p>Собираем данные с сайта.</p></article>
  `).join('');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderResult(data) {
  const found = data.exists;
  scoreValue.textContent = data.score;
  statusPill.textContent = found ? 'Файл найден' : 'Файл не найден';
  statusPill.style.color = found ? '' : '#f7c45c';
  statusTitle.textContent = found ? 'llms.txt доступен' : 'Нужно создать llms.txt';
  statusCopy.textContent = found
    ? `Файл получен с кодом ${data.status}. Ниже - структура и замечания.`
    : `По адресу ${data.checkedUrl} файл не найден. Генератор подготовит основу.`;
  resultCta.textContent = found ? 'Обновить файл' : 'Создать файл';
  renderChecks(data.checks);
}

checkForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = $('button[type="submit"]', checkForm);
  try {
    const origin = normalizeUrl($('#site-url').value);
    button.disabled = true;
    button.textContent = 'Проверяем…';
    loadingResult(origin.replace(/^https?:\/\//, ''));
    const response = await fetch(`/api/tools/llms-check?url=${encodeURIComponent(origin)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Не удалось проверить сайт');
    renderResult(data);
    $('#project-url').value = origin;
    if (!$('#project-name').value.trim() || $('#project-name').value === 'HITZ Agency') {
      $('#project-name').value = new URL(origin).hostname.replace(/^www\./, '');
    }
  } catch (error) {
    scoreValue.textContent = '-';
    statusPill.textContent = 'Ошибка';
    statusPill.style.color = '#ff716b';
    statusTitle.textContent = 'Сайт не удалось проверить';
    statusCopy.textContent = error.message;
    renderChecks([
      { label: 'Доступ', value: 'Ошибка', state: 'error', title: 'Нет ответа', copy: 'Проверьте адрес сайта и попробуйте еще раз.' }
    ]);
  } finally {
    button.disabled = false;
    button.innerHTML = 'Проверить <span aria-hidden="true">↗</span>';
  }
});

$$('.lt-mode-button').forEach((button) => {
  button.addEventListener('click', () => {
    $$('.lt-mode-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('lt-is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    if (button.dataset.mode === 'generate') {
      $('#generator').scrollIntoView({ behavior: 'smooth' });
    } else {
      $('#site-url').focus();
    }
  });
});

function absoluteUrl(origin, path) {
  try { return new URL(path.trim(), origin).href; }
  catch { return path.trim(); }
}

$('#generator-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $('#project-name').value.trim();
  const origin = normalizeUrl($('#project-url').value);
  const description = $('#project-description').value.trim();
  const pages = $('#project-pages').value.split('\n').map((line) => line.trim()).filter(Boolean);
  const links = pages.map((line) => {
    const [path, label] = line.split('|').map((part) => part.trim());
    const href = absoluteUrl(origin, path);
    return `- [${label || path}](${href})`;
  }).join('\n');
  const output = `# ${name}\n\n> ${description}\n\n## Основные страницы\n\n${links}\n`;
  $('#generated-code').textContent = output;
  $('#code-preview').hidden = false;
  $('#code-preview').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

$('#copy-code').addEventListener('click', async () => {
  const text = $('#generated-code').textContent;
  let copied = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (error) {}
  if (!copied) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    copied = document.execCommand('copy');
    area.remove();
  }
  showToast(copied ? 'Файл скопирован' : 'Не удалось скопировать');
});

$('#download-code').addEventListener('click', () => {
  const blob = new Blob([$('#generated-code').textContent], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'llms.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast('Скачивание началось');
});
