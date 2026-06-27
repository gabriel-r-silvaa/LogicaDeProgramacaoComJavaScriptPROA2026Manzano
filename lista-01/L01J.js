const prompt = require('prompt-sync')({ sigint: true });

const cotacaoDolar = parseFloat(prompt('Cotação do dólar (R$): '));
const saldoEmDolares = parseFloat(prompt('Quantidade de dólares: US$ '));
const equivalenteEmReais = saldoEmDolares * cotacaoDolar;

console.log(`US$ ${saldoEmDolares.toFixed(2)} = R$ ${equivalenteEmReais.toFixed(2)}`);
