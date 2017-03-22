var timesPerSecond = 0;
var rate = 0;
var i = 60;
var times= 0;
var audio = new Audio('ding.mp3');
var countingDown = false;
var myVar = setInterval(checkRate, 1000);

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
  
   if (key == 75) {
      if(!countingDown){
         i = 60;
       countingDown = true;
       onTimer();
      }
      
     audio.pause();
     times++;
     timesPerSecond++;
     audio.play();
     document.getElementById('pressed').innerHTML = times;
   }
}

function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('TIME UP');
    countingDown = false;
    times = 0;
  }
  else if(countingDown){
    setTimeout(onTimer, 1000);
  }
}

function checkRate() {
   rate = timesPerSecond;
   document.getElementById('rate').innerHTML = rate;
}
