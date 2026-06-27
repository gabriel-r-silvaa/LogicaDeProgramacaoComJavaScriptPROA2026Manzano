const prompt = require('prompt-sync')({ sigint: true });

const aplicarJurosAtraso = (valorBase, taxaJuros, tempoDecorrido) => {
  return valorBase + (valorBase * (taxaJuros / 100) * tempoDecorrido);
};

const valorDaPrestacao = parseFloat(prompt('Valor da prestação: R$ '));
const percentualTaxa = parseFloat(prompt('Taxa de juros (%): '));
const mesesEmAtraso = parseInt(prompt('Tempo em atraso (meses): '));

const debitoAtualizado = aplicarJurosAtraso(valorDaPrestacao, percentualTaxa, mesesEmAtraso);

console.log(`Valor atualizado com juros: R$ ${debitoAtualizado.toFixed(2)}`);
