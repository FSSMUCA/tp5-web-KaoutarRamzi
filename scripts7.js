console.log(" Exercice 7 ");

function verifierMotDePasse(mdp) {
    return (mdp.length >= 8 && mdp.includes("@"));
}

let motdepasse = prompt("Entrez un mot de passe :");

if (verifierMotDePasse(motdepasse)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}
