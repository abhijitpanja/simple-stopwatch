let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let running = 0;
let interval = null;
function Stopwatch() {
    milliseconds++;
    if(milliseconds / 100 === 1){
        milliseconds = 0;
        seconds++;
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
            if(minutes / 60 ===1){
                minutes = 0;
                hours++;
            }
        }
    }
    if(milliseconds<10){
        displayMilliseconds = '00' + milliseconds.toString();
    }
    else if(10<milliseconds<100){
        displayMilliseconds = '0' + milliseconds.toString();
    }
    else{
        displayMilliseconds = milliseconds;
    }
    if(seconds<10){
        displaySeconds = '0' + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes<10){
        displayMinutes = '0' + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if(hours<10){
        displayHours = '0' + hours.toString();
    }
    else{
        displayHours = hours;
    }
    document.getElementById('screen').innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds + '.' + displayMilliseconds;
}
function startStop() {
    if(running === 0){
        interval = window.setInterval(Stopwatch, 10);
        document.getElementById('start').innerHTML = 'Stop';
        running = 1;
    }
    else{
        window.clearInterval(interval);
        document.getElementById('start').innerHTML = 'Start';
        running = 0;
    }
}
function reset() {
    window.clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('screen').innerHTML = '00:00:00.000';
    document.getElementById('start').innerHTML = 'Start';
}