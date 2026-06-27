const prompt = require('prompt-sync')({ sigint: true });

const QUADRO_FUNCIONAL = 20;
const fichasFuncionarios = [];

const cadastrarFuncionarios = () => {
  for (let entrada = 0; entrada < QUADRO_FUNCIONAL; entrada++) {
    const matricula = parseInt(prompt(`Matrícula do ${entrada + 1}º funcionário: `));
    const nomeFuncionario = prompt('Nome: ');
    const salarioFuncionario = parseFloat(prompt('Salário: R$ '));
    fichasFuncionarios.push({ matricula, nome: nomeFuncionario, salario: salarioFuncionario });
  }

  for (let passagem = 0; passagem < fichasFuncionarios.length - 1; passagem++) {
    for (let comparacao = 0; comparacao < fichasFuncionarios.length - 1 - passagem; comparacao++) {
      if (fichasFuncionarios[comparacao].matricula > fichasFuncionarios[comparacao + 1].matricula) {
        const temporario = fichasFuncionarios[comparacao];
        fichasFuncionarios[comparacao] = fichasFuncionarios[comparacao + 1];
        fichasFuncionarios[comparacao + 1] = temporario;
      }
    }
  }
  console.log('Funcionários cadastrados e ordenados por matrícula.');
};

const pesquisarPorMatricula = () => {
  const codigoBusca = parseInt(prompt('Matrícula a pesquisar: '));
  const ficha = fichasFuncionarios.find(f => f.matricula === codigoBusca);

  if (ficha) {
    console.log(`\n${ficha.matricula} | ${ficha.nome} | R$ ${ficha.salario.toFixed(2)}`);
  } else {
    console.log('Funcionário não encontrado.');
  }
};

const exibirPorFaixaSalarial = (criterio) => {
  const filtrados = fichasFuncionarios.filter(f => {
    if (criterio === 'acima') return f.salario > 1000;
    if (criterio === 'abaixo') return f.salario < 1000;
    return f.salario === 1000;
  });

  filtrados.forEach(f => {
    console.log(`${f.matricula} | ${f.nome} | R$ ${f.salario.toFixed(2)}`);
  });
};

let selecao;

do {
  console.log('\n=== RH — FUNCIONÁRIOS ===');
  console.log('1 - Cadastrar funcionários');
  console.log('2 - Pesquisar por matrícula');
  console.log('3 - Salário > R$1.000,00');
  console.log('4 - Salário < R$1.000,00');
  console.log('5 - Salário = R$1.000,00');
  console.log('6 - Sair');

  selecao = parseInt(prompt('Opção: '));

  switch (selecao) {
    case 1: cadastrarFuncionarios(); break;
    case 2: pesquisarPorMatricula(); break;
    case 3: exibirPorFaixaSalarial('acima'); break;
    case 4: exibirPorFaixaSalarial('abaixo'); break;
    case 5: exibirPorFaixaSalarial('igual'); break;
    case 6: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (selecao !== 6);
