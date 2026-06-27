const prompt = require('prompt-sync')({ sigint: true });

let somaFatoriais = 0;
let rodada = 1;

do {
  const numeroLido = parseInt(prompt(`${rodada}º número inteiro: `));

  let fatorialCalculada = 1;
  let fatorAtual = 1;

  do {
    fatorialCalculada *= fatorAtual;
    fatorAtual++;
  } while (fatorAtual <= numeroLido);

  somaFatoriais += fatorialCalculada;
  rodada++;
} while (rodada <= 15);

console.log(`Somatório das fatoriais: ${somaFatoriais}`);
