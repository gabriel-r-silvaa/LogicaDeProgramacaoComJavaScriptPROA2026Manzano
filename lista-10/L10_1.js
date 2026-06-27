const prompt = require('prompt-sync')({ sigint: true });

const CAPACIDADE = 10;
const agenda = [];

const cadastrar = (lista, capacidade) => {
  for (let posicao = 0; posicao < capacidade; posicao++) {
    const nome = prompt(`Nome do ${posicao + 1}º contato: `);
    const endereco = prompt('Endereço: ');
    const telefone = prompt('Telefone: ');
    lista.push({ nome, endereco, telefone });
  }
  console.log('Cadastro finalizado.');
};

const pesquisarSequencial = (lista, chave) => {
  for (let posicao = 0; posicao < lista.length; posicao++) {
    if (lista[posicao].nome.toLowerCase() === chave.toLowerCase()) {
      console.log(`\nNome: ${lista[posicao].nome}`);
      console.log(`Endereço: ${lista[posicao].endereco}`);
      console.log(`Telefone: ${lista[posicao].telefone}`);
      return;
    }
  }
  console.log('Contato não encontrado.');
};

const ordenarPorNome = (lista) => {
  for (let passagem = 0; passagem < lista.length - 1; passagem++) {
    for (let comparacao = 0; comparacao < lista.length - 1 - passagem; comparacao++) {
      if (lista[comparacao].nome > lista[comparacao + 1].nome) {
        const temp = lista[comparacao];
        lista[comparacao] = lista[comparacao + 1];
        lista[comparacao + 1] = temp;
      }
    }
  }
  console.log('Agenda ordenada.');
};

const listarTodos = (lista) => {
  if (lista.length === 0) { console.log('Sem registros.'); return; }
  lista.forEach((c, i) => console.log(`[${i + 1}] ${c.nome} | ${c.endereco} | ${c.telefone}`));
};

let opcao;

do {
  console.log('\n=== AGENDA (top-down) ===');
  console.log('1 - Cadastrar  2 - Pesquisar  3 - Ordenar  4 - Listar  5 - Sair');
  opcao = parseInt(prompt('Opção: '));

  switch (opcao) {
    case 1: cadastrar(agenda, CAPACIDADE); break;
    case 2: pesquisarSequencial(agenda, prompt('Nome: ')); break;
    case 3: ordenarPorNome(agenda); break;
    case 4: listarTodos(agenda); break;
    case 5: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (opcao !== 5);
