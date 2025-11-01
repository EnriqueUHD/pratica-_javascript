import readline from 'readline-sync'

let numeroA, numeroB, numeroC, soma;

numeroA = readline.questionInt("Digite o número A: ");
numeroB = readline.questionInt("Digite o número B: ");
numeroC = readline.questionInt("Digite o número C: ");

soma = numeroA + numeroB
if(soma > numeroC){
    console.log(`${numeroB} + ${numeroA} = ${soma} > ${numeroC}`)
    console.log("A soma de A + B é Maior do que C")
} else if(soma < numeroC){
    console.log(`${numeroB} + ${numeroA} = ${soma} < ${numeroC}`)
    console.log("A soma de A + B é Menor do que C")
} else {
    console.log(`${numeroB} + ${numeroA} = ${soma} = ${numeroC}`)
    console.log("A soma de A + B é Igual a C")
}