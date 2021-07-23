function adicionar(n){
  let num = document.querySelector('select#addnum')
  if(n.value.length == ""){
    window.alert('Digite um valor!')
  }else if(n.value > 100){
    window.alert("Digite um valor até 100")
  }
}

console.log(adicionar(2))