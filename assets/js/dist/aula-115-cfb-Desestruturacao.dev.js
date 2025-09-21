"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** @format */
var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var a = numeros[0],
    b = numeros[1],
    c = numeros[2],
    d = numeros[3],
    e = numeros[4],
    f = numeros[5],
    g = numeros.slice(6);
var obj = {
  nome: "Paulo",
  canal: "OcadoOgro",
  curso: "JavaScript"
};
var nome = obj.nome,
    canal = obj.canal;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(numeros);
console.log(nome);
console.log(canal);

var cores = function cores() {
  return ["verde", "amarelo", "azul", "branco"];
};

var _cores = cores(),
    _cores2 = _slicedToArray(_cores, 5),
    c1 = _cores2[0],
    c2 = _cores2[1],
    c3 = _cores2[3],
    c4 = _cores2[4];

console.log(c1);
console.log(c2);
console.log(c3);
var texto = "Curso de JavaScript";

var _texto$split = texto.split(" "),
    _texto$split2 = _toArray(_texto$split),
    t = _texto$split2.slice(0);

var _texto$split3 = texto.split(" "),
    _texto$split4 = _slicedToArray(_texto$split3, 3),
    p1 = _texto$split4[0],
    p2 = _texto$split4[1],
    p3 = _texto$split4[2];

console.log(t);
console.log("------------------------");
console.log(p1);
console.log(p2);
console.log(p3);