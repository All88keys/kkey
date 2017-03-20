var times= 0;
var audio = new Audio('ding.mp3');


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 75) {
     audio.pause();
     times++;
     audio.play();
     document.getElementById('pressed').innerHTML = times;
   }
}

i = 60;
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('You lose!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}
