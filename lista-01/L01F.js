const prompt = require('prompt-sync')({ sigint: true });

let conteudoAlfa = prompt('Valor para A: ');
let conteudoBeta = prompt('Valor para B: ');

const temporario = conteudoAlfa;
conteudoAlfa = conteudoBeta;
conteudoBeta = temporario;

console.log(`A agora vale: ${conteudoAlfa}`);
console.log(`B agora vale: ${conteudoBeta}`);
