import readline from 'readline-sync'

let idade;
let menos21 = 0;
let mais50 = 0;

while(true) {
    idade = readline.questionInt("Digite uma idade:");
    if(idade < 0){
        break;
    }
    if(idade <= 21){
    menos21++
    } else if (idade >= 50) {
    mais50++
    }   
}

console.log(`Total de pessoas menores de 21 anos: ${menos21}`);
console.log(`Total de pessoas maiores de 50 anos: ${mais50}`);