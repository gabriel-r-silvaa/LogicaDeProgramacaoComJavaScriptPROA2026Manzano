let numeroImpar = 1;

do {
  let fatorialImpar = 1;
  let fatorAtual = 1;

  do {
    fatorialImpar *= fatorAtual;
    fatorAtual++;
  } while (fatorAtual <= numeroImpar);

  console.log(`${numeroImpar}! = ${fatorialImpar}`);
  numeroImpar += 2;
} while (numeroImpar <= 10);
