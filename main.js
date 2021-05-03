var btnAnnulla = document.getElementById('btn-annulla');

btnAnnulla.addEventListener('click', function() {
    var userNameInput = document.getElementById('user_name');
    userNameInput.value = "";
    var userDistance = document.getElementById('distance');
    userDistance.value = "";
    var userAge = document.getElementById('age');
    userAge.value = "";
})


var btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener('click', function() {
    var nomeUtenteEl = document.getElementById("user_name").value; 
    document.getElementById('recup_name').innerHTML = nomeUtenteEl;

    var ageE1 = document.getElementById('age').value;
    document.getElementById('sales').innerHTML = 'Sconto' + '<br></br>' + ageE1;

    var numberCarriage = Math.floor(Math.random() * 10) + 1;
    document.getElementById('number_carriage').innerHTML = numberCarriage;  

    var numberCode = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    document.getElementById('number_code').innerHTML = numberCode;
    
    var priceForKm = 0.21;
    var ticketPrice = distance.value * priceForKm;
    console.log(ticketPrice);
    
    if(age.value == 'Minorenne'){
        var sconto = (ticketPrice*20)/100;
        console.log('Lo sconto è: ' + sconto);
        var teenPrice = ticketPrice - sconto;
        document.getElementById('price').innerHTML = teenPrice.toFixed(2) + ' \u20ac';
    } else if (age.value == 'Anziano') {
        var sconto = (ticketPrice*40)/100;
        console.log('Lo sconto è: ' + sconto);
        var overPrice = ticketPrice - sconto;
        document.getElementById('price').innerHTML = overPrice.toFixed(2) + ' \u20ac';
    } else if (age.value == 'Maggiorenne') {
       
        document.getElementById('price').innerHTML = ticketPrice.toFixed(2) + ' \u20ac';
    }
})








