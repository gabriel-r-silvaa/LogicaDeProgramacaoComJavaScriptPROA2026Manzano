const prompt = require('prompt-sync')({ sigint: true });

const coeficienteA = parseFloat(prompt('Coeficiente A (diferente de zero): '));
const coeficienteB = parseFloat(prompt('Coeficiente B: '));
const coeficienteC = parseFloat(prompt('Coeficiente C: '));

if (coeficienteA === 0) {
  console.log('O coeficiente A não pode ser zero.');
} else {
  const discriminante = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;

  if (discriminante < 0) {
    console.log('Equação sem raízes reais (discriminante negativo).');
  } else {
    const raizUm = (-coeficienteB + Math.sqrt(discriminante)) / (2 * coeficienteA);
    const raizDois = (-coeficienteB - Math.sqrt(discriminante)) / (2 * coeficienteA);

    console.log(`X1 = ${raizUm.toFixed(4)}`);
    console.log(`X2 = ${raizDois.toFixed(4)}`);
  }
}
