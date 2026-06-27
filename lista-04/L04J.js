const prompt = require('prompt-sync')({ sigint: true });

const dividendo = parseInt(prompt('Dividendo: '));
const divisor = parseInt(prompt('Divisor: '));

if (divisor === 0) {
  console.log('Divisão por zero não é permitida.');
} else {
  let quociente = 0;
  let remanescente = dividendo;

  do {
    if (remanescente >= divisor) {
      remanescente -= divisor;
      quociente++;
    }
  } while (remanescente >= divisor);

  console.log(`${dividendo} ÷ ${divisor} = ${quociente} (quociente inteiro)`);
}
