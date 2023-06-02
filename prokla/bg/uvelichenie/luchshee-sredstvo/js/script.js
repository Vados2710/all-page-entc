var inputField = document.querySelector('.input');
var outputField = document.querySelector('.output');
const PLUSSIZE = 7;
function getValue() {
  if (inputField.value != '') {
    outputField.innerHTML = parseInt(inputField.value)  + PLUSSIZE;
  } else {
    outputField.innerHTML = '';
  }

}
inputField.addEventListener('input', getValue);