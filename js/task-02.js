const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const firstItem = document.createElement("li");
firstItem.textContent = ingredients[0];
firstItem.classList.add('item');

const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1];
secondItem.classList.add('item');

const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2];
thirdItem.classList.add('item');

const fourthItem = document.createElement("li");
fourthItem.textContent = ingredients[3];
fourthItem.classList.add('item');

const fifthItem = document.createElement("li");
fifthItem.textContent = ingredients[4];
fifthItem.classList.add('item');

const lastItem = document.createElement("li");
lastItem.textContent = ingredients[5];
lastItem.classList.add('item');

list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, lastItem);

