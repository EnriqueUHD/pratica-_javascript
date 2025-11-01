import readline from 'readline-sync'

let numero;

numero = readline.questionInt("Escreva um número, por gentileza:");

if (numero % 2 === 0 && numero > 0){
    console.log(`O número ${numero} é par e positivo!`)
} else if (numero % 2 !== 0 && numero < 0){
    console.log(`O número ${numero} é ímpar e negativo!`)
} else if (numero % 2 === 0 && numero < 0){
    console.log(`O número ${numero} é par e negativo!`)
} else {
    console.log(`O número ${numero} é ímpar e positivo!`)
}