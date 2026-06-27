const prompt = require('prompt-sync')({ sigint: true });

const quadrado = Array.from({ length: 4 }, () => Array(4).fill(0));

console.log('Informe os elementos da matriz A (4x4):');

for (let linha = 0; linha < 4; linha++) {
  for (let coluna = 0; coluna < 4; coluna++) {
    quadrado[linha][coluna] = parseInt(prompt(`A[${linha + 1}][${coluna + 1}]: `));
  }
}

let quantidadePares = 0;

for (let linha = 0; linha < 4; linha++) {
  for (let coluna = 0; coluna < 4; coluna++) {
    if (quadrado[linha][coluna] % 2 === 0) {
      quantidadePares++;
    }
  }
}

console.log(`\nTotal de elementos pares na matriz: ${quantidadePares}`);
