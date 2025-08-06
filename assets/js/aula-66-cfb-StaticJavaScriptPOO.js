/** @format */
class Npc {
	//não necessita de instanciar para usar
	//pode definir em atributo ou metodo, o mesmo pertence a classe nao a instancia da classe

	static alerta = false;
	constructor(energia) {
		this.energia = energia;
	}
	info = function () {
		console.log(`Energia..: ${this.energia}`);
		console.log(`Alerta...: ${Npc.alerta ? "Sim" : "Não"}`);
		console.log("-------------------");
	};
	static alertar = function () {
		//METODO ESTATICO
		Npc.alerta = true;
	};
}

const npc1 = new Npc(100);
const npc2 = new Npc(80);
const npc3 = new Npc(30);

Npc.alerta = true; //quando ulizo static a classe toda pode usar o seu valor

npc1.info();
npc2.info();
npc3.info();
