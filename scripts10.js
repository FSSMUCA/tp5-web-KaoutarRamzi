console.log("EXERCICE 10");
function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}
let n = Number(prompt("Entrez un entier positif :"));

if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    console.log("Erreur : veuillez entrer un entier positif ou nul.");
} else {
    console.log("Somme itérative (1 à", n, ") =", sommeIterative(n));
    console.log("Somme récursive (1 à", n, ") =", sommeRecursive(n));
}
