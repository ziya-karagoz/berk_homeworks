const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Bugünün tarihini 'dd-MM-yyyy' formatında al
const today = new Date();
const formattedDate = today.toLocaleDateString('tr-TR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).replace(/\./g, '-');

// Homeworks klasör yolunu tanımla
const homeworksDir = path.join(__dirname, 'homeworks');

// Bugünün tarihine uygun klasörü bul ve çalıştır
fs.readdir(homeworksDir, (err, folders) => {
  if (err) {
    console.error('Klasörleri okurken hata oluştu:', err);
    return;
  }

  // Bugünkü tarih ile eşleşen klasörü bul
  const todayFolder = folders.find(folder => folder === formattedDate);

  if (!todayFolder) {
    console.log(`Bugüne ait bir ödev klasörü bulunamadı: ${formattedDate}`);
    return;
  }

  // homework.test.js dosyasının yolunu belirle
  const testFilePath = path.join(homeworksDir, todayFolder, 'homework.test.js');

  // homework.test.js dosyasını çalıştır
  exec(`node ${testFilePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error('Test dosyasını çalıştırırken hata oluştu:', err);
      return;
    }
    console.log('Test sonuçları:\n', stdout);
    if (stderr) {
      console.error('Hata çıktısı:\n', stderr);
    }
  });
});
