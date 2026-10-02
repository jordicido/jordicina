const temperatures = [18, 21, 24, 19, 27];
const suma = temperatures.reduce((total, temperatura) => total + temperatura, 0);
const mitjana = suma / temperatures.length;
const maxima = Math.max(...temperatures);
const estat = maxima >= 27 ? "temperatura elevada" : "temperatura normal";

console.log("Temperatures:", temperatures.join(" "));
console.log(`\nMitjana: ${mitjana.toFixed(1)} ºC`);
console.log(`Màxima: ${maxima} ºC\n`);
console.log(`Estat: ${estat}`);
console.log("\nEl programa continuarà actiu durant 30 segons...");

setTimeout(() => {}, 30_000);
