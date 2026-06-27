const prompt = require('prompt-sync')({ sigint: true });

const numeroDaTabuada = parseInt(prompt('Número para a tabuada: '));
let multiplicador = 1;

while (multiplicador <= 10) {
  console.log(`${numeroDaTabuada} x ${multiplicador} = ${numeroDaTabuada * multiplicador}`);
  multiplicador++;
}
