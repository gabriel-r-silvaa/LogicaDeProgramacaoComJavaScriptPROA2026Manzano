const prompt = require('prompt-sync')({ sigint: true });

const quadradoDaSomaTripla = (primeiroValor, segundoValor, terceiroValor) => {
  return (primeiroValor + segundoValor + terceiroValor) ** 2;
};

const componenteA = parseFloat(prompt('Informe A: '));
const componenteB = parseFloat(prompt('Informe B: '));
const componenteC = parseFloat(prompt('Informe C: '));

console.log(`(A + B + C)² = ${quadradoDaSomaTripla(componenteA, componenteB, componenteC)}`);
