const elemItems = document.querySelectorAll('.item');

console.log(`В списке ${elemItems.length} категории.`);

elemItems.forEach(elem => {
  console.log(`Категория: ${elem.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
});
