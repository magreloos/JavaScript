/** @format */

const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res");
const display = document.querySelector(".display");
const tonoff = document.querySelector("#tonoff");
const tLimpar = document.querySelector("#tLimpar");

let sinal = false;

teclasNum.forEach((el) => {
	el.addEventListener("click", (evt) => {
		sinal = false;
		display.innerHTML += evt.target.innerHTML;
	});
});

teclasOp.forEach((el) => {
	el.addEventListener("click", (evt) => {
		if (!sinal) {
			sinal = true;
			if (display.innerHTML == "0") {
				display.innerHTML = "";
			}
			if (evt.target.innerHTML == "x") {
				display.innerHTML += "*";
			} else {
				display.innerHTML += evt.target.innerHTML;
			}
		}
	});
});
tLimpar.addEventListener("click", (evt) => {
	sinal = false;
	display.innerHTML = "0";
});

console.log(teclasNum);
console.log(teclasOp.display);
console.log(teclaRes);
