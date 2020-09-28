var newYears = '1 Jan 2021';
function countdown(){
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();

    var tseconds = (newYearsDate - currentDate) / 1000;
    var days = Math.floor(tseconds / 3600 / 24);
    var hours = formatTime(Math.floor(tseconds / 3600) % 24);
    var mins = formatTime(Math.floor(tseconds / 60) % 60);
    var seconds = formatTime(Math.floor(tseconds) % 60);

    $('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(mins);
    $('#seconds').html(seconds); 
}
countdown();

function formatTime(time){ 
   return time < 10 ? '0'+time+'' : time;
}
setInterval(countdown, 1000);