import readline from 'readline-sync'

console.log("*******Codigo*******||*******Operação***")
console.log("*******   1  *******||*******Soma*******")
console.log("*******   2  *******||*******Subtração**")
console.log("*******   3  *******||****Multiplicação*")
console.log("*******   4  *******||*******Codigo*****")

let numero1, numero2, operacao, resultado;

numero1 = readline.questionFloat("Informe o 1° número:");
numero2 = readline.questionFloat("Informe o 2° número:");
operacao = readline.questionInt("Operação:");

switch(operacao){
    case 1:
        resultado = numero1 + numero2
        console.log(`${numero1} + ${numero2} = ${resultado.toFixed(1)}`)
    break;
     case 2:
        resultado = numero1 - numero2
        console.log(`${numero1} - ${numero2} = ${resultado.toFixed(1)}`)
    break;
     case 3:
        resultado = numero1 * numero2
        console.log(`${numero1} * ${numero2} = ${resultado.toFixed(1)}`)
    break;
     case 4:
        resultado = numero1 / numero2
        console.log(`${numero1} / ${numero2} = ${resultado.toFixed(1)}`)
    break;
}