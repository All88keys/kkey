var times= 0;
var audio = new Audio('ding.mp3');


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 75) {
     times++;
     audio.play();
     document.getElementById('pressed').innerHTML = times;
   }
}
