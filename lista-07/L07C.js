const prompt = require('prompt-sync')({ sigint: true });

const dadosBrutos = [];

for (let slot = 0; slot < 15; slot++) {
  dadosBrutos[slot] = parseInt(prompt(`A[${slot + 1}]: `));
}

const metadesInteiras = dadosBrutos.map(numero => Math.floor(numero / 2));

const ordenadoDecrescente = [...dadosBrutos].sort((x, y) => y - x);
const ordenadoCrescente = [...metadesInteiras].sort((x, y) => x - y);

console.log('\nA (decrescente) | B (crescente):');

for (let posicao = 0; posicao < 15; posicao++) {
  console.log(`A[${posicao + 1}]: ${ordenadoDecrescente[posicao]}  |  B[${posicao + 1}]: ${ordenadoCrescente[posicao]}`);
}
