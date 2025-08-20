/** @format */

const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const number = document.getElementById("number");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");
const controles = document.getElementById(".controles");
const controle = document.getElementById(".controle");

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = [];
let numBola = 0;

class Bola {
	constructor(arrayBolas, palco) {
		this.tam = Math.floor(Math.random() * 15) + 10; //tamanho das bolinhas
		this.r = Math.floor(Math.random() * 255); //rbg randonico
		this.g = Math.floor(Math.random() * 255); //rbg randonico
		this.b = Math.floor(Math.random() * 255); //rbg randonico

		this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); //posição na tela horizontal
		this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); //posição da tela vertical

		this.velx = Math.floor(Math.random() * 2) + 0.5; //velocidade na horizontal
		this.vely = Math.floor(Math.random() * 2) + 0.5; //velociadade na vertical

		this.dirx = Math.floor(Math.random() * 10) > 5 ? 1 : -1;
		this.diry = Math.floor(Math.random() * 10) > 5 ? 1 : -1;

		this.palco = palco;
		this.arrayBolas = arrayBolas;

		this.id = Date.now() + "_" + Math.floor(Math.random() * 1000000000000); //gera um numero para o ID quase impossivel de se repitir

		this.desenhar();

		this.controle = setInterval(this.controlar, 10); //intervalo de controle
		this.eu = document.getElementById(this.id); //associa o id criado ao DOM

		numBola++;
		num_objetos.innerHTML = numBola;
	}
	minhaPos = () => {
		return this.arrayBolas.indexOf(this);
	};
	remover = () => {
		clearInterval(this.controle);
		bolas = bolas.filter((b) => {
			if (b.id != this.id) {
				return b;
			}
		});
		this.eu.remove();
		numBola--;
		num_objetos.innerHTML = numBola;
	};
	desenhar = () => {
		const div = document.createElement("div");
		div.setAttribute("id", this.id);
		div.setAttribute("class", "bola");
		div.setAttribute(
			"style",
			`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`
		);
		this.palco.appendChild(div);
	};

	controle_bordas = () => {
		if (this.px + this.tam >= larguraPalco) {
			this.dirx = -1;
		} else if (this.px <= 0) {
			this.dirx = 1;
		}

		if (this.py + this.tam >= larguraPalco) {
			this.diry = -1;
		} else if (this.py <= 0) {
			this.diry = 1;
		}
	};
	controlar = () => {
		this.controle_bordas();
		this.px += this.dirx * this.velx;
		this.py += this.diry * this.vely;
		this.eu.setAttribute(
			"style",
			`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`
		);
		if (this.px > larguraPalco || this.py > alturaPalco) {
			this.remover();
		}
	};
}

window.addEventListener("resize", (evt) => {
	larguraPalco = palco.offsetWidth;
	alturaPalco = palco.offsetHeight;
});

btn_add.addEventListener("click", (evt) => {
	const qtde = txt_qtde.value;
	for (let i = 0; i < qtde; i++) {
		bolas.push(new Bola(bolas, palco));
	}
	console.log("Bolas", qtde);
});
btn_remover.addEventListener("click", (evt) => {
	bolas.map((b) => {
		b.remover();
	});
});
