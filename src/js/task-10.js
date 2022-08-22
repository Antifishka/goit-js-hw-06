function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-Destroy');
const boxesContainer = document.querySelector('#boxes');

input.addEventListener('change', onInputChange);

function onInputChange(event) {
  const numberInput = event.currentTarget.value;
  console.log(numberInput);
}

btnCreate.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick(event) {
  console.log('Create');
  createBoxes('numberInput');
}

function createBoxes(amount) {
  const boxes = [];
  
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick(event) {
  console.log('Destroy');
  destroyBoxes();
}

function destroyBoxes() {
  boxesContainer.remove();
}
