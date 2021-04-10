function clicar(){
 var divResultado = document.getElementById('valorD').value
 var html =  divResultado * 0.72 
 var html2 = "O valor em libra é: "
 var d = document.getElementById('b')

 d.innerHTML = html2+html.toFixed(2) 
}

function clique(){
 divResultadoReal = document.getElementById('valorR').value
 var htmlR = divResultadoReal * 0.18
 var html2R = "O Valor em dolar é: "
 var dR = document.getElementById('b')

 dR.innerHTML = html2R + htmlR.toFixed(2)
}

function dolarReal(){
    divDolarReal = document.getElementById('valorDR').value
    var fixar = divDolarReal * 5.70
    var resultadoDR = "O Valor em dólar é: "
    var divDR = document.getElementById('b')
    divDR.innerHTML = resultadoDR + fixar.toFixed(2)

}    
