var i = 60;
var times= 0;
var audio = new Audio('ding.mp3');


window.onkeypress = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   i = 60;
   onTimer();

   if (key == 75) {
     audio.pause();
     times++;
     audio.play();
     document.getElementById('pressed').innerHTML = times;
   }
}

function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i-0.1;
  if (i < 0) {
    alert('You lose!');
  }
  else {
    setTimeout(onTimer, 100);
  }
}
