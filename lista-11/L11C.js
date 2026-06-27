const prompt = require('prompt-sync')({ sigint: true });

const exibirFibonacci = (quantidadeTermos) => {
  let antecessor = 0;
  let termoCorrente = 1;

  console.log(`Fibonacci (${quantidadeTermos} termos):`);

  for (let ordem = 1; ordem <= quantidadeTermos; ordem++) {
    console.log(termoCorrente);
    const proximo = antecessor + termoCorrente;
    antecessor = termoCorrente;
    termoCorrente = proximo;
  }
};

const totalDeTermos = parseInt(prompt('Quantos termos de Fibonacci? '));
exibirFibonacci(totalDeTermos);
