"use strict"

const buttons = document.querySelector(".buttons");
const minets = document.getElementById('minets');
const seconds = document.getElementById('seconds');
const miliSeconds = document.getElementById('miliSeconds');

const play = document.querySelector('#play')


let miliSecondsValue = 0;
let secondsValue = 0;
let minetsValue = 0;
let time;

function timeCounter(){
    miliSecondsValue++
    miliSeconds.innerHTML = miliSecondsValue < 10 ? "0" + miliSecondsValue : miliSecondsValue;
    if(miliSecondsValue > 99){
        miliSecondsValue = 0
        secondsValue++
        seconds.innerHTML = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    }
    if(secondsValue > 59){
        secondsValue = 0
        minetsValue++
        minets.innerHTML = minetsValue < 10 ? "0" + minetsValue : minetsValue;
    }
}

buttons.addEventListener('click',(e)=>{
    switch(e.target.id){
        case "play":
            clearInterval(time)
            time = setInterval(timeCounter,10)
            break;
        case "stop":
            clearInterval(time)
            break;
        case "reset":  
            miliSecondsValue = 0;
            secondsValue = 0;
            minetsValue = 0;
            miliSeconds.innerHTML = "00"
            seconds.innerHTML = "00"
            minets.innerHTML = "00"
            clearInterval(time)
            break;
    }
});