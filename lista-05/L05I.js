let antecessor = 0;
let termoCorrente = 1;

console.log('Série de Fibonacci (15 termos):');

for (let ordem = 1; ordem <= 15; ordem++) {
  console.log(termoCorrente);
  const proximoTermo = antecessor + termoCorrente;
  antecessor = termoCorrente;
  termoCorrente = proximoTermo;
}
