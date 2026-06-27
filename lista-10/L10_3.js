const prompt = require('prompt-sync')({ sigint: true });

const TOTAL_PESSOAS = 15;
const cadastro = [];

const registrarPessoas = (lista, total) => {
  for (let posicao = 0; posicao < total; posicao++) {
    const nome = prompt(`Nome da ${posicao + 1}ª pessoa: `);
    const altura = parseFloat(prompt('Altura (m): '));
    lista.push({ nome, altura });
  }
  console.log('Cadastro finalizado.');
};

const filtrarPorAltura = (lista, condicao) => {
  lista.filter(condicao).forEach(p => console.log(`${p.nome} — ${p.altura}m`));
};

const exibirMediaAlturas = (lista) => {
  if (lista.length === 0) { console.log('Sem registros.'); return; }
  const soma = lista.reduce((acc, p) => acc + p.altura, 0);
  console.log(`Média das alturas: ${(soma / lista.length).toFixed(2)}m`);
};

let opcao;

do {
  console.log('\n=== ALTURAS (top-down) ===');
  console.log('1-Cadastrar  2-<=1.5m  3->1.5m  4-Entre 1.5 e 2.0m  5-Média  6-Sair');
  opcao = parseInt(prompt('Opção: '));

  switch (opcao) {
    case 1: registrarPessoas(cadastro, TOTAL_PESSOAS); break;
    case 2: filtrarPorAltura(cadastro, p => p.altura <= 1.5); break;
    case 3: filtrarPorAltura(cadastro, p => p.altura > 1.5); break;
    case 4: filtrarPorAltura(cadastro, p => p.altura > 1.5 && p.altura < 2.0); break;
    case 5: exibirMediaAlturas(cadastro); break;
    case 6: console.log('Encerrando...'); break;
    default: console.log('Opção inválida.');
  }
} while (opcao !== 6);
