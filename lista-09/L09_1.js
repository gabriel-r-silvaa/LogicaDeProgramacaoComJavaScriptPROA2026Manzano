const prompt = require('prompt-sync')({ sigint: true });

const CAPACIDADE_AGENDA = 10;
const registrosAgenda = [];

const cadastrarContatos = () => {
  for (let entrada = 0; entrada < CAPACIDADE_AGENDA; entrada++) {
    const nomeContato = prompt(`Nome do ${entrada + 1}º contato: `);
    const enderecoContato = prompt('Endereço: ');
    const telefoneContato = prompt('Telefone: ');
    registrosAgenda.push({ nome: nomeContato, endereco: enderecoContato, telefone: telefoneContato });
  }
  console.log('Cadastro concluído.');
};

const pesquisarPorNome = () => {
  const termoBusca = prompt('Nome a pesquisar: ');
  let encontrado = false;

  for (let posicao = 0; posicao < registrosAgenda.length; posicao++) {
    if (registrosAgenda[posicao].nome.toLowerCase() === termoBusca.toLowerCase()) {
      console.log(`\nNome: ${registrosAgenda[posicao].nome}`);
      console.log(`Endereço: ${registrosAgenda[posicao].endereco}`);
      console.log(`Telefone: ${registrosAgenda[posicao].telefone}`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) console.log('Contato não encontrado.');
};

const classificarPorNome = () => {
  for (let passagem = 0; passagem < registrosAgenda.length - 1; passagem++) {
    for (let comparacao = 0; comparacao < registrosAgenda.length - 1 - passagem; comparacao++) {
      if (registrosAgenda[comparacao].nome > registrosAgenda[comparacao + 1].nome) {
        const temporario = registrosAgenda[comparacao];
        registrosAgenda[comparacao] = registrosAgenda[comparacao + 1];
        registrosAgenda[comparacao + 1] = temporario;
      }
    }
  }
  console.log('Agenda ordenada por nome.');
};

const exibirTodos = () => {
  if (registrosAgenda.length === 0) {
    console.log('Nenhum registro cadastrado.');
    return;
  }
  registrosAgenda.forEach((contato, posicao) => {
    console.log(`\n[${posicao + 1}] ${contato.nome} | ${contato.endereco} | ${contato.telefone}`);
  });
};

let opcaoMenu;

do {
  console.log('\n=== AGENDA ===');
  console.log('1 - Cadastrar contatos');
  console.log('2 - Pesquisar por nome');
  console.log('3 - Ordenar por nome');
  console.log('4 - Exibir todos');
  console.log('5 - Sair');

  opcaoMenu = parseInt(prompt('Opção: '));

  switch (opcaoMenu) {
    case 1: cadastrarContatos(); break;
    case 2: pesquisarPorNome(); break;
    case 3: classificarPorNome(); break;
    case 4: exibirTodos(); break;
    case 5: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (opcaoMenu !== 5);
