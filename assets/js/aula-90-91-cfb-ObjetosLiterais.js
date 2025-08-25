/** @format */
const objetos = document.getElementById("objetos");

const computador = {
	//cria um objeto Literal
	cpu: "", //propriedades do objeto
	ram: "",
	ssd: "",
	info: function () {
		//função para mostrar no console os objetos literais
		console.log(`CPU.:${this.cpu}`);
		console.log(`RAM.:${this.ram}`);
		console.log(`SSD.:${this.ssd}`);
	},
};
computador["monitor"] = "22pol"; //primeiro modo de inserir uma nova propriedade
computador.placaVideo = "RTX"; //segundo modo
// console.log(computador.cpu); //forma de mostrar
// console.log(computador["cpu"]);

delete computador.ssd;

//clonar objetos
const c1 = Object.assign({}, computador);
c1.info();

//criar objeto de um exixtente
const c2 = Object.create(computador);
c2.cpu = "i9";
c2.ram = "64GB";
c2.ssd = "4TB";
c2.info();

const o1 = { obj1: "1" };
const o2 = { obj2: "2" };
const o3 = { obj3: "3" };
const o4 = Object.assign(o1, o2, o3);
console.log(o4);

//cria um array de objetos
const computadores = [
	{
		cpu: "Raize7",
		ram: "128GB",
		ssd: "4TB",
	},
	{
		cpu: "Raize9",
		ram: "256GB",
		ssd: "16TB",
	},
	{
		cpu: "Raize5",
		ram: "64GB",
		ssd: "4TB",
	},
	{
		cpu: "i9",
		ram: "64GB",
		ssd: "4TB",
	},
];
// computador.info();
// console.log(computadores);
// objetos.innerHTML = JSON.stringify(computadores);

//processa o array de objetos para mostrar na Div do navegador (DOM)
computadores.forEach((c) => {
	//verifica todos os itens do array
	// console.log(c); //mostra no console
	const div = document.createElement("div"); //cria uma div
	div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.ssd + "<br/>"; //insere os dados na div criada
	div.setAttribute("class", "computador"); //seta um atributo no DOM uma classe para ser estilizada pelo CSS
	objetos.appendChild(div); //povoa e mostra no dom as informações dos objetos localizados no array
});
