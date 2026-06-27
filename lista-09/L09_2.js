const prompt = require('prompt-sync')({ sigint: true });

const TOTAL_ALUNOS = 20;
const fichasAlunos = [];

const calcularMedia = (bimestres) => bimestres.reduce((acc, nota) => acc + nota, 0) / 4;

const cadastrarAlunos = () => {
  for (let rodada = 0; rodada < TOTAL_ALUNOS; rodada++) {
    const nomeAluno = prompt(`Nome do ${rodada + 1}º aluno: `);
    const primeiroBimestre = parseFloat(prompt('Nota bimestre 1: '));
    const segundoBimestre = parseFloat(prompt('Nota bimestre 2: '));
    const terceiroBimestre = parseFloat(prompt('Nota bimestre 3: '));
    const quartoBimestre = parseFloat(prompt('Nota bimestre 4: '));

    fichasAlunos.push({
      nome: nomeAluno,
      bimestres: [primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre],
    });
  }

  fichasAlunos.sort((esquerda, direita) => esquerda.nome.localeCompare(direita.nome));
  console.log('Alunos cadastrados e ordenados por nome.');
};

const pesquisarAluno = () => {
  const termoPesquisa = prompt('Nome do aluno: ');
  const ficha = fichasAlunos.find(aluno => aluno.nome.toLowerCase() === termoPesquisa.toLowerCase());

  if (ficha) {
    const mediaBimestral = calcularMedia(ficha.bimestres);
    const situacao = mediaBimestral >= 5 ? 'Aprovado' : 'Reprovado';
    console.log(`\n${ficha.nome} | Média: ${mediaBimestral.toFixed(2)} | ${situacao}`);
  } else {
    console.log('Aluno não encontrado.');
  }
};

const exibirTodos = () => {
  if (fichasAlunos.length === 0) {
    console.log('Nenhum aluno cadastrado.');
    return;
  }
  fichasAlunos.forEach((ficha) => {
    const mediaBimestral = calcularMedia(ficha.bimestres);
    const situacao = mediaBimestral >= 5 ? 'Aprovado' : 'Reprovado';
    console.log(`${ficha.nome} | Média: ${mediaBimestral.toFixed(2)} | ${situacao}`);
  });
};

let escolha;

do {
  console.log('\n=== SISTEMA ESCOLAR ===');
  console.log('1 - Cadastrar alunos');
  console.log('2 - Pesquisar aluno');
  console.log('3 - Exibir todos');
  console.log('4 - Sair');

  escolha = parseInt(prompt('Opção: '));

  switch (escolha) {
    case 1: cadastrarAlunos(); break;
    case 2: pesquisarAluno(); break;
    case 3: exibirTodos(); break;
    case 4: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (escolha !== 4);
