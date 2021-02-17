//......................................ПЕРВАЯ ЧАСТЬ........................................
const categoriesElements = document.querySelector('#categories');
console.log(`В списке ${categoriesElements.childElementCount} категории.`);

// const listOfCategories = document.querySelectorAll('li.item');       // ВТОРОЙ ВАРИАНТ
// console.log(`В списке ${listOfCategories.length} категории.`);

// let elementsQuantity = 0;
// for (let item of categoriesElements.children) {
//   elementsQuantity += 1;                                             //ВАРИАНТ ЧЕРЕЗ ПЕРЕБОР
// }
// console.log(`В списке ${elementsQuantity} категории.`);

//......................................ВТОРАЯ ЧАСТЬ........................................
const itemsElements = document.querySelectorAll('.item');

function findCategory(numberOfCategory) {
  let titlesOfCategory = [];

  for (let i = 0; i < itemsElements.length; i += 1) {
    titlesOfCategory.push(itemsElements[i].firstElementChild.innerText);
  }

  for (let i = 0; i <= titlesOfCategory.length; i += 1) {
    if (i + 1 === numberOfCategory) {
      return `Категория: ${titlesOfCategory[i]}
Количество элементов: ${
        itemsElements[numberOfCategory - 1].lastElementChild.childElementCount
      }`;
    }
  }
}

console.log(findCategory(1)); // НУЖНО ЗАДАТЬ НОМЕР КАТЕГОРИИ
