const prompt = require('prompt-sync')({ sigint: true });

const elevarAPotencia = (base, expoente) => {
  let resultado = 1;

  for (let etapa = 1; etapa <= expoente; etapa++) {
    resultado *= base;
  }

  return resultado;
};

const baseEscolhida = parseFloat(prompt('Informe a base (B): '));
const expoenteEscolhido = parseInt(prompt('Informe o expoente (E): '));

console.log(`${baseEscolhida}^${expoenteEscolhido} = ${elevarAPotencia(baseEscolhida, expoenteEscolhido)}`);
