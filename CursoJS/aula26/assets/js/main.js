const peso = document.querySelector('#pesoT');
const altura = document.querySelector('#alturaT');
const divR = document.querySelector('.div')
const resultado = peso * altura**2
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento Previnido');
    exbirResultado();    
})

function setResultado (msg) {
    
    divR.innerHTML += `${msg} <style type="text/css" div{
        background-color: red;
    }<style/> <br />`
}

function exbirResultado () {
    let rR = peso.value / (altura.value * altura.value).toFixed(2)
    if (peso.value >= 1 && peso.value <= 595 && altura.value >= 0.5 && altura.value <= 2.71) {
        setResultado(rR.toFixed(2))
    } else if (peso.value <= 0) {
        setResultado('Digite um valor válido no Peso!')
    } else if (altura.value <= 0 ) {
        setResultado('Digite um valor válido na Altura!')
    } else {
        setResultado('Digite um valor válido!')
    }
}

