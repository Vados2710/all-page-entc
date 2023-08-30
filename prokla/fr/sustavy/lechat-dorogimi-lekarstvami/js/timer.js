let time = 600;
let intr;
let count = 0;

function start_timer() {
    count++
    if (count === 1) {
        intr = setInterval(tick, 1000);
        count++
    } else {
        return false
    }
};

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.querySelector('#min').innerHTML = "" + mins;
    document.querySelector('#sec').innerHTML = secs
}



window.onload = function() {
    setInterval(function () {
        start_timer()
    }, 100)
  };