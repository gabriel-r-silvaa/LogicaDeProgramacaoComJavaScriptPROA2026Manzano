const prompt = require('prompt-sync')({ sigint: true });

const grupoAlfa = [];
const grupoBeta = [];

for (let posicao = 0; posicao < 20; posicao++) {
  grupoAlfa[posicao] = parseFloat(prompt(`A[${posicao + 1}]: `));
}

for (let posicao = 0; posicao < 20; posicao++) {
  grupoBeta[posicao] = parseFloat(prompt(`B[${posicao + 1}]: `));
}

const diferencas = grupoAlfa.map((valor, posicao) => valor - grupoBeta[posicao]);

console.log('\nVetor C (A - B):');

for (let posicao = 0; posicao < 20; posicao++) {
  console.log(`C[${posicao + 1}]: ${diferencas[posicao]}`);
}
