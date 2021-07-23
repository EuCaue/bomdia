



function converter(){

  let f = document.querySelector('input#f')
  console.log(f)
let r = document.querySelector('div#r')
if (f.value.length = "" ) {
  window.document.alert("Valor Invalido, digite um valor valido!")
} else{
  var ff = Number(f.value)
  console.log(ff)
  let resp =  (ff - 32) / 1.8
  console.log(resp)
  //var res = Number(resp)
  r.innerHTML += `${resp}.toFixed(2)`
}

}
