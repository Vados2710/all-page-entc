/**
 * Created by operator on 13.12.2016 ã..
 */
function startTimer3(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;



        document.querySelector('#hm2').textContent =minutes;
        document.querySelector('#hs2').textContent =seconds;



        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



var mins = 60 * 15;
startTimer3(mins);

