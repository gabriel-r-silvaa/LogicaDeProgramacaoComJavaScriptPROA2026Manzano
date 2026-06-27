const prompt = require('prompt-sync')({ sigint: true });

const original = [];

for (let slot = 0; slot < 20; slot++) {
  original[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

const invertida = [...original].reverse();

console.log('\nA (original) vs B (invertida):');

for (let posicao = 0; posicao < 20; posicao++) {
  console.log(`A[${posicao + 1}]: ${original[posicao]}  |  B[${posicao + 1}]: ${invertida[posicao]}`);
}
