const teste01 = (callback) => {
  setTimeout(() => {
    console.log("TESTE-01");
  }, 3000);
};
const teste02 = (callback) => {
  setTimeout(() => {
    console.log("TESTE-02");
    callback;
  }, 6000);
};
function teste03(callback) {
    setTimeout(() => {
        console.log("TESTE-03");
    }, 5000);
}
const teste04 = (callback) => {
  setTimeout(() => {
    console.log("TESTE-04");
  }, 1000);
};

const funcaoCallBack = () => {
  console.log("Usuário Salvo!");
};
teste01();
console.log(1 + 1);
teste02(funcaoCallBack);
teste03();
console.log(5 + 5);
teste04();
