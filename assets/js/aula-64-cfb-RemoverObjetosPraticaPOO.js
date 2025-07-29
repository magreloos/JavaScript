/** @format */

///HERANÇA

const f_tipoMilitar = document.querySelector("#f_tipoMilitar");
const f_tipoNormal = document.querySelector("#f_tipoNormal");
const f_blindagem = document.querySelector("#f_blindagem");
const f_municao = document.querySelector("#f_municao");
const f_nome = document.querySelector("#f_nome");
const f_portas = document.querySelector("#f_portas");
const carros = document.querySelector(".carros");
const btn_addCarro = document.querySelector("#btn_addCarro");

let a_carros = [];

const removerCarro = (quem) => {
    let resultado = confirm("Você deseja continuar?");
    if (resultado) {
	a_carros = a_carros.filter((el) => {
		return el.nome != quem;
        confirm("Item foi excluído.");
	});
    } 
};

f_tipoMilitar.addEventListener("click", (evt) => {
	f_nome.value = "";
	f_portas.value = 0;
	f_blindagem.value = 0;
	f_municao.value = 0;
	f_blindagem.removeAttribute("disabled", "disabled");
	f_municao.removeAttribute("disabled", "disabled");
});
f_tipoNormal.addEventListener("click", (evt) => {
	f_nome.value = "";
	f_portas.value = 0;
	f_blindagem.value = 0;
	f_municao.value = 0;
	f_blindagem.setAttribute("disabled", "disabled");
	f_municao.setAttribute("disabled", "disabled");
});

const gerenciarExibicaoCarro = () => {
	carros.innerHTML = "";
	a_carros.forEach((c) => {
		const div = document.createElement("div");

		div.addEventListener("dblclick", (evt) => {
			const quemRemover = evt.target.dataset.nome;
			console.log(evt.target.dataset.nome);

			removerCarro(quemRemover);
			gerenciarExibicaoCarro();
			
		});

		div.setAttribute("class", "carro");
		div.setAttribute("data-nome", c.nome);
		div.innerHTML = `Nome.........: ${c.nome}<br/>Portas.........: ${c.portas}<br/>Cor..........: ${c.cor}
		<br/>Blindagem.: ${c.blindagem}<br/>Munição.....: ${c.municao}`;
		carros.appendChild(div);
	});
};

btn_addCarro.addEventListener("click", () => {
	if (f_tipoNormal.checked) {
		const c = new Carro(f_nome.value, f_portas.value);
		a_carros.push(c);
	} else {
		const c = new Militar(
			f_nome.value,
			f_portas.value,
			f_blindagem.value,
			f_municao.value
		);
		a_carros.push(c);
	}
	gerenciarExibicaoCarro();
});

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
