const categoriesEl = document.querySelectorAll('.item');
//console.log(categoriesEl);
const numberOfCategoriesEl = categoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const firstEtemEl = categoriesEl[0];
//console.log(firstEtemEl);
const firstCategoryEl = firstEtemEl.firstElementChild;
console.log(`Category:`, firstCategoryEl.textContent);

const firstCategoryListEl = firstEtemEl.lastElementChild;
const firstCategoryEtemEl = firstCategoryListEl.children;
console.log(`Elements:`, firstCategoryEtemEl.length);

const secondEtemEl = categoriesEl[1];
const secondCategoryEl = secondEtemEl.firstElementChild;
console.log(`Category:`, secondCategoryEl.textContent);

const secondCategoryListEl = secondEtemEl.lastElementChild;
const secondCategoryEtemEl = secondCategoryListEl.children;
console.log(`Elements:`, secondCategoryEtemEl.length);

const lastEtemEl = categoriesEl[2];
const lastCategoryEl = lastEtemEl.firstElementChild;
console.log(`Category:`, lastCategoryEl.textContent);

const lastCategoryListEl = lastEtemEl.lastElementChild;
const lastCategoryEtemEl = lastCategoryListEl.children;
console.log(`Elements:`, lastCategoryEtemEl.length);











