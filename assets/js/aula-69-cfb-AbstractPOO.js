/** @format */
class carroPadrao {
	constructor() {
		if (this.constructor === carroPadrao) {
			throw new TypeError("Classe NÃO pode ser iniciada"); //Simulando uma CLASSE ABSTRATA EM JAVASCRIPT
		}
		if (this.ligado === undefined) {
			//campo obrigatório na construção
			throw new TypeError("Implementação Obrigatório! da propriedade Ligado");
		}
		this.rodas = 19;
		this.portas = 4;
		this.ligado = false;
	}
}

class Carro extends carroPadrao {
	constructor(tipo, estagioTurbo) {
		super();
		this.turbo = new Turbo(estagioTurbo);
		if (tipo == 1) {
			this.velMax = 120;
			this.nome = "Normal";
		} else if (tipo == 2) {
			this.velMax = 160;
			this.nome = "Esportivo";
		} else if (tipo == 3) {
			this.velMax = 200;
			this.nome = "Super Esportivo";
		}
		this.velMax += this.turbo.pot;
	}
	info() {
		console.log(this.nome);
		console.log(this.velMax);
		console.log(this.turbo);
		console.log(this.rodas);
		console.log(this.portas);
		console.log(this.ligado);

		console.log("=================");
	}
	ligado() {} //metodo obrigatorio conforme implentação no construtor simulando o um metodo ABSTRACT
}
class Turbo {
	constructor(e) {
		if (e === 0) {
			this.pot = 0;
		} else if (e === 1) {
			this.pot = 50;
		} else if (e === 2) {
			this.pot = 75;
		} else if (e === 3) {
			this.pot = 100;
		}
	}
}

class CarroEspecial extends Carro {
	constructor(estagioTurbo) {
		super(4, estagioTurbo);
		this.tipoInfo = 1;
		this.velMax = 300 + this.turbo.pot;
		this.nome = "Carro Especial";
	}
	info() {
		if (this.tipoInfo === 1) {
			super.info();
		} else {
			console.log(`Nome....: ${this.nome}`);
			console.log(`Vel.Max.: ${this.velMax}`);
			console.log(`Turbo...: ${this.turbo.pot}`);

			console.log("=================");
		}
	}
}
const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);
///const c4 = new carroPadrao();

c1.info();
c2.info();
c3.info();
