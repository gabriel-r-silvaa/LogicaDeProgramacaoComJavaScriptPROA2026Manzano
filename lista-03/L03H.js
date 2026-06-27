let escalaAtual = 10;

console.log('Celsius -> Fahrenheit (10°C a 100°C):');

while (escalaAtual <= 100) {
  const fahrenheitEquivalente = (9 * escalaAtual + 160) / 5;
  console.log(`${escalaAtual}°C = ${fahrenheitEquivalente.toFixed(2)}°F`);
  escalaAtual += 10;
}
