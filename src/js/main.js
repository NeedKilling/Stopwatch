"use strict"

const buttons = document.querySelector(".buttons");
const minets = document.getElementById('minets');
const seconds = document.getElementById('seconds');
const miliSeconds = document.getElementById('miliSeconds');

const play = document.querySelector('#play')


let startTime;
let time;

let minet;
let second;
let miliSecond;
let nowTime = 0;


function timeCounter(){
    let curentTime = new Date().getTime();  // текущее время 
    nowTime = curentTime - startTime;   // разница во времени в милисикундах
    console.log(nowTime)
    
    let totalsecond = Math.floor(nowTime/1000);

    minet = Math.floor(totalsecond/60);
    second = totalsecond % 60
    miliSecond = nowTime % 1000;
    
    minets.innerHTML = minet < 10 ? "0" + minet : minet
    seconds.innerHTML = second < 10 ? "0" + second : second
    miliSeconds.innerHTML = miliSecond.toString().slice(0,-1)
}

buttons.addEventListener('click',(e)=>{
    switch(e.target.id){
        case "play":
            startTime = new Date().getTime()   // новое время как точка отсчета
            time = setInterval(timeCounter,10)
            break;
        case "stop":
            clearInterval(time)
            break;
        case "reset": 
            minet = 0;
            second = 0;
            miliSecond = 0;
            miliSeconds.innerHTML = "00"
            seconds.innerHTML = "00"
            minets.innerHTML = "00"
            clearInterval(time)
            break;
    }
});