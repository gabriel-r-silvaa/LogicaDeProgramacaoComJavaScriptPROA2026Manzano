const prompt = require('prompt-sync')({ sigint: true });

const registros = [];

for (let slot = 0; slot < 12; slot++) {
  registros[slot] = parseFloat(prompt(`Elemento [${slot + 1}]: `));
}

for (let passagem = 0; passagem < registros.length - 1; passagem++) {
  for (let comparacao = 0; comparacao < registros.length - 1 - passagem; comparacao++) {
    if (registros[comparacao] < registros[comparacao + 1]) {
      const temporario = registros[comparacao];
      registros[comparacao] = registros[comparacao + 1];
      registros[comparacao + 1] = temporario;
    }
  }
}

console.log('\nElementos em ordem decrescente:');

registros.forEach((valor, posicao) => {
  console.log(`[${posicao + 1}]: ${valor}`);
});
