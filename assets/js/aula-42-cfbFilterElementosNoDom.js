/** @format */

const idades = [
	15, 16, 17, 18, 17, 39, 45, 88, 66, 37, 8, 98, 48, 65, 74, 80, 10,
];
const maior = idades.filter((valor, indice, arr) => {
	if (valor >= 18) {
		return valor;
	}
});
const menor = idades.filter((valor, indice, arr) => {
	if (valor < 18) {
		return valor;
	}
});

console.log(idades);
console.log(maior);
console.log(menor);
