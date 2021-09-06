let distanciaJogador; 

console.log(distanciaJogador);

const numeroTentativa = 10
let somatorio=0;
let i;
let pontos;
let distancia;

for(i = 1; i<= numeroTentativa; i++){
distanciaJogador = Math.round(Math.random() * 5)

switch(distanciaJogador){
    case 0:
        pontos=1500;
        distancia=0;
        msg = 'Acertou em cheio!!' 
        break

    case 1:
        pontos=500;
        distancia=1;
        msg = 'Por um fio !'
        break

    case 2:
        pontos=200;
        distancia=2;
        msg = 'Passou perto'
        break

    case 3:
        pontos=100;
        distancia=3;   
        msg = 'Não foi tão bom'
        break
    
    case 4:
        pontos=20;
        distancia=4;
        msg = 'Esse foi longe'
        break

    case 5:
        pontos=0;
        distancia=5;
        msg = 'Errou feio'
        break

}

somatorio +- pontos;

console.log(`Distancia: ${distancia},${msg} - ${pontos} pontos;`);


}

console.log(somatorio);
