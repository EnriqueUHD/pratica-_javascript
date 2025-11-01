import readline from 'readline-sync';

let caracteristica1, caracteristica2, caracteristica3;

console.log("Informe 3 características de um tipo de animal!");
caracteristica1 = readline.question("Informe vertebrado/invertebrado, por gentileza: ").toLowerCase().trim();
caracteristica2 = readline.question("Informe ave/mamifero/inseto/anelideo, por gentileza: ").toLowerCase().trim();
caracteristica3 = readline.question("Informe carnivoro/onivoro/herbivoro/hematofago, por gentileza: ").toLowerCase().trim();

let resultado = "Entrada inválida"

if (caracteristica1 === "vertebrado") {
    if (caracteristica2 === "ave") {
        if (caracteristica3 === "carnivoro") {
            resultado = "Águia."
        } else if (caracteristica3 === "onivoro") {
            resultado = "Pomba."
        }
    } else if (caracteristica2 === "mamifero") {
        if (caracteristica3 === "onivoro") {
            resultado = "HOMEM." // brincadeira
        } else if (caracteristica3 === "herbivoro") {
            resultado = "Vaca."
        }
    }
} else if (caracteristica1 === "invertebrado") {
    if (caracteristica2 === "inseto") {
        if (caracteristica3 === "hematofago") {
            resultado = "Pulga."
        } else if (caracteristica3 === "herbivoro") {
            resultado = "Lagarta."
        }
    } else if (caracteristica2 === "anelideo") {
        if (caracteristica3 === "hematofago") {
            resultado = "Sanguessuga."
        } else if (caracteristica3 === "onivoro") {
            resultado = "Minhoca."
        }
    }
}

console.log(`Resultado: ${resultado}`)
