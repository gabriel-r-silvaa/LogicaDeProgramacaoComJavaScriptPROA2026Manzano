const prompt = require('prompt-sync')({ sigint: true });

const calcularPrestacaoAtrasada = (valorBase, taxaPercentual, tempoDecorrido) => {
  return valorBase + (valorBase * (taxaPercentual / 100) * tempoDecorrido);
};

const valorPrestacao = parseFloat(prompt('Valor da prestação: R$ '));
const taxaJurosMensais = parseFloat(prompt('Taxa de juros (%): '));
const diasEmAtraso = parseInt(prompt('Dias em atraso: '));

const totalComJuros = calcularPrestacaoAtrasada(valorPrestacao, taxaJurosMensais, diasEmAtraso);

console.log(`Prestação em atraso: R$ ${totalComJuros.toFixed(2)}`);
