const prompt = require('prompt-sync')({ sigint: true });

const converterDolarParaReal = (cotacao, saldoDolares) => {
  return saldoDolares * cotacao;
};

const cotacaoAtual = parseFloat(prompt('Cotação do dólar: R$ '));
const carteiraEmDolares = parseFloat(prompt('Quantidade de dólares: US$ '));

const equivalenteEmReais = converterDolarParaReal(cotacaoAtual, carteiraEmDolares);

console.log(`US$ ${carteiraEmDolares.toFixed(2)} = R$ ${equivalenteEmReais.toFixed(2)}`);
