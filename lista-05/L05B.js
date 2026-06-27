const prompt = require('prompt-sync')({ sigint: true });

const numeroDaTabuada = parseInt(prompt('Número para a tabuada: '));

for (let fator = 1; fator <= 10; fator++) {
  console.log(`${numeroDaTabuada} x ${fator} = ${numeroDaTabuada * fator}`);
}
