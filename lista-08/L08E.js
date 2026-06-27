const prompt = require('prompt-sync')({ sigint: true });

const tabuleiro = Array.from({ length: 10 }, () => Array(10).fill(0));

console.log('Informe os elementos da matriz A (10x10):');

for (let linha = 0; linha < 10; linha++) {
  for (let coluna = 0; coluna < 10; coluna++) {
    tabuleiro[linha][coluna] = parseFloat(prompt(`A[${linha + 1}][${coluna + 1}]: `));
  }
}

let somaDiagonalPrincipal = 0;

for (let eixo = 0; eixo < 10; eixo++) {
  somaDiagonalPrincipal += tabuleiro[eixo][eixo];
}

console.log(`\nSomatório da diagonal principal: ${somaDiagonalPrincipal}`);
