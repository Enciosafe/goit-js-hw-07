let counterValue = 0;
const value = document.querySelector('#value');

const counterEl = document.querySelector('#counter');
const decrement = counterEl.firstElementChild;
const increment = counterEl.lastElementChild;

decrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

increment.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});
