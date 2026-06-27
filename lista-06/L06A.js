const prompt = require('prompt-sync')({ sigint: true });

const colecaoNumerica = [];

for (let posicao = 0; posicao < 10; posicao++) {
  colecaoNumerica[posicao] = parseFloat(prompt(`Elemento [${posicao + 1}]: `));
}

console.log('\nElementos informados:');

for (let posicao = 0; posicao < 10; posicao++) {
  console.log(`[${posicao + 1}]: ${colecaoNumerica[posicao]}`);
}
