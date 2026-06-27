const prompt = require('prompt-sync')({ sigint: true });

const calcularFatorial = (numero) => {
  let produto = 1;

  for (let fator = 1; fator <= numero; fator++) {
    produto *= fator;
  }

  return produto;
};

const numeroEscolhido = parseInt(prompt('Número para calcular o fatorial: '));

console.log(`${numeroEscolhido}! = ${calcularFatorial(numeroEscolhido)}`);
