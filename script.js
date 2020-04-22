const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

function calculate() {
  fetch('items.json')
    .then((res) => res.json())
    .then((data) => console.table(data));
}

calculate();
