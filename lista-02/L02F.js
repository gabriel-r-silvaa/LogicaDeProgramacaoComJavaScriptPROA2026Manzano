const prompt = require('prompt-sync')({ sigint: true });

let posicaoBaixa = parseFloat(prompt('Valor de A: '));
let posicaoMedia = parseFloat(prompt('Valor de B: '));
let posicaoAlta = parseFloat(prompt('Valor de C: '));
let auxiliar;

if (posicaoBaixa > posicaoMedia) {
  auxiliar = posicaoBaixa;
  posicaoBaixa = posicaoMedia;
  posicaoMedia = auxiliar;
}

if (posicaoBaixa > posicaoAlta) {
  auxiliar = posicaoBaixa;
  posicaoBaixa = posicaoAlta;
  posicaoAlta = auxiliar;
}

if (posicaoMedia > posicaoAlta) {
  auxiliar = posicaoMedia;
  posicaoMedia = posicaoAlta;
  posicaoAlta = auxiliar;
}

console.log(`Ordem crescente: ${posicaoBaixa}, ${posicaoMedia}, ${posicaoAlta}`);
