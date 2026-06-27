const prompt = require('prompt-sync')({ sigint: true });

const retangulo = Array.from({ length: 10 }, () => Array(7).fill(0));

console.log('Informe os elementos da matriz A (10x7):');

for (let linha = 0; linha < 10; linha++) {
  for (let coluna = 0; coluna < 7; coluna++) {
    retangulo[linha][coluna] = parseInt(prompt(`A[${linha + 1}][${coluna + 1}]: `));
  }
}

let contadorPares = 0;
let contadorImpares = 0;
const totalElementos = 10 * 7;

for (let linha = 0; linha < 10; linha++) {
  for (let coluna = 0; coluna < 7; coluna++) {
    if (retangulo[linha][coluna] % 2 === 0) {
      contadorPares++;
    } else {
      contadorImpares++;
    }
  }
}

const percentualPares = (contadorPares / totalElementos) * 100;
const percentualImpares = (contadorImpares / totalElementos) * 100;

console.log(`\nElementos pares: ${contadorPares} (${percentualPares.toFixed(1)}%)`);
console.log(`Elementos ímpares: ${contadorImpares} (${percentualImpares.toFixed(1)}%)`);
