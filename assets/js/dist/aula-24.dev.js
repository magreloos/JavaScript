"use strict";

process.stdin.setEncoding("utf8");

var soma = function soma(valor) {
  if (valor < 0 || valor > 100) {
    throw new Error("Valor Invalido! Programa Finalizado.");
  }

  if (valor === 0) {
    return 0;
  }

  return valor + soma(valor - 1);
};

process.stdin.on("data", function (data) {
  try {
    console.log("soma: ", soma(Number(data)));
  } catch (error) {
    console.log(error.message);
    process.stdin.pause();
  }
}); //console.log("soma: ", soma(Number(3)));