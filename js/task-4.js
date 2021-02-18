let counterValue = document.querySelector('#value');

const counterEl = document.querySelector('#counter');
const decrement = counterEl.firstElementChild;
const increment = counterEl.lastElementChild;

decrement.addEventListener('click', () => {
  counterValue.textContent -= 1;
});

increment.addEventListener('click', () => {
  counterValue.textContent++;
});
