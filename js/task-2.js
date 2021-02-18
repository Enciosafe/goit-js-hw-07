const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

//--------------------------------- ВАРИАНТ ЧЕРЕЗ FOR----------------------------------

// const ingArr = [];
// for (let i = 0; i < ingredients.length; i++) {
//   ingArr.push(document.createElement('li'));
//   ingArr[i].textContent = ingredients[i];
// }

// ulRef.append(...ingArr);

// ---------------------------------ВАРИАНТ ЧЕРЕЗ MAP-----------------------------------

// const ingredientsMarkup = ingredients.map(ingredient => {
//   const ingArr = document.createElement('li');
//   ingArr.textContent = ingredient;
//   return ingArr;
// });

// ulRef.append(...ingredientsMarkup);

//----------ВАРИАНТ ЧЕРЕЗ ФУНКЦИЮ С МАР, КУДА МОЖНО ДОБАВИТЬ ЛЮБОЙ МАССИВ СТРОК---------

const listMaker = items => {
  return items.map(ingredient => {
    const ingArr = document.createElement('li');
    ingArr.textContent = ingredient;

    return ingArr;
  });
};
const ingredientsMarkup = listMaker(ingredients);
ulRef.append(...ingredientsMarkup);
