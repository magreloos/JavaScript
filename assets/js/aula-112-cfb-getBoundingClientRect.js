/** @format */

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

const info = (el) => {
	let DOMRect_q = el.getBoundingClientRect();
	posx.innerHTML = `PosX.:${DOMRect_q.x}`;
	posy.innerHTML = `PosY.:${DOMRect_q.y}`;
	largura.innerHTML = `Largura.:${DOMRect_q.width}`;
	altura.innerHTML = `Altura.:${DOMRect_q.height}`;
};
q1.addEventListener("click", (evt) => {
	info(evt.target);
});
q2.addEventListener("click", (evt) => {
	info(evt.target);
});
console.log(q1.getBoundingClientRect());
