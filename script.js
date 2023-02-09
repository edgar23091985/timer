window.onload = function(){
    let seconds = "00";
    let tens = "00";
    let mySec = document.getElementById("seconds");
    let myTens = document.getElementById("tens");
let buttonStart = document.getElementById("buttonStart");
let buttonStop = document.getElementById("buttonStop");
let buttonReset = document.getElementById("buttonReset");
let interval;
function startTimer() {
    tens++
    
    // console.log(tens);]

    if(tens<9){
        myTens.innerHTML = "0" + tens;
    }
    if(tens>9){
      myTens.innerHTML=tens;  
    }
    if(tens>99){
        seconds++
        console.log(seconds);
        mySec.innerHTML = "0" + seconds;
        tens=0;
        myTens.innerHTML = "0" +tens;
    }
if(seconds>9){
    mySec.innerHTML= seconds;
}
}

buttonStart.onclick = function (){
    clearInterval(interval);
interval = setInterval(startTimer, 10)
}
buttonStop.onclick = function(){
    clearInterval(interval);
} 
buttonReset.onclick = function(){
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    myTens.innerHTML = tens;
    mySec.innerHTML = seconds;

}

}