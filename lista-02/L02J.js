const prompt = require('prompt-sync')({ sigint: true });

const numeroDigitado = parseInt(prompt('Informe um número entre 1 e 9: '));

if (numeroDigitado >= 1 && numeroDigitado <= 9) {
  console.log('O valor está na faixa permitida');
} else {
  console.log('O valor está fora da faixa permitida');
}
