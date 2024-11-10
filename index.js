const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Dinamik import kullanarak chalk'ı yükleyin
(async () => {
  const chalk = (await import('chalk')).default;

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
      console.error(chalk.red('Klasörleri okurken hata oluştu:'), err);
      return;
    }

    // Bugünkü tarih ile eşleşen klasörü bul
    const todayFolder = folders.find(folder => folder === formattedDate);

    if (!todayFolder) {
      console.log(chalk.yellow(`Bugüne ait bir ödev klasörü bulunamadı: ${formattedDate}`));
      return;
    }

    // homework.test.js dosyasının yolunu belirle
    const testFolderPath = path.join(homeworksDir, todayFolder).replace(/\\/g, '/');

    // Jest'i bugünün klasörü üzerinde çalıştır
    exec(`yarn test ${testFolderPath}`, (err, stdout, stderr) => {
      if (err) {
        console.error(chalk.red('Test dosyasını çalıştırırken hata oluştu:'), err);
        return;
      }

      if (stderr) {
        console.log(chalk.cyan('Sonuçlar:\n'), chalk.cyan(stderr));
      }
    });
  });
})();
