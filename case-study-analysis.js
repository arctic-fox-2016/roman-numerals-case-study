//solution 01
/*var roman = new Array();
roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimal = new Array();
decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function to_roman(value) {
  if (typeof value !== 'number') return false;

  if (value <=0 || value >= 4000) return value; //hanya berlaku untuk range 1-3999
  var romanNumeral = ""; //inisialisasi blank strings
  for (var i=0; i<roman.length; i++) { //
    while (value >= decimal[i]) {
      value -= decimal[i];
      romanNumeral += roman[i];
    }
  }
  return romanNumeral;
}

console.log(to_roman("ini strings"));
console.log(to_roman(4111));
console.log(to_roman(9));
console.log(to_roman(19));
console.log(to_roman(1453));
console.log(to_roman(1646));
console.log(to_roman(2467));*/

//SOlution 02
'use strict'
// function to_roman(num) {
// if (typeof num !== 'number')
// return false;
//
// var digits = String(+num).split(""),
// key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
// "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
// "","I","II","III","IV","V","VI","VII","VIII","IX"],
// roman_num = "",
// i = 3;
// while (i--){
// roman_num = (key[+digits.pop() + (i*10)] || "") + roman_num;
// console.log(key[+digits.pop());
// }
// return Array (+digits.join("") + 1).join("M") + roman_num;
//
// }
// console.log(to_roman("ini strings"));
// console.log(to_roman(4111));
// console.log(to_roman(9));
// console.log(to_roman(19));
// console.log(to_roman(1453));
// console.log(to_roman(1646));
// console.log(to_roman(2467));


// //Solution 03
   var to_roman = function (num) {
   var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
   var romanNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
   var numCopy = num;
   var romanized = '';

   while (numCopy > 0) {
     for (var index = 0; index < decimalValue.length; index++) {
       if (+decimalValue[index] <= numCopy && +decimalValue[+index +1] > numCopy) {
         romanized += romanNumeral[index];
         numCopy -= decimalValue[index];
       }
     }

   }
   return romanized;
 };
 console.log(to_roman("ini strings"));
 console.log(to_roman(4111));
 console.log(to_roman(9));
 console.log(to_roman(19));
 console.log(to_roman(1453));
 console.log(to_roman(1646));
 console.log(to_roman(2467));
