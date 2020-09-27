
var Cdays = document.getElementById('days');
var Chours = document.getElementById('hours');
var Cminutes = document.getElementById('minutes');
var Cseconds = document.getElementById('seconds');

var newYears = '1 Jan 2021';

function countdown(){
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();

    var tseconds = (newYearsDate - currentDate) / 1000;
    var days = Math.floor(tseconds / 3600 / 24);
    var hours = Math.floor(tseconds / 3600) % 24;
    var mins = Math.floor(tseconds / 60) % 60;
    var seconds = Math.floor(tseconds) % 60;
    console.log(days, hours, mins, seconds);

    Cdays.innerHTML = days;
    Chours.innerHTML = formatTime(hours);
    Cminutes.innerHTML = formatTime(mins);
    Cseconds.innerHTML = formatTime(seconds);
}

countdown();

function formatTime(time){ 

   return time < 10 ? '0'+time+'' : time;
}
setInterval(countdown, 1000);