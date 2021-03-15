const counterValueRef = document.querySelector('#value');
const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrRef = document.querySelector('button[data-action="increment"]');

let counterValue = Number(counterValueRef.textContent);

// Решение 1

function decrementFn() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function incrementFn() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

buttonDecrRef.addEventListener('click', decrementFn);
buttonIncrRef.addEventListener('click', incrementFn);

