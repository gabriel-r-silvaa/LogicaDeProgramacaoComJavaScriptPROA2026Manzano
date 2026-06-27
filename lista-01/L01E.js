const prompt = require('prompt-sync')({ sigint: true });

const valorOriginal = parseFloat(prompt('Valor da prestação: R$ '));
const taxaJuros = parseFloat(prompt('Taxa de juros (%): '));
const diasAtraso = parseInt(prompt('Dias em atraso: '));
const prestacaoAtrasada = valorOriginal + (valorOriginal * taxaJuros / 100) * diasAtraso;

console.log(`Prestação em atraso: R$ ${prestacaoAtrasada.toFixed(2)}`);
