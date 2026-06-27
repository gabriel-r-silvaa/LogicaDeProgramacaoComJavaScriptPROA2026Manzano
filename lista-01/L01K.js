const prompt = require('prompt-sync')({ sigint: true });

const cotacaoDolar = parseFloat(prompt('Cotação do dólar (R$): '));
const saldoEmReais = parseFloat(prompt('Quantidade de reais: R$ '));
const equivalenteEmDolares = saldoEmReais / cotacaoDolar;

console.log(`R$ ${saldoEmReais.toFixed(2)} = US$ ${equivalenteEmDolares.toFixed(2)}`);
