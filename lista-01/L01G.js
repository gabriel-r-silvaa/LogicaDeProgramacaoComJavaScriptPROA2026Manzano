const prompt = require('prompt-sync')({ sigint: true });

const alfa = parseInt(prompt('Primeiro número inteiro (A): '));
const beta = parseInt(prompt('Segundo número inteiro (B): '));
const gama = parseInt(prompt('Terceiro número inteiro (C): '));
const delta = parseInt(prompt('Quarto número inteiro (D): '));

console.log(`A + B = ${alfa + beta}  |  A * B = ${alfa * beta}`);
console.log(`A + C = ${alfa + gama}  |  A * C = ${alfa * gama}`);
console.log(`A + D = ${alfa + delta}  |  A * D = ${alfa * delta}`);
console.log(`B + C = ${beta + gama}  |  B * C = ${beta * gama}`);
console.log(`B + D = ${beta + delta}  |  B * D = ${beta * delta}`);
console.log(`C + D = ${gama + delta}  |  C * D = ${gama * delta}`);
