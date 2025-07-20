"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** @format */
var caixa1 = document.querySelector("#caixa1");

var btn_c = _toConsumableArray(document.querySelectorAll(".curso"));

var c1_2 = document.querySelector("#c1_2");
console.log(c1_2.parentNode.parentNode.parentNode.children[2]); //console.log(caixa1.hasChildNodes());
// console.log(btn_c[0].hasChildNodes());
// console.log(btn_c[0].childNodes);
// console.log(btn_c[0].children);
// if (btn_c[0].children.length > 0) {
//   console.log("BTN_C possui filho(s)");
// } else {
//   console.log("BTN_C Não possui filho(s)");
// } //Metodo Convencional
// console.log(
// 	caixa1.children.length > 0
// 		? "CAIXA possui filho(s)"
// 		: "CAIXA Não possui filho(s)"
// ); //metodo com condição ternaria
// console.log((caixa1.children[5].innerHTML = "TESTE")); //mudar innerHtml de um elemento
//console.log(btn_c[0].ownerDocument);//retorna o no raiz
//console.log(btn_c[0].getRootNode());//retorna o no raiz
//console.log(document.getRootNode());//retorna o no raiz
//console.log(caixa1.children[caixa1.children.length - 1]);
//console.log(caixa1.firstElementChild); //tras o primeiro elemento da div caixa1
//console.log(caixa1.lastElementChild); //tras o ultimo elemento da div caixa1
//console.log(caixa1.children); //tras todos os elementos da div caixa1