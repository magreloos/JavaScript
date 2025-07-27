/** @format */
const caixa = document.querySelector("#caixa");
class Carro {
	constructor(pnome, ptipo) {
		this.nome = pnome;
		if (ptipo == 1) {
			this.tipo = "Esportivo";
			this.velmax = 300;
		} else if (ptipo == 2) {
			this.tipo = "Utilitário";
			this.velmax = 140;
		} else if (ptipo == 3) {
			this.tipo = "Passeio";
			this.velmax = 160;
		} else {
			this.tipo = "Militar";
			this.velmax = 200;
		}
	}
	getNome() {
		return this.nome;
	}
	getTipo() {
		return this.tipo;
	}
	getVelmax() {
		return this.velmax;
	}
	getInfo() {
		return [this.nome, this.tipo, this.velmax];
	}
	setNome(nome) {
		this.nome = nome;
	}

	setTipo(tipo) {
		this.tipo = tipo;
	}

	setVelMax(velmax) {
		this.velmax = velmax;
	}

	info() {
		console.log(`Nome. :${this.nome}`);
		console.log(`Tipo. :${this.tipo}`);
		console.log(`V.Max.:${this.velmax}`);
		console.log(`-------------------------`);
	}
}

let c1 = new Carro("Rapidao", 1);
let c2 = new Carro("Super Luxo", 3);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("Carrega tudo", 2);

c1.setNome("Calhanbeque");
c1.info();
// c2.info();
// c3.info();
// c4.info();
//console.log(c1.getNome())
//console.log(c1.getInfo()[2])
