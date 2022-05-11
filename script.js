// Caputra os elementos da tela, qual elemento? Verificamos pela informação do ('')
const button = document.querySelector('[data-js="change-percentual"]'); // no arquivo html, procura data-js="change-percentual" vai saber qual campo está sendo selecionado, ai podemos acessar todas propriedades dele
const inputValue = document.querySelector('[data-js="input-value"]');
const percentBar = document.querySelector('[data-js="africa"]');
const spanPercent = document.querySelector('[data-js="africa"] .percent');
const blueColor = document.querySelector('[data-js="change-blue"]');
const yellowColor = document.querySelector('[data-js="change-yellow"]');
const redColor = document.querySelector('[data-js="change-red"]');
const progressBar = document.querySelector('.progress-bar');


/* O button é uma constante, que foi criada atravez da leitura do elemento data-js="change-percentual" 
O qual remete a um BOTÃO, nele estamos adicionando o evento de click, e ao clicar no botão irá fazer o que está dentro da função abaixo */
button.addEventListener('click', () => {
    if (validateValue() == true) {  
        changePercent();
    }
});

blueColor.addEventListener('click', () => { 
    if (validateValue() == true) {  
        percentBar.style.filter = 'brightness(0) saturate(100%) invert(45%) sepia(64%) saturate(2345%) hue-rotate(201deg) brightness(100%) contrast(88%)'; //Muda cor do div que encaixotei o pipe, svg e valor porcentagem
        progressBar.style.background = 'linear-gradient(90deg, rgba(252,252,252,1) 0%, rgba(4,32,233,1) 100%)'; // Muda a cor da progress bar
        changePercent();
    }
});

yellowColor.addEventListener('click', () => {
    if (validateValue() == true) {  
        percentBar.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(70%) saturate(5886%) hue-rotate(359deg) brightness(102%) contrast(101%)';
        progressBar.style.background = 'linear-gradient(90deg, rgba(252,252,252,1) 0%, rgba(236,237,5,1) 100%)';
        changePercent();
    }
});

redColor.addEventListener('click', () => {  
    if (validateValue() == true) {  
        percentBar.style.filter = 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(6739%) hue-rotate(359deg) brightness(104%) contrast(114%)';
        progressBar.style.background = 'linear-gradient(90deg, rgba(252,252,252,1) 0%, rgba(255,0,0,1) 100%)';
        changePercent();
    }
});

/* Função utilizada para o carregamento da tela e aplicar filtro de cores na barra */
window.onload = function exampleFunction() {
	percentBar.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(85deg) brightness(104%) contrast(101%)';
}

const validateValue = () => {
    if (inputValue.value == ''){
        alert('Informe um percentual');
        return false; 
    } else {
        return true;
    }
}

const changePercent = () => {
    percentBar.style.width = `${inputValue.value}%`;
    spanPercent.innerHTML = `${inputValue.value}%`;    
}
