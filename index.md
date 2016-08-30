
setelah melakukan komparasi antara keempat alternatif solusi,

kami menemukan pada solusi pertama ada range validasi angka dimana angka harus diantara
0 s.d. 4000

pada solusi kedua ada validasi bahwa inputan harus berupa angka.

Sehingga kami menyimpulkan pada solusi ke 4, ada kesalahan pada beberapa isi dari var roman  yaitu
- 900 -> CM
dan sebaiknya ditambah validasi inputan harus berupa angka, dan ada validasi range dari inputan angka yang dimasukkan.

```javascript
function to_roman(num){
    var result = '';
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    for (var i=0) ; i<=decimal.length;i++ {
      while (num%decimal[i] < num) {
        result+= roman[i];
        num -= decimal[i];
      }
    }
    return result;
}
```
