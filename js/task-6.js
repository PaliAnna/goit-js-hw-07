const inputRef = document.querySelector('#validation-input');
const dataLengthValue = inputRef.getAttribute('data-length');

const validationCheck = event => {
  const currentElRef = event.target;

  if (currentElRef.value.length !== Number(dataLengthValue)) {
   
    currentElRef.classList.remove('valid');
  } else {
   
    currentElRef.classList.remove('invalid');
  }
};

inputRef.addEventListener('blur', validationCheck);
