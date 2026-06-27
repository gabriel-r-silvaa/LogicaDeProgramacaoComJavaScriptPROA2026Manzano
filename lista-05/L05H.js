const prompt = require('prompt-sync')({ sigint: true });

const base = parseInt(prompt('Informe a base (B): '));
const expoente = parseInt(prompt('Informe o expoente (E): '));

let potencia = 1;

for (let iteracao = 1; iteracao <= expoente; iteracao++) {
  potencia *= base;
}

console.log(`${base}^${expoente} = ${potencia}`);
