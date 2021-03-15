const categoriesListRef = document.querySelector('#categories');
const allCategories = document.querySelectorAll('.item');

getCategoriesNumber();
showDescrOfCategories();

function getCategoriesNumber() {
  const categoriesNumber = categoriesListRef.children.length;

  console.log(`В списке ${categoriesNumber} категории`);
}

function showDescrOfCategories() {
  allCategories.forEach(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${category.lastElementChild.children.length}`,
    );
  });
}
