import readlineSync from 'readline-sync';

let n1, n2, n3, n4, media;

n1 = readlineSync.questionFloat(`Informe sua primeira nota:`);
n2 = readlineSync.questionFloat(`Informe sua segunda nota:`);
n3 = readlineSync.questionFloat(`Informe sua terceira nota:`);
n4 = readlineSync.questionFloat(`Informe sua quarta nota:`);

media = (n1 + n2 + n3 + n4) / 4;

console.log(`Média final: ${media.toFixed(1)}`);

//if (media >= 7) {
//    console.log(`Você foi aprovado! Parabéns!!`);
//} else {
//    console.log(`Sinto muito, você está em recuperação`);
//}