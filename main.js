var times= 0;
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 75) {
     times++;
     document.getElementById('pressed').innerHTML = times;
   }
}
