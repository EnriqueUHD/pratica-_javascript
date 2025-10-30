import readlineSync from 'readline-sync';

let salario; 
let abono; 
let novoSalario;

salario = readlineSync.questionFloat("Digite o seu salário :");
//console.log(`Salário atual: R$ ${salario.toFixed(2)}`);

abono = readlineSync.questionFloat("Digite o valor do abono:");
//console.log(`Abono recebido: R$ ${abono.toFixed(2)}`);

novoSalario = salario + abono;

console.log(`Seu salario atualizado é: R$ ${novoSalario.toFixed(2)}`);