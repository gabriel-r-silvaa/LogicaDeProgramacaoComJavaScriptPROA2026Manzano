const prompt = require('prompt-sync')({ sigint: true });

const LIMITE_CADASTRO = 15;
const fichasPessoas = [];

const cadastrarPessoas = () => {
  for (let entrada = 0; entrada < LIMITE_CADASTRO; entrada++) {
    const nomePessoa = prompt(`Nome da ${entrada + 1}ª pessoa: `);
    const alturaPessoa = parseFloat(prompt('Altura (m): '));
    fichasPessoas.push({ nome: nomePessoa, altura: alturaPessoa });
  }
  console.log('Cadastro concluído.');
};

const exibirAbaixoOuIgualUmMeio = () => {
  const filtrados = fichasPessoas.filter(p => p.altura <= 1.5);
  console.log('\nPessoas com altura <= 1.5m:');
  filtrados.forEach(p => console.log(`${p.nome} — ${p.altura}m`));
};

const exibirAcimaDeUmMeio = () => {
  const filtrados = fichasPessoas.filter(p => p.altura > 1.5);
  console.log('\nPessoas com altura > 1.5m:');
  filtrados.forEach(p => console.log(`${p.nome} — ${p.altura}m`));
};

const exibirEntreFaixas = () => {
  const filtrados = fichasPessoas.filter(p => p.altura > 1.5 && p.altura < 2.0);
  console.log('\nPessoas com 1.5m < altura < 2.0m:');
  filtrados.forEach(p => console.log(`${p.nome} — ${p.altura}m`));
};

const calcularMediaAlturas = () => {
  if (fichasPessoas.length === 0) {
    console.log('Nenhuma pessoa cadastrada.');
    return;
  }
  const somaAlturas = fichasPessoas.reduce((acc, p) => acc + p.altura, 0);
  console.log(`\nMédia das alturas: ${(somaAlturas / fichasPessoas.length).toFixed(2)}m`);
};

let opcao;

do {
  console.log('\n=== CADASTRO DE ALTURAS ===');
  console.log('1 - Cadastrar pessoas');
  console.log('2 - Altura <= 1.5m');
  console.log('3 - Altura > 1.5m');
  console.log('4 - Altura entre 1.5m e 2.0m');
  console.log('5 - Média das alturas');
  console.log('6 - Sair');

  opcao = parseInt(prompt('Opção: '));

  switch (opcao) {
    case 1: cadastrarPessoas(); break;
    case 2: exibirAbaixoOuIgualUmMeio(); break;
    case 3: exibirAcimaDeUmMeio(); break;
    case 4: exibirEntreFaixas(); break;
    case 5: calcularMediaAlturas(); break;
    case 6: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (opcao !== 6);
