const prompt = require('prompt-sync')({ sigint: true });

const entradaReais = [];

for (let slot = 0; slot < 15; slot++) {
  entradaReais[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

const processada = entradaReais.map((valor, indice) => {
  const indiceBase1 = indice + 1;
  return indiceBase1 % 2 === 0 ? valor / 2 : valor * 1.5;
});

console.log('\nA vs B (par: /2 | ímpar: *1.5):');

for (let slot = 0; slot < 15; slot++) {
  console.log(`A[${slot + 1}]: ${entradaReais[slot]}  |  B[${slot + 1}]: ${processada[slot]}`);
}
