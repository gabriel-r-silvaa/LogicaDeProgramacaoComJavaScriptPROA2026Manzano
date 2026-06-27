const prompt = require('prompt-sync')({ sigint: true });

const TOTAL_VAGAS = 20;
const turma = [];

const calcularMediaBimestral = (bimestres) => bimestres.reduce((soma, nota) => soma + nota, 0) / 4;

const cadastrarTurma = (lista, vagas) => {
  for (let posicao = 0; posicao < vagas; posicao++) {
    const nome = prompt(`Nome do ${posicao + 1}º aluno: `);
    const bimestres = [
      parseFloat(prompt('Nota bimestre 1: ')),
      parseFloat(prompt('Nota bimestre 2: ')),
      parseFloat(prompt('Nota bimestre 3: ')),
      parseFloat(prompt('Nota bimestre 4: ')),
    ];
    lista.push({ nome, bimestres });
  }
  lista.sort((a, b) => a.nome.localeCompare(b.nome));
  console.log('Turma cadastrada e ordenada por nome.');
};

const pesquisarAlunoPorNome = (lista, chave) => {
  const ficha = lista.find(a => a.nome.toLowerCase() === chave.toLowerCase());
  if (!ficha) { console.log('Aluno não encontrado.'); return; }
  const media = calcularMediaBimestral(ficha.bimestres);
  console.log(`${ficha.nome} | Média: ${media.toFixed(2)} | ${media >= 5 ? 'Aprovado' : 'Reprovado'}`);
};

const listarTodosOsAlunos = (lista) => {
  if (lista.length === 0) { console.log('Nenhum aluno cadastrado.'); return; }
  lista.forEach(ficha => {
    const media = calcularMediaBimestral(ficha.bimestres);
    console.log(`${ficha.nome} | Média: ${media.toFixed(2)} | ${media >= 5 ? 'Aprovado' : 'Reprovado'}`);
  });
};

let escolha;

do {
  console.log('\n=== SISTEMA ESCOLAR (top-down) ===');
  console.log('1 - Cadastrar  2 - Pesquisar  3 - Listar  4 - Sair');
  escolha = parseInt(prompt('Opção: '));

  switch (escolha) {
    case 1: cadastrarTurma(turma, TOTAL_VAGAS); break;
    case 2: pesquisarAlunoPorNome(turma, prompt('Nome do aluno: ')); break;
    case 3: listarTodosOsAlunos(turma); break;
    case 4: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (escolha !== 4);
