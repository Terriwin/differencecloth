// Generates ashen SVG placeholders for the prototype. Real photos drop into the
// same /public paths later (see lib/products.ts / lib/reviews.ts). Run: `npm run placeholders`.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");

const ensure = (p) => mkdirSync(dirname(p), { recursive: true });

// Faint grain + a low-contrast "Đ" monogram, so placeholders read as ashen
// fabric crops without pretending to be real photos.
function frame({ w, h, top, bottom, name, label, accent = "#B0503F" }) {
  const fs = Math.round(w * 0.022);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${name} — placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${top}"/>
      <stop offset="1" stop-color="${bottom}"/>
    </linearGradient>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="#000" opacity="0.0"/>
  <rect width="${w}" height="${h}" filter="url(#n)" opacity="0.06"/>
  <g transform="translate(${w / 2} ${h / 2})" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="${Math.round(w * 0.012)}">
    <path d="M ${-w * 0.07} ${-h * 0.085} h ${w * 0.075} a ${h * 0.085} ${h * 0.085} 0 0 1 0 ${h * 0.17} h ${-w * 0.075} z"/>
    <path d="M ${-w * 0.11} 0 h ${w * 0.11}"/>
  </g>
  <rect x="${w * 0.04}" y="${h * 0.04}" width="${w * 0.92}" height="${h * 0.92}" fill="none" stroke="#ffffff" stroke-opacity="0.07"/>
  <text x="${w / 2}" y="${h * 0.535}" text-anchor="middle" fill="#ffffff" fill-opacity="0.10" font-family="Arial Narrow, Arial, sans-serif" font-size="${Math.round(w * 0.05)}" letter-spacing="${w * 0.012}">DIFFERENCE</text>
  <text x="${w * 0.06}" y="${h * 0.93}" fill="#ffffff" fill-opacity="0.5" font-family="Arial Narrow, Arial, sans-serif" font-size="${fs}" letter-spacing="1">${name.toUpperCase()}</text>
  <text x="${w * 0.94}" y="${h * 0.93}" text-anchor="end" fill="${accent}" fill-opacity="0.85" font-family="Arial, sans-serif" font-size="${Math.round(fs * 0.8)}" letter-spacing="2">${label}</text>
</svg>`;
}

// All catalogue products now ship with real photos in /public/catalog, so no
// product placeholders are generated. Kept for regenerating review avatars (and
// in case a future placeholder is needed).
const PRODUCTS = [];

let made = 0;
for (const p of PRODUCTS) {
  for (let i = 1; i <= p.count; i++) {
    const out = join(PUBLIC, "products", `${p.slug}-${i}.svg`);
    ensure(out);
    writeFileSync(
      out,
      frame({
        w: 800,
        h: 1000,
        top: p.top,
        bottom: p.bottom,
        name: p.name,
        label: `ФОТО ${i}/${p.count}`,
      })
    );
    made++;
  }
}

// Review avatars — square, with the author initial.
const REVIEWS = [
  { id: "r1", author: "женя" },
  { id: "r2", author: "DO30RIA" },
  { id: "r3", author: "OdinDvaTvari" },
];
for (const r of REVIEWS) {
  const out = join(PUBLIC, "reviews", `${r.id}.svg`);
  ensure(out);
  writeFileSync(
    out,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="${r.author}">
  <defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2c28"/><stop offset="1" stop-color="#141512"/></linearGradient></defs>
  <rect width="200" height="200" fill="url(#a)"/>
  <text x="100" y="100" dy="0.36em" text-anchor="middle" fill="#ffffff" fill-opacity="0.55" font-family="Arial Narrow, Arial, sans-serif" font-size="92">${r.author[0]}</text>
</svg>`
  );
  made++;
}

console.log(`Generated ${made} placeholder SVGs in /public`);
