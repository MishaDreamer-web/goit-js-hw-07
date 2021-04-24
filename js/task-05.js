// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const nameInput = document.querySelector('#name-input');
// console.log(nameInput);
// const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.value = '';
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  refs.output.textContent = event.currentTarget.value;
}
