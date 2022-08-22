function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-Destroy');
const boxesContainer = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = input.value;
  
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  console.log(boxes);
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.remove();
}
