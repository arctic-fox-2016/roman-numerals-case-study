/// Untuk solution-01 ///
secara keseluruhan fungsi ini dapat menghasilkan hasil yang sesuai dengan business requirement dan sesuai dengan standard Roman Numerals dimana angka terbesar 3999 dan terkecil 0.

// Untuk solution-02 ///
Solution ini banyak terdapat 'error' nya. Seperti:
1. pada variable 'key', tidak ter-initialisasi / tidak terdapat typenya (var / let), basically in es6, itu totally works, tapi kalau kita pakai 'use strict' mode, sangat melanggar aturan. Selain itu ada terdapat error systax pada akhir variable ini yaitu terdapat tanda ',' (koma) yang harusnya adalah tanda ';' (titik koma) atau tanpa tanda jika pada es6

2. pada variable 'roman_num' pun juga terjadi hal yang sama, yaitu tidak ter-initialisasi dengan baik / tidak terdapat tipe variable

3. pada variable 'i' pun juga demikian seperti pada point ke 2.

Namun dari semua 'error code' yang ada, solution ini secara logic benar.. sesuai dengan business requirement, dan plusnya adalah terdapat fungsi untuk validate param itu number or not

/// Untuk solution-03 ///
Solution ini juga terdapat 'error' nya. Seperti:

1. Pada looping pertama 'for(var index = 0; index < decimalValue.length; i++)' terdapat variable 'i' yang mana itu seharusnya 'index++'

2. Code ini sebenarnya sudah 'logically error' karena terdapat looping forever setelah iterasi ke-3, benerin lagi yak!

/// Untuk  solution-04 ////
Secara keseluruhan code ini logically right! well done.. dari kesemua solution, menurut kami Solution 4 ini paling efisien dan efektif, namun kita bisa menambahkan beberapa fungsi lagi seperti validasi < 0 dan > 3999 (Solution-01) serta validasi typeof number (Solution-02). Good Job!
