let n = 1;
let max = 10000;

// while (n < max) {
//   console.log("CURSO - " + n);
//   if (n >= 500) break;

//   n++;
// }
// console.log("PAROU EM " + n);
// console.log("FIM");

let pares = 1;

for (let i = n; i < max; i++) {
  if (i % 2 != 0) {
    console.log("CURSO IMPAR = ", i);
    continue;
  }
  console.log("CURSO PAR   = ", i);

  pares++;
}
console.log("Quantidade de Pares", pares);
console.log("FIM");
