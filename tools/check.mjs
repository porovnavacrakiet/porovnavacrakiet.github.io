#!/usr/bin/env node
// Pre-publish sanity checks for the Racket Comparator static site.
// Run with:  node tools/check.mjs
// Exits 0 if everything passes, 1 otherwise. Prints a short report.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Locate the top-level array literal assigned to `name` in app.js source,
// by scanning from `const name = [` (or `,name = [`) up to its matching `];`.
// This avoids executing app.js, which depends on browser globals.
function extractArrayLiteral(source, name) {
  const re = new RegExp('^const\\s+' + name + '\\s*=\\s*\\[', 'm');
  const startMatch = re.exec(source);
  if (!startMatch) throw new Error(`Could not find const ${name} = [`);
  const openIdx = source.indexOf('[', startMatch.index);
  let depth = 0;
  for (let i = openIdx; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '[') depth += 1;
    else if (ch === ']') {
      depth -= 1;
      if (depth === 0) return source.slice(openIdx, i + 1);
    }
  }
  throw new Error(`Unterminated ${name} array literal`);
}

function loadCatalogue() {
  const source = read(appJsPath);
  const bladesLiteral = extractArrayLiteral(source, 'blades');
  const rubbersLiteral = extractArrayLiteral(source, 'rubbers');
  // eslint-disable-next-line no-new-func
  const blades = Function(`"use strict"; return (${bladesLiteral});`)();
  // eslint-disable-next-line no-new-func
  const rubbers = Function(`"use strict"; return (${rubbersLiteral});`)();
  return { blades, rubbers };
}

function loadPadelCatalogue() {
  const source = read(padelJsPath);
  const racketsLiteral = extractArrayLiteral(source, 'rackets');
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${racketsLiteral});`)();
}

function loadTennisCatalogue() {
  const source = read(tennisJsPath);
  const racketsLiteral = extractArrayLiteral(source, 'rackets');
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${racketsLiteral});`)();
}

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const checks = [];
function check(name, fn) { checks.push({ name, fn }); }

const appJsPath = resolve(root, 'app.js');
const indexHtmlPath = resolve(root, 'index.html');
const padelJsPath = resolve(root, 'padel', 'padel.js');
const padelHtmlPath = resolve(root, 'padel', 'index.html');
const tennisJsPath = resolve(root, 'tennis', 'tennis.js');
const tennisHtmlPath = resolve(root, 'tennis', 'index.html');

const read = (p) => readFileSync(p, 'utf8');

check('app.js parses as JavaScript', () => {
  const source = read(appJsPath);
  try {
    new vm.Script(source, { filename: appJsPath });
    return { ok: true };
  } catch (err) {
    return { ok: false, detail: `Parse error: ${err.message}` };
  }
});

check('padel/padel.js parses as JavaScript', () => {
  const source = read(padelJsPath);
  try {
    new vm.Script(source, { filename: padelJsPath });
    return { ok: true };
  } catch (err) {
    return { ok: false, detail: `Parse error: ${err.message}` };
  }
});

check('padel catalogue includes the verified Adidas, Babolat, Bullpadel, HEAD, KUIKMA, NOX, OXDOG, Siux and Wilson collections', () => {
  let rackets;
  try { rackets = loadPadelCatalogue(); }
  catch (err) { return { ok: false, detail: `Could not parse padel rackets: ${err.message}` }; }
  const adidas2026 = rackets.filter((r) => r.brand === 'Adidas' && r.name.includes('2026'));
  const babolat2026 = rackets.filter((r) => r.brand === 'Babolat' && r.id.endsWith('-2026'));
  const bullpadel2026 = rackets.filter((r) => r.brand === 'Bullpadel' && r.id.endsWith('-2026'));
  const head2026 = rackets.filter((r) => r.brand === 'Head' && r.id.endsWith('-2026'));
  const kuikma2026 = rackets.filter((r) => r.brand === 'Kuikma' && r.id.endsWith('-2026'));
  const nox2026 = rackets.filter((r) => r.brand === 'Nox' && r.id.endsWith('-2026'));
  const oxdog2026 = rackets.filter((r) => r.brand === 'Oxdog' && r.id.endsWith('-2026'));
  const siux2026 = rackets.filter((r) => r.brand === 'Siux' && r.id.endsWith('-2026'));
  const siux2025 = rackets.filter((r) => r.brand === 'Siux' && r.year === 2025);
  const siux2024 = rackets.filter((r) => r.brand === 'Siux' && r.year === 2024);
  const wilson2026 = rackets.filter((r) => r.brand === 'Wilson' && r.id.endsWith('-2026'));
  const ids = new Set(rackets.map((r) => r.id));
  if (rackets.length < 154) return { ok: false, detail: `Expected at least 154 rackets, found ${rackets.length}` };
  if (adidas2026.length !== 28) return { ok: false, detail: `Expected 28 Adidas 2026 core models, found ${adidas2026.length}` };
  if (babolat2026.length !== 16) return { ok: false, detail: `Expected 16 Babolat 2026 catalogue models, found ${babolat2026.length}` };
  if (bullpadel2026.length !== 24) return { ok: false, detail: `Expected 24 Bullpadel 2026 commercial models, found ${bullpadel2026.length}` };
  if (head2026.length !== 11) return { ok: false, detail: `Expected 11 HEAD 2026 current-season models, found ${head2026.length}` };
  if (kuikma2026.length !== 25) return { ok: false, detail: `Expected 25 KUIKMA currently sold product types, found ${kuikma2026.length}` };
  if (nox2026.length !== 16) return { ok: false, detail: `Expected 16 NOX 2026 current product types, found ${nox2026.length}` };
  if (oxdog2026.length !== 16) return { ok: false, detail: `Expected 16 OXDOG 2026 current product types, found ${oxdog2026.length}` };
  if (siux2026.length !== 3) return { ok: false, detail: `Expected 3 currently sold Siux 2026 racket types, found ${siux2026.length}` };
  if (siux2025.length !== 2) return { ok: false, detail: `Expected 2 officially sold Siux 2025 racket types, found ${siux2025.length}` };
  if (siux2024.length !== 1) return { ok: false, detail: `Expected 1 officially sold Siux 2024 racket type, found ${siux2024.length}` };
  if (wilson2026.length !== 12) return { ok: false, detail: `Expected 12 current Wilson racket types, found ${wilson2026.length}` };
  if (ids.size !== rackets.length) return { ok: false, detail: 'Padel racket ids are not unique' };
  return { ok: true, detail: `${rackets.length} rackets, including 28 Adidas, 16 Babolat, 24 Bullpadel, 11 HEAD, 25 KUIKMA, 16 NOX, 16 OXDOG, 3 Siux 2026, 2 Siux 2025, 1 Siux 2024 and 12 current Wilson models` };
});

check('padel custom-racket fields include brand, model and year', () => {
  const html = read(padelHtmlPath);
  const required = ['current-other-brand', 'current-other-model', 'current-other-year', 'target-other-brand', 'target-other-model', 'target-other-year'];
  const missing = required.filter((id) => !html.includes(`id="${id}"`));
  return missing.length ? { ok: false, detail: `Missing ${missing.join(', ')}` } : { ok: true };
});

check('tennis/tennis.js parses as JavaScript', () => {
  try { new vm.Script(read(tennisJsPath), { filename: tennisJsPath }); return { ok: true }; }
  catch (err) { return { ok: false, detail: `Parse error: ${err.message}` }; }
});

check('tennis catalogue has unique, complete tournament-rule entries', () => {
  let rackets;
  try { rackets = loadTennisCatalogue(); }
  catch (err) { return { ok: false, detail: `Could not parse tennis rackets: ${err.message}` }; }
  const required = ['id', 'brand', 'name', 'year', 'head', 'weight', 'pattern', 'balance', 'power', 'control', 'spin', 'feel'];
  const incomplete = rackets.find((r) => required.some((field) => r[field] === undefined || r[field] === ''));
  const ids = new Set(rackets.map((r) => r.id));
  const brands = new Set(rackets.map((r) => r.brand));
  if (rackets.length < 30) return { ok: false, detail: `Expected at least 30 tennis rackets, found ${rackets.length}` };
  if (brands.size < 10) return { ok: false, detail: `Expected at least 10 tennis brands, found ${brands.size}` };
  const currentArtengo2026 = rackets.filter((r) => r.brand === 'Artengo' && r.year === 2026);
  if (currentArtengo2026.length !== 8) return { ok: false, detail: `Expected 8 current Artengo 2026 types, found ${currentArtengo2026.length}` };
  const currentBabolat2026 = rackets.filter((r) => r.brand === 'Babolat' && r.year === 2026);
  if (currentBabolat2026.length !== 18) return { ok: false, detail: `Expected 18 current Babolat 2026 types, found ${currentBabolat2026.length}` };
  const currentDiadem2026 = rackets.filter((r) => r.brand === 'Diadem' && r.year === 2026);
  const currentDunlop2026 = rackets.filter((r) => r.brand === 'Dunlop' && r.year === 2026);
  const currentHead2026 = rackets.filter((r) => r.brand === 'Head' && r.year === 2026);
  if (currentDiadem2026.length !== 7) return { ok: false, detail: `Expected 7 current Diadem 2026 types, found ${currentDiadem2026.length}` };
  if (currentDunlop2026.length !== 6) return { ok: false, detail: `Expected 6 current Dunlop 2026 types, found ${currentDunlop2026.length}` };
  if (currentHead2026.length !== 20) return { ok: false, detail: `Expected 20 current HEAD 2026 types, found ${currentHead2026.length}` };
  if (!rackets.some((r) => r.id === 'babolat-pure-aero-98-gen9-2026')) return { ok: false, detail: 'Babolat Pure Aero 98 Gen9 is missing' };
  if (incomplete) return { ok: false, detail: `Incomplete tennis entry: ${incomplete.id}` };
  if (ids.size !== rackets.length) return { ok: false, detail: 'Tennis racket ids are not unique' };
  return { ok: true, detail: `${rackets.length} rackets from ${brands.size} brands` };
});

check('tennis page has its catalogue inputs and official-rules note', () => {
  const html = read(tennisHtmlPath);
  const required = ['current-racket-brand', 'current-racket', 'target-racket-brand', 'target-racket', 'World Tennis (formerly the ITF)', 'Appendix II'];
  const missing = required.filter((item) => !html.includes(item));
  return missing.length ? { ok: false, detail: `Missing ${missing.join(', ')}` } : { ok: true };
});

check('app.js exposes the expected catalogues', () => {
  let catalogue;
  try { catalogue = loadCatalogue(); }
  catch (err) { return { ok: false, detail: `Could not parse catalogues: ${err.message}` }; }
  if (!Array.isArray(catalogue.blades) || catalogue.blades.length === 0) {
    return { ok: false, detail: 'blades array is missing or empty' };
  }
  if (!Array.isArray(catalogue.rubbers) || catalogue.rubbers.length === 0) {
    return { ok: false, detail: 'rubbers array is missing or empty' };
  }
  const bladeBrands = new Set(catalogue.blades.map((b) => b.brand));
  if (!bladeBrands.has('Butterfly')) {
    return { ok: false, detail: 'Butterfly blade brand is missing from the catalogue' };
  }
  return {
    ok: true,
    detail: `${catalogue.blades.length} blades, ${catalogue.rubbers.length} rubbers`,
  };
});

check('app.js catalogue entries have the required fields', () => {
  const catalogue = loadCatalogue();
  const required = ['id', 'brand', 'name'];
  const problems = [];
  for (const list of [['blades', catalogue.blades], ['rubbers', catalogue.rubbers]]) {
    const [label, arr] = list;
    arr.forEach((item, index) => {
      for (const field of required) {
        if (!item[field]) problems.push(`${label}[${index}] missing ${field}`);
      }
    });
  }
  return problems.length
    ? { ok: false, detail: problems.slice(0, 5).join('; ') + (problems.length > 5 ? ` (+${problems.length - 5} more)` : '') }
    : { ok: true };
});

check('every catalogue id is unique', () => {
  const catalogue = loadCatalogue();
  const seen = new Map();
  const duplicates = [];
  for (const list of [catalogue.blades, catalogue.rubbers]) {
    for (const item of list) {
      if (seen.has(item.id)) duplicates.push(`${item.id} (${seen.get(item.id)} and ${item.brand})`);
      else seen.set(item.id, item.brand);
    }
  }
  return duplicates.length
    ? { ok: false, detail: duplicates.slice(0, 5).join(', ') }
    : { ok: true, detail: `${seen.size} unique ids` };
});

check('app.js?v= query token in index.html matches the version note in commit', () => {
  const html = read(indexHtmlPath);
  const match = html.match(/app\.js\?v=([\w.-]+)/);
  if (!match) return { ok: false, detail: 'No app.js?v= query token found in index.html' };
  return { ok: true, detail: `app.js?v=${match[1]}` };
});

check('styles.css?v= query token is present in index.html', () => {
  const html = read(indexHtmlPath);
  const match = html.match(/styles\.css\?v=([\w.-]+)/);
  return match
    ? { ok: true, detail: `styles.css?v=${match[1]}` }
    : { ok: false, detail: 'No styles.css?v= query token found in index.html' };
});

check('index.html references the same <script src> filename used on disk', () => {
  const html = read(indexHtmlPath);
  const match = html.match(/src="(app\.js)(?:\?v=[^"]*)?"/);
  if (!match) return { ok: false, detail: 'Could not find <script src="app.js...">' };
  return { ok: true };
});

check('CNAME still points at racketcomparator.com', () => {
  try {
    const cname = read(resolve(root, 'CNAME')).trim();
    return cname === 'racketcomparator.com'
      ? { ok: true }
      : { ok: false, detail: `CNAME content is "${cname}"` };
  } catch (err) {
    return { ok: false, detail: 'CNAME file missing' };
  }
});

let failed = 0;
for (const { name, fn } of checks) {
  let result;
  try { result = fn(); } catch (err) { result = { ok: false, detail: `Check threw: ${err.message}` }; }
  const tag = result.ok ? 'OK  ' : 'FAIL';
  const detail = result.detail ? ` — ${result.detail}` : '';
  console.log(`${tag}  ${name}${detail}`);
  if (!result.ok) failed += 1;
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed. Fix before publishing.`);
  process.exit(1);
} else {
  console.log(`\nAll ${checks.length} checks passed.`);
}
