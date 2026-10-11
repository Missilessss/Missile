'use strict';

const table = document.getElementById('periodic-table');
const info = document.getElementById('element-info');
const electronButton = document.getElementById('electron-config-button');
const searchInput = document.getElementById('element-search');
const clearButton = document.getElementById('clear-search');
const searchResult = document.getElementById('search-result');
const categoryFilter = document.getElementById('element-category');
const themeToggle = document.getElementById('theme-toggle');
let selectedElement = null;

function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? '☀️ Aktifkan mode terang' : '🌙 Aktifkan mode gelap';
}

themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark-theme')));


function safeText(value, fallback = 'Data tidak tersedia') {
  return value === undefined || value === null || value === '' ? fallback : String(value);
}

function electronDiagram(element, large = false) {
  const shells = String(element.electronConfig || '').split(',').map(v => Number(v.trim())).filter(v => Number.isFinite(v) && v >= 0);
  const cx = 150, cy = 132;
  const maxRadius = 94;
  const step = shells.length > 1 ? Math.min(13, maxRadius / shells.length) : 0;
  let rings = '';
  let electronGroups = '';
  shells.forEach((count, index) => {
    const radius = 22 + index * step;
    rings += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#9acfd3" stroke-width="1.5"/>`;
    let shellElectrons = '';
    for (let j = 0; j < count; j++) {
      const angle = (Math.PI * 2 * j / Math.max(count, 1)) - Math.PI / 2 + (index % 2 ? Math.PI / Math.max(count, 1) : 0);
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      shellElectrons += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4.2" fill="#2587f5" stroke="#ffffff" stroke-width="1.2"><title>Elektron pada kulit ${index + 1}</title></circle>`;
    }
    const orbitClass = index % 3 === 0 ? 'orbit-fast' : index % 3 === 1 ? 'orbit-slow' : '';
    electronGroups += `<g class="electron-orbit ${orbitClass}">${shellElectrons}</g>`;
  });
  return `<div class="electron-diagram-wrap ${large ? 'large' : ''}">
    <svg class="electron-diagram" viewBox="0 0 300 270" role="img" aria-label="Diagram atom ${element.name} dengan ${shells.length} kulit elektron">
      <defs><radialGradient id="nucleus-${element.number}" cx="35%" cy="30%"><stop offset="0%" stop-color="#a6e8e8"/><stop offset="100%" stop-color="#087f8c"/></radialGradient></defs>
      ${rings}
      ${electronGroups}
      <circle cx="${cx}" cy="${cy}" r="15" fill="url(#nucleus-${element.number})" stroke="#ffffff" stroke-width="2"/>
      <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${element.symbol}</text>
    </svg>
    <div class="diagram-legend"><span><i class="legend-nucleus"></i> Inti atom</span><span><i class="legend-electron"></i> Elektron</span></div>
  </div>`;
}

const categoryLabels = {
  'alkali': 'Logam alkali', 'alkaline-earth': 'Logam alkali tanah',
  'transition-metal': 'Logam transisi', 'post-transition-metal': 'Logam pascatransisi',
  'metalloid': 'Metaloid', 'nonmetal': 'Nonlogam', 'halogen': 'Halogen',
  'noble-gas': 'Gas mulia', 'lanthanide': 'Lantanida', 'actinide': 'Aktinida'
};

function showElementInfo(element) {
  selectedElement = element;
  document.querySelectorAll('.element-card.selected').forEach(card => card.classList.remove('selected'));
  const selectedCard = document.querySelector(`.element-card[data-number="${element.number}"]`);
  if (selectedCard) selectedCard.classList.add('selected');
  info.innerHTML = `
    <span class="info-label">DETAIL UNSUR · NOMOR ${element.number}</span>
    <div class="info-symbol ${element.category}">${element.symbol}</div>
    <h2>${element.name}</h2>
    <div class="info-facts">
      <p><strong>Nomor atom</strong><span>${element.number}</span></p>
      <p><strong>Massa atom</strong><span>${safeText(element.mass)} u</span></p>
      <p><strong>Golongan</strong><span>${safeText(element.group)}</span></p>
      <p><strong>Periode</strong><span>${safeText(element.period)}</span></p>
      <p><strong>Kategori</strong><span>${safeText(categoryLabels[element.category], element.category)}</span></p>
      <p><strong>Wujud</strong><span>${safeText(element.state)}</span></p>
    </div>
    <div class="config-box"><strong>Diagram konfigurasi elektron</strong>${electronDiagram(element)}<small>Setiap titik biru mewakili satu elektron.</small></div>
    <p><strong>Titik leleh:</strong> ${element.meltingPoint != null ? element.meltingPoint + ' °C' : 'Data tidak tersedia'}</p>
    <p><strong>Titik didih:</strong> ${element.boilingPoint != null ? element.boilingPoint + ' °C' : 'Data tidak tersedia'}</p>
    <hr>
    <p><strong>Deskripsi</strong><br>${safeText(element.description)}</p>
    <p><strong>Kegunaan</strong><br>${safeText(element.uses)}</p>
  `;
}

function showConfigInfo() {
  if (!selectedElement) {
    info.innerHTML = `
      <span class="info-label">DIAGRAM ELEKTRON</span>
      <h2>Pilih unsur terlebih dahulu</h2>
      <p>Klik sebuah unsur pada tabel periodik, lalu tekan tombol konfigurasi elektron.</p>
      <div class="config-example"><strong>Contoh diagram atom</strong><p>Pilih unsur untuk melihat susunan elektron dalam bentuk gambar.</p></div>`;
    return;
  }
  info.innerHTML = `
    <span class="info-label">DIAGRAM KONFIGURASI ELEKTRON</span>
    <div class="info-symbol ${selectedElement.category}">${selectedElement.symbol}</div>
    <h2>${selectedElement.name}</h2>
    <p>Nomor atom: <strong>${selectedElement.number}</strong></p>
    <div class="config-box"><strong>Susunan elektron per kulit</strong>${electronDiagram(selectedElement, true)}<small>Setiap titik biru adalah satu elektron. Lingkaran menunjukkan kulit atom.</small></div>
    <p class="tip-note">Pada atom netral, jumlah elektron sama dengan nomor atom.</p>
    <button type="button" class="inline-action" id="back-to-details">← Kembali ke detail unsur</button>`;
  document.getElementById('back-to-details').addEventListener('click', () => showElementInfo(selectedElement));
}

function createElementCard(element) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = `element-card ${element.category || ''}`;
  card.dataset.number = element.number;
  card.setAttribute('aria-label', `${element.name}, nomor atom ${element.number}`);
  card.style.gridColumn = element.number >= 57 && element.number <= 71
    ? element.number - 57 + 4
    : element.number >= 89 && element.number <= 103
      ? element.number - 89 + 4
      : element.group;
  card.style.gridRow = element.number >= 57 && element.number <= 71 ? 9
    : element.number >= 89 && element.number <= 103 ? 10 : element.period;
  card.style.animationDelay = `${(element.number % 30) * 10}ms`;
  card.innerHTML = `<span class="atomic-number">${element.number}</span><span class="symbol">${element.symbol}</span><span class="name">${element.name}</span><span class="atomic-mass">${element.mass}</span>`;
  card.addEventListener('click', () => showElementInfo(element));
  card.addEventListener('focus', () => showElementInfo(element));
  table.appendChild(card);
}

elementData.forEach(createElementCard);

electronButton.addEventListener('click', showConfigInfo);

// Unsur pilihan hari ini: berubah setiap hari, tanpa perlu koneksi internet.
const featuredElement = elementData[Math.floor(Date.now() / 86400000) % elementData.length];
document.getElementById('featured-card').innerHTML = `<span class="featured-number">${featuredElement.number}</span><strong>${featuredElement.symbol}</strong><span>${featuredElement.name}</span>`;
document.getElementById('featured-description').textContent = featuredElement.description;
document.getElementById('featured-open').addEventListener('click', () => {
  showElementInfo(featuredElement);
  info.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Dropdown pembanding diisi dari seluruh 118 unsur.
const compareA = document.getElementById('compare-a');
const compareB = document.getElementById('compare-b');
function fillElementSelect(select, selectedNumber) {
  elementData.forEach(element => {
    const option = document.createElement('option');
    option.value = element.number;
    option.textContent = `${element.number}. ${element.name} (${element.symbol})`;
    option.selected = element.number === selectedNumber;
    select.appendChild(option);
  });
}
fillElementSelect(compareA, 11);
fillElementSelect(compareB, 19);
function compareElements() {
  const a = elementData.find(element => element.number === Number(compareA.value));
  const b = elementData.find(element => element.number === Number(compareB.value));
  const fields = [
    ['Nomor atom', e => e.number], ['Massa atom', e => `${safeText(e.mass)} u`],
    ['Konfigurasi elektron', e => safeText(e.electronConfig)], ['Golongan', e => safeText(e.group)],
    ['Periode', e => safeText(e.period)], ['Kategori', e => safeText(categoryLabels[e.category], e.category)],
    ['Wujud', e => safeText(e.state)], ['Titik leleh', e => e.meltingPoint == null ? 'Data tidak tersedia' : `${e.meltingPoint} °C`],
    ['Titik didih', e => e.boilingPoint == null ? 'Data tidak tersedia' : `${e.boilingPoint} °C`]
  ];
  document.getElementById('compare-result').innerHTML = `
    <div class="compare-element ${a.category}"><span class="compare-atomic-number">${a.number}</span><div class="compare-symbol">${a.symbol}</div><h3>${a.name}</h3><p>${safeText(categoryLabels[a.category], a.category)}</p></div>
    <div class="compare-table">${fields.map(([label, value]) => `<div class="compare-row"><strong>${label}</strong><span>${value(a)}</span><span>${value(b)}</span></div>`).join('')}</div>
    <div class="compare-element ${b.category}"><span class="compare-atomic-number">${b.number}</span><div class="compare-symbol">${b.symbol}</div><h3>${b.name}</h3><p>${safeText(categoryLabels[b.category], b.category)}</p></div>`;
}
document.getElementById('compare-button').addEventListener('click', compareElements);
compareElements();

// Klik legenda untuk menyorot kategori tertentu; klik lagi untuk kembali ke semua unsur.
document.querySelectorAll('.legend-item[data-category]').forEach(button => {
  button.addEventListener('click', () => {
    const chosen = categoryFilter.value === button.dataset.category ? 'all' : button.dataset.category;
    categoryFilter.value = chosen;
    document.querySelectorAll('.legend-item[data-category]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.category === chosen)));
    filterElements();
  });
});

function filterElements() {
  const query = searchInput.value.trim().toLocaleLowerCase('id');
  const category = categoryFilter.value;
  document.querySelectorAll('.legend-item[data-category]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.category === category)));
  let count = 0;
  document.querySelectorAll('.element-card').forEach(card => {
    const element = elementData.find(item => String(item.number) === card.dataset.number);
    const matchesSearch = !query || element.name.toLocaleLowerCase('id').includes(query) || element.symbol.toLowerCase() === query || String(element.number) === query;
    const matchesCategory = category === 'all' || element.category === category;
    const matched = matchesSearch && matchesCategory;
    card.classList.toggle('search-dimmed', !matched);
    card.classList.toggle('search-match', matched && Boolean(query || category !== 'all'));
    if (matched) count++;
  });
  searchResult.textContent = count === 0 ? 'Unsur tidak ditemukan.' : (query === '' && category === 'all' ? `Menampilkan ${count} unsur` : `${count} unsur ditemukan`);
}
searchInput.addEventListener('input', filterElements);
categoryFilter.addEventListener('change', filterElements);
clearButton.addEventListener('click', () => { searchInput.value = ''; categoryFilter.value = 'all'; filterElements(); searchInput.focus(); });
filterElements();

