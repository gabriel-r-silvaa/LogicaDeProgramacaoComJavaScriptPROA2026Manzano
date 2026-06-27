const prompt = require('prompt-sync')({ sigint: true });

let totalSomados = 0;
let quantidadeLida = 0;
let entradaAtual;

do {
  entradaAtual = parseFloat(prompt('Número (negativo para encerrar): '));

  if (entradaAtual >= 0) {
    totalSomados += entradaAtual;
    quantidadeLida++;
  }
} while (entradaAtual >= 0);

console.log(`Total de valores lidos: ${quantidadeLida}`);
console.log(`Somatório: ${totalSomados}`);

if (quantidadeLida > 0) {
  console.log(`Média: ${(totalSomados / quantidadeLida).toFixed(2)}`);
} else {
  console.log('Nenhum valor positivo informado.');
}
