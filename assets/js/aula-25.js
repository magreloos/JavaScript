const jose = {
  idade: 35,
  peso: 80,
  nome: "Jose",
  sexo: "M",
  nacionalidade: "Brasileiro",
  endereco: "RUA 1",
  numero: 444,
  pais: "Brasil",
  filhos: true,
};

const exibirInformacoes = (pessoa, qualInformacao) => {
  console.log(`${qualInformacao} de ${pessoa.nome}: `, pessoa[qualInformacao]);
  //console.log(`Idade de ${pessoa.nome}: `, pessoa.idade);
  //console.log(`Endereço de ${pessoa.nome}: `, pessoa.endereco);
};

exibirInformacoes(jose, "sexo");
