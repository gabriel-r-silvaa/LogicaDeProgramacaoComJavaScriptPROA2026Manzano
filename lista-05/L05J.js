console.log('Celsius -> Fahrenheit (10°C a 100°C):');

for (let escala = 10; escala <= 100; escala += 10) {
  const fahrenheitEquivalente = (9 * escala + 160) / 5;
  console.log(`${escala}°C = ${fahrenheitEquivalente.toFixed(2)}°F`);
}
