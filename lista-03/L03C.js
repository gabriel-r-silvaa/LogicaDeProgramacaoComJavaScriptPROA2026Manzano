let somaDosPares = 0;
let candidato = 1;

while (candidato <= 500) {
  if (candidato % 2 === 0) {
    somaDosPares += candidato;
  }
  candidato++;
}

console.log(`Somatório dos pares de 1 a 500: ${somaDosPares}`);
