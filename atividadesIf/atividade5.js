import readline from 'readline-sync'

console.log("Cardapio: 1- Cachorro Quente, valor: R$ 10,00")
console.log("********* 2- X-Salada, valor: R$ 15,00 ******")
console.log("********* 3- X-Bacon, valor: R$ 18,00 *******")
console.log("********* 4- Bauru, valor: R$ 12,00 *********")
console.log("********* 5- Refrigerante, valor: R$ 8,00 ***")
console.log("********* 6- Suco de laranja, valor: R$ 13,00")

let preco, quantidade, valorTotal;

preco = readline.questionInt("Informe o numero do seu pedido:");
quantidade = readline.questionInt("Informe a quantidade:");

switch(preco){
   case 1:
        valorTotal = 10.00 * quantidade;
        console.log(`Você pediu ${quantidade} Cachorro Quente(s) - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 2:
        valorTotal = 15.00 * quantidade;
        console.log(`Você pediu ${quantidade} X - Salada(s) - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 3:
        valorTotal = 18.00 * quantidade;
        console.log(`Você pediu ${quantidade} X - Bacon(s) - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 4:
        valorTotal = 12.00 * quantidade;
        console.log(`Você pediu ${quantidade} Bauru(s) - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 5:
        valorTotal = 8.00 * quantidade;
        console.log(`Você pediu ${quantidade} Refrigerante(s) - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 6:
        valorTotal = 13.00 * quantidade;
        console.log(`Você pediu ${quantidade} Suco(s) de laranja - Total: R$ ${valorTotal.toFixed(2)}`);
        break;
}