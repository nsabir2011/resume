import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const heroPath = path.join(
  projectRoot,
  'src',
  'assets',
  'ai-workstation-illustration.png',
);
const outputPath = path.join(
  projectRoot,
  'src',
  'assets',
  'social-preview.png',
);

const heroBase64 = fs.readFileSync(heroPath).toString('base64');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e1117"/>
      <stop offset="1" stop-color="#101926"/>
    </linearGradient>
    <radialGradient id="cyanGlow" cx="15%" cy="16%" r="56%">
      <stop offset="0" stop-color="#62c7bd" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#62c7bd" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blueGlow" cx="80%" cy="40%" r="60%">
      <stop offset="0" stop-color="#79a9ff" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#79a9ff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#79a9ff" stroke-opacity="0.055" stroke-width="1"/>
    </pattern>
    <clipPath id="photoClip">
      <rect x="674" y="52" width="464" height="526" rx="18"/>
    </clipPath>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#cyanGlow)"/>
  <rect width="1200" height="630" fill="url(#blueGlow)"/>
  <rect width="680" height="630" fill="url(#grid)"/>

  <g clip-path="url(#photoClip)">
    <image href="data:image/png;base64,${heroBase64}" x="674" y="52" width="464" height="526" preserveAspectRatio="xMidYMid slice"/>
    <rect x="674" y="52" width="464" height="526" fill="#050a11" opacity="0.07"/>
  </g>
  <rect x="674" y="52" width="464" height="526" rx="18" fill="none" stroke="#344154" stroke-width="2"/>

  <text x="76" y="250" fill="#f1f4f8" font-family="Segoe UI, Arial, sans-serif" font-size="57" font-weight="700">Nazmus Sakib Abir</text>
  <text x="79" y="301" fill="#c1c9d4" font-family="Segoe UI, Arial, sans-serif" font-size="27">AI/ML Engineer · Technical Lead</text>

  <!-- Unified icon strip: data · layered ML network · terminal · technical leadership. -->
  <g fill="none" stroke="#aebdca" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(79 362) scale(1.42)">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
    </g>

    <!-- Two inputs, three model-layer nodes, and one output; no crossing lines. -->
    <g transform="translate(155 364) scale(1.25)">
      <path d="M4 7 12 4.5M4 7l8 5M4 17l8-5M4 17l8 2.5"/>
      <path d="m16 4.5 8 7.5M16 12h8M16 19.5l8-7.5"/>
      <circle cx="2" cy="7" r="1.8"/><circle cx="2" cy="17" r="1.8"/>
      <circle cx="14" cy="4.5" r="1.8"/><circle cx="14" cy="12" r="1.8"/><circle cx="14" cy="19.5" r="1.8"/>
      <circle cx="26" cy="12" r="1.8"/>
    </g>

    <g transform="translate(235 362) scale(1.42)">
      <rect x="2" y="3" width="20" height="18" rx="2.5"/>
      <path d="m7 9 3 3-3 3M13 15h4"/>
    </g>

    <g transform="translate(313 362) scale(1.42)">
      <rect x="9" y="2" width="6" height="6" rx="1.5"/>
      <path d="M12 8v5M4 17v-2.2c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8V17M12 13v4"/>
      <circle cx="4" cy="20" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="20" cy="20" r="2"/>
    </g>
  </g>

  <g fill="#aebdca" opacity="0.44">
    <circle cx="137" cy="379" r="2.2"/>
    <circle cx="215" cy="379" r="2.2"/>
    <circle cx="293" cy="379" r="2.2"/>
  </g>

  <rect x="20.5" y="20.5" width="1159" height="589" rx="18" fill="none" stroke="#2a323e"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
  .toFile(outputPath);

console.log(`Generated ${outputPath} (1200x630)`);
