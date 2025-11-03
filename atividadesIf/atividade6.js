import readline from 'readline-sync'

let nomeDoColaborador, codigoDoCargo, salario;

nomeDoColaborador = readline.question("Entre com o nome do colaborador:");
codigoDoCargo = readline.questionInt("Informe o cargo do colaborador:");
salario = readline.questionFloat("Informe o salário:");

let novosalario;

switch (codigoDoCargo) {
    case 1:
        novosalario = salario + (0.1 * salario)
        codigoDoCargo = "Gerente"
        break
    case 2:
        novosalario = salario + (0.07 * salario)
        codigoDoCargo = "Vendedor"
        break
    case 3:
        novosalario = salario + (0.09 * salario)
        codigoDoCargo = "Supervisor"
        break
    case 4:
        novosalario = salario + (0.06 * salario)
        codigoDoCargo = "Motorista"
        break
    case 5:
        novosalario = salario + (0.05 * salario)
        codigoDoCargo = "Estoquista"
        break
    case 6:
        novosalario = salario + (0.08 * salario)
        codigoDoCargo = "Técnico de Ti"
        break
    default:
        console.log("Operação inválida!")
}

console.log(`Nome do colaborador: ${nomeDoColaborador}`);
console.log(`Cargo: ${codigoDoCargo}`)
console.log(`Salário: R$ ${novosalario.toFixed(2)}`)