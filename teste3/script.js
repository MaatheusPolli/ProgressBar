const button = document.querySelector('[data-js="change-percentual"]'); 
const inputValue = document.querySelector('[data-js="input-value"]');
const percentBar = document.querySelector('[data-js="africa"]');
const spanPercent = document.querySelector('[data-js="africa"] .percent');
const blueColor = document.querySelector('[data-js="change-blue"]');
const yellowColor = document.querySelector('[data-js="change-yellow"]');
const redColor = document.querySelector('[data-js="change-red"]');

button.addEventListener('click', () => {
    percentBar.style.width = `${inputValue.value}%`;
    spanPercent.innerHTML = `${inputValue.value}%`;    
});

blueColor.addEventListener('click', () => {   
    percentBar.style.filter = 'brightness(0) saturate(100%) invert(8%) sepia(99%) saturate(7340%) hue-rotate(247deg) brightness(91%) contrast(144%)';
});

yellowColor.addEventListener('click', () => {   
    percentBar.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(70%) saturate(5886%) hue-rotate(359deg) brightness(102%) contrast(101%)';
});

redColor.addEventListener('click', () => {   
    percentBar.style.filter = 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(6739%) hue-rotate(359deg) brightness(104%) contrast(114%)';
});

window.onload = function exampleFunction() {
	percentBar.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(85deg) brightness(104%) contrast(101%)';
}
