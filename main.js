var i = 60;
var times= 0;
var audio = new Audio('ding.mp3');
var countingDown = false;


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
     audio.play();
     document.getElementById('pressed').innerHTML = times;
   }
}

function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('TIME UP BITCH');
    countingDown = false;
    times = 0;
  }
  else if(countingDown){
    setTimeout(onTimer, 1000);
  }
}
