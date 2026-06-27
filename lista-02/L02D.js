const prompt = require('prompt-sync')({ sigint: true });

const notaPrimeiroBimestre = parseFloat(prompt('Nota do 1º bimestre: '));
const notaSegundoBimestre = parseFloat(prompt('Nota do 2º bimestre: '));
const notaTerceiroBimestre = parseFloat(prompt('Nota do 3º bimestre: '));
const notaQuartoBimestre = parseFloat(prompt('Nota do 4º bimestre: '));
const mediaBimestral = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

if (mediaBimestral >= 7) {
  console.log(`Aluno APROVADO | Média: ${mediaBimestral.toFixed(2)}`);
} else {
  const notaExameFinal = parseFloat(prompt('Nota do exame final: '));
  const mediaComExame = (mediaBimestral + notaExameFinal) / 2;

  if (mediaComExame >= 5) {
    console.log(`Aluno APROVADO EM EXAME | Média final: ${mediaComExame.toFixed(2)}`);
  } else {
    console.log(`Aluno REPROVADO | Média final: ${mediaComExame.toFixed(2)}`);
  }
}
