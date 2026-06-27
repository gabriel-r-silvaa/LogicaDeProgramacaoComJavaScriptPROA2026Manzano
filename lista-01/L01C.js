const prompt = require('prompt-sync')({ sigint: true });

const PI = 3.14159265358979;

const raioLata = parseFloat(prompt('Raio da lata (cm): '));
const alturaLata = parseFloat(prompt('Altura da lata (cm): '));
const volumeLata = PI * raioLata ** 2 * alturaLata;

console.log(`Volume da lata: ${volumeLata.toFixed(4)} cm³`);
