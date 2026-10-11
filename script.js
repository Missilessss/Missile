'use strict';

const table = document.getElementById('periodic-table');
const info = document.getElementById('element-info');
const electronButton = document.getElementById('electron-config-button');
const searchInput = document.getElementById('element-search');
const clearButton = document.getElementById('clear-search');
const searchResult = document.getElementById('search-result');
const categoryFilter = document.getElementById('element-category');
let selectedElement = null;
let isotopeMode = false;
const favoriteElements = new Map();

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
    rings += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#e8a9c8" stroke-width="1.5"/>`;
    let shellElectrons = '';
    for (let j = 0; j < count; j++) {
      const angle = (Math.PI * 2 * j / Math.max(count, 1)) - Math.PI / 2 + (index % 2 ? Math.PI / Math.max(count, 1) : 0);
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      shellElectrons += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4.2" fill="#e56da8" stroke="#ffffff" stroke-width="1.2"><title>Elektron pada kulit ${index + 1}</title></circle>`;
    }
    const orbitClass = index % 3 === 0 ? 'orbit-fast' : index % 3 === 1 ? 'orbit-slow' : '';
    electronGroups += `<g class="electron-orbit ${orbitClass}">${shellElectrons}</g>`;
  });
  return `<div class="electron-diagram-wrap ${large ? 'large' : ''}">
    <svg class="electron-diagram" viewBox="0 0 300 270" role="img" aria-label="Diagram atom ${element.name} dengan ${shells.length} kulit elektron">
      <defs><radialGradient id="nucleus-${element.number}" cx="35%" cy="30%"><stop offset="0%" stop-color="#ffd5e8"/><stop offset="100%" stop-color="#bd5488"/></radialGradient></defs>
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
    <div class="config-box"><strong>Diagram konfigurasi elektron</strong>${electronDiagram(element)}<small>Setiap titik merah muda mewakili satu elektron.</small></div>
    <p><strong>Titik leleh:</strong> ${element.meltingPoint != null ? element.meltingPoint + ' °C' : 'Data tidak tersedia'}</p>
    <p><strong>Titik didih:</strong> ${element.boilingPoint != null ? element.boilingPoint + ' °C' : 'Data tidak tersedia'}</p>
    <hr>
    <p><strong>Deskripsi</strong><br>${safeText(element.description)}</p>
    <p><strong>Kegunaan</strong><br>${safeText(element.uses)}</p>
    <button type="button" class="favorite-toggle" id="favorite-toggle">${favoriteElements.has(element.number) ? '♥ Tersimpan di favorit' : '♡ Simpan favorit'}</button>
  `;
  document.getElementById('favorite-toggle').addEventListener('click', () => {
    if (favoriteElements.has(element.number)) favoriteElements.delete(element.number);
    else favoriteElements.set(element.number, element);
    renderFavorites();
    document.getElementById('favorite-toggle').classList.toggle('is-favorite', favoriteElements.has(element.number));
    document.getElementById('favorite-toggle').textContent = favoriteElements.has(element.number) ? '♥ Tersimpan di favorit' : '♡ Simpan favorit';
  });
  document.getElementById('favorite-toggle').classList.toggle('is-favorite', favoriteElements.has(element.number));
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
    <div class="config-box"><strong>Susunan elektron per kulit</strong>${electronDiagram(selectedElement, true)}<small>Setiap titik merah muda adalah satu elektron. Lingkaran menunjukkan kulit atom.</small></div>
    <p class="tip-note">Pada atom netral, jumlah elektron sama dengan nomor atom.</p>
    <button type="button" class="inline-action" id="back-to-details">← Kembali ke detail unsur</button>`;
  // Simpan unsur yang sedang dilihat sebelum panel diganti menjadi diagram.
  const elementToReturn = selectedElement;
  document.getElementById('back-to-details').addEventListener('click', () => {
    if (!elementToReturn) return;
    showElementInfo(elementToReturn);
    info.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
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
  card.innerHTML = `<span class="atomic-number">${element.number}</span><span class="symbol">${element.symbol}</span><span class="name">${element.name}</span><span class="atomic-mass">${element.mass}</span><span class="isotope-count" aria-hidden="true">— isotop</span>`;
  card.addEventListener('click', () => {
    if (isotopeMode) showIsotopeMode(element.symbol);
    else showElementInfo(element);
  });
  card.addEventListener('focus', () => { if (!isotopeMode) showElementInfo(element); });
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

// Favorit hanya disimpan selama halaman ini terbuka; tidak perlu akun atau koneksi.
function renderFavorites() {
  const container = document.getElementById('favorites-list');
  if (!favoriteElements.size) {
    container.innerHTML = '<p class="empty-favorites">Belum ada unsur favorit. Pilih unsur lalu tekan ♡ Simpan favorit.</p>';
    return;
  }
  container.innerHTML = [...favoriteElements.values()].map(element => `
    <div class="favorite-chip">
      <button type="button" class="favorite-open" data-number="${element.number}" aria-label="Buka detail ${element.name}"><span>${element.number}</span><strong>${element.symbol}</strong><small>${element.name}</small></button>
      <button type="button" class="favorite-remove" data-number="${element.number}" aria-label="Hapus ${element.name} dari favorit">×</button>
    </div>`).join('');
  container.querySelectorAll('.favorite-open').forEach(button => button.addEventListener('click', () => {
    const element = favoriteElements.get(Number(button.dataset.number));
    if (element) { showElementInfo(element); info.scrollIntoView({behavior:'smooth', block:'start'}); }
  }));
  container.querySelectorAll('.favorite-remove').forEach(button => button.addEventListener('click', () => {
    const number = Number(button.dataset.number);
    favoriteElements.delete(number);
    renderFavorites();
    if (selectedElement && selectedElement.number === number) showElementInfo(selectedElement);
  }));
}

// Partikel dekoratif dapat ditekan untuk membuka fakta kimia singkat.
document.querySelectorAll('.floating-particle').forEach((button, index) => {
  button.addEventListener('click', () => {
    const reveal = document.getElementById('particle-reveal');
    reveal.innerHTML = `<span>${['✦','⚛','H','✧','H₂O'][index]}</span><p>${button.dataset.fact}</p>`;
    reveal.classList.remove('reveal-pop');
    void reveal.offsetWidth;
    reveal.classList.add('reveal-pop');
  });
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


// Chemistry toolbox: simple interactive helpers for study and practice.
const shellSelect = document.getElementById('shell-element');
const ionSelect = document.getElementById('ion-element');
const stabilitySelect = document.getElementById('stability-element');
function populateToolSelect(select, initialNumber = 8) {
  elementData.forEach(element => {
    const option = document.createElement('option');
    option.value = element.number;
    option.textContent = `${element.number}. ${element.name} (${element.symbol})`;
    option.selected = element.number === initialNumber;
    select.appendChild(option);
  });
}
populateToolSelect(shellSelect, 8);
populateToolSelect(ionSelect, 11);
populateToolSelect(stabilitySelect, 11);

function getElementFromSelect(select) {
  return elementData.find(element => element.number === Number(select.value));
}
function renderShellTool() {
  const element = getElementFromSelect(shellSelect);
  const shells = String(element.electronConfig || '').split(',').map(Number).filter(Number.isFinite);
  const total = shells.reduce((sum, value) => sum + value, 0);
  document.getElementById('shell-output').innerHTML = `
    <div class="tool-result-top"><span class="result-symbol">${element.symbol}</span><div><strong>${element.name}</strong><small>Nomor atom ${element.number} · atom netral</small></div></div>
    <div class="shell-pills">${shells.map((count, i) => `<span><small>Kulit ${i+1}</small><strong>${count}</strong></span>`).join('')}</div>
    <p class="tool-answer">Jumlah elektron = <strong>${total}</strong></p>
    <small>Susunan kulit: <strong>${shells.join(' · ')}</strong></small>`;
}
shellSelect.addEventListener('change', renderShellTool);
renderShellTool();

const orbitalOrder = [
  {n:1,l:0,label:'1s',cap:2},{n:2,l:0,label:'2s',cap:2},{n:2,l:1,label:'2p',cap:6},
  {n:3,l:0,label:'3s',cap:2},{n:3,l:1,label:'3p',cap:6},{n:4,l:0,label:'4s',cap:2},
  {n:3,l:2,label:'3d',cap:10},{n:4,l:1,label:'4p',cap:6},{n:5,l:0,label:'5s',cap:2},
  {n:4,l:2,label:'4d',cap:10},{n:5,l:1,label:'5p',cap:6},{n:6,l:0,label:'6s',cap:2},
  {n:4,l:3,label:'4f',cap:14},{n:5,l:2,label:'5d',cap:10},{n:6,l:1,label:'6p',cap:6},
  {n:7,l:0,label:'7s',cap:2},{n:5,l:3,label:'5f',cap:14},{n:6,l:2,label:'6d',cap:10},
  {n:7,l:1,label:'7p',cap:6}
];
function orbitalConfiguration(electronCount, elementNumber = null) {
  let remaining = Math.max(0, Math.min(118, electronCount));
  const filled = orbitalOrder.map(orb => ({...orb, count:0}));
  for (const orb of filled) {
    const add = Math.min(remaining, orb.cap);
    orb.count = add;
    remaining -= add;
    if (remaining <= 0) break;
  }
  // Common ground-state exceptions for Cr and Cu.
  if (electronCount === 24 || electronCount === 29) {
    const s = filled.find(o => o.label === '4s');
    const d = filled.find(o => o.label === '3d');
    if (s && d && s.count === 2 && d.count >= 4) { s.count = 1; d.count += 1; }
  }
  return filled.filter(o => o.count > 0);
}
function configText(config) {
  return config.map(o => `${o.label}<sup>${o.count}</sup>`).join(' ');
}
function calculateIon() {
  const element = getElementFromSelect(ionSelect);
  const charge = Number(document.getElementById('ion-charge').value);
  const output = document.getElementById('ion-output');
  if (!Number.isInteger(charge) || charge < -8 || charge > 8) {
    output.innerHTML = '<p class="tool-error">Masukkan muatan ion bilangan bulat dari −8 sampai +8.</p>'; return;
  }
  const electrons = element.number - charge;
  if (electrons < 0 || electrons > 118) {
    output.innerHTML = '<p class="tool-error">Jumlah elektron tidak valid untuk muatan ini.</p>'; return;
  }
  let config = orbitalConfiguration(electrons);
  // For common transition-metal cations, remove 4s before 3d.
  if (charge > 0 && element.number >= 21 && element.number <= 30) {
    const neutral = orbitalConfiguration(element.number, element.number);
    let toRemove = charge;
    const fourS = neutral.find(o => o.label === '4s');
    const threeD = neutral.find(o => o.label === '3d');
    if (fourS) { const rem = Math.min(toRemove, fourS.count); fourS.count -= rem; toRemove -= rem; }
    if (threeD && toRemove > 0) threeD.count = Math.max(0, threeD.count - toRemove);
    config = neutral.filter(o => o.count > 0);
  }
  const ionLabel = charge === 0 ? element.symbol : `${element.symbol}${Math.abs(charge)}${charge > 0 ? '+' : '−'}`;
  output.innerHTML = `<div class="tool-result-top"><span class="result-symbol">${ionLabel}</span><div><strong>${element.name}${charge === 0 ? ' netral' : ' ion'}</strong><small>${electrons} elektron · muatan ${charge > 0 ? '+' : ''}${charge}</small></div></div>
    <p class="orbital-config">${configText(config)}</p><p class="tool-answer">Total elektron = <strong>${electrons}</strong></p>
    <small>Konfigurasi subkulit ditulis menurut urutan pengisian. Untuk ion transisi, elektron pada kulit dengan n terbesar dilepas lebih dahulu.</small>`;
}
document.getElementById('ion-calculate').addEventListener('click', calculateIon);
ionSelect.addEventListener('change', calculateIon);
document.getElementById('ion-charge').addEventListener('input', calculateIon);
calculateIon();

function checkQuantumNumbers() {
  const n = Number(document.getElementById('q-n').value);
  const l = Number(document.getElementById('q-l').value);
  const ml = Number(document.getElementById('q-ml').value);
  const ms = Number(document.getElementById('q-ms').value);
  const output = document.getElementById('quantum-output');
  const valid = Number.isInteger(n) && n >= 1 && n <= 7 && Number.isInteger(l) && l >= 0 && l < n && Number.isInteger(ml) && ml >= -l && ml <= l && (ms === 0.5 || ms === -0.5);
  if (!valid) {
    output.innerHTML = '<p class="tool-error">Kombinasi tidak diizinkan. Syarat: n ≥ 1; ℓ = 0 sampai n−1; mℓ = −ℓ sampai +ℓ; ms = ±½.</p>'; return;
  }
  const sub = ['s','p','d','f','g','h','i'][l] || '?';
  output.innerHTML = `<div class="validity-mark">✓</div><p class="tool-answer">Kombinasi ini <strong>diizinkan</strong>.</p><div class="quantum-summary"><span>n = ${n}</span><span>ℓ = ${l} (${sub})</span><span>mℓ = ${ml}</span><span>ms = ${ms > 0 ? '+½' : '−½'}</span></div><small>Subkulit ${n}${sub} memiliki ${2*l+1} orbital dan kapasitas maksimum ${2*(2*l+1)} elektron.</small>`;
}
document.getElementById('quantum-check').addEventListener('click', checkQuantumNumbers);
['q-n','q-l','q-ml','q-ms'].forEach(id => document.getElementById(id).addEventListener('change', checkQuantumNumbers));
checkQuantumNumbers();

function renderStabilityTool() {
  const element = getElementFromSelect(stabilitySelect);
  const shells = String(element.electronConfig || '').split(',').map(Number).filter(Number.isFinite);
  const valence = shells.length ? shells[shells.length - 1] : 0;
  let prediction = 'Kecenderungan ionnya tidak dapat diperkirakan dengan aturan oktet sederhana.';
  let ion = 'bergantung pada senyawa';
  if (element.group === 1) { ion = `${element.symbol}⁺`; prediction = 'Cenderung melepas 1 elektron untuk mencapai susunan kulit yang lebih stabil.'; }
  else if (element.group === 2) { ion = `${element.symbol}²⁺`; prediction = 'Cenderung melepas 2 elektron valensi.'; }
  else if (element.group === 13) { ion = `${element.symbol}³⁺`; prediction = 'Dalam model sederhana, dapat melepas 3 elektron valensi; perilaku nyata bergantung pada unsur dan senyawanya.'; }
  else if (element.group === 14) { ion = 'bervariasi'; prediction = 'Memiliki 4 elektron valensi; melepas atau menerima 4 elektron tidak selalu menguntungkan, sehingga ikatan kovalen umum dijumpai.'; }
  else if (element.group === 15) { ion = `${element.symbol}³⁻ (perkiraan sederhana)`; prediction = 'Pada model oktet sederhana, dapat menerima 3 elektron; banyak senyawanya justru membentuk ikatan kovalen.'; }
  else if (element.group === 16) { ion = `${element.symbol}²⁻ (perkiraan sederhana)`; prediction = 'Pada model oktet sederhana, dapat menerima 2 elektron.'; }
  else if (element.group === 17) { ion = `${element.symbol}⁻`; prediction = 'Cenderung menerima 1 elektron untuk melengkapi oktet.'; }
  else if (element.group === 18) { ion = 'umumnya tidak membentuk ion'; prediction = 'Gas mulia memiliki kulit valensi penuh sehingga relatif kurang reaktif.'; }
  if (element.group == null || element.group > 2 && element.group < 13 || element.group > 18) {
    prediction = 'Unsur transisi atau deret dalam dapat memiliki beberapa bilangan oksidasi; aturan oktet sederhana kurang memadai.';
    ion = 'muatan bervariasi';
  }
  outputStability.innerHTML = `<div class="tool-result-top"><span class="result-symbol">${element.symbol}</span><div><strong>${element.name}</strong><small>${element.group ? `Golongan ${element.group}` : 'Unsur deret dalam'}</small></div></div><div class="valence-count"><span>Elektron pada kulit terluar</span><strong>${valence}</strong></div><p>${prediction}</p><p class="tool-answer">Perkiraan: <strong>${ion}</strong></p><small>Ini kecenderungan pembelajaran dasar, bukan prediksi mutlak kestabilan semua senyawa.</small>`;
}
const outputStability = document.getElementById('stability-output');
stabilitySelect.addEventListener('change', renderStabilityTool);
renderStabilityTool();


// Isotope explorer: uses a published isotope dataset when online, with a small
// offline fallback for commonly studied elements.
const isotopeSelect = document.getElementById('isotope-element');
const isotopeSearch = document.getElementById('isotope-search');
const isotopeCards = document.getElementById('isotope-cards');
const isotopeSummary = document.getElementById('isotope-summary');
const isotopeModeToggle = document.getElementById('isotope-mode-toggle');
const isotopeModePanel = document.getElementById('isotope-mode-panel');
const isotopeModeTitle = document.getElementById('isotope-mode-title');
const isotopeModeDescription = document.getElementById('isotope-mode-description');
const isotopeModeCards = document.getElementById('isotope-mode-cards');
const isotopeModeClose = document.getElementById('isotope-mode-close');
let isotopeDatabase = {};
function updateIsotopeCounts() {
  document.querySelectorAll('.element-card').forEach(card => {
    const el = elementData.find(item => item.number === Number(card.dataset.number));
    const count = el && isotopeDatabase[el.symbol]?.isotopes?.length;
    const badge = card.querySelector('.isotope-count');
    if (badge) badge.textContent = count ? `${count} isotop` : 'data —';
  });
}
function showIsotopeMode(symbol) {
  const element = elementData.find(el => el.symbol === symbol);
  const record = isotopeDatabase[symbol];
  if (!element) return;
  document.querySelectorAll('.element-card.selected').forEach(card => card.classList.remove('selected'));
  const selectedCard = document.querySelector(`.element-card[data-number="${element.number}"]`);
  if (selectedCard) selectedCard.classList.add('selected');
  isotopeModePanel.hidden = false;
  isotopeModeTitle.textContent = `${element.name} (${element.symbol})`;
  const isotopes = [...(record?.isotopes || [])].sort((a,b) => Number(a.mass_number)-Number(b.mass_number));
  isotopeModeDescription.textContent = isotopes.length
    ? `${isotopes.length} isotop tercatat · kartu tersusun ke kanan lalu turun ke baris berikutnya.`
    : 'Data isotop unsur ini belum tersedia pada mode offline. Sambungkan internet untuk memuat daftar yang lebih lengkap.';
  isotopeModeCards.innerHTML = isotopes.map((iso,index) => {
    const massNumber = Number(iso.mass_number);
    const neutronCount = massNumber - element.number;
    const abundance = Number(iso.abundance || 0) * 100;
    const natural = abundance > 0;
    const mass = Number.isFinite(Number(iso.mass)) ? Number(iso.mass).toFixed(6).replace(/0+$/,'').replace(/\.$/,'') : '—';
    return `<button type="button" class="isotope-fan-card ${natural ? 'isotope-fan-natural' : 'isotope-fan-radioactive'}" style="--fan-delay:${Math.min(index,18)*24}ms" data-mass="${massNumber}" aria-label="${element.name}-${massNumber}">
      <span class="isotope-fan-tag">${natural ? '✿ ALAMI' : '✧ RADIOISOTOP'}</span>
      <span class="isotope-fan-symbol"><sup>${massNumber}</sup>${element.symbol}</span>
      <strong>${element.symbol}-${massNumber}</strong>
      <span class="isotope-fan-line"><small>Proton</small><b>${element.number}</b></span>
      <span class="isotope-fan-line"><small>Neutron</small><b>${Number.isFinite(neutronCount) ? neutronCount : '—'}</b></span>
      <span class="isotope-fan-mass">${mass} u</span>
      <span class="isotope-fan-abundance">${natural ? `Kelimpahan ${abundance.toLocaleString('id-ID',{maximumFractionDigits:5})}%` : 'Kelimpahan alami 0% / tidak terukur'}</span>
    </button>`;
  }).join('');
  if (!isotopes.length) isotopeModeCards.innerHTML = '<p class="isotope-mode-empty">Belum ada data isotop untuk unsur ini. Coba sambungkan internet lalu muat ulang halaman.</p>'; 
  isotopeModeCards.querySelectorAll('.isotope-fan-card').forEach(card => card.addEventListener('click', () => {
    isotopeModeCards.querySelectorAll('.isotope-fan-card').forEach(item => item.classList.remove('isotope-fan-selected'));
    card.classList.add('isotope-fan-selected');
    isotopeModeDescription.textContent = `${element.symbol}-${card.dataset.mass} · ${element.number} proton · ${Number(card.dataset.mass) - element.number} neutron${card.querySelector('.isotope-fan-abundance') ? ' · ' + card.querySelector('.isotope-fan-abundance').textContent : ''}`;
  }));
}
if (isotopeModeToggle && isotopeModePanel && isotopeModeTitle && isotopeModeDescription && isotopeModeCards) isotopeModeToggle.addEventListener('click', () => {
  isotopeMode = !isotopeMode;
  isotopeModeToggle.setAttribute('aria-pressed', String(isotopeMode));
  isotopeModeToggle.classList.toggle('mode-active', isotopeMode);
  isotopeModeToggle.textContent = isotopeMode ? '✧ Keluar dari mode isotop' : '✧ Buka mode isotop';
  table.classList.toggle('isotope-mode', isotopeMode);
  isotopeModePanel.hidden = !isotopeMode;
  if (isotopeMode) {
    isotopeModeTitle.textContent = 'Mode isotop aktif';
    isotopeModeDescription.textContent = 'Klik unsur mana pun pada tabel di atas. Kartu isotop akan tersusun ke kanan lalu turun ke baris berikutnya.';
    isotopeModeCards.innerHTML = '<p class="isotope-mode-empty">Pilih unsur di tabel periodik untuk mulai menjelajah isotopnya. ✧</p>';
    updateIsotopeCounts();
  }
});
if (isotopeModeClose && isotopeModePanel) isotopeModeClose.addEventListener('click', () => { isotopeModePanel.hidden = true; isotopeMode = false; table.classList.remove('isotope-mode'); isotopeModeToggle?.classList.remove('mode-active'); isotopeModeToggle?.setAttribute('aria-pressed','false'); if (isotopeModeToggle) isotopeModeToggle.textContent = '✧ Buka mode isotop'; });
let isotopeDataSource = 'fallback';
const isotopeFallback = {
 H:[[1,1.007825032,99.9885],[2,2.014101778,0.0115],[3,3.016049,0]], He:[[3,3.01602932,0.000134],[4,4.002603254,99.999866]],
 Li:[[6,6.0151229,7.59],[7,7.0160034,92.41]], Be:[[9,9.0121831,100]], B:[[10,10.0129369,19.9],[11,11.0093054,80.1]],
 C:[[12,12,98.93],[13,13.0033548,1.07],[14,14.003242,0]], N:[[14,14.003074,99.636],[15,15.000109,0.364]],
 O:[[16,15.9949146,99.757],[17,16.9991318,0.038],[18,17.9991596,0.205]], F:[[19,18.9984032,100]],
 Ne:[[20,19.9924402,90.48],[21,20.9938467,0.27],[22,21.9913851,9.25]], Na:[[23,22.9897693,100]],
 Mg:[[24,23.9850417,78.99],[25,24.9858369,10],[26,25.9825929,11.01]], Al:[[27,26.9815385,100]],
 Si:[[28,27.9769265,92.223],[29,28.9764947,4.685],[30,29.9737701,3.092]], P:[[31,30.973762,100]],
 S:[[32,31.972071,94.99],[33,32.9714599,0.75],[34,33.967867,4.25],[36,35.967081,0.01]],
 Cl:[[35,34.9688527,75.76],[37,36.9659026,24.24]], Ar:[[36,35.967545,0.3336],[38,37.962732,0.0629],[40,39.962383,99.6035]],
 K:[[39,38.9637065,93.2581],[40,39.9639982,0.0117],[41,40.9618253,6.7302]],
 Ca:[[40,39.9625909,96.941],[42,41.958618,0.647],[43,42.958767,0.135],[44,43.955482,2.086],[46,45.953689,0.004],[48,47.952523,0.187]],
 Fe:[[54,53.939609,5.845],[56,55.934936,91.754],[57,56.935393,2.119],[58,57.933274,0.282]],
 Cu:[[63,62.929598,69.15],[65,64.927790,30.85]], Zn:[[64,63.929142,49.17],[66,65.926034,27.73],[67,66.927128,4.04],[68,67.924845,18.45],[70,69.92532,0.61]],
 Br:[[79,78.918338,50.69],[81,80.91629,49.31]], Ag:[[107,106.905092,51.839],[109,108.904756,48.161]],
 I:[[127,126.904472,100]], Xe:[[124,123.905893,0.095],[126,125.904274,0.089],[128,127.903531,1.91],[129,128.904780,26.4],[130,129.903509,4.07],[131,130.905084,21.2],[132,131.904155,26.9],[134,133.905394,10.4],[136,135.907214,8.9]],
 U:[[234,234.040952,0.0055],[235,235.043930,0.72],[238,238.050788,99.2745]]
};
function fallbackIsotopes() {
  const out = {};
  Object.entries(isotopeFallback).forEach(([symbol, rows]) => {
    const el = elementData.find(e => e.symbol === symbol);
    if (!el) return;
    out[symbol] = { atomic_number: el.number, element: symbol, isotopes: rows.map(([mass_number,mass,abundance]) => ({mass_number, nuclide:`${symbol}-${mass_number}`, mass, abundance: abundance / 100})) };
  });
  return out;
}
isotopeDatabase = fallbackIsotopes();
updateIsotopeCounts();
elementData.forEach(el => {
  const option = document.createElement('option');
  option.value = el.symbol; option.textContent = `${el.number}. ${el.name} (${el.symbol})`;
  isotopeSelect.appendChild(option);
});
isotopeSelect.value = 'C';
function formatIsotopeMass(value) {
  return Number.isFinite(Number(value)) ? Number(value).toFixed(6).replace(/0+$/,'').replace(/\.$/,'') : '—';
}
function renderIsotopes(symbol) {
  const element = elementData.find(el => el.symbol === symbol);
  const record = isotopeDatabase[symbol];
  if (!element || !record || !record.isotopes?.length) {
    isotopeSummary.innerHTML = `<span class="isotope-atom">✿</span><p>Data isotop untuk pilihan ini belum tersedia pada mode offline. Coba hubungkan internet lalu muat ulang halaman.</p>`;
    isotopeCards.innerHTML = '';
    return;
  }
  const isotopes = [...record.isotopes].sort((a,b) => a.mass_number - b.mass_number);
  const naturallyPresent = isotopes.filter(i => Number(i.abundance) > 0).length;
  isotopeSummary.innerHTML = `<span class="isotope-atom">${element.symbol}</span><div><strong>${element.name}</strong><p>${isotopes.length} isotop tercatat · ${naturallyPresent} memiliki kelimpahan alami di atas nol pada data</p><small>Nomor atom Z = ${element.number}, jadi setiap isotop ${element.symbol} mempunyai ${element.number} proton.</small></div>`;
  isotopeCards.innerHTML = isotopes.map((iso,index) => {
    const abundance = Number(iso.abundance || 0) * 100;
    const isNatural = abundance > 0;
    const neutrons = Number(iso.mass_number) - element.number;
    const exactMass = formatIsotopeMass(iso.mass);
    return `<article class="isotope-card ${isNatural ? 'isotope-natural' : 'isotope-radioactive'}" style="--isotope-delay:${Math.min(index,20)*22}ms">
      <span class="isotope-ribbon">${isNatural ? '✿ NATURAL' : '✧ RADIOISOTOP'}</span>
      <div class="isotope-nuclide"><sup>${iso.mass_number}</sup><span>${element.symbol}</span></div>
      <h3>${element.symbol}-${iso.mass_number}</h3>
      <div class="isotope-stats"><span><small>Proton</small><strong>${element.number}</strong></span><span><small>Neutron</small><strong>${neutrons}</strong></span></div>
      <p class="isotope-mass"><small>Massa isotop</small><strong>${exactMass} u</strong></p>
      <div class="abundance-track"><span style="width:${Math.max(0,Math.min(100,abundance))}%"></span></div>
      <p class="isotope-abundance">Kelimpahan alami: <strong>${isNatural ? (abundance < 0.001 ? abundance.toExponential(2) : abundance.toLocaleString('id-ID',{maximumFractionDigits:5})) + '%' : '0% / tidak terukur'}</strong></p>
    </article>`;
  }).join('');
  if (isotopeDataSource === 'fallback') {
    isotopeSummary.insertAdjacentHTML('beforeend','<small class="offline-note">Mode offline: menampilkan isotop yang umum dipelajari untuk unsur ini. Sambungkan internet untuk mencoba memuat daftar nuclide yang lebih lengkap.</small>');
  }
}
function searchIsotopeElement() {
  const query = isotopeSearch.value.trim().toLocaleLowerCase('id');
  if (!query) { renderIsotopes(isotopeSelect.value); return; }
  const match = elementData.find(el => el.name.toLocaleLowerCase('id').includes(query) || el.symbol.toLowerCase() === query || String(el.number) === query);
  if (match) { isotopeSelect.value = match.symbol; renderIsotopes(match.symbol); }
  else {
    isotopeSummary.innerHTML = '<span class="isotope-atom">⌕</span><p>Unsur tidak ditemukan. Coba nama, simbol, atau nomor atomnya.</p>';
    isotopeCards.innerHTML = '';
  }
}
isotopeSelect.addEventListener('change', () => { isotopeSearch.value = ''; renderIsotopes(isotopeSelect.value); });
isotopeSearch.addEventListener('input', searchIsotopeElement);
renderIsotopes(isotopeSelect.value);
fetch('https://raw.githubusercontent.com/sjf8203/all-isotopes/main/allIsotopes.json')
  .then(response => { if (!response.ok) throw new Error('Dataset isotop tidak dapat dimuat'); return response.json(); })
  .then(records => {
    const full = {};
    records.forEach(record => { full[record.element] = record; });
    if (Object.keys(full).length > 100) {
      isotopeDatabase = full;
      isotopeDataSource = 'full';
      updateIsotopeCounts();
      if (isotopeMode) { const selected = document.querySelector('.element-card.selected'); if (selected) showIsotopeMode(elementData.find(el => el.number === Number(selected.dataset.number))?.symbol || isotopeSelect.value); }
      renderIsotopes(isotopeSelect.value);
    }
  }).catch(() => { /* Offline fallback remains available. */ });


// Sparse, slow chemistry particles behind the entire page. They gently move away
// from a mouse pointer or a finger without blocking clicks or scrolling.
(() => {
  const canvas = document.getElementById('chemistry-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const symbols = ['H', 'He', 'C', 'N', 'O', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'Ag', 'Au', 'e⁻', 'p⁺', 'n⁰', '⚛', '✧', '·'];
  const particles = [];
  const pointer = { x: -9999, y: -9999, active: false };
  let width = 0, height = 0, lastTime = 0, spawnClock = 0;
  const maxParticles = 24;
  const random = (min, max) => min + Math.random() * (max - min);
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function makeParticle(fromEdge = false) {
    const edge = Math.floor(Math.random() * 4);
    const x = fromEdge ? (edge === 0 ? -20 : edge === 1 ? width + 20 : random(0, width)) : random(0, width);
    const y = fromEdge ? (edge === 2 ? -20 : edge === 3 ? height + 20 : random(0, height)) : random(0, height);
    return { x, y, vx: random(-0.09, 0.09), vy: random(-0.10, 0.08), size: random(18, 27), symbol: symbols[Math.floor(Math.random() * symbols.length)], alpha: random(0.42, 0.62), phase: random(0, Math.PI * 2), wobble: random(0.00020, 0.00048), tint: ['#f5b9d7', '#c9bff5', '#b8e7dd', '#ffd5b5', '#dfc2f2'][Math.floor(Math.random() * 5)] };
  }
  resize();
  for (let i = 0; i < 21; i++) particles.push(makeParticle());
  function setPointer(x, y) { pointer.x = x; pointer.y = y; pointer.active = true; }
  window.addEventListener('pointermove', e => { if (e.pointerType !== 'touch') setPointer(e.clientX, e.clientY); }, { passive: true });
  window.addEventListener('pointerdown', e => setPointer(e.clientX, e.clientY), { passive: true });
  window.addEventListener('pointerup', () => { pointer.active = false; }, { passive: true });
  window.addEventListener('pointercancel', () => { pointer.active = false; }, { passive: true });
  window.addEventListener('blur', () => { pointer.active = false; }, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  function draw(time) {
    if (document.hidden) { requestAnimationFrame(draw); return; }
    const dt = Math.min(2, (time - (lastTime || time)) / 16.67 || 1); lastTime = time;
    ctx.clearRect(0, 0, width, height);
    if (!reducedMotion) {
      spawnClock += dt;
      if (spawnClock > 230 && particles.length < maxParticles) { particles.push(makeParticle(true)); spawnClock = 0; }
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (!reducedMotion) {
        p.phase += p.wobble * 30 * dt;
        p.vx += Math.sin(p.phase) * 0.0013 * dt;
        p.vy += Math.cos(p.phase * 0.8) * 0.0011 * dt;
        if (pointer.active) {
          const dx = p.x - pointer.x, dy = p.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = 135;
          if (distance < radius) {
            const force = (1 - distance / radius) * 0.095 * dt;
            p.vx += dx / distance * force;
            p.vy += dy / distance * force;
          }
        }
        p.vx *= 0.992; p.vy *= 0.992;
        p.x += p.vx * dt * 2.5; p.y += p.vy * dt * 2.5;
      }
      // Wrap around the viewport so the background always stays populated.
      if (p.x < -45) p.x = width + 45;
      if (p.x > width + 45) p.x = -45;
      if (p.y < -45) p.y = height + 45;
      if (p.y > height + 45) p.y = -45;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      // Soft pastel bubbles keep the particles visible without covering the page.
      const radius = p.size * 0.58;
      ctx.shadowColor = p.tint; ctx.shadowBlur = 18;
      ctx.fillStyle = p.tint;
      ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = Math.min(1, p.alpha + 0.12);
      ctx.font = `700 ${Math.max(10, p.size * 0.48)}px Nunito, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#74658e';
      ctx.fillText(p.symbol, p.x, p.y + 0.5);
      ctx.restore();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
