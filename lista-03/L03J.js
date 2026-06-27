let somatorioParesEncontrados = 0;
let totalDeParesEncontrados = 0;
let candidatoAtual = 50;

while (candidatoAtual <= 70) {
  if (candidatoAtual % 2 === 0) {
    somatorioParesEncontrados += candidatoAtual;
    totalDeParesEncontrados++;
  }
  candidatoAtual++;
}

const mediaDosParesEncontrados = somatorioParesEncontrados / totalDeParesEncontrados;

console.log(`Soma dos pares entre 50 e 70: ${somatorioParesEncontrados}`);
console.log(`Média dos pares entre 50 e 70: ${mediaDosParesEncontrados.toFixed(2)}`);
