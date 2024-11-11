# Sınav Puan Hesaplama Algoritması

Bu algoritma, bir sınavın doğru cevap anahtarına ve bir öğrencinin cevaplarına göre öğrencinin toplam sınav puanını hesaplar. Algoritma, her soruya verilen cevabı doğru cevapla karşılaştırarak puanlama yapar.

## Puanlama Kuralları
1. **Doğru cevap** için: +4 puan
2. **Yanlış cevap** için: -1 puan
3. **Boş cevap** (bir boş string `""` ile temsil edilir): +0 puan

Eğer toplam puan 0'dan küçük olursa, sonuç olarak **0 puan** döndürülür.

### Örnekler
| Doğru Cevap Anahtarı      | Öğrencinin Cevapları     | Toplam Puan |
|---------------------------|--------------------------|-------------|
| `["a", "a", "b", "b"]`    | `["a", "c", "b", "d"]`   | 6           |
| `["a", "a", "c", "b"]`    | `["a", "a", "b", ""]`    | 7           |
| `["a", "a", "b", "c"]`    | `["a", "a", "b", "c"]`   | 16          |
| `["b", "c", "b", "a"]`    | `["", "a", "a", "c"]`    | 0           |

### Algoritmanın Adımları
1. **Doğru ve Öğrenci Cevapları:** `correctAnswers` ve `studentAnswers` olmak üzere iki dizi olarak verilecektir. Bu diziler, sınavdaki tüm sorulara karşılık gelen doğru ve öğrenci cevaplarını içerir.
2. **Puan Hesaplama:** `correctAnswers` dizisindeki her bir cevap ile `studentAnswers` dizisindeki her bir cevabı karşılaştırarak puan verilir:
   - Eğer cevap **doğru** ise, toplam puana `+4` eklenir.
   - Eğer cevap **yanlış** ise, toplam puandan `-1` çıkarılır.
   - Eğer cevap **boş** bırakılmışsa (boş string olarak `" "`), puan eklenmez veya çıkarılmaz.
3. **Son Puan:** Eğer hesaplanan puan 0'dan küçükse, sonuç olarak **0** döndürülür.

correct_answers = ["a", "a", "b", "d"]
student_answers = ["a", "c", "b", ""]
console.log(checkExam(correct_answers, student_answers))  // Çıktı: 7