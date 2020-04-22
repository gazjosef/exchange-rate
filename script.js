const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');

// Fetch Exchange Rate & Update The Dom
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Event Listeners
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);

calculate();
