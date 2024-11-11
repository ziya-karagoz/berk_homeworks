# Çapraz Toplam Fonksiyonu

Bu ödev, bir kare matrisin ana köşegen elemanlarının toplamını hesaplayan `diagonalSum` adlı JavaScript fonksiyonunu içerir.

## Açıklama

`diagonalSum` fonksiyonu, bir 2D dizi (matris) alır ve ana köşegen elemanlarının toplamını döndürür. Ana köşegen, matrisin sol üst köşesinden sağ alt köşesine uzanan köşegendir.

### Örnek

Aşağıdaki 4x4 matris verildiğinde:

```javascript
[
    [5, 9, 1, 0],
    [8, 7, 2, 3],
    [1, 4, 1, 9],
    [2, 3, 8, 2],
]
```

Ana köşegendeki elemanlar: 5, 7, 1 ve 2'dir.

Bu durumda, fonksiyon şu sonucu döndürmelidir:
5 + 7 + 1 + 2 = 15