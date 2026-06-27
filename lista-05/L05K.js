console.log('Fatorial dos ímpares de 1 a 10:');

for (let candidato = 1; candidato <= 10; candidato += 2) {
  let fatorialCalculada = 1;

  for (let fator = 1; fator <= candidato; fator++) {
    fatorialCalculada *= fator;
  }

  console.log(`${candidato}! = ${fatorialCalculada}`);
}
