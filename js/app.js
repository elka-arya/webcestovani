let map;
let markers = [];
let activeFilters = {
  continent: null,
  country: null,
  tag: null,
  dogOnly: false,
};

function initMap() {
  if (!document.getElementById('map')) return;

  map = L.map('map', {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([30, 10], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  renderMarkers(ARTICLES);
}

function createIcon(dogFriendly) {
  /* Design-system colours */
  const fill   = dogFriendly ? '#3F6B45' : '#7FA36A';   /* --leaf / --accent */
  const ring   = dogFriendly ? 'rgba(63,107,69,.22)' : 'rgba(127,163,106,.18)';

  /* Inner indicator: paw path for dog, solid dot for solo */
  const inner = dogFriendly
    /* Simplified paw — main pad + three small knuckle circles */
    ? `<circle cx="13" cy="13.5" r="3.8" fill="white" opacity="0.96"/>
       <circle cx="9.2" cy="9.8"  r="1.6" fill="white" opacity="0.80"/>
       <circle cx="13"  cy="8.4"  r="1.6" fill="white" opacity="0.80"/>
       <circle cx="16.8" cy="9.8" r="1.6" fill="white" opacity="0.80"/>`
    : `<circle cx="13" cy="13" r="3.2" fill="white" opacity="0.96"/>
       <circle cx="13" cy="13" r="1.4" fill="${fill}" opacity="0.70"/>`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34">
      <filter id="ds" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="${fill}" flood-opacity="0.28"/>
      </filter>
      <path d="M13 0C5.8 0 0 5.8 0 13c0 9.8 13 21 13 21s13-11.2 13-21C26 5.8 20.2 0 13 0z"
            fill="${fill}" opacity="0.92" filter="url(#ds)"/>
      <!-- outer ring for depth -->
      <circle cx="13" cy="12.5" r="7.5" fill="${ring}"/>
      ${inner}
    </svg>`;

  return L.divIcon({
    html: svg,
    className: 'custom-marker',
    iconSize: [26, 34],
    iconAnchor: [13, 34],
    popupAnchor: [0, -36],
  });
}

function renderMarkers(articles) {
  if (!map) return;
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const lang = getLang();

  articles.forEach(article => {
    const marker = L.marker([article.lat, article.lng], {
      icon: createIcon(article.dogFriendly),
    });

    const title = getArticleText(article, 'title', lang);
    const excerpt = getArticleText(article, 'excerpt', lang);
    const tagHtml = article.tags
      .map(t => `<span class="popup-tag">#${getTagLabel(t, lang)}</span>`)
      .join('');

    marker.bindPopup(`
      <div class="popup-title">${title}</div>
      <p class="popup-excerpt">${excerpt.slice(0, 90)}…</p>
      <a href="${articleUrl(article.id, lang)}" class="popup-link">${t('readMore')} →</a>
      <div class="popup-tags">${tagHtml}</div>
    `);

    marker.articleId = article.id;
    marker.on('click', () => highlightArticle(article.id));
    marker.addTo(map);
    markers.push(marker);
  });

  if (articles.length === 1) {
    map.setView([articles[0].lat, articles[0].lng], 6);
  } else if (articles.length > 1) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.3));
  } else {
    map.setView([30, 10], 2);
  }
}

function highlightArticle(id) {
  const card = document.querySelector(`[data-article-id="${id}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('article-card--highlight');
    setTimeout(() => card.classList.remove('article-card--highlight'), 2000);
  }
}

function filterArticles() {
  return ARTICLES.filter(article => {
    if (activeFilters.continent && !article.tags.includes(activeFilters.continent)) return false;
    if (activeFilters.country && !article.tags.includes(activeFilters.country)) return false;
    if (activeFilters.tag && !article.tags.includes(activeFilters.tag)) return false;
    if (activeFilters.dogOnly && !article.dogFriendly) return false;
    return true;
  });
}

function renderContinentFilters() {
  const container = document.getElementById('continent-filters');
  if (!container) return;
  const lang = getLang();

  container.innerHTML = CONTINENTS.map(c => `
    <button class="chip" data-continent="${c.id}">${c.emoji} ${getContinentLabel(c.id, lang)}</button>
  `).join('');

  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const id = chip.dataset.continent;
      activeFilters.continent = activeFilters.continent === id ? null : id;
      activeFilters.country = null;
      updateFilters();
    });
  });
}

function renderCountryFilters() {
  const container = document.getElementById('country-filters');
  if (!container) return;
  const lang = getLang();
  const continent = activeFilters.continent;
  const countries = continent ? (COUNTRIES[continent] || []) : [];

  if (!continent) {
    container.innerHTML = `<span class="filters__hint">${t('selectContinentFirst')}</span>`;
    return;
  }

  container.innerHTML = countries.map(id => `
    <button class="chip" data-country="${id}">${getCountryLabel(id, lang)}</button>
  `).join('');

  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const id = chip.dataset.country;
      activeFilters.country = activeFilters.country === id ? null : id;
      updateFilters();
    });
  });
}

function renderArticles(articles) {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  ARTICLES.forEach(article => {
    const card = grid.querySelector(`[data-article-id="${article.id}"]`);
    if (!card) return;
    card.classList.toggle('hidden', !articles.some(a => a.id === article.id));
  });

  let noResults = grid.querySelector('.no-results');
  if (articles.length === 0) {
    if (!noResults) {
      noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `<span>🍃</span><p>${t('noResults')}</p>`;
      grid.appendChild(noResults);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

function updateFilterUI() {
  document.querySelectorAll('[data-continent]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.continent === activeFilters.continent);
  });
  document.querySelectorAll('[data-country]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.country === activeFilters.country);
  });
  const dogFilter = document.getElementById('dog-filter');
  if (dogFilter) dogFilter.classList.toggle('active', activeFilters.dogOnly);

  document.querySelectorAll('.tag').forEach(tag => {
    tag.classList.toggle('active-filter', tag.dataset.tag === activeFilters.tag);
  });
}

function updateFilters() {
  renderCountryFilters();
  const filtered = filterArticles();
  renderArticles(filtered);
  renderMarkers(filtered);
  updateFilterUI();
}

function buildArticleCards() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  const lang = getLang();
  grid.innerHTML = '';

  ARTICLES.forEach(article => {
    const title = getArticleText(article, 'title', lang);
    const excerpt = getArticleText(article, 'excerpt', lang);
    const tagsHtml = article.tags.map(tagId => {
      const isDog = tagId === 'se-psem';
      return `<span class="tag ${isDog ? 'tag--dog' : ''}" data-tag="${tagId}">#${getTagLabel(tagId, lang)}</span>`;
    }).join('');

    const card = document.createElement('a');
    card.href = articleUrl(article.id, lang);
    card.className = 'article-card';
    card.dataset.articleId = article.id;
    card.innerHTML = `
      <div class="article-card__image">
        <img src="${article.image}" alt="${title}" loading="lazy">
        ${article.dogFriendly ? `<span class="article-card__badge">${t('badgeDog')}</span>` : ''}
      </div>
      <div class="article-card__body">
        <time class="article-card__date">${formatDate(article.date, lang)}</time>
        <h3 class="article-card__title">${title}</h3>
        <p class="article-card__excerpt">${excerpt}</p>
        <div class="article-card__tags">${tagsHtml}</div>
        <span class="article-card__link">${t('readMore')}</span>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.addEventListener('click', e => {
    const tag = e.target.closest('.tag');
    if (!tag) return;
    e.preventDefault();
    e.stopPropagation();
    const tagId = tag.dataset.tag;
    activeFilters.tag = activeFilters.tag === tagId ? null : tagId;
    updateFilters();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyStaticI18n();
  initLangSwitcher();
  renderContinentFilters();
  renderCountryFilters();
  buildArticleCards();
  initMap();

  const dogFilter = document.getElementById('dog-filter');
  if (dogFilter) {
    dogFilter.addEventListener('click', () => {
      activeFilters.dogOnly = !activeFilters.dogOnly;
      updateFilters();
    });
  }

  const clearFilters = document.getElementById('clear-filters');
  if (clearFilters) {
    clearFilters.addEventListener('click', () => {
      activeFilters = { continent: null, country: null, tag: null, dogOnly: false };
      updateFilters();
    });
  }
});
