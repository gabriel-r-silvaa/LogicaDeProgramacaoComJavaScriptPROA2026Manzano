const prompt = require('prompt-sync')({ sigint: true });

const sequenciaUm = [];
const sequenciaDois = [];

for (let posicao = 0; posicao < 7; posicao++) {
  sequenciaUm[posicao] = parseFloat(prompt(`A[${posicao + 1}]: `));
}

for (let posicao = 0; posicao < 7; posicao++) {
  sequenciaDois[posicao] = parseFloat(prompt(`B[${posicao + 1}]: `));
}

console.log('\nMatriz C (col1 = A | col2 = B):');

for (let linha = 0; linha < 7; linha++) {
  console.log(`C[${linha + 1}][1]: ${sequenciaUm[linha]}  |  C[${linha + 1}][2]: ${sequenciaDois[linha]}`);
}
