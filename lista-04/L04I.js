const prompt = require('prompt-sync')({ sigint: true });

let maiorRegistrado = null;
let menorRegistrado = null;
let entradaAtual;

do {
  entradaAtual = parseInt(prompt('Número (negativo para encerrar): '));

  if (entradaAtual >= 0) {
    if (maiorRegistrado === null || entradaAtual > maiorRegistrado) maiorRegistrado = entradaAtual;
    if (menorRegistrado === null || entradaAtual < menorRegistrado) menorRegistrado = entradaAtual;
  }
} while (entradaAtual >= 0);

if (maiorRegistrado !== null) {
  console.log(`Maior valor: ${maiorRegistrado}`);
  console.log(`Menor valor: ${menorRegistrado}`);
} else {
  console.log('Nenhum valor positivo foi informado.');
}
