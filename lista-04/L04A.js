let numeroCorrente = 15;

console.log('Quadrados dos inteiros de 15 a 200:');

do {
  console.log(`${numeroCorrente}² = ${numeroCorrente ** 2}`);
  numeroCorrente++;
} while (numeroCorrente <= 200);
