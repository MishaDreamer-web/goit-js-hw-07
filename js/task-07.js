// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const magicSlider = document.querySelector('#font-size-control');
// console.log(magicSlider);

const magicText = document.querySelector('#text');
// console.log(magicText);

magicSlider.addEventListener('input', onSliderValueChange);

function onSliderValueChange(event) {
  const value = event.currentTarget.value;
  magicText.style.fontSize = value + 'px';
  //   console.log(`Размер текста ${value}px`);
}
