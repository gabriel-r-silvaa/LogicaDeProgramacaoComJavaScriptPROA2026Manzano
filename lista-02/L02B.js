const prompt = require('prompt-sync')({ sigint: true });

let valorDigitado = parseInt(prompt('Informe um número inteiro: '));

if (valorDigitado < 0) {
  valorDigitado = valorDigitado * -1;
}

console.log(`Módulo: ${valorDigitado}`);
