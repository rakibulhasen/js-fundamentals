// JavaScript
// Javascript is a heigh level interpreted object oriented functional programing Languase

//Console log

console.log("Hellow");

// Variable

var a = 12;
a += 20;
console.log(a);

// Variable naming convection

let userName = "rakibul@";
let profile = "Shohid";
let personal_info = "Bio";
let $n = 32;

console.log($n);

// Daata type : Primitive  and not primitive

/* Primitive data type
  String,
  Number,
  Boolean,
  Undefined,
  Null.
  symbol.
*/

let moviName = "Hariporter";
let moviRatting = true;
let moviRelige = 2021;
let moviAction;
let moviNagative = null; // null is not a objecet it JavaScript bug
console.log(typeof moviAction);

// Let Const and Var

let car = "BMDW";
car = "new";

const year = 1999;
const age = 2022 - year;

// year = 2001; // We can't assign value in const variable

var m = 2000;

console.log(age);

// Math opperator

// +, -, *, ,/ %, **

const num = 5 + 3 - (((5 * 3) / 9) % 6);
console.log(Math.trunc(num));

//Assignment operator
// +=. -+, *=, /= , %= , ++, --;

let price = 201;
price % 2 == 0;
console.log(price);

// Comparison operator

// ==, ===, !==, >, < >=, <=

const comp = "20" === 20;
console.log(comp);

// Operator Precedence

console.log(5 + 10 - (5 + 5));

// Template Literals

const mengoPrice = 210;
const moneyGave = 260;
const cost = 20;
const left = moneyGave - cost;

if (left < mengoPrice) {
  console.log(
    `You can't buy Mango Because your bellance ${left} But Mango Price is ${mengoPrice}`
  );
} else if (mengoPrice < left) {
  console.log(
    `You can buy mengo How much Do you need, You have ${left} and Mango Price is ${mengoPrice} 🥭`
  );
}
