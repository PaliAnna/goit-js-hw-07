const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const createElement = element => {
  const newElement = document.createElement('li');
  newElement.textContent = element;
  return newElement;
};

const allIngredients = ingredients.map(createElement);

ingredientsListRef.append(...allIngredients);
