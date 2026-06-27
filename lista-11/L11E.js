const prompt = require('prompt-sync')({ sigint: true });

const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    console.log(`${numero} é PAR`);
  } else {
    console.log(`${numero} é ÍMPAR`);
  }
};

const numeroDigitado = parseInt(prompt('Informe um número inteiro: '));
verificarParidade(numeroDigitado);
