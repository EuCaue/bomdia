
// Nome do jogador
const nome = "Cauê";

// Definindo o valor inicial do jogador

let valorJogador = 0;
let valorJ = Math.round(Math.random() * 14);
if(valorJ => 2 || valorJ <= 14){
  valorJogador += valorJ;
}else{
    valorJogador += valorJ
};

// Definindo o valor dos dados.

let dado1 = Math.round(Math.random() * 6);
let dado2 = Math.round(Math.random() * 6);


// Saber os valores...
console.log(valorJogador);
console.log(dado1);
console.log(dado2);


// Resultado
let resultado = dado1 + dado2;



console.log(resultado)

// Verificação de quem ganhou no jogo.

if(resultado === valorJogador){
    console.log(`Parabéns jogador ${nome}, o número sorteado para você foi de ${valorJogador} e o resultado foi igual ao seu!! Resultado:${resultado}. `)
}else{
    console.log(`Infelizmente não foi dessa vez ${nome}, o resultado foi de ${resultado}, o seu número sorteado foi de ${valorJogador}, tente outra vez!!!`)
};

