const prompt = require('prompt-sync')({ sigint: true });

const gradosCelsius = parseFloat(prompt('Temperatura em Celsius: '));
const gradosFahrenheit = (9 * gradosCelsius + 160) / 5;

console.log(`${gradosCelsius}°C equivale a ${gradosFahrenheit.toFixed(2)}°F`);
