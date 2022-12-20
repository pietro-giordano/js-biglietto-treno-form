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

let priceTicket = kmInput * 0.21;
let priceTicketUnder = priceTicket - (priceTicket * 0.8);
let priceTicketOver = priceTicket - (priceTicket * 0.6);

submitButton.addEventListener('click',

      function() {

            console.log('Cliccato su submitButton');
            console.log('Il valore di nameInput è', nameInput.value);
            console.log('Il valore di kmInput è', kmInput.value);
            console.log('Il valore di ageSelect è', ageSelect.value);

            if (ageSelect.value == 'under') {
                  nameOutput.innerHTML = nameInput.value;
                  discountOutput.innerHTML = 'Sconto Minorenni';
                  cabOutput.innerHTML = 'Sconto Minorenni';
                  cpOutput.innerHTML = 'Sconto Minorenni';
                  priceOutput.innerHTML = 'Sconto Minorenni';
            }
            else if (ageSelect.value == 'over') {
                  answer.innerHTML = 'L\'utente ' + nameInput.value + ' ha indicato come genere Donna';
            }
            else {
                  answer.innerHTML = 'L\'utente ' + nameInput.value + ' ha preferito non specificare il proprio genere';
            }

      }

)


// if (age < 18) {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketUnder.toFixed(2) + " euro.";
// }
// else if (age >= 65) {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketOver.toFixed(2) + " euro.";
// }
// else {
//       document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicket.toFixed(2) + " euro.";
// }