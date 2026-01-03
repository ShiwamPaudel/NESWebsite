const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', '..', 'assets', 'images');
const dest = path.resolve(__dirname, '..', 'public', 'images');

if (!fs.existsSync(src)) {
  console.error('Source images folder not found:', src);
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });

const files = fs.readdirSync(src);
let copied = 0;
files.forEach((f) => {
  const s = path.join(src, f);
  const d = path.join(dest, f);
  if (fs.statSync(s).isFile()) {
    fs.copyFileSync(s, d);
    copied++;
  }
});

console.log(`Copied ${copied} images from ${src} to ${dest}`);
