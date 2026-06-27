const prompt = require('prompt-sync')({ sigint: true });

const tercoAlfa = [];
const tercoBeta = [];
const tercoGama = [];

for (let slot = 0; slot < 5; slot++) {
  tercoAlfa[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

for (let slot = 0; slot < 5; slot++) {
  tercoBeta[slot] = parseFloat(prompt(`B[${slot + 1}]: `));
}

for (let slot = 0; slot < 5; slot++) {
  tercoGama[slot] = parseFloat(prompt(`C[${slot + 1}]: `));
}

const uniaoTripla = [...tercoAlfa, ...tercoBeta, ...tercoGama];

console.log('\nVetor D (A + B + C, 15 elementos):');

uniaoTripla.forEach((valor, posicao) => {
  console.log(`D[${posicao + 1}]: ${valor}`);
});
