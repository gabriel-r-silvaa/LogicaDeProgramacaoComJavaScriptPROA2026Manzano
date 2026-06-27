const prompt = require('prompt-sync')({ sigint: true });

const baseOriginal = [];

for (let slot = 0; slot < 8; slot++) {
  baseOriginal[slot] = parseFloat(prompt(`A[${slot + 1}]: `));
}

const quintuplicado = baseOriginal.map(valor => valor * 5);

const alvoBuscado = parseFloat(prompt('\nValor a pesquisar em B: '));

let posicaoEncontrada = -1;
let percurso = 0;

while (percurso < quintuplicado.length && posicaoEncontrada === -1) {
  if (quintuplicado[percurso] === alvoBuscado) {
    posicaoEncontrada = percurso;
  }
  percurso++;
}

if (posicaoEncontrada !== -1) {
  console.log(`Valor ${alvoBuscado} encontrado em B[${posicaoEncontrada + 1}]`);
} else {
  console.log(`Valor ${alvoBuscado} não encontrado na matriz B`);
}
