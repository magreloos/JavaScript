"use strict";

function soma() {
  //parametros rest é o uso dos tres pontos, para espalhar (expred)NÃO É NECESSARIO DECLARA VARIOS VALORES
  //   let tam = valores.length;
  var res = 0; //   for (let i = 0; i < tam; i++) {
  //     res += valores[i];
  //   }

  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }

  for (var _i = 0, _valores = valores; _i < _valores.length; _i++) {
    var v = _valores[_i];
    res += v;
  }

  return res;
}

console.log(soma(10, 15, 15, 5, 6, 7, 56, 1, 522, 4, 0, 9, 6, 3, -10, 75, -722));