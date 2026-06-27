const prompt = require('prompt-sync')({ sigint: true });

let maiorRegistrado = null;
let menorRegistrado = null;
let entradaAtual = parseInt(prompt('Número positivo (negativo para encerrar): '));

while (entradaAtual >= 0) {
  if (maiorRegistrado === null || entradaAtual > maiorRegistrado) maiorRegistrado = entradaAtual;
  if (menorRegistrado === null || entradaAtual < menorRegistrado) menorRegistrado = entradaAtual;

  entradaAtual = parseInt(prompt('Número positivo (negativo para encerrar): '));
}

console.log(`Maior valor informado: ${maiorRegistrado}`);
console.log(`Menor valor informado: ${menorRegistrado}`);
