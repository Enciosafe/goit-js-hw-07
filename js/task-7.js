const inputRange = document.querySelector('#font-size-control');
let textSpan = document.querySelector('#text');

inputRange.addEventListener('input', changeCatcher);

function changeCatcher(event) {
  let textSize = parseInt(textSpan.style.fontSize);
  textSize = inputRange.value;
  textSpan.style.fontSize = `${textSize}px`;
}
