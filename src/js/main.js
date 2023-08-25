"use strict"

const buttons = document.querySelector(".buttons");
const hour = document.getElementById('hour');
const minets = document.getElementById('minets');
const seconds = document.getElementById('seconds');


let secondsValue = 0;
let minetsValue = 0;
let haourValue = 0;
let time;

// function timer(){
//     secondsValue++;
//     seconds.innerHTML = secondsValue;
// }


// buttons.addEventListener('click',(e)=>{
//     switch(e.target.id){
//         case "play": 
//             clearInterval(time)
//             time = setInterval(timer,100)
//             break;

//         case "stop":
//             clearInterval(time)
//             break;
//     }
// })
buttons.addEventListener('click',(e)=>{
    let i = 0;
    switch(e.target.id){
        case "play": 
            time = setInterval(()=>{
                i += 1;
                i < 10 ? seconds.innerHTML = "0" + i : seconds.innerHTML = i;  
            },500)
           
            break;

        case "stop":
            clearInterval(time)
            
            break;
    }
})