/** @format */

const caixa = document.querySelector("#caixa");

let mapa = new Map();
mapa.set("Modelo", "Sedan"); //inserir chaves e elementos
mapa.set(10, "Rodas");
mapa.set("Canal", "YouTube");
mapa.set(1, "Motor");

mapa.delete("Canal"); //deleta chaves e elementos
//console.log(mapa);
console.log(mapa);
let pes = "teste";
let res = "";
if (mapa.has(pes)) {
	//verifica se existe uma chave na coleção
	res = "A cahave Existe na Coleção! " + mapa.get(pes);
} else {
	res = "A cahave NÃO Existe na Coleção! ";
}
res += "<br/>O Tamanho da Coleção é: " + mapa.size; //mostra o tamanho da coleção
caixa.innerHTML = res;
//caixa.innerHTML = mapa.get("Modelo");

mapa.forEach((el) => {
	//percorre a coleção
	caixa.innerHTML += "<br/>" + el;
});
