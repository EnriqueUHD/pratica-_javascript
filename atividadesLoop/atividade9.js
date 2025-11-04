import readline from 'readline-sync'

let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = readline.questionInt(`Digite o valor para a posição (${i+1}, ${j+1}):`);
    }
}

console.log("Elementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
}

console.log("Elementos da Diagonal Secundária:");
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);

let somaPrincipal = matriz[0][0] + matriz[1][1] + matriz[2][2];
console.log("Soma dos Elementos da Diagonal Principal:", somaPrincipal);

let somaSecundaria = matriz[0][2] + matriz[1][1] + matriz[2][0];
console.log("Soma dos Elementos da Diagonal Secundária:", somaSecundaria);
