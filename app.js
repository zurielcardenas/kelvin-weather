//Current temperatur in Kelvin degrees.
const kelvin = 0;
//Converting Kelvin to Celsius
const celsius = kelvin - 273;
//Convert Celsius to farenheit.
let fahrenheit = celsius * (9/5) + 32;
// Round dowen fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);
//Convertion to Newtons
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature in ${newton} degrees Newton.`);
