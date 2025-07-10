function calcular(a, b, c) {
  console.log("CALCULAR 1");
  console.log(arguments);
}

const calcular2 = function () {
  console.log("CALCULAR 2");
  return 553311;
};

const calcular3 = () => console.log("CALCULAR 3");

calcular(13, 13, 14);
calcular2();
console.log("Resultado: ", calcular2());
calcular3();
