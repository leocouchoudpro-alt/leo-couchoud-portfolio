import sharp from "sharp";

const input = "public/leo-couchoud.png";
const output = "public/leo-couchoud.png";

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data);
const threshold = 200; // pixels clairs (fond blanc/gris clair) → transparent

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  // Si pixel très clair (fond blanc ou checkered gris clair)
  if (r > threshold && g > threshold && b > threshold) {
    pixels[i + 3] = 0; // alpha = transparent
  }
}

await sharp(pixels, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output + ".tmp.png");

import { rename } from "fs/promises";
await rename(output + ".tmp.png", output);

console.log(`✓ Fond supprimé : ${output}`);
