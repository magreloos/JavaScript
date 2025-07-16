"use strict";

// A função MAP tem a funcionalidade de percorrer arrays por completo.
//01 - metoto de utilização do MAP
var converterInt = function converterInt(e) {
  return parseInt(e);
};

var dobrar = function dobrar(e) {
  return e * 2;
};

var num = ["1", "2", "3", "4", "5", "6"].map(converterInt);
console.log(num.map(converterInt));
console.log(num.map(dobrar, converterInt)); // A função MAP tem a funcionalidade de percorrer arrays por completo.
//02 - FORMA DE TRABALHAR COM MAP

var cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "JAVA"]; //3 - FORMA DE TRABALHAR COM MAP

cursos.map(function (elemento, indice) {
  console.log("Curso: ", elemento, " Indice: ", indice);
}); //04 - FORMA DE TRABALHAR COM MAP

var c = cursos.map(function (elemento, indice) {
  return elemento;
});
console.log(c); //05 - FORMA DE TRABALHAR COM MAP

var c1 = cursos.map(function (elemento, indice) {
  return "<div>" + elemento + "</div>";
});
console.log(c1); //06 - forma de usar MAP
// let el = document.getElementsByTagName("div");
// el = [...el];
// console.log(el);
// el.map((e, i) => {
//   (e.innerHTML = "TESTECURSOS"),
//     ((e.className = "TESTE"), (e.autofocus = true));
// });
//07 -forma usar MAP
// const el = document.getElementsByTagName("div");
// const val = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML);
// console.log(val);