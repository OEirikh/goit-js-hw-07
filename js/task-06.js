const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur({
  currentTarget: { dataset, selectionStart, classList },
}) {
  if (selectionStart === Number(dataset.length)) {
    classList.remove('invalid');
    classList.add('valid');
  } else {
    classList.add('invalid');
  }
}
