// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
input.value = '';
// console.log(input);

const inputValidLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length === inputValidLength
    ? input.classList.add('valid') ||
      input.classList.replace('invalid', 'valid')
    : input.classList.add('invalid') ||
      input.classList.replace('valid', 'invalid');
}
