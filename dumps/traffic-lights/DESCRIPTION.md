# Görev: Şehir Yolu Simülasyonu

## Genel Bakış
Bir karakter dizisi bir şehir yolunu temsil ediyor.

Arabalar bu yolda trafik ışıklarına uyarak ilerliyorlar.

### İşaretler:

- `.` = Yol
- `C` = Araba
- `G` = YEŞİL trafik ışığı
- `O` = TURUNCU trafik ışığı
- `R` = KIRMIZI trafik ışığı

Şuna benzer bir yapı:

`C...R............G......`

### Kurallar

#### Simülasyon
Her iterasyonda:

1. Trafik ışıkları trafik kurallarına göre periyodik olarak değişir...
2. Araba, araba kurallarına göre hareket eder.

### Trafik Işığı Kuralları

Trafik ışıkları şu sıraya göre renk değiştirir:

1. YEŞİL 5 birim zaman boyunca yanar... ardından
2. TURUNCU 1 birim zaman boyunca yanar... ardından
3. KIRMIZI 5 birim zaman boyunca yanar....
4. ... ve bu döngü tekrar eder.

### Araba Kuralları

Arabalar soldan sağa doğru yol boyunca ilerler ve her birim zamanda 1 karakter pozisyonu ilerler.

Arabalar, bir trafik ışığına gelene kadar serbestçe hareket edebilir. Ancak:

- Işık YEŞİL ise ileri doğru hareket edebilirler (geçici olarak ışığın olduğu hücreyi işgal ederler).
- Işık TURUNCU ise durmaları gerekir (eğer geçişe girdilerse geçmeye devam edebilirler).
- Işık KIRMIZI ise araba YEŞİL ışık yanana kadar durmalıdır.

### Görev

Yolun ilk durumu verildiğinde, simülasyonun tüm iterasyonlarındaki yol durumlarını döndürün.

#### Girdi
- `road` = yol dizisi
- `n` = kaç birim zaman boyunca simüle edileceği (n >= 0)

#### Çıktı
Simülasyonun her iterasyonundaki yol durumlarını içeren bir dizi (başlangıç durumu dahil).

> Not: Bir araba, bir trafik ışığı ile aynı pozisyona gelirse yalnızca arabayı gösterin.

### Notlar
- Yalnızca bir araba vardır.
- İlk yol durumunda araba her zaman ilk karakter pozisyonundadır.
- Trafik ışıkları YEŞİL veya KIRMIZI durumdadır ve kendi geri sayım döngülerinin başlangıcındadır.
- Geçiş gecikmesi yoktur - ışıklar değiştiğinde sürücüler anında tepki verir!
- Eğer araba yolun sonuna giderse görünümden kaybolur.
- Bitişik trafik ışıkları arasında her zaman biraz yol olacaktır.

### Örnek

10 birim zaman boyunca simülasyon çalıştırılacak.

**Girdi**

```javascript
road = "C...R............G......"
n = 10
```

**Sonuç**

```javascript
[
  "C...R............G......", // 0 başlangıç durumu
  ".C..R............G......", // 1
  "..C.R............G......", // 2
  "...CR............G......", // 3
  "...CR............G......", // 4
  "....C............O......", // 5 ışık yerine sadece arabayı göster
  "....GC...........R......", // 6
  "....G.C..........R......", // 7
  "....G..C.........R......", // 8
  "....G...C........R......", // 9
  "....O....C.......R......"  // 10
]
```

İyi şanslar!