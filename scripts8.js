console.log("EXERCICE 8");
function totalAvecRemise(){
    return total - (total * remise / 100);
}
let totalHT=Number(prompt("entrez un total HT"));
let remisePourcent = Number(prompt("entrez une remise"));
let totalFinal= totalAvecRemise(totalHT,remisePourcent);
console.log("total HT :",totalHT.toFixed(2));
console.log("Remise :",remisePourcent + "%");
console.log("total après remse :",totalFinal.toFixed(2));