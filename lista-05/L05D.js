let somaParesEncontrados = 0;

for (let candidato = 1; candidato <= 500; candidato++) {
  if (candidato % 2 === 0) {
    somaParesEncontrados += candidato;
  }
}

console.log(`Somatório dos pares de 1 a 500: ${somaParesEncontrados}`);
