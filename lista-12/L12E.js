const prompt = require('prompt-sync')({ sigint: true });

const conversorDolarReal = (taxaCambio, saldoEmDolares) => {
  return saldoEmDolares * taxaCambio;
};

const taxaHoje = parseFloat(prompt('Cotação do dólar: R$ '));
const carteiraEmDolares = parseFloat(prompt('Quantidade de dólares: US$ '));

const equivalenteEmReais = conversorDolarReal(taxaHoje, carteiraEmDolares);

console.log(`US$ ${carteiraEmDolares.toFixed(2)} = R$ ${equivalenteEmReais.toFixed(2)}`);
