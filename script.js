function calculate() {
  fetch('items.json')
    .then((res) => res.json())
    .then((data) => console.table(data));
}

calculate();
