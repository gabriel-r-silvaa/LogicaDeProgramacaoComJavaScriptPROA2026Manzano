const prompt = require('prompt-sync')({ sigint: true });

const matrizAlfa = Array.from({ length: 5 }, () => Array(3).fill(0));
const matrizBeta = Array.from({ length: 5 }, () => Array(3).fill(0));

console.log('Elementos da matriz A (5x3):');
for (let linha = 0; linha < 5; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    matrizAlfa[linha][coluna] = parseFloat(prompt(`A[${linha + 1}][${coluna + 1}]: `));
  }
}

console.log('\nElementos da matriz B (5x3):');
for (let linha = 0; linha < 5; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    matrizBeta[linha][coluna] = parseFloat(prompt(`B[${linha + 1}][${coluna + 1}]: `));
  }
}

console.log('\nMatriz C (A + B):');
for (let linha = 0; linha < 5; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    const somaElemento = matrizAlfa[linha][coluna] + matrizBeta[linha][coluna];
    console.log(`C[${linha + 1}][${coluna + 1}]: ${somaElemento}`);
  }
}
