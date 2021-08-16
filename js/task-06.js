const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur({
  currentTarget: { dataset, selectionStart, classList },
}) {
  selectionStart === Number(dataset.length)
    ? classList.remove('invalid') & classList.add('valid')
    : classList.add('invalid');
}
