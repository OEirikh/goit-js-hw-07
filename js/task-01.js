const elemItems = document.querySelectorAll('.item');

console.log(`В списке ${elemItems.length} категории.`);

elemItems.forEach(elem => {
  console.log(`Категория: ${elem.getElementsByTagName('h2')}`);
  console.log(
    `Количество элементов: ${elem.getElementsByTagName('li').length}`,
  );
});
