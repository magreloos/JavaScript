"use strict";

/** @format */
var p_array = document.querySelector("#array");
var btnVerificar = document.querySelector("#btnVerificar");
var resultado = document.querySelector("#resultado");
var elementos_array = [16, 12, 10, 17, 15, 19]; //const elementos_array = ["CSS", "HTML", "JavaScript", "C++"];

p_array.innerHTML = "[" + elementos_array + "]";
btnVerificar.addEventListener("click", function (evt) {
  var ret = elementos_array.some(function (e, i) {
    if (e < 18) {
      resultado.innerHTML = "Array n\xE3o conforme na posi\xE7\xE3o = ".concat(i);
    }

    return e >= 18;
  });

  if (ret) {
    resultado.innerHTML = "OK";
  }

  console.log(ret);
});