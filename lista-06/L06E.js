const prompt = require('prompt-sync')({ sigint: true });

const primeiraMetade = [];
const segundaMetade = [];

for (let slot = 0; slot < 15; slot++) {
  primeiraMetade[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

for (let slot = 0; slot < 15; slot++) {
  segundaMetade[slot] = parseFloat(prompt(`B[${slot + 1}]: `));
}

const conjuntoUnido = [...primeiraMetade, ...segundaMetade];

console.log('\nVetor C (A + B, 30 elementos):');

conjuntoUnido.forEach((valor, posicao) => {
  console.log(`C[${posicao + 1}]: ${valor}`);
});
