const prompt = require('prompt-sync')({ sigint: true });

const numeroDigitado = parseInt(prompt('Informe um número inteiro: '));

if (numeroDigitado <= 3) {
  console.log(`Número: ${numeroDigitado}`);
}
