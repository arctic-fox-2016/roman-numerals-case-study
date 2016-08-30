##Menjawab Pertanyaan Release:0

![](/content/images/2016/08/q1.png)


* Solusi bisa dieksekusi, Cara memverifikasinya dengan memasukkan nilai value pada setiap logicnya

* Ada solusi yang mengandung Bug, dimana kita memverifikasinya dengan menggunakan flow dibawah ini.


Solusi 4
![](/content/images/2016/08/solution4.png)

Pada solution 4 ini kami mencoba menjalankan program logic nya,
Asumsi value : 3800

```javascript
for (var i= 0;i<=13;i++) logic ini akan berjalan terus
```
Langsung menjalankan logic selanjut nya.

```javascript
while (3800%1000<1000) // 800<1000
""+ "M" // cetak M
3800-1000 = 2800
// kemudian kembali ke proses while
while (2800%1000<1000) // 800<1000
""+ "M" // cetak M
2800-1000 = 1800
// kemudian kembali ke proses while
while (1800%1000<1000) // 800<1000
""+ "M" // cetak M
1800-1000 = 800
// kemudian kembali ke proses while
while (800%1000<1000) // 800<1000
""+ "M" // cetak M
800-1000 = -200

// Looping akan terus berulang karena akan selalu menghasilkan nilai true / infinite looper
```

####Kesimpulan

Berdasarkan halmarks of readable Code, Solusi pertama yang merupakan solution yang terbaik,
Dikarenakan :

1. Solusi memiliki logic yang sederhana untuk memecahkan logic yang sedikit rumit.
2. Line code dari solusi tidak panjang, dan sangat mudah dimengerti.
3. Tidak memiliki repitisi code


![](/content/images/2016/08/halbaru.png)

* Penggunaan Method .split dan .join, **.split** digunakan untuk memisahkan string untuk dimassukkan kedalam array. ***.join** digunakan untuk menggabungkan string*
* Sudah mengerti
* Akan kami coba
* Return data dan dimasukkan kedalam sebuah array
