const LANGS = ['cs', 'en', 'es'];
const LOCALE = { cs: 'cs-CZ', en: 'en-US', es: 'es-ES' };

const UI = {
  cs: {
    siteName: 'wayward girl',
    siteTagline: 'cestovatelský deník',
    navArticles: 'Články',
    navMap: 'Mapa',
    navLocations: 'Lokality',
    navAbout: 'O mně',
    heroEyebrow: 'Cestovatelský deník',
    heroTitle: 'Příroda, voda<br>a <em>svoboda</em> na cestách',
    heroText: 'Zapisuji zážitky z míst, kde dýchá les, vlní se voda, pulzuje město… a svobodně běhá Arya…',
    heroCta: 'Číst články',
    filtersTitle: 'Kam mě vítr zavál',
    filtersSubtitle: 'Vyber kontinent, stát nebo hashtag — mapa i články se přizpůsobí.',
    labelContinent: 'Kontinent',
    labelCountry: 'Stát',
    labelHashtags: 'Hashtagy',
    filterDog: 'Výlety se psem',
    clearFilters: 'Zrušit všechny filtry',
    selectContinentFirst: 'Nejdřív vyber kontinent',
    mapTitle: 'Interaktivní mapa',
    mapSubtitle: 'Klikni na špendlík — otevře se náhled článku. Zelené značky = cesty se psem.',
    legendDog: 'Výlet se psem',
    legendSolo: 'Bez psa / plánované',
    articlesTitle: 'Články',
    articlesSubtitle: 'Každý příběh nese hashtagy: kontinent · stát · město · #se-psem',
    aboutTitle: 'O mně',
    aboutLead: 'Cestuji pomalu,<br>se psem a otevřeným srdcem.',
    aboutText: 'Miluju přírodu, jezera, moře, cestování, kávičku a Aryu :). Můj parťák je Arya — černá fena německého ovčáka. Spolu hledáme stezky, kde je klid, zeleň a prostor na procházku. Tento web je můj jemný deník míst, která stojí za to sdílet...',
    footer: 'wayward girl · cestovatelský deník · 2026',
    badgeDog: '🐾 Se psem',
    noResults: 'Žádné články pro tuto kombinaci filtrů.<br>Zkus jinou lokalitu nebo hashtag.',
    readMore: 'Číst dál →',
    backHome: '← Zpět na články',
    articleNotFound: 'Článek nenalezen',
    articleNotFoundText: 'Tento příběh zatím neexistuje. Vrať se na hlavní stránku.',
    withArya: 'S Aryou',
    metaDescription: 'Cestovatelský deník o přírodě, jezerech, moři a výletech se psem Aryou.',
  },
  en: {
    siteName: 'wayward girl',
    siteTagline: 'travel journal',
    navArticles: 'Articles',
    navMap: 'Map',
    navLocations: 'Locations',
    navAbout: 'About',
    heroEyebrow: 'Travel journal',
    heroTitle: 'Nature, water<br>and <em>freedom</em> on the road',
    heroText: 'Stories from places where forests breathe, water shimmers, cities hum… and Arya runs wild…',
    heroCta: 'Read articles',
    filtersTitle: 'Where the wind took me',
    filtersSubtitle: 'Pick a continent, country or hashtag — the map and articles will follow.',
    labelContinent: 'Continent',
    labelCountry: 'Country',
    labelHashtags: 'Hashtags',
    filterDog: 'Trips with dog',
    clearFilters: 'Clear all filters',
    selectContinentFirst: 'Select a continent first',
    mapTitle: 'Interactive map',
    mapSubtitle: 'Click a pin for a preview. Green pins = trips with dog.',
    legendDog: 'Trip with dog',
    legendSolo: 'Without dog / planned',
    articlesTitle: 'Articles',
    articlesSubtitle: 'Every story carries hashtags: continent · country · city · #with-dog',
    aboutTitle: 'About Me',
    aboutLead: 'I travel slowly,<br>with a dog and an open heart.',
    aboutText: "I'm 33, I love nature, lakes, the sea and travel. My companion is Arya — a black German Shepherd girl. Together we seek trails with quiet, greenery and room to roam. This site is my gentle diary of places worth sharing.",
    footer: 'wayward girl · travel journal · 2026',
    badgeDog: '🐾 With dog',
    noResults: 'No articles for this filter combination.<br>Try a different location or hashtag.',
    readMore: 'Read more →',
    backHome: '← Back to articles',
    articleNotFound: 'Article not found',
    articleNotFoundText: 'This story does not exist yet. Return to the home page.',
    withArya: 'With Arya',
    metaDescription: 'Travel journal about nature, lakes, the sea and adventures with Arya the dog.',
  },
  es: {
    siteName: 'wayward girl',
    siteTagline: 'diario de viajes',
    navArticles: 'Artículos',
    navMap: 'Mapa',
    navLocations: 'Localidades',
    navAbout: 'Sobre mí',
    heroEyebrow: 'Diario de viajes',
    heroTitle: 'Naturaleza, agua<br>y <em>libertad</em> en el camino',
    heroText: 'Historias de lugares donde respira el bosque, ondula el agua, late la ciudad… y Arya corre libre…',
    heroCta: 'Leer artículos',
    filtersTitle: 'Adonde me llevó el viento',
    filtersSubtitle: 'Elige continente, país o hashtag — el mapa y los artículos se adaptan.',
    labelContinent: 'Continente',
    labelCountry: 'País',
    labelHashtags: 'Hashtags',
    filterDog: 'Excursiones con perro',
    clearFilters: 'Borrar todos los filtros',
    selectContinentFirst: 'Primero elige un continente',
    mapTitle: 'Mapa interactivo',
    mapSubtitle: 'Haz clic en un pin para ver el artículo. Pins verdes = viajes con perro.',
    legendDog: 'Viaje con perro',
    legendSolo: 'Sin perro / planeado',
    articlesTitle: 'Artículos',
    articlesSubtitle: 'Cada historia lleva hashtags: continente · país · ciudad · #con-perro',
    aboutTitle: 'Sobre mí',
    aboutLead: 'Viajo despacio,<br>con mi perra y el corazón abierto.',
    aboutText: 'Tengo 33 años, me encanta la naturaleza, los lagos, el mar y viajar. Mi compañera es Arya — una pastor alemán negro. Juntas buscamos senderos con calma, verde y espacio para caminar. Este sitio es mi diario suave de lugares que merecen compartirse.',
    footer: 'wayward girl · diario de viajes · 2026',
    badgeDog: '🐾 Con perro',
    noResults: 'No hay artículos para esta combinación.<br>Prueba otra localidad o hashtag.',
    readMore: 'Leer más →',
    backHome: '← Volver a artículos',
    articleNotFound: 'Artículo no encontrado',
    articleNotFoundText: 'Esta historia aún no existe. Vuelve a la página principal.',
    withArya: 'Con Arya',
    metaDescription: 'Diario de viajes sobre naturaleza, lagos, mar y aventuras con Arya.',
  },
};

const CONTINENT_LABELS = {
  evropa: { cs: 'Evropa', en: 'Europe', es: 'Europa' },
  asie: { cs: 'Asie', en: 'Asia', es: 'Asia' },
  afrika: { cs: 'Afrika', en: 'Africa', es: 'África' },
  'severni-amerika': { cs: 'Severní Amerika', en: 'North America', es: 'América del Norte' },
  'jizni-amerika': { cs: 'Jižní Amerika', en: 'South America', es: 'América del Sur' },
  oceanie: { cs: 'Oceánie', en: 'Oceania', es: 'Oceanía' },
};

const COUNTRY_LABELS = {
  cesko: { cs: 'Česko', en: 'Czechia', es: 'Chequia' },
  rakousko: { cs: 'Rakousko', en: 'Austria', es: 'Austria' },
  norsko: { cs: 'Norsko', en: 'Norway', es: 'Noruega' },
  island: { cs: 'Island', en: 'Iceland', es: 'Islandia' },
  japonsko: { cs: 'Japonsko', en: 'Japan', es: 'Japón' },
  thajsko: { cs: 'Thajsko', en: 'Thailand', es: 'Tailandia' },
  'jihoafricka-republika': { cs: 'JAR', en: 'South Africa', es: 'Sudáfrica' },
  kanada: { cs: 'Kanada', en: 'Canada', es: 'Canadá' },
  usa: { cs: 'USA', en: 'USA', es: 'EE.UU.' },
  chile: { cs: 'Chile', en: 'Chile', es: 'Chile' },
  argentina: { cs: 'Argentina', en: 'Argentina', es: 'Argentina' },
  'novy-zeland': { cs: 'Nový Zéland', en: 'New Zealand', es: 'Nueva Zelanda' },
};

const TAG_LABELS = {
  ...CONTINENT_LABELS,
  ...COUNTRY_LABELS,
  sumava: { cs: 'Šumava', en: 'Šumava', es: 'Šumava' },
  salzburg: { cs: 'Salzburg', en: 'Salzburg', es: 'Salzburgo' },
  alesund: { cs: 'Ålesund', en: 'Ålesund', es: 'Ålesund' },
  reykjavik: { cs: 'Reykjavík', en: 'Reykjavík', es: 'Reykjavík' },
  patagonie: { cs: 'Patagonie', en: 'Patagonia', es: 'Patagonia' },
  'milford-sound': { cs: 'Milford Sound', en: 'Milford Sound', es: 'Milford Sound' },
  sapporo: { cs: 'Sapporo', en: 'Sapporo', es: 'Sapporo' },
  banff: { cs: 'Banff', en: 'Banff', es: 'Banff' },
  'se-psem': { cs: 'Se psem', en: 'With dog', es: 'Con perro' },
};

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang && LANGS.includes(urlLang)) {
    localStorage.setItem('lang', urlLang);
    return urlLang;
  }
  const stored = localStorage.getItem('lang');
  if (stored && LANGS.includes(stored)) return stored;
  return 'cs';
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}

function t(key) {
  const lang = getLang();
  return UI[lang]?.[key] ?? UI.cs[key] ?? key;
}

function label(map, id, lang) {
  return map[id]?.[lang] ?? map[id]?.cs ?? id;
}

function getTagLabel(id, lang) {
  return label(TAG_LABELS, id, lang ?? getLang());
}

function getContinentLabel(id, lang) {
  return label(CONTINENT_LABELS, id, lang ?? getLang());
}

function getCountryLabel(id, lang) {
  return label(COUNTRY_LABELS, id, lang ?? getLang());
}

function getArticleText(article, field, lang) {
  const l = lang ?? getLang();
  return article.content[l]?.[field] ?? article.content.cs[field];
}

function formatDate(dateStr, lang) {
  return new Date(dateStr).toLocaleDateString(LOCALE[lang ?? getLang()], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function articleUrl(id, lang) {
  const l = lang ?? getLang();
  return `article.html?id=${id}&lang=${l}`;
}

function applyStaticI18n() {
  document.documentElement.lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLang());
  });
  const titleEl = document.querySelector('title[data-i18n-title]');
  if (titleEl) {
    document.title = `${t('siteName')} — ${t('siteTagline')}`;
  }
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = t('metaDescription');
  document.querySelectorAll('.logo').forEach(a => {
    a.href = `index.html?lang=${getLang()}`;
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function getArticleById(id) {
  return ARTICLES.find(a => a.id === Number(id));
}
