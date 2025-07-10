"use strict";

var teste01 = function teste01(callback) {
  setTimeout(function () {
    console.log("TESTE-01");
  }, 1000);
};

var teste02 = function teste02(callback) {
  setTimeout(function () {
    console.log("TESTE-02");
    callback;
  }, 600);
};

function teste03(callback) {
  setTimeout(function () {
    console.log("TESTE-03");
  }, 500);
}

var teste04 = function teste04(callback) {
  setTimeout(function () {
    console.log("TESTE-04");
  }, 1);
};

function funcaoCallBack() {
  console.log("Usuário Salvo!");
}

teste01();
console.log(1 + 1);
teste02(funcaoCallBack());
teste03();
console.log(5 + 5);
teste04();