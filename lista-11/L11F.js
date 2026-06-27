const prompt = require('prompt-sync')({ sigint: true });

const somarQuadradosDeTres = (primeiroValor, segundoValor, terceiroValor) => {
  return primeiroValor ** 2 + segundoValor ** 2 + terceiroValor ** 2;
};

const componenteA = parseFloat(prompt('Informe A: '));
const componenteB = parseFloat(prompt('Informe B: '));
const componenteC = parseFloat(prompt('Informe C: '));

console.log(`A² + B² + C² = ${somarQuadradosDeTres(componenteA, componenteB, componenteC)}`);
