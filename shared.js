// ── Works Data ──────────────────────────────────────────────────────────────
window.WORKS_DATA = [
  { slug: 'louboutin',              title: 'Louboutin – Frozen',                  type: 'CGI & AI',     cat: 'Campaign',        year: '2026' },
  { slug: 'alpinestars-techair-mx', title: 'Alpinestars – Techair MX',            type: 'CGI & AI',     cat: 'Campaign',        year: '2025' },
  { slug: 'revel',                  title: 'Revel',                               type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'brand-ai',               title: 'Brand AI',                            type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'alpinestars-plasma',     title: 'Alpinestars – Plasma',                type: 'CGI',          cat: 'Campaign',        year: '2025' },
  { slug: 'palais',                 title: 'Palais',                              type: 'CGI',          cat: 'Visualisation',   year: '2026' },
  { slug: 'prisunic',               title: 'Prisunic',                            type: 'CGI & Design', cat: 'Visualisation',   year: '2025' },
  { slug: 'vr-spicebomb',           title: 'Viktor & Rolf – Spicebomb',           type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'steph-curry',            title: 'Steph Curry',                         type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'coinbase-wnba',          title: 'Coinbase WNBA',                       type: 'CGI',          cat: 'Film',            year: '2025' },
  { slug: 'tag-heuer-f1a',          title: 'Tag Heuer × F1A',                     type: 'CGI',          cat: 'Automotive',      year: '2025' },
  { slug: 'louboutin-cvday',        title: 'Louboutin – 七夕',                     type: 'CGI',          cat: 'Campaign',        year: '2025' },
  { slug: 'didier-lab',             title: 'Didier Lab',                          type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'aetas',                  title: 'Aetas',                               type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'salt-stone-neroli',      title: 'Salt & Stone',                        type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 't1-energy',              title: 'T1 Energy',                           type: 'CGI & AI',     cat: 'Visualisation',   year: '2025' },
  { slug: 'airco',                  title: 'AIRCO',                               type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'conditions',             title: 'Conditions',                          type: 'CGI',          cat: 'Visualisation',   year: '2025' },
  { slug: 'continous',              title: 'Continous',                           type: 'CGI',          cat: 'Self Expression', year: '2025' },
  { slug: 'vehicules',              title: 'Véhicules',                           type: 'CGI',          cat: 'Self Expression', year: '2025' },
  { slug: 'worldscapes',            title: 'Worldscapes',                         type: 'CGI',          cat: 'Self Expression', year: '2024' },
  { slug: 'the-cult-of-mediocrity', title: 'The Cult of Mediocrity – Pt. I',      type: 'CGI & AI',     cat: 'Self Expression', year: '2024' },
  { slug: 'torsion',                title: 'Torsion',                             type: 'CGI',          cat: 'Self Expression', year: '2024' },
  { slug: 'puffer-house',           title: 'Puffer House',                        type: 'CGI',          cat: 'Self Expression', year: '2023' },
  { slug: '21st-europe',            title: '21st Europe',                         type: 'CGI',          cat: 'Design',          year: '2025' },
  { slug: 'mb-aim',                 title: 'Mercedes-Benz – Art in Motion',       type: 'CGI',          cat: '(upcoming)',      year: '2025' },
  { slug: 'bauer',                  title: 'Bauer',                               type: 'CGI',          cat: '(upcoming)',      year: '2025' },
];

// ── Clock (NYC time) ─────────────────────────────────────────────────────────
function updateClock() {
  const nyc = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit',
    second: '2-digit', hour12: false
  }).format(new Date());
  const c1 = document.getElementById('clock');
  const c2 = document.getElementById('clock2');
  if (c1) c1.textContent = nyc;
  if (c2) c2.textContent = nyc;
}
updateClock();
setInterval(updateClock, 1000);

// ── Cursor ───────────────────────────────────────────────────────────────────
window.cur = document.getElementById('cursor');
if (window.cur) {
  document.addEventListener('mousemove', e => {
    window.cur.style.left = e.clientX + 'px';
    window.cur.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => window.cur.classList.add('expand'));
    el.addEventListener('mouseleave', () => window.cur.classList.remove('expand'));
  });
}

// ── Menu ─────────────────────────────────────────────────────────────────────
const overlay   = document.getElementById('menu-overlay');
const menuOpen  = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
if (overlay && menuOpen && menuClose) {
  menuOpen.addEventListener('click',  () => { overlay.classList.add('open');    document.body.style.overflow = 'hidden'; });
  menuClose.addEventListener('click', () => { overlay.classList.remove('open'); document.body.style.overflow = '';       });
}
