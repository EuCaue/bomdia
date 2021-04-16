function contar(){
    let ini = window.document.querySelector('input#txti')
    let fim = window.document.querySelector('input#txtf')
    let passo = window.document.querySelector('input#txtp')
    let res = window.document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Valores Inválidos!')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; i < f; c += p)
        res.innerHTML += `${c}`
    }
}
    


