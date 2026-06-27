const prompt = require('prompt-sync')({ sigint: true });

const numeroDigitado = parseInt(prompt('Informe um número inteiro: '));

if (numeroDigitado % 2 === 0) {
  console.log(`${numeroDigitado} é PAR`);
} else {
  console.log(`${numeroDigitado} é ÍMPAR`);
}
