"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*const divTodas = [...document.getElementsByTagName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementsByClassName("curso")[6];
const cursoEsp = document.getElementById("c1");*/
//const queryDivTodas = [...document.querySelectorAll("div,p")];
var queryDivTodas = _toConsumableArray(document.querySelectorAll("div > p"));

var queryCursosTodos = _toConsumableArray(document.querySelectorAll(".curso"));

var queryCursosC1 = _toConsumableArray(document.querySelectorAll(".c1"));

var queryCursosC2 = _toConsumableArray(document.querySelectorAll(".c2, p")); //const queryCursoEsp = document.querySelectorAll("#c1");


var queryCursoEsp = document.querySelector("#c1");
console.log(queryDivTodas);
/*console.log(queryCursosC1);
console.log(queryCursosC2);
console.log(queryCursoEsp);*/
// console.log(divTodas);
// console.log(cursosTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);
// console.log(cursoEsp);
// cursosC2.map((el) => {
//   el.classList.add("destaque");
// });