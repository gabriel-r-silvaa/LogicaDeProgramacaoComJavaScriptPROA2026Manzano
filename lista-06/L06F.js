const prompt = require('prompt-sync')({ sigint: true });

const blocoVinte = [];
const blocoTrinta = [];

for (let slot = 0; slot < 20; slot++) {
  blocoVinte[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

for (let slot = 0; slot < 30; slot++) {
  blocoTrinta[slot] = parseFloat(prompt(`B[${slot + 1}]: `));
}

const uniaoCompleta = [...blocoVinte, ...blocoTrinta];

console.log('\nVetor C (A + B, 50 elementos):');

uniaoCompleta.forEach((valor, posicao) => {
  console.log(`C[${posicao + 1}]: ${valor}`);
});
