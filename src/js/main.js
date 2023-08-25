"use strict"

const buttons = document.querySelector(".buttons");
const hour = document.getElementById('hour');
const minets = document.getElementById('minets');
const seconds = document.getElementById('seconds');


let secondsValue = 0;
let minetsValue = 0;
let hourValue = 0;
let time;

function timeCounter(){
    secondsValue++
    seconds.innerHTML = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    if(secondsValue > 59){
        minetsValue++
        minets.innerHTML = secondsValue < 10 ? "0" + minetsValue : minetsValue;
    }
    if(minetsValue > 59){
        hourValue++
        hour.innerHTML = secondsValue < 10 ? "0" + hourValue : hourValue;
    }
}

// buttons.addEventListener('click',(e)=>{
//     switch(e.target.id)
// })
