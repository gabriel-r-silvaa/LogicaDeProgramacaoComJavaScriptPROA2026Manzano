const prompt = require('prompt-sync')({ sigint: true });

const potenciacao = (base, expoente) => {
  let acumulado = 1;

  for (let etapa = 1; etapa <= expoente; etapa++) {
    acumulado *= base;
  }

  return acumulado;
};

const baseEscolhida = parseFloat(prompt('Informe a base: '));
const expoenteEscolhido = parseInt(prompt('Informe o expoente: '));

console.log(`${baseEscolhida}^${expoenteEscolhido} = ${potenciacao(baseEscolhida, expoenteEscolhido)}`);
