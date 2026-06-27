const prompt = require('prompt-sync')({ sigint: true });

const primeiroNumero = parseInt(prompt('1º número inteiro: '));
const segundoNumero = parseInt(prompt('2º número inteiro: '));
const terceiroNumero = parseInt(prompt('3º número inteiro: '));
const quartoNumero = parseInt(prompt('4º número inteiro: '));

const candidatos = [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero];

candidatos.forEach((numero, indice) => {
  if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(`${numero} (${indice + 1}º) é divisível por 2 e por 3`);
  }
});
