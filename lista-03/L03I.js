const prompt = require('prompt-sync')({ sigint: true });

let somatorioTotal = 0;
let rodada = 1;

while (rodada <= 10) {
  const valorInformado = parseFloat(prompt(`${rodada}º número: `));
  somatorioTotal += valorInformado;
  rodada++;
}

const mediaDosValores = somatorioTotal / 10;

console.log(`Somatório: ${somatorioTotal}`);
console.log(`Média aritmética: ${mediaDosValores.toFixed(2)}`);
