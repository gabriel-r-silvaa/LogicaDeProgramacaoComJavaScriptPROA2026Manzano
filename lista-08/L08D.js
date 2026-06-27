const prompt = require('prompt-sync')({ sigint: true });

const entradas = [];

for (let slot = 0; slot < 10; slot++) {
  entradas[slot] = parseInt(prompt(`A[${slot + 1}]: `));
}

const calcularFatorial = (n) => {
  let produto = 1;
  for (let fator = 1; fator <= n; fator++) {
    produto *= fator;
  }
  return produto;
};

console.log('\nMatriz C:');
console.log('Posição  | A+5    | fat(A)   | A²');

for (let slot = 0; slot < 10; slot++) {
  const colUm = entradas[slot] + 5;
  const colDois = calcularFatorial(entradas[slot]);
  const colTres = entradas[slot] ** 2;
  console.log(`C[${slot + 1}]    | ${colUm}     | ${colDois}        | ${colTres}`);
}
