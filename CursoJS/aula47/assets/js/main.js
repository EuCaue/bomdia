function getTimeFromSeconds (seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear =  document.querySelector('.clear');
let seconds = 0; 
let timer;

function startWatch () {
    timer = setInterval(() => {
        seconds++;
        watch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

function stopWatch () { 
    const stopTimer = setTimeout(() => {
        clearInterval(timer)
        
    }, 0);
}

start.addEventListener('click', (e) => {
   startWatch();
});

pause.addEventListener('click', (e) => {
    stopWatch();
});

clear.addEventListener('click', (e) => {
    alert('Cliquei no Parar')
});

