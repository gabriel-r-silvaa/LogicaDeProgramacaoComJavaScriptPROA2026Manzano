const prompt = require('prompt-sync')({ sigint: true });

const somarSequenciaInteira = (limiteSuperior) => {
  let acumulador = 0;

  for (let numero = 1; numero <= limiteSuperior; numero++) {
    acumulador += numero;
  }

  return acumulador;
};

const quantidadeTermos = parseInt(prompt('Informe N (quantidade de termos): '));
const totalSomado = somarSequenciaInteira(quantidadeTermos);

console.log(`Somatório de 1 a ${quantidadeTermos}: ${totalSomado}`);
