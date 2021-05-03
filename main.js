//Chiedere il nome all'utente
var userName = prompt('Inserisci il tuo nome');
document.getElementById('user_name').innerHTML = userName;


// Chiedere all'utente il numero di chilometri che vuole percorrere 
var kilometers = parseInt(prompt('Inserire il numero di chilometri da percorrere'));
console.log(kilometers);
document.getElementById('distance').innerHTML = kilometers;

if (isNaN(kilometers)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
}


// Chiedere l'età del passeggero.
/* var userAge = parseInt(prompt("Inserire l'età"));
console.log(userAge);
document.getElementById('age').innerHTML = 'Età del passeggero: ' + userAge;

if (isNaN(userAge)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
} */

/* 
// Clcolare il prezzo totale del viaggio
var priceForKm = 0.21;
var ticketPrice = kilometers * priceForKm;
console.log(ticketPrice);
document.getElementById('price').innerHTML = 'Il costo del biglietto è: ' + ticketPrice.toFixed(2) + ' \u20ac';
var result;
document.getElementById('result').innerHTML = 'Il prezzo è ' + ticketPrice.toFixed(2) + ' \u20ac';

if (userAge < 18 ) {
    var sconto = (ticketPrice*20)/100;
    document.getElementById('sconto').innerHTML = 'Con lo sconto del 20% rispami: ' + sconto.toFixed(2) + ' \u20ac';
    console.log(sconto);
    var teenPrice = ticketPrice - sconto;
    document.getElementById('final_price').innerHTML = 'Il costo finale del biglietto è: ' + teenPrice.toFixed(2) + ' \u20ac';
    console.log(teenPrice);
    var result;
    document.getElementById('result').innerHTML = 'Il prezzo è ' + teenPrice.toFixed(2) + ' \u20ac';

} else if (userAge >= 65) {
    var sconto = (ticketPrice*40)/100;
    document.getElementById('sconto').innerHTML = 'Con lo sconto del 40% risparmi: ' + sconto.toFixed(2) + ' \u20ac';
    console.log(sconto);
    var overPrice = ticketPrice - sconto;
    document.getElementById('final_price').innerHTML = 'Il costo finale del biglietto è: ' + overPrice.toFixed(2) + ' \u20ac';
    console.log(overPrice);
    var result;
    document.getElementById('result').innerHTML = 'Il prezzo è ' + overPrice.toFixed(2) + ' \u20ac';
}
 */

//Generare il numero di carrozza
var numberCarriage = Math.floor(Math.random() * 10) + 1;
document.getElementById('number_carriage').innerHTML = numberCarriage;

//Generare il codice CP
var numerbCode = Math.floor(Math.random() * 100000) + 90000;
document.getElementById('number_code').innerHTML = numerbCode;

//Geneare un evento al click sui button
var btnAnnulla = document.getElementById('btn-annulla');

btnAnnulla.addEventListener('click', function() {
    var userNameInput = document.getElementById('user_name');
    userNameInput.value = "";
})
