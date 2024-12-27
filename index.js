const fs = require('fs');
const path = require('path');

// Path ke file yang Anda ingin gunakan untuk menggantikan file di Baileys
const patchedFile = path.resolve(__dirname, './patched/newsletter.js');

// Path ke file target di Baileys
const baileysPath = path.dirname(require.resolve('baileys/package.json'));
const targetFile = path.join(baileysPath, 'lib/socket/newsletter.js');

// Fungsi untuk mengganti file
function replaceFile() {
  if (fs.existsSync(targetFile)) {
    fs.copyFileSync(patchedFile, targetFile);
    //console.log('File newsletter.js di Baileys berhasil digantikan.');
  } else {
    /*console.error(
      'File target tidak ditemukan. Pastikan Baileys terinstal di node_modules.'
    );*/
  }
}

// Jalankan proses replace
replaceFile();

// Ekspor Baileys agar bisa digunakan seperti biasa
module.exports = require('baileys');
