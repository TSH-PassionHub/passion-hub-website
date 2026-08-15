// Reads src/content/settings/redirects.json (managed via the CMS "Redirects" collection)
// and writes public/_redirects in Netlify's native redirect format before every build.
// This runs automatically as part of `npm run build` — see package.json.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, '../src/content/settings/redirects.json');
const outputPath = path.join(__dirname, '../public/_redirects');

let data;
try {
  data = JSON.parse(readFileSync(sourcePath, 'utf-8'));
} catch {
  data = { redirects: [] };
}

const lines = (data.redirects || [])
  .filter(r => r.from && r.to)
  .map(r => `${r.from}  ${r.to}  ${r.status || 301}`);

const header = '# Auto-generated from src/content/settings/redirects.json — edit via the CMS, not this file directly.\n';
writeFileSync(outputPath, header + lines.join('\n') + (lines.length ? '\n' : ''), 'utf-8');
console.log(`Generated public/_redirects with ${lines.length} redirect(s).`);
