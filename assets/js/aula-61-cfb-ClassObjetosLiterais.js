/** @format */

const criarPessoa = (nome, idade) => {
	return {
		nome: nome,
		idade: idade,
		getNome: function () {
			return this.nome;
		},
		setNome: function (novoNome) {
			this.nome = novoNome;
		},
		getIdade: function () {
			return this.idade;
		},
		setIdade: function (novaIdade) {
			this.idade = novaIdade;
		},
	};
};

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");
const f_nome = document.querySelector("#f_nome");
const f_idade = document.querySelector("#f_idade");

const exibirPessoas = () => {
	res.innerHTML = "";
	if (pessoas.length === 0) {
		res.innerHTML = "<p class=empty-message>Nenhuma Pessoa adicionada</p>";
		return;
	}
	pessoas.forEach((p) => {
		const div = document.createElement("div");
		div.setAttribute("class", "pessoa");
		div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
		res.appendChild(div);
	});
};

btn_add.addEventListener("click", (e) => {
	e.preventDefault();
	const nomeDigitado = f_nome.value.trim();
	const idadeDigitada = parseInt(f_idade.value);

	if (nomeDigitado === "" || isNaN(idadeDigitada) || idadeDigitada <= 0) {
		alert("Digite um Nome Válido e uma idade Positiva.");
		return; // Exit if validation fails
	}

	const novaPessoa = criarPessoa(nomeDigitado, idadeDigitada);

	pessoas.push(novaPessoa);
	f_nome.value = "";
	f_idade.value = "";

	f_nome.focus();
	console.log(pessoas);
	exibirPessoas();
});
exibirPessoas();
