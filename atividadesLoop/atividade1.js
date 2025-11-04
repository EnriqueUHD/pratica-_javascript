import readline from 'readline-sync'

console.log("Informe dois números de um intervalo")
let numero1 = readline.questionInt("Digite o primeiro número do intervalo:");
let numero2 = readline.questionInt("Digite o último número do intervalo:");

if(numero1 > numero2){
    console.log("Intervalo inválido!");
}

for (let i = numero1; i <= numero2; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
  }
}
