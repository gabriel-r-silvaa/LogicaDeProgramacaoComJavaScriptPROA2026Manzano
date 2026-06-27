const prompt = require('prompt-sync')({ sigint: true });

const base = parseInt(prompt('Informe a base (B): '));
const expoente = parseInt(prompt('Informe o expoente (E): '));

let potencia = 1;
let etapa = 1;

while (etapa <= expoente) {
  potencia *= base;
  etapa++;
}

console.log(`${base}^${expoente} = ${potencia}`);
