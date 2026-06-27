let indiceVerificacao = 1;
let acumuladorPares = 0;

do {
  if (indiceVerificacao % 2 === 0) {
    acumuladorPares += indiceVerificacao;
  }
  indiceVerificacao++;
} while (indiceVerificacao <= 500);

console.log(`Somatório dos pares de 1 a 500: ${acumuladorPares}`);
