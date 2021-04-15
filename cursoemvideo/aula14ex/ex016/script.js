

function contar(){
    i = window.document.querySelector('input#inicio')
    inicio = Number(i.value)
    f = window.document.querySelector('input#fim')
    fim = Number(f.value)
    p = window.document.querySelector('input#passo')
    passo = Number(p.value)
    res = window.document.querySelector('div#res')


    for(c=inicio;inicio<fim;c++){
      window.alert(`${c}`)
    }

}