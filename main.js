// Variáveis de nomes, xp e nível do herói
let nomeHeroi = "Darwin"
let xpHeroi = 9999
let nivelHeroi = ""

// Intervalos de xp para cada nível

if (xpHeroi < 1001) {
    nivelHeroi = "Ferro";
}
else if (xpHeroi < 2001 ) {
    nivelHeroi = "Bronze";
}
else if (xpHeroi < 5001) {
    nivelHeroi = "Prata";
}
else if (xpHeroi < 7001) {
    nivelHeroi = "Ouro";
}
else if (xpHeroi < 8001) {
    nivelHeroi = "Platina"
}
else if (xpHeroi < 9001) {
    nivelHeroi = "Ascendente";
}
else if (xpHeroi < 10001) {
    nivelHeroi = "Imortal";
}
else {
    nivelHeroi = "Radiante";
}

// Saída
console.log("O Herói de nome " + nomeHeroi + " está no nível de: " + nivelHeroi)
