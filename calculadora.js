
function calcSaldo (vit, der){
    return vit - der
}

let Rank = calcSaldo(20, 10)

let nivel = "";

if (Rank < 10) {
    nivel = "Ferro";
} else if (Rank > 10 && Rank <= 20) {
    nivel = "Bronze";
} else if (Rank > 20 && Rank <= 50) {
    nivel = "Prata";
} else if (Rank > 50 && Rank <= 80) {
    nivel = "Ouro";
} else if (Rank > 80 && Rank <= 90) {
    nivel = "Diamante";
} else if (Rank > 90 && Rank <= 100) {
    nivel = "Lendário";
} else if (Rank >= 101) {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " + Rank  + "está no nível de " + nivel);


