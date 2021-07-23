function gerar(){
    let n1 = window.document.querySelector('input#txtn')
    let res = window.document.querySelector('option#x0')
    

    if(n1 == ''){
        window.alert('[ERRO] Digite um número!!')
    }else{
       for(let c = 0; c <= 10; c++ ){
           for(let i = n1; i <= c; ){
           res.innerHTML = `${i} x ${c}`
           }
       
    } 
}

    
}