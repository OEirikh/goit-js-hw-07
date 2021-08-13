const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector('#value').textContent,
};

refs.decrement.addEventListener('click', () => {
  refs.counterValue -= 1;
  document.querySelector('#value').textContent = refs.counterValue;
});

refs.increment.addEventListener('click', () => {
  refs.counterValue++;
  document.querySelector('#value').textContent = refs.counterValue;
});
