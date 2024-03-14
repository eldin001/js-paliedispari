/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */
/* const parola = prompt('Inserisci una parola per sapere se è pari o dispari:');

function palindroma(parola) {
    return parola === parola.split("").reverse().join();
}

if (palindroma(parola)) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola non è palindroma.");
} */

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let scelta = prompt('Scegli se pari o dispari');

let numero = parseInt(prompt('Scegli un numero da 1 a 5'));

let numeroDelComputer = getRndInteger(1, 5);
console.log(numeroDelComputer);


/* somma dei due numeri */
 let somma = numero + numeroDelComputer;






