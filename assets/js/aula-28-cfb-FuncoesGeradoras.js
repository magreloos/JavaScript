/*

function* cores() {//o asterisco informa que a função é geradora
  yield "Vermelho";//a pakavara YIELD é responsavel pela parada
  yield "Verde";
  yield "Azul";
}//ao chegar ao final e for novamnete chamado ira mostra o valor undefined

const itc = cores();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
function* perguntas() {
  const nome = yield "qual seu nome";
  const esporte = yield "qual seu esporte favorito";
  return "Seu nome é: " + nome + " seu estporta favorito é: " + esporte;
}
const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Paulo").value);
console.log(itp.next("volei").value);
*/
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 100) break;
  }
}
const itc = contador();
for (let c of itc) {
  console.log("Contador: " + c);
}
