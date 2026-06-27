const prompt = require('prompt-sync')({ sigint: true });

const fahrenheitParaCelsius = (leituraFahrenheit) => {
  return (leituraFahrenheit - 32) * (5 / 9);
};

const temperaturaFahrenheit = parseFloat(prompt('Temperatura em Fahrenheit: '));
const temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);

console.log(`${temperaturaFahrenheit}°F = ${temperaturaCelsius.toFixed(2)}°C`);
