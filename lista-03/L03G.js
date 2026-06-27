let antecessor = 0;
let termoCorrente = 1;
let ordemNaSerie = 1;

console.log('Série de Fibonacci (15 termos):');

while (ordemNaSerie <= 15) {
  console.log(termoCorrente);
  const proximoTermo = antecessor + termoCorrente;
  antecessor = termoCorrente;
  termoCorrente = proximoTermo;
  ordemNaSerie++;
}
