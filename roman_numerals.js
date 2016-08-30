'use strict'

let assert = require('assert')
var roman = new Array()
roman = ["M", "CM", "D", "CD", "C","XC", "L", "XL", "X", "IX", "V", "IV", "I"]
var decimal = new Array()
decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10 ,9, 5, 4, 1]

// release 0
function to_roman_old(value) {
  // write your code here to convert arabic numerals into roman numerals
  if (value <= 0 || value >= 4000) return value
  var romanNumeral = ""
  for (var i=0; i<roman.length; i++){
    while (value >= decimal[i]){
      value -= decimal [i]
      romanNumeral += roman[i]
    }
  }
  return romanNumeral
}


// "assert" that the result of converting 1 using to_roman_old(1) should equal "I"
console.log(to_roman_old(1), "I")

// alternatively, we can write the boolean expression ourselves like this:
// assert(to_roman_old(1) == "I")
// so what's the difference?  none, really.  just convenience and expressiveness

// here are a few more assertions (or "tests" as they're often called)

// assert.equal(to_roman_old(2), "II")    # commented out on purpose, see below
// assert.equal(to_roman_old(3), "III")   # commented out on purpose, see below
// assert.equal(to_roman_old(4), "IIII")  # commented out on purpose, see below
console.log(to_roman_old(5), "V")
console.log(to_roman_old(6), "VI")

/*Isman dan Andrew, memilih solusi pertama karena solusi pertama adalah solusi yang
berjalan dan merupakan solusi yang paling simple. Solusi kedua dan ketiga tidak berjalan
karena kesalahan syntax yang terdapat didalam code/function. Solusi keempat, juga berjalan,
tetapi lebih banyak proses yang diperlukan untuk mencetak hasil*/

/*Kita melakukan tes terhadap bug dengan cara menjalani kode dengan membaca line per line
dan mengetes logic dari kode tersebut*/



// what other tests could you add to ensure your to_roman_old method is working?
//
// keep in mind that while some of the tests above seem useful, testing for
// 1, 2, 3 and 4 doesn't really help you exercise more of your code. all of them
// are basically testing the same thing, right?  it's only when you test the
// arabic number 5 or 6 do you get new information about whether or not your
// solution works
//
// building your sense of judgement about what and when to test doesn't come easy
// take time writing your tests, reading other people's tests and building an
// informed opinion from there

//##############################################################################

// release 1
function to_roman_new(arabic_num) {
  // write your code here to convert arabic numerals into roman numerals
}

// you might be able to reuse some of your tests from above but take care not to
// set the wrong expectations for yourself.  you wouldn't want to solve the wrong
// problem, would you?
