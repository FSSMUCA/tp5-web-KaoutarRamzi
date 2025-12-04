console.log(" Exercice 9 ");
function factorielle(n) {
    if (n === 0) return 1;          
    return n * factorielle(n - 1);  }
let n = Number(prompt("Entrez un nombre entier >= 0 pour calculer sa factorielle :"));
if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    console.log("Erreur : veuillez entrer un nombre entier positif ou nul.");
} else {
    console.log("La factorielle de", n, "est :", factorielle(n));
}
