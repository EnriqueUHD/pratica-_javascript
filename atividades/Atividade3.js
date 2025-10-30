import readlineSync from 'readline-sync';

let salarioBruto; 
let adicionalNoturno; 
let horasExtras; 
let descontos; 
let salarioLiquido;

salarioBruto = readlineSync.questionFloat("Informe o salário bruto do funcionário:");
adicionalNoturno = readlineSync.questionFloat("Informe o adicional Noturno do funcionário:");
horasExtras = readlineSync.questionFloat("Informe o valor das horas extras do funcionário:");
descontos = readlineSync.questionFloat("Informe os descontos do funcionário:");

salarioLiquido = salarioBruto+ adicionalNoturno+ (horasExtras * 5) - descontos;

console.log(`O salário líqueido do funcionário é: R$ ${salarioLiquido.toFixed(2)}`);