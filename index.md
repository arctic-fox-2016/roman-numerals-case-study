Untuk roman_numeral_1.js:

Bisa dipahami untuk analisa jika angka diatas 4000 tidak bisa memakai romawi,
dan untuk ini bisa dikatakan simple untuk codingannya.
penggunaan while dan batas sampai 4000 untuk romawi.

Untuk roman_numeral_2.js:

Kami kurang paham untuk Key, dan fungsi digit Pop.

Untuk roman_numeral_3.js:

Bagus ada komentarnya dan mudah dipahami oleh orang jika ingin melihatnya.

Untuk roman_numeral_4.js:

Kami coba untuk 1453 tidak sama dengan expektasi. yaitu MCLIII harusnya MCDLIII.

Perbandingan hasil kelompok Tevin dan Ahmadi:

untuk kelompok saya (Ahmadi) kemarin memakai modulus jadi untuk hasilnya untuk romawi malah kebawah.
Sedangkan untuk kelompok Tevin, awalnya melakukan inisialasi angka - angka yang akan menjadi batas ketika akan menampilkan huruf romawi. Hasil angka romawi ditampilkan dengan sebuah variabel string. Untuk fungsi to_roman_old, awalnya kita menggunakan pengulangan for untuk mengulang jumlah huruf yang ditampilkan sesuai dengan angka integer yang dimasukkan sebagai input. Sedangkan untuk fungsi to_roman, sama halnya dengan fungsi to_roman_old, namun angka - angka yang menjadi batas pada array diperbanyak ketika ditemukan angka 9 dan 4 pada angka integer yang dimasukkan.

Jadi, kesimpulan kami adalah untuk file roman_numeral_1.js lebih mudah dipahami karena kode menghasilkan logika yang sangat baik dengan memvalidasi angka 1-4000 terlebih dahulu, kemudian membandingkan angka integer yang dimasukkan dan mengkonversi menjadi angka romawi sesuai dengan index array yang diinisialisasi sejak awal. Kemudian untuk setiap angka integer yang cocok dengan array decimal, akan dihasilkan hasil pada string roman yang cocok dan dilakukan perulangan apabila angka decimal masih berkelipatan.
