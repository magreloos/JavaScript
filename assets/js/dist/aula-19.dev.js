"use strict";

function calcular(a, b, c) {
  console.log("CALCULAR 1");
  console.log(arguments);
}

var calcular2 = function calcular2() {
  console.log("CALCULAR 2");
  return 553311;
};

var calcular3 = function calcular3() {
  return console.log("CALCULAR 3");
};

calcular(13, 13, 14);
calcular2();
console.log("Resultado: ", calcular2());
calcular3();