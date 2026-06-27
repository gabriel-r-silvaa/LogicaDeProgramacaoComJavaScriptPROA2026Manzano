const prompt = require('prompt-sync')({ sigint: true });

const grausFahrenheit = parseFloat(prompt('Temperatura em Fahrenheit: '));
const grausCelsius = (grausFahrenheit - 32) * (5 / 9);

console.log(`${grausFahrenheit}°F equivale a ${grausCelsius.toFixed(2)}°C`);
