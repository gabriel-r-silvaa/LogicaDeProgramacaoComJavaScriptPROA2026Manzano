let expoente = 0;

while (expoente <= 15) {
  let resultado = 1;
  let contadorMultiplicacoes = 1;

  while (contadorMultiplicacoes <= expoente) {
    resultado *= 3;
    contadorMultiplicacoes++;
  }

  console.log(`3^${expoente} = ${resultado}`);
  expoente++;
}
