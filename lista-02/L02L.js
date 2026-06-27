const prompt = require('prompt-sync')({ sigint: true });

const nomeCompleto = prompt('Informe o nome: ');
const sexoPessoa = prompt('Informe o sexo (M/F): ').toUpperCase();

if (sexoPessoa === 'M') {
  console.log(`Ilmo Sr. ${nomeCompleto}`);
} else {
  console.log(`Ilma Sra. ${nomeCompleto}`);
}
