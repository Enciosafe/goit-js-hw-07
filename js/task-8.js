const createElButton = document.querySelector('[data-action="render"]');
const destroyElButton = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');
const startWidth = 30;
const startHeight = 30;
//--------------------------------------- функция определения рандомного цвета фона ------------------
function RGBColor() {
  const num = Math.round(0xffffff * Math.random());
  const r = num >> 16;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r},${g},${b})`;
}

//--------------------------------------- функция создания введенного кол-ва элементов ---------------
function createEl(countDiv) {
  for (let i = 0; i < countDiv; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${startWidth + 10 * i}px`;
    divEl.style.height = `${startHeight + 10 * i}px`;
    divEl.style.backgroundColor = RGBColor();
    boxes.appendChild(divEl);
  }
}

createElButton.addEventListener('click', () => {
  createEl(inputEl.valueAsNumber);
});

//-------------------------------------- функция очистки элементов и обнуления инпута ---------------
function destroyEl() {
  boxes.innerHTML = '';
  inputEl.valueAsNumber = 0;
}

destroyElButton.addEventListener('click', () => {
  destroyEl();
});
