const prompt = require('prompt-sync')({ sigint: true });

const componenteA = parseFloat(prompt('Valor de A: '));
const componenteB = parseFloat(prompt('Valor de B: '));
const componenteC = parseFloat(prompt('Valor de C: '));
const quadradoDaSoma = (componenteA + componenteB + componenteC) ** 2;

console.log(`(A + B + C)² = ${quadradoDaSoma}`);
