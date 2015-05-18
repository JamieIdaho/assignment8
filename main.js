var showTime = document.querySelector('#showTime');
var showTime = document.querySelector('#clock');


var t = window.setInterval(function getTime() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  if(hours <= 9) {
    hours = '0' + hours;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }


  var currentTime = '#' + hours + minutes + seconds;
  showTime.innerHTML = currentTime;
  clock.style.backgroundColor = currentTime;



  return currentTime;

}, 1000);






