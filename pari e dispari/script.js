function generatorRandomNumbers(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}

let disparipari 
do{
    disparipari = prompt("scegli pari o dispari: ");
        if(disparipari !== 'pari' && disparipari !== 'dispari'){
            alert("hai inserito un valore non valido")
        }    
}
while(disparipari != 'pari' && disparipari != 'dispari');

let primoNumero = generatorRandomNumbers(1, 5);
let secondoNumero = generatorRandomNumbers(1, 5);
console.log(`il primo numero è: ${primoNumero}`);
console.log(`il secondo numero è: ${secondoNumero}`);

let somma = primoNumero + secondoNumero;
console.log(`la loro somma è: ${somma}`);

if( somma % 2 == 0 && disparipari == 'pari'){
    alert("hai vinto");
}
else if(somma % 2 == 0 && disparipari == 'dispari'){
    alert("hai perso");
}
else if(somma % 2 != 0 && disparipari == 'dispari'){
    alert("hai vinto");
}
else{
    alert("hai perso")
}
