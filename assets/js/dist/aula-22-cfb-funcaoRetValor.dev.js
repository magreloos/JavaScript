"use strict";

function canal() {
  var n1 = 10;
  var n2 = 20;
  var res = n1 * n2;
  if (res % 2 == 0) return "Par";else return "Impar";
}

var res = canal();
console.log(res);