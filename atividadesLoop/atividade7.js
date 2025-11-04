import readline from 'readline-sync'

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numeroBuscado = readline.questionInt("Informe um número:")
let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroBuscado) {
        console.log(`O número ${numeroBuscado} está localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`O número ${numeroBuscado} não foi encontrado!`);
}
