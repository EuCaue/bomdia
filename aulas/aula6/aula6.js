




 var jogadorv = {
  
  nome: "jogadorv",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};





jogadorv.pontos = cp(jogadorv);

function cp(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

  var jogadores = jogadorv
 

 



mostrar(jogadores);

function mostrar(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
     html += 
      "<td><button onClick='adicionarjogador(" + i + ")'>Novo Jogador</button></tr></td>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}
function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = cp(jogador)
  mostrar(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = cp(jogador)
  mostrar(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  mostrar(jogadores)
}

function adicionarjogador(jogadorv){
  var jogadors
  jogadors = prompt ("Digite o nome do jogador")
  return jogadorv.nome
  }
  
  
   do {var t = parseInt(prompt("Se quiser adicionar um novo jogador digite 1, senão digite 0")) 
   if(t == 1){
  adicionarjogador(jogadorv)
  mostrar(jogadores)
   
  } 
 }while(t)