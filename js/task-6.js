function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function handleCreateButtonClick() {
  const amount = parseInt(input.value, 10);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      return;
    }
    createBoxes(amount);
      input.value = ''; 
    }

createButton.addEventListener('click', handleCreateButtonClick);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
    let size = 30;

for (let i = 0; i < amount; i++) {
  const div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(div);
  size += 10;
  }

boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}