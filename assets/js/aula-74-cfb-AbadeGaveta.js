/** @format */

const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res");
const display = document.querySelector(".display");
const tcpy = document.getElementById("tcpy");
const tLimpar = document.getElementById("tLimpar");
const tigual = document.getElementById("tigual");
const calcAba = document.getElementById("calcAba");
const calc = document.getElementById("calc");
const img_aba_calc = document.getElementById("img_aba_calc");

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
	el.addEventListener("click", (evt) => {
		sinal = false;

		if (evt.target.innerHTML == ",") {
			if (!decimal) {
				decimal = true;
				if (display.innerHTML == "0") {
					display.innerHTML = "0,";
				} else {
					display.innerHTML += evt.target.innerHTML;
				}
			}
		} else {
			if (display.innerHTML == "0") {
				display.innerHTML + "";
			}
			display.innerHTML += evt.target.innerHTML;
		}
	});
});

teclasOp.forEach((el) => {
	el.addEventListener("click", (evt) => {
		if (!sinal) {
			sinal = true;
			decimal = false;
			if (display.innerHTML == "0") {
				display.innerHTML + "";
			}

			if (evt.target.innerHTML == "x") {
				display.innerHTML += "*";
			} else if (evt.target.innerHTML == "÷") {
				display.innerHTML += "/";
			} else {
				display.innerHTML += evt.target.innerHTML;
			}
		}
	});
	if (display.innerHTML == "0") {
		display.innerHTML + "";
	}
});

tLimpar.addEventListener("click", (evt) => {
	sinal = false;
	decimal = false;
	display.innerHTML = "0";
});

teclaRes.addEventListener("click", (evt) => {
	sinal = false;
	decimal = false;
	try {
		let res = eval(display.innerHTML);
		display.innerHTML = res;
	} catch (error) {
		display.innerHTML = "Error";
	}
});

tigual.addEventListener("click", (evt) => {
	sinal = false;
	decimal = false;
	const res = eval(display.innerHTML);
});
tcpy.addEventListener("click", (evt) => {
	navigator.clipboard.writeText(display.innerHTML);
	console.log(display.innerHTML);
});
calcAba.addEventListener("click", (evt) => {
	calc.classList.toggle("calcExibir");
	if (calc.classList.contains("calcExibir")) {
		img_aba_calc.setAttribute("src", "assets/img/setaEsquerda.svg");
	} else {
		img_aba_calc.setAttribute("src", "assets/img/setaDireita.svg");
	}
});
