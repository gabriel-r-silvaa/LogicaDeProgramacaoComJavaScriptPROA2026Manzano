const prompt = require('prompt-sync')({ sigint: true });

const apenasPares = [];

for (let slot = 0; slot < 6; slot++) {
  let entrada;
  do {
    entrada = parseInt(prompt(`A[${slot + 1}] (apenas pares): `));
  } while (entrada % 2 !== 0);
  apenasPares[slot] = entrada;
}

const apenasImpares = [];

for (let slot = 0; slot < 6; slot++) {
  let entrada;
  do {
    entrada = parseInt(prompt(`B[${slot + 1}] (apenas ímpares): `));
  } while (entrada % 2 === 0);
  apenasImpares[slot] = entrada;
}

const vetorUnificado = [...apenasPares, ...apenasImpares];

console.log('\nVetor C (A pares + B ímpares, 12 elementos):');

vetorUnificado.forEach((valor, posicao) => {
  console.log(`C[${posicao + 1}]: ${valor}`);
});
