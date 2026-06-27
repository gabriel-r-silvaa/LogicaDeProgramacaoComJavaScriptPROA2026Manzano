const prompt = require('prompt-sync')({ sigint: true });

let maiorEncontrado = parseInt(prompt('1º número: '));
let menorEncontrado = maiorEncontrado;

for (let posicao = 2; posicao <= 5; posicao++) {
  const novoNumero = parseInt(prompt(`${posicao}º número: `));

  if (novoNumero > maiorEncontrado) maiorEncontrado = novoNumero;
  if (novoNumero < menorEncontrado) menorEncontrado = novoNumero;
}

console.log(`Maior valor: ${maiorEncontrado}`);
console.log(`Menor valor: ${menorEncontrado}`);
