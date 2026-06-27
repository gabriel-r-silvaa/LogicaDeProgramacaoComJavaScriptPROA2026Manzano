const prompt = require('prompt-sync')({ sigint: true });

const gerarSerieFibonacci = (quantidadeTermos) => {
  const colecao = [];
  let antecessor = 0;
  let termoCorrente = 1;

  for (let posicao = 0; posicao < quantidadeTermos; posicao++) {
    colecao.push(termoCorrente);
    const proximo = antecessor + termoCorrente;
    antecessor = termoCorrente;
    termoCorrente = proximo;
  }

  return colecao;
};

const totalTermos = parseInt(prompt('Quantos termos de Fibonacci? '));
const serieFibonacci = gerarSerieFibonacci(totalTermos);

console.log(`Fibonacci (${totalTermos} termos): ${serieFibonacci.join(', ')}`);
