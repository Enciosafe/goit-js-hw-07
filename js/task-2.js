const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

const ingArr = [];
for (let i = 0; i < ingredients.length; i++) {
  ingArr.push(document.createElement('li'));
  ingArr[i].textContent = ingredients[i];
}

ulRef.append(...ingArr);
