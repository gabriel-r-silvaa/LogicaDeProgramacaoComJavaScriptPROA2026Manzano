const prompt = require('prompt-sync')({ sigint: true });

const verificarDivisibilidade = (numero) => {
  if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(`${numero} é divisível por 2 e por 3`);
  } else {
    console.log(`${numero} não é divisível por 2 e por 3 simultaneamente`);
  }
};

const candidato = parseInt(prompt('Informe um número inteiro: '));
verificarDivisibilidade(candidato);
