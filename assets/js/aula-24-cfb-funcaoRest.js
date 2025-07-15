function soma(...valores) {
  //parametros rest é o uso dos tres pontos, para espalhar (expred)NÃO É NECESSARIO DECLARA VARIOS VALORES

  //   let tam = valores.length;
  let res = 0;
  //   for (let i = 0; i < tam; i++) {
  //     res += valores[i];
  //   }

  for (let v of valores) {
    res += v;
  }
  return res;
}

console.log(
  soma(10, 15, 15, 5, 6, 7, 56, 1, 522, 4, 0, 9, 6, 3, -10, 75, -722)
);
