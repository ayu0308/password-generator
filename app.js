const inputSlider = document.querySelector('[data-lengthSlider]');
const inputDisplay = document.querySelector('[data-lengthNumber]');
const passwordDisplay = document.querySelector('[data-passwordDisplay]');
const copyBtn = document.querySelector('[data-copyBtn]');
const copyMsg = document.querySelector('[data-copyMsg]');
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector('#lowercase');
const numberscaseCheck = document.querySelector('#numbers');
const symbolscaseCheck = document.querySelector('#symbols');
const indicator = document.querySelector('[data-indicator]');
const generateBtn = document.querySelector('.generateBtn');
const allCheckBox = document.querySelector('input[type=checkbox]');

let passwod = '';
let passwordLength = 5;
let checkCount = 1;
handleSlider();

// set password length
function handleSlider() {
  inputSlider.value = passwordLength;
  inputDisplay.innerText = passwordLength;
}
