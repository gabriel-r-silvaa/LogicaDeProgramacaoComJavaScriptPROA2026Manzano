const prompt = require('prompt-sync')({ sigint: true });

const notaPrimeiroBimestre = parseFloat(prompt('Nota do 1º bimestre: '));
const notaSegundoBimestre = parseFloat(prompt('Nota do 2º bimestre: '));
const notaTerceiroBimestre = parseFloat(prompt('Nota do 3º bimestre: '));
const notaQuartoBimestre = parseFloat(prompt('Nota do 4º bimestre: '));
const mediaBimestral = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

if (mediaBimestral >= 5) {
  console.log(`Aluno APROVADO | Média: ${mediaBimestral.toFixed(2)}`);
} else {
  console.log(`Aluno REPROVADO | Média: ${mediaBimestral.toFixed(2)}`);
}
