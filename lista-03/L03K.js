const prompt = require('prompt-sync')({ sigint: true });

let areaAcumulada = 0;
let resposta = 'SIM';

while (resposta === 'SIM') {
  const nomeCamodo = prompt('Nome do cômodo: ');
  const larguraCamodo = parseFloat(prompt('Largura (m): '));
  const comprimentoCamodo = parseFloat(prompt('Comprimento (m): '));
  const areaCamodo = larguraCamodo * comprimentoCamodo;

  areaAcumulada += areaCamodo;
  console.log(`Área de ${nomeCamodo}: ${areaCamodo.toFixed(2)} m²`);

  resposta = prompt('Calcular outro cômodo? (SIM/NAO): ').toUpperCase();
}

console.log(`Área total da residência: ${areaAcumulada.toFixed(2)} m²`);
