console.log("EXERCIE 3");
function exo3(){
let n=Number(prompt("Entrez un nombre:"));/*prompt tjrs prend la valeur num autant que string */
if(n<0){
    console.log("Nombre négatif");
} else {
    if(n<=10){
        console.log("Petit");
    } else {
        if(n<=50){
            console.log("Moyen");
        } else{
            if(n<=100){
                console.log("Grand");
            }else{
                console.log("Très grand");
            }
        }
}
}
}