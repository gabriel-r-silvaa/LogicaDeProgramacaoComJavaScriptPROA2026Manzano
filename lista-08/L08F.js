const prompt = require('prompt-sync')({ sigint: true });

const matrizOrigem = Array.from({ length: 7 }, () => Array(7).fill(0));

console.log('Informe os elementos da matriz A (7x7):');

for (let linha = 0; linha < 7; linha++) {
  for (let coluna = 0; coluna < 7; coluna++) {
    matrizOrigem[linha][coluna] = parseInt(prompt(`A[${linha + 1}][${coluna + 1}]: `));
  }
}

const calcularFatorial = (n) => {
  let produto = 1;
  for (let fator = 1; fator <= n; fator++) {
    produto *= fator;
  }
  return produto;
};

const matrizDerivada = Array.from({ length: 7 }, (_, linha) =>
  Array.from({ length: 7 }, (__, coluna) => {
    const ehDiagonalPrincipal = linha === coluna;
    const ehPosicaoImpar = (linha + 1) % 2 !== 0;

    if (ehDiagonalPrincipal && ehPosicaoImpar) {
      return calcularFatorial(matrizOrigem[linha][coluna]);
    }
    return matrizOrigem[linha][coluna] + (linha + 1) + (coluna + 1);
  })
);

console.log('\nMatriz A vs Matriz B:');

for (let linha = 0; linha < 7; linha++) {
  for (let coluna = 0; coluna < 7; coluna++) {
    console.log(`A[${linha + 1}][${coluna + 1}]: ${matrizOrigem[linha][coluna]}  |  B[${linha + 1}][${coluna + 1}]: ${matrizDerivada[linha][coluna]}`);
  }
}
