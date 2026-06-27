const prompt = require('prompt-sync')({ sigint: true });

const componenteA = parseFloat(prompt('Valor de A: '));
const componenteB = parseFloat(prompt('Valor de B: '));
const componenteC = parseFloat(prompt('Valor de C: '));
const somaDosQuadrados = componenteA ** 2 + componenteB ** 2 + componenteC ** 2;

console.log(`A² + B² + C² = ${somaDosQuadrados}`);
