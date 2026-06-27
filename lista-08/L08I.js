const prompt = require('prompt-sync')({ sigint: true });

const turma = [];

for (let estudante = 0; estudante < 5; estudante++) {
  const nomeEstudante = prompt(`Nome do ${estudante + 1}º aluno: `);
  const primeiroSemestre = parseFloat(prompt('Nota do 1º semestre: '));
  const segundoSemestre = parseFloat(prompt('Nota do 2º semestre: '));
  const mediaSemestral = (primeiroSemestre + segundoSemestre) / 2;

  turma.push({ nome: nomeEstudante, notaUm: primeiroSemestre, notaDois: segundoSemestre, media: mediaSemestral });
}

for (let passagem = 0; passagem < turma.length - 1; passagem++) {
  for (let comparacao = 0; comparacao < turma.length - 1 - passagem; comparacao++) {
    if (turma[comparacao].media > turma[comparacao + 1].media) {
      const temporario = turma[comparacao];
      turma[comparacao] = turma[comparacao + 1];
      turma[comparacao + 1] = temporario;
    }
  }
}

console.log('\nAlunos ordenados por média (crescente):');

turma.forEach((estudante, posicao) => {
  console.log(`${posicao + 1}. ${estudante.nome} — Média: ${estudante.media.toFixed(2)}`);
});
