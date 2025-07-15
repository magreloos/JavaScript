"use strict";

// let n = 0;
// while (n < 10) {
//   console.log("Valor N", n);
//   n++;
// }
var n = 10;
var fat = 1;

while (n >= 1) {
  fat *= n;
  n--;
}

console.log(fat);