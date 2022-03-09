let seconds = 00;
let tens = 00;
let outputSeconds = document.getElementById('seconds');
let outputTens = document.getElementById('tens');
let btnStart = document.getElementById('Btn-start');
let btnEnd = document.getElementById('Btn-end');
let btnReset = document.getElementById('Btn-reset');
let interval;


btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTime, 10);
});

btnEnd.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    outputTens.innerHTML = tens;
    outputSeconds.innerHTML = seconds;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = '0' + tens;
    } 
    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = '0' + seconds;
        tens = 0;
        outputTen.innerHTML = '0' + tens;
    }

    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }
}


