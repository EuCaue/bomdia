function adicionar(n){
    
    let item = document.createElement('option')
    let exbir = document.getElementById('addnum')
    if (num.value.length == ""){
        window.alert("Por favor digite um número!")
    }else if(num.value.length == 100){
         window.alert('O Número digitado foi maior que 100!!')
    }
    
    else{
      let num = [Number(n.value)]
     
    }



    exbir.appendChild(item)
}

console.log(adicionar(3))