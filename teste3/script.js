const button = document.querySelector('[data-js="change-percentual"]'); 
const inputValue = document.querySelector('[data-js="input-value"]');
const percentBar = document.querySelector('[data-js="africa"]');
const spanPercent = document.querySelector('[data-js="africa"] .percent');

button.addEventListener('click', () => {
    percentBar.style.width = `${inputValue.value}%`;
    spanPercent.innerHTML = `${inputValue.value}%`;
});