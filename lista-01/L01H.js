const prompt = require('prompt-sync')({ sigint: true });

const comprimentoCaixa = parseFloat(prompt('Comprimento (cm): '));
const larguraCaixa = parseFloat(prompt('Largura (cm): '));
const alturaCaixa = parseFloat(prompt('Altura (cm): '));
const volumeCaixa = comprimentoCaixa * larguraCaixa * alturaCaixa;

console.log(`Volume da caixa retangular: ${volumeCaixa.toFixed(4)} cm³`);
