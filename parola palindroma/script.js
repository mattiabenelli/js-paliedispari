function invertiParola(parola){
    let parolaInversa = parola.split('').reverse().join('');
    return parolaInversa;
}

let parolaTest = prompt("inserisci una parola per scoprire se è palindroma o no")

let parolaInversa = invertiParola(parolaTest)
console.log(parolaTest)

if(parolaTest == parolaInversa){
    console.log(`${parolaTest} è una parola palindroma infatti invertendo l'ordine delle lettere esce ${parolaInversa}`)
}
else{
    console.log(`${parolaTest} non è una parola palindroma infatti invertendo l'ordine delle lettere esce ${parolaInversa}`)
}