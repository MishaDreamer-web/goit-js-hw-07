// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul#ingredients');

const makeListItems = items => {
  return items.map(item => {
    const listEl = document.createElement('li');
    listEl.textContent = item;

    return listEl;
  });
};

const listItems = makeListItems(ingredients);
ingredientsList.append(...listItems);
