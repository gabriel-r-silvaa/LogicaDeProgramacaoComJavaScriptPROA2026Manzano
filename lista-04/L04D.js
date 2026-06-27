let graosNaCasaAtual = 1;
let totalGraosAcumulados = 0;
let casaDoTabuleiro = 1;

do {
  totalGraosAcumulados += graosNaCasaAtual;
  graosNaCasaAtual *= 2;
  casaDoTabuleiro++;
} while (casaDoTabuleiro <= 64);

console.log(`Total de grãos no tabuleiro: ${totalGraosAcumulados}`);
