/** @format */

const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");
const carro = document.getElementById("carro");
const btn_parar = document.getElementById("btn_parar");
const painel = document.getElementsByClassName(".painel");

console.log("Tamanho.:" + window.innerWidth);

const init = () => {
	carro.style = "position:relative;left:0px;width:100px";
	tamMax = window.innerWidth - parseInt(carro.style.width);
};
let tamMax = null;
let anima = null;

const move = (dir) => {
	if (dir > 0) {
		if (parseInt(carro.style.left) <= tamMax) {
			carro.style.left = parseInt(carro.style.left) + 10 * dir + "px";
			anima = setTimeout(move, 20, dir);
		} else {
			clearTimeout(anima);
		}
	} else if (dir < 0) {
		if (parseInt(carro.style.left) >= 0) {
			carro.style.left = parseInt(carro.style.left) + 10 * dir + "px";
			anima = setTimeout(move, 20, dir);
		} else {
			clearTimeout(anima);
		}
	}
	console.log(tamMax);
};

btn_parar.addEventListener("click", () => {
	clearTimeout(anima);
});

btn_direita.addEventListener("click", () => {
	// let pos=parseInt(carro.style.left)
	// pos+=10;
	// carro.style=(`position:relative;left:${pos}px`);
	clearTimeout(anima);
	//anima=setInterval(move,20,1);
	move(1);
});
btn_esquerda.addEventListener("click", () => {
	// carro.style.left=parseInt(carro.style.left)-10+"px";
	clearTimeout(anima);
	//anima=setInterval(move,20,-1);
	move(-1);
});

// window.onload = init;
window.addEventListener("load", init());
window.addEventListener("resize", () => {
	tamMax = window.innerWidth - parseInt(carro.style.width);
});
