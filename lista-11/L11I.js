const prompt = require('prompt-sync')({ sigint: true });

const garantirPositivo = (numero) => {
  if (numero < 0) {
    return numero * -1;
  }
  return numero;
};

const entradaUsuario = parseFloat(prompt('Informe um número (positivo ou negativo): '));
const valorPositivo = garantirPositivo(entradaUsuario);

console.log(`Valor positivo: ${valorPositivo}`);
