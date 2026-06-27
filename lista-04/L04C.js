let sequencia = 1;

console.log('Números divisíveis por 4 menores que 200:');

do {
  if (sequencia % 4 === 0) {
    console.log(sequencia);
  }
  sequencia++;
} while (sequencia < 200);
