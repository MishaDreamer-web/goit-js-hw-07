// Счетчик состоит из спана и кнопок, которые должны
//     увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const resValue = document.querySelector('#value');

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  resValue.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  resValue.textContent = counterValue;
}
