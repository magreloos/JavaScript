/** @format */

///HERANÇA

class Carro {
	//Classe Pai : BASE
	constructor(nome, portas) {
		this.nome = nome;
		this.portas = portas;
		this.ligado = false;
		this.vel = 0;
		this.cor = undefined;
		this.rodas = undefined;
	}
	ligar = function () {
		this.ligdo = true;
	};
	desligar = function () {
		this.ligado = false;
	};
	setCor = function (cor) {
		this.cor = cor;
	};
	setRodas = function (rodas) {
		this.rodas = rodas;
	};
}
class Militar extends Carro {
	//Classe Filho
	constructor(nome, portas, blindagem, municao) {
		super(nome, portas); //chama a classe pai
		this.blindagem = blindagem;
		this.municao = municao;
		this.setCor("Verde");
	}
	atirar = function () {
		if (this.municao > 0) {
			this.municao--;
		}
	};
}
class Utilitario extends Carro {
	constructor(nome, portas, lugares) {
		super(nome, portas);
		this.lugares = lugares;
	}
}

const c1 = new Carro("Normal", 4);
c1.ligar();
c1.setCor("Azul Petroleo");
c1.setRodas(16);

const c2 = new Militar("Lutador", 1, 100, 1000);
c2.setRodas(22);
c2.municao = 1000000000000;
c2.atirar();

console.log(`Nome......: ${c1.nome}`);
console.log(`Portas....: ${c1.portas}`);
console.log(`Ligado....: ${c1.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor.......: ${c1.cor}`);
console.log(`Rodas.....: ${c1.rodas}`);
console.log(`Lugares...: ${c1.lugares}`);
console.log(`------------------------------------------`);
console.log(`Nome......: ${c2.nome}`);
console.log(`Portas....: ${c2.portas}`);
console.log(`Ligado....: ${c2.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Cor.......: ${c2.cor}`);
console.log(`Rodas.....: ${c2.rodas}`);
console.log(`Blindagem.: ${c2.blindagem}`);
console.log(`Municao...: ${c2.municao}`);
console.log(`------------------------------------------`);
