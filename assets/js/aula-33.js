//a função some retorna verdadeiro caso um item de uma lista satisfaça a requisição
//a função Every retirba verdadeuri somente se todos os itens da lista for verdadeiro

const lista = [
  {
    nome: "João",
    idade: 10,
    exibir: true,
  },
  {
    nome: "Jose",
    idade: 44,
  },
  {
    nome: "Maira",
    idade: 33,
  },
  {
    nome: "Joana",
    idade: 62,
  },
  {
    nome: "Carmem",
    idade: 72,
  },
  {
    nome: "Hernane",
    idade: 50,
  },
  {
    nome: "Mauricio",
    idade: 51,
  },
  {
    nome: "Gabriel",
    idade: 38,
  },
  {
    nome: "Margarida",
    idade: 16,
  },
  {
    nome: "Whashington",
    idade: 37,
  },
];

const resultadoSome = lista.some((objeto) => objeto.idade > 100); //
const resultadoEvery = lista.some((objeto) => objeto.idade < 100);

console.log("resultado EVERRY: ", resultadoEvery);
console.log("resultado SOME", resultadoSome);
