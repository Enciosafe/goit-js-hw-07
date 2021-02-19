const input = document.querySelector('#validation-input');
input.addEventListener('blur', checkerQuantity);

function checkerQuantity(event) {
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    input.className = 'valid';
  } else {
    input.className = 'invalid';
  }
}
