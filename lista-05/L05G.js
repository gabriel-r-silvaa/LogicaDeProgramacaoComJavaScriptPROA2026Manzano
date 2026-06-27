console.log('Potências de 3 (expoente 0 a 15):');

for (let expoente = 0; expoente <= 15; expoente++) {
  let resultado = 1;

  for (let passo = 1; passo <= expoente; passo++) {
    resultado *= 3;
  }

  console.log(`3^${expoente} = ${resultado}`);
}
