const nameInput = document.getElementById('name');
const kmInput = document.getElementById('km');
const ageSelect = document.getElementById('age');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const nameOutput = document.getElementById('name-output');
const discountOutput = document.getElementById('discount-output');
const cabOutput = document.getElementById('cab-output');
const cpOutput = document.getElementById('cp-output');
const priceOutput = document.getElementById('price-output');

submitButton.addEventListener('click',

      function() {

            let priceTicket = parseInt(kmInput.value * 0.21);
            let priceTicketUnder = priceTicket - (priceTicket * 0.8);
            let priceTicketOver = priceTicket - (priceTicket * 0.6);

            console.log('Cliccato su submitButton');
            console.log('Il valore di nameInput è', nameInput.value);
            console.log('Il valore di kmInput è', kmInput.value);
            console.log(typeof kmInput);
            console.log('Il valore di ageSelect è', ageSelect.value);

            if (ageSelect.value == 'under') {
                  nameOutput.innerHTML = nameInput.value;
                  discountOutput.innerHTML = 'Sconto Minorenni';
                  cabOutput.innerHTML = Math.floor(Math.random() * 10);
                  cpOutput.innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
                  priceOutput.innerHTML = priceTicketUnder.toFixed(2) + '€';
            }
            else if (ageSelect.value == 'over') {
                  nameOutput.innerHTML = nameInput.value;
                  discountOutput.innerHTML = 'Sconto Over 65';
                  cabOutput.innerHTML = Math.floor(Math.random() * 10);
                  cpOutput.innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
                  priceOutput.innerHTML = priceTicketOver.toFixed(2) + '€';
            }
            else {
                  nameOutput.innerHTML = nameInput.value;
                  discountOutput.innerHTML = 'Biglietto Standard';
                  cabOutput.innerHTML = Math.floor(Math.random() * 10);
                  cpOutput.innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
                  priceOutput.innerHTML = priceTicket.toFixed(2) + '€';
            }

      }

)

// resetButton.addEventListener('click',

//       function() {

//             document.getElementById("my_form").reset(); 

//       }

// )


// if (age < 18) {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketUnder.toFixed(2) + " euro.";
// }
// else if (age >= 65) {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketOver.toFixed(2) + " euro.";
// }
// else {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicket.toFixed(2) + " euro.";
// }