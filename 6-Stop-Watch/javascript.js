// Variables for buttons

const startstopbtn = document.querySelector('#startstopbtn'); 
const resetbtn = document.querySelector('#resetbtn'); 

//variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for time leading zeros
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

//variables for timerstatus and timerinterval
let timerstatus = "stopped";
let timerinterval = null;

//stop watch function

function stopwatch() {
    
    seconds++;

   
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    

    if (seconds < 10) {
        leadingseconds = "0" + seconds.toString();
    } else {
        leadingseconds = seconds;
    }
    if (minutes < 10) {
        leadingminutes = "0" + minutes.toString();
    } else {
        leadingminutes = minutes;
    }
    if (hours < 10) {
        leadinghours = "0" + hours.toString();
    } else {
        leadinghours = hours;
    }

    
    let displaytime = document.getElementById('timer').innerText = leadinghours + ':' + leadingminutes + ':' + leadingseconds;

}



startstopbtn.addEventListener('click', function(){
    if (timerstatus === "stopped") {
        timerinterval = window.setInterval(stopwatch, 1000);
        document.getElementById('startstopbtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerstatus = "started";
    } else {
        window.clearInterval(timerinterval);
        document.getElementById('startstopbtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerstatus = "stopped";
    }
});

resetbtn.addEventListener('click', function(){
    window.clearInterval(timerinterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00"
});


