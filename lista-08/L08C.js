const prompt = require('prompt-sync')({ sigint: true });

const grade = Array.from({ length: 4 }, () => Array(5).fill(0));

console.log('Informe os 20 elementos (4 linhas x 5 colunas):');

for (let linha = 0; linha < 4; linha++) {
  for (let coluna = 0; coluna < 5; coluna++) {
    grade[linha][coluna] = parseFloat(prompt(`[${linha + 1}][${coluna + 1}]: `));
  }
}

console.log('\nMatriz (4x5):');

for (let linha = 0; linha < 4; linha++) {
  console.log(grade[linha].join('\t'));
}
