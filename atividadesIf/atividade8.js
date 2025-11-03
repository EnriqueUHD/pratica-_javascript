import readline from 'readline-sync'

let operacao, saldo = 1000.00, saque, deposito;

operacao = readline.questionInt("Digite o número da operação. 1 - Saldo | 2 - Saque | 3 - Depósito\n");

switch(operacao){
    case 1:
       console.log(`Operação - Saldo\nSaldo: R$ ${saldo.toFixed(2)}`);
       break;
    case 2: 
       saque = readline.questionFloat(`Operação - Saque\nInforme o valor de saque:`);
       if(saldo >= saque){
         console.clear();
         console.log(`Operação - Saque\nNovo Saldo: R$ ${(saldo - saque).toFixed(2)}`)
       } else {
         console.clear();
         console.log("Operação - Saque\nSaldo Insuficiente!")
       }
       break;
    case 3:
        deposito = readline.questionFloat(`Operação - Depósito\nEntre com o valor do depósito:`);
        console.clear();
        console.log(`Operação - Depósito\nNovo Saldo: R$ ${(saldo + deposito).toFixed(2)}`);
        break;
    default:
        console.log("Operação Inválida!")
    }