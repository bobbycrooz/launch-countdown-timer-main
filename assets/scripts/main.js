const timer = document.getElementById('root');
const dayEle = document.getElementById('days');
const hrsEle = document.getElementById('hrs');
const minEle = document.getElementById('min');
const secEle = document.getElementById('sec');


// time conversions
const toDays = 1000 * 60 * 60 * 24;
const toHrs = 1000 * 60 * 60
const toMin = 1000 * 60

// set clock 
let clock = setInterval(tick, 1000);

// update timer on every tick
function tick(){
    let enddTime = new Date("Feb 14,2021").getTime()
    let now = new Date().getTime()
    let t = enddTime - now
    
     let days = t / toDays
    dayEle.innerHTML = Math.floor(days)

    let hrs = (t % toDays) / toHrs
    hrsEle.innerHTML = Math.floor(hrs)

    let min = (t % toHrs) / toMin
    minEle.innerHTML = Math.floor(min)

    let sec = (t % toMin) / 1000
    secEle.innerHTML = Math.floor(sec)

}

