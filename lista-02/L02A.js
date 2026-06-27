const prompt = require('prompt-sync')({ sigint: true });

const primeiroInteiro = parseInt(prompt('Primeiro número inteiro: '));
const segundoInteiro = parseInt(prompt('Segundo número inteiro: '));

let diferencaMaiorMenor;

if (primeiroInteiro > segundoInteiro) {
  diferencaMaiorMenor = primeiroInteiro - segundoInteiro;
} else {
  diferencaMaiorMenor = segundoInteiro - primeiroInteiro;
}

console.log(`Diferença do maior pelo menor: ${diferencaMaiorMenor}`);
