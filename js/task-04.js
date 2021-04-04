const counterBlock = document.querySelectorAll('.js-actions button');
const valueCounter = document.querySelector('#value');

let counterValue = 0;
const counterActions = (value) =>  valueCounter.textContent = counterValue += value;

const incrementButtonClick = counterBlock[1].addEventListener('click', () => counterActions(1)); 
const decrementButtonClick = counterBlock[0].addEventListener('click', () =>  counterActions(-1));
