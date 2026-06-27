const prompt = require('prompt-sync')({ sigint: true });

const TOTAL_FUNCIONARIOS = 20;
const quadroFuncional = [];

const registrarFuncionarios = (lista, total) => {
  for (let posicao = 0; posicao < total; posicao++) {
    const matricula = parseInt(prompt(`Matrícula do ${posicao + 1}º funcionário: `));
    const nome = prompt('Nome: ');
    const salario = parseFloat(prompt('Salário: R$ '));
    lista.push({ matricula, nome, salario });
  }
  for (let passagem = 0; passagem < lista.length - 1; passagem++) {
    for (let comparacao = 0; comparacao < lista.length - 1 - passagem; comparacao++) {
      if (lista[comparacao].matricula > lista[comparacao + 1].matricula) {
        const temp = lista[comparacao];
        lista[comparacao] = lista[comparacao + 1];
        lista[comparacao + 1] = temp;
      }
    }
  }
  console.log('Funcionários cadastrados e ordenados por matrícula.');
};

const localizarPorMatricula = (lista, codigo) => {
  const ficha = lista.find(f => f.matricula === codigo);
  if (ficha) {
    console.log(`${ficha.matricula} | ${ficha.nome} | R$ ${ficha.salario.toFixed(2)}`);
  } else {
    console.log('Funcionário não encontrado.');
  }
};

const filtrarPorSalario = (lista, faixa) => {
  const filtrados = lista.filter(f => {
    if (faixa === 'acima') return f.salario > 1000;
    if (faixa === 'abaixo') return f.salario < 1000;
    return f.salario === 1000;
  });
  filtrados.forEach(f => console.log(`${f.matricula} | ${f.nome} | R$ ${f.salario.toFixed(2)}`));
};

let selecao;

do {
  console.log('\n=== RH (top-down) ===');
  console.log('1-Cadastrar  2-Pesquisar  3->1000  4-<1000  5-=1000  6-Sair');
  selecao = parseInt(prompt('Opção: '));

  switch (selecao) {
    case 1: registrarFuncionarios(quadroFuncional, TOTAL_FUNCIONARIOS); break;
    case 2: localizarPorMatricula(quadroFuncional, parseInt(prompt('Matrícula: '))); break;
    case 3: filtrarPorSalario(quadroFuncional, 'acima'); break;
    case 4: filtrarPorSalario(quadroFuncional, 'abaixo'); break;
    case 5: filtrarPorSalario(quadroFuncional, 'igual'); break;
    case 6: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (selecao !== 6);
