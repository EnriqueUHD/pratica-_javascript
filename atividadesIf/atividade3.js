import readline from 'readline-sync'

let nomeDoDoador, idadeDoDoador, primeiraDoacao;

nomeDoDoador = readline.question("Informe o nome do doador:").trim();
idadeDoDoador = readline.questionInt("Informe a idade do doador:");
primeiraDoacao = readline.question("Ele(a) está doando pela primeira vez? (Sim|Não) ").toLowerCase().trim();

console.log(`Doador : ${nomeDoDoador}`);
console.log(`Idade: ${idadeDoDoador} anos`);
console.log(`Primeira doação: ${primeiraDoacao.includes("sim") ? "Sim" : "Não"}`);

if (idadeDoDoador >= 18 && idadeDoDoador <= 59) {
    console.log(`${nomeDoDoador} está apto(a) para doar sangue!`)
} else if (idadeDoDoador >= 60 && idadeDoDoador <= 69 && primeiraDoacao === "não") {
    console.log(`${nomeDoDoador} está apto(a) para doar sangue!`)
} else {
    console.log(`${nomeDoDoador} não está apto(a) para doar sangue!`)
}
