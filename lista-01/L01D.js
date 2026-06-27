const prompt = require('prompt-sync')({ sigint: true });

const RENDIMENTO_POR_LITRO = 12;

const horasViagem = parseFloat(prompt('Tempo de viagem (horas): '));
const velocidadeMedia = parseFloat(prompt('Velocidade média (km/h): '));
const quilometragemPercorrida = horasViagem * velocidadeMedia;
const litrosConsumidos = quilometragemPercorrida / RENDIMENTO_POR_LITRO;

console.log(`Velocidade média: ${velocidadeMedia} km/h`);
console.log(`Tempo de viagem: ${horasViagem} h`);
console.log(`Distância percorrida: ${quilometragemPercorrida} km`);
console.log(`Combustível utilizado: ${litrosConsumidos.toFixed(2)} litros`);
