import readline from 'readline-sync';

let soma = 0;  
let contador = 0;
let numero;
let media;

do {
    numero = readline.questionInt("Digite um número:");

    if (numero % 3 == 0 && numero !== 0) {
        soma += numero;
        contador++;
    }

} while (numero !== 0); 

if (contador > 0) {
    media = soma / contador;  
    console.log(`A média de todos os números múltiplos de 3 é: ${media}`);
} else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}
