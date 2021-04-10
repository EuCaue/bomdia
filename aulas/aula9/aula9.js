var carta1 = {
    nome:"Seiya de pegaso",
    img:"https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1509491251/content-items/002/130/381/FANART_SEIYA_PEGASO-original.jpg?1509491251",
    atributos:{
      ataque:80,
      defesa:60,
      magia:90
    }
    
  }
  
  var carta2 = {
      nome:"bulbassauro",
      img:"https://w7.pngwing.com/pngs/773/1024/png-transparent-pikachu-pokemon-go-pokemon-x-and-y-venusaur-bulbasaur-bulbasaur-vertebrate-fauna-cartoon.png",
      atributos:{
        ataque:70,
        defesa:65,
        magia:85   
      }
         
  }
  
  var carta3 = {
      nome:"Lorde Darth Vader",
      img:"https://www.nerdsite.com.br/wp-content/uploads/2020/01/darth.jpg",
      atributos:{
        ataque:88,
        defesa:62,
        magia:90
      }
      
  }
  
  var carta4 = {
      nome: "Nihulik",
      img:"https://i.pinimg.com/236x/91/96/3d/91963d1e71a0e1440890a6e62b8e9591.jpg",
      atributos:{
          ataque:75,
          defesa:63,
          magia:70
      }
  }
  
  var carta5 = {
      nome:"Jaben",
      img:"https://img.quizur.com/f/img5f28e123ac0e67.33203168.jpg?lastEdited=1596514602",
      atributos:{
          ataque:94,
          defesa:55,
          magia:75
      }
  }
  
  var carta6 = {
      nome:"Farmer",
      img:"https://avaazdo.s3.amazonaws.com/original_5c59acb34b587.jpg",
      atributos:{
          ataque:67,
          defesa:62,
          magia:94
      }
  }
  
  var carta7 = {
      nome:"SUPERTRUNFO",
      img:"https://img.pngio.com/imagenes-random-png-5-png-image-random-png-451_326.png",
      atributos:{
          ataque:100,
          defesa:100,
          magia:100
      }
  } 
  
  var carta8 = {
      nome:"DJ CLEITON RASTA",
      img:"https://lastfm.freetls.fastly.net/i/u/300x300/228977bb2cfc707be3ab9fd804f8959d",
      atributos:{
        ataque:60,
        defesa:66,
        magia:100
      }
  }
  
  
  var cartaMaquina
  var cartaJogador
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
                 // 0    // 1    // 2     // 3    // 4    // 5  // 6    // 7

var pontosJogador = 0 
var pontosMaquina = 0

atualizaPlacar()
atualizarQuantidadeDeCartas()











                
  function scarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)  
  
   document.getElementById('btnSortear').disabled = true
   document.getElementById('btnJogar').disabled = false

   exibeCartaJogador()
   
  }
  
  function exibeCartaJogador(){
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage=`url(${cartaJogador.img})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
  
      for( var atributo in cartaJogador.atributos){
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
      
      divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto + '</div>'
  
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
       var divResultado = document.getElementById('resultado')      
       var atributoSelecionado = obtemAtributoSelecionado()
  
      if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
          htmlResultado = '<p class"resultado-final">Venceu</p>'
          pontosJogador++
      }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
          htmlResultado = '<p class"resultado-final">Perdeu</p>'
          pontosMaquina++
      }else {
          htmlResultado = '<p class"resultado-final">Empatou</p>'
      }
      
         if(cartas.length == 0){
             alert("FIM DE JOGO")
             if(pontosJogador > pontosMaquina){
               htmlResultado = '<p class"resultado-final">Venceu</p>'
             }else if (pontosMaquina > pontosJogador) {
                '<p class"resultado-final">Perdeu</p>'
             }else{
                '<p class"resultado-final">Empatou</p>'
             }
         }else{
          document.getElementById('btnProximaRodada').disabled = false  
         }
          
        

      divResultado.innerHTML = htmlResultado 
      document.getElementById('btnJogar').disabled = true 

      atualizaPlacar()
      exibeCartaMaquina()
      atualizarQuantidadeDeCartas()
  
      
  }
  
  function exibeCartaMaquina(){
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.img})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
  
      for( var atributo in cartaMaquina.atributos){
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
      
      divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto + '</div>'
  }

  function proximaRodada(){
      var divCartas = document.getElementById('cartas')

      divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
     
      document.getElementById('btnSortear').disabled = false
      document.getElementById('btnJogar').disabled = true
      document.getElementById('btnProximaRodada').disabled = true 
      
      var divResultado = document.getElementById('resultado')

      divResultado.innerHTML = ""

  }

  function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina "

    divPlacar.innerHTML += html
}
  function atualizarQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length


    divQuantidadeCartas.innerHTML = html
}
