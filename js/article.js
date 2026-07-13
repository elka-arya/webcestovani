document.addEventListener('DOMContentLoaded', () => {
  applyStaticI18n();
  initLangSwitcher();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const article = getArticleById(id);
  const lang = getLang();

  if (!article) {
    renderNotFound();
    return;
  }

  renderArticle(article, lang);
});

function renderNotFound() {
  document.getElementById('article-content').innerHTML = `
    <div class="article-not-found">
      <span>🍃</span>
      <h1 data-i18n="articleNotFound">${t('articleNotFound')}</h1>
      <p data-i18n="articleNotFoundText">${t('articleNotFoundText')}</p>
      <a href="index.html?lang=${getLang()}" class="article-back" data-i18n="backHome">${t('backHome')}</a>
    </div>
  `;
}

function renderArticle(article, lang) {
  const title = getArticleText(article, 'title', lang);
  const body = getArticleText(article, 'body', lang);
  const tagsHtml = article.tags
    .map(tagId => {
      const isDog = tagId === 'se-psem';
      return `<span class="tag ${isDog ? 'tag--dog' : ''}">#${getTagLabel(tagId, lang)}</span>`;
    })
    .join('');

  document.title = `${title} — ${t('siteName')}`;

  const bodyHtml = Array.isArray(body)
    ? body.map(p => `<p>${p}</p>`).join('')
    : `<p>${body}</p>`;

  document.getElementById('article-content').innerHTML = `
    <a href="index.html?lang=${lang}#clanky" class="article-back">${t('backHome')}</a>

    <article class="article-detail">
      <header class="article-detail__header">
        <time class="article-detail__date">${formatDate(article.date, lang)}</time>
        <h1 class="article-detail__title">${title}</h1>
        ${article.dogFriendly ? `<span class="article-detail__badge">${t('badgeDog')}</span>` : ''}
        <div class="article-detail__tags">${tagsHtml}</div>
      </header>

      <div class="article-detail__hero">
        <img src="${article.image}" alt="${title}">
      </div>

      <div class="article-detail__body">
        ${bodyHtml}
      </div>

      <div class="article-detail__map" id="article-map"></div>
    </article>
  `;

  initArticleMap(article);
}

function initArticleMap(article) {
  const mapEl = document.getElementById('article-map');
  if (!mapEl) return;

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([article.lat, article.lng], 8);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OSM &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const color = article.dogFriendly ? '#5a7a5e' : '#6b9aa8';
  const icon = L.divIcon({
    html: `<div style="width:16px;height:16px;background:${color};border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.2)"></div>`,
    className: '',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

  L.marker([article.lat, article.lng], { icon }).addTo(map);
}
