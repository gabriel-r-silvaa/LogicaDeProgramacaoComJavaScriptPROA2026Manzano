const prompt = require('prompt-sync')({ sigint: true });

const sequenciaBase = [];

for (let slot = 0; slot < 15; slot++) {
  sequenciaBase[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

const quadrados = sequenciaBase.map(numero => numero ** 2);

console.log('\nA vs B (quadrados):');

for (let slot = 0; slot < 15; slot++) {
  console.log(`A[${slot + 1}]: ${sequenciaBase[slot]}  |  B[${slot + 1}]: ${quadrados[slot]}`);
}
