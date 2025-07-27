/** @format */
const caixa = document.querySelector("#caixa")
class Pessoa {
	constructor(pnome) {
		this.nome = pnome;
	}
}
let p1 = new Pessoa(10);
let p2 = new Pessoa("MARIA");
let p3 = new Pessoa("GUARACI");

console.log(`\n1º Nome: ${p1.nome}\n2º Nome: ${p2.nome}\n3º Nome: ${p3.nome}`);

