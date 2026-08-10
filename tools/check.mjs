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

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const checks = [];
function check(name, fn) { checks.push({ name, fn }); }

const appJsPath = resolve(root, 'app.js');
const indexHtmlPath = resolve(root, 'index.html');

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