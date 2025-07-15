//função anonima é utilazada para ser chamada em tempo de execução
//sem a necessidade de ser alocana na memoria anteriormente

// const f = function (...valores) {//função anonima simples
//   let res = 0;
//   for (v of valores) {
//     res += v;
//   }
//   return res;
// };
// console.log(f(55, 5));

const f = new Function("v1", "v2", "return v1+v2"); //função construtor anonima

console.log(f(55, 55));
