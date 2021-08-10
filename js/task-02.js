const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeList = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
};

const listEl = makeIngredientsList(ingredients);

document.querySelector('#ingredients').append(...listEl);
