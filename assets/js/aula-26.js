const lista = [
  {
    nome: "João",
    idade: 10,
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

const converterObjeto = (objeto) => {
  return {
    // ...objeto, //esta opção substitui as chamadas abaixo nome e idade. quando tem varios dados simplifica a chamada para todos
    //nome: objeto.nome,
    //idade: objeto.idade,
    nomeIdade: `${objeto.nome} ${objeto.idade}`,
  };
};

//console.log(lista.map((objeto) => objeto.nome));
console.log(lista.map(converterObjeto));
