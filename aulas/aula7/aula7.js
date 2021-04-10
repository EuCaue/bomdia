var carta1 = {
  nome:"Seiya de pegaso",
  img:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  atributos:{
    ataque:80,
    defesa:60,
    magia:90
  }
  
}

var carta2 = {
    nome:"bulbassauro",
    img:"https://www.brinquedosraros.com.br//img_675/jogo-super-trunfo-carros-esportivos-decada-de-1990-1586316256.jpg",
    atributos:{
      ataque:70,
      defesa:65,
      magia:85   
    }
       
}

var carta3 = {
    nome:"Lorde Darth Vader",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqOLkMKnZztO8b1Pz8ywJS4kAxHKcV2Ff2g&usqp=CAU",
    atributos:{
      ataque:88,
      defesa:62,
      magia:90
    }
    
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3]
               // 0    // 1    // 2
function scarta(){
  var numueroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numueroCartaMaquina]


  var numeroCartaJogador = parseInt(Math.random()* 3)
  while (numeroCartaJogador == numueroCartaMaquina){
 numeroCartaJogador = parseInt(Math.random() * 3 )
  }
  cartaJogador = cartas[numeroCartaJogador]
 console.log(cartaJogador)

 document.getElementById('btnSortear').disabled = true
 document.getElementById('btnJogar').disabled = false
 exibirOpcoes()
}


function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for( var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo   
    }
    opcoes.innerHTML = opcoesTexto
}


function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){ 
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    document.write("<img src=" + cartaJogador.img + "width 400px" + "height 400px" + ">");
    document.write("<img src=" + cartaMaquina.img + "width 400px" + "height 400px" + ">");
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert("Você venceu a carta da  máquina!")
    }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert("Perdeu, carta da máquina é maior!")
    }else {
        alert("EMPATE!!!")
    }
    console.log(cartaMaquina)
}