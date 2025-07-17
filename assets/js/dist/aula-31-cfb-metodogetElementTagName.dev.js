"use strict";

var dc1 = document.getElementById("c1");
var dc2 = document.getElementById("c2");
var dc3 = document.getElementById("c3");
var dc4 = document.getElementById("c4");
var dc5 = document.getElementById("c5");
var dc6 = document.getElementById("c6");
var arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]; // for (d of arrayElementos) d.innerHTML = "CURSOS";

arrayElementos.map(function (e) {
  console.log(e);
});
console.log(arrayElementos);