import readlineSync from 'readline-sync';

let n1, n2, n3, n4;
let calculo;

n1 = readlineSync.questionFloat("Informe o primeiro número:");
n2 = readlineSync.questionFloat("Informe o segundo número:");
n3 = readlineSync.questionFloat("Informe o terceiro número:");
n4 = readlineSync.questionFloat("Informe o quarto número:");

calculo = (n1 * n2) - (n3 * n4);

console.log(`Diferença: ${calculo.toFixed(1)}`)