const fs = require('fs');
const path = require('path');

// Maak de dist-map als deze niet bestaat
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Kopieer styles.css naar dist
fs.copyFileSync(path.join(__dirname, 'src', 'styles.css'), path.join(distDir, 'styles.css'));

// Kopieer alle .ts* bestanden naar dist
const srcDir = path.join(__dirname, 'src');
fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
  }
});

console.log('Bestanden succesvol gekopieerd!');