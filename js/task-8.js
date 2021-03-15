const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

const createBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef = document.querySelector('button[data-action="destroy"]');

function createBoxes(amount) {
  amount = inputRef.value;
  const allBoxes = [];
  let firstBoxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    const randomColor = (0x1000000 + Math.random() * 0xffffff)
      .toString(16)
      .substr(1, 6);

    newBox.style.backgroundColor = '#' + randomColor;
    newBox.style.width = `${firstBoxSize}px`;
    newBox.style.height = `${firstBoxSize}px`;

    allBoxes.push(newBox);
    firstBoxSize += 10;
  }

  boxesRef.append(...allBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', createBoxes);
clearBtnRef.addEventListener('click', destroyBoxes);
