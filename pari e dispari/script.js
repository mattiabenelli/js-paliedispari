function generatorRandomNumbers(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber)
    return randomNumber
}

let disparipari 
do{
    disparipari = prompt("scegli pari o dispari: ");
        if(disparipari != 'pari' || disparipari != 'dispari'){
            alert("hai inserito un valore non valido")
        }    
}
while(disparipari !== 'pari' || disparipari !== 'dispari');
