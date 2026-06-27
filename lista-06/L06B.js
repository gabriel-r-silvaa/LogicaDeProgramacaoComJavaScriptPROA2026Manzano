const prompt = require('prompt-sync')({ sigint: true });

const vetorOrigem = [];

for (let indice = 0; indice < 8; indice++) {
  vetorOrigem[indice] = parseFloat(prompt(`A[${indice + 1}]: `));
}

const vetorTriplicado = vetorOrigem.map(elemento => elemento * 3);

console.log('\nVetor B (A[i] * 3):');

for (let indice = 0; indice < 8; indice++) {
  console.log(`B[${indice + 1}]: ${vetorTriplicado[indice]}`);
}
