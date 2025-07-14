class Pessoa {
  nome;
  idade;
  filhos;
  quantosFilhos() {
    if (this.filhos) {
      return this.filhos.length;
    }
    return 0;
  }

  constructor(nome, idade, filhos) {
    this.nome = nome;
    this.idade = idade;
    this.filhos = filhos;
  }
}

const filho1 = new Pessoa("Jose", 15);
const filho2 = new Pessoa("Margarida", 12);
console.log("filho1 tem: ", filho1.quantosFilhos());

const pessoa = new Pessoa("Marcos", 45, [filho1, filho2]);

console.log("Qauntos Filhos? ", pessoa.quantosFilhos());
console.log("Nome: ", pessoa);
