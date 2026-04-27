import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, "../src/app/icon.svg");
const pngPath = resolve(__dirname, "../src/app/icon.png");

const svg = readFileSync(svgPath);

const png = await sharp(svg, { density: 800 })
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

writeFileSync(pngPath, png);
console.log(`Wrote ${pngPath} (${png.length} bytes)`);
