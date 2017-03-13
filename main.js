var times= 0;
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 75) {
     times++;
     alert(times);
   }
}
//document.getElementById('pressed').innerHTML = '5';
