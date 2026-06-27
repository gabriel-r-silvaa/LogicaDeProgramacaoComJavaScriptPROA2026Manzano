const prompt = require('prompt-sync')({ sigint: true });

const primeiroInteiro = parseInt(prompt('Primeiro número inteiro (A): '));
const segundoInteiro = parseInt(prompt('Segundo número inteiro (B): '));
const quadradoDaDiferenca = (primeiroInteiro - segundoInteiro) ** 2;

console.log(`(${primeiroInteiro} - ${segundoInteiro})² = ${quadradoDaDiferenca}`);
