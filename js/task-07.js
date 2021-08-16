const inputRangeRef = document.querySelector('#font-size-control');
const textOutputRef = document.querySelector('#text');

// textOutputRef.style.fontSize = `${inputRangeRef.value}px`;

inputRangeRef.value = Number.parseInt(
  window.getComputedStyle(textOutputRef).fontSize,
);

inputRangeRef.addEventListener('input', updateFontSize);

function updateFontSize({ currentTarget }) {
  textOutputRef.style.fontSize = `${currentTarget.value}px`;
}
