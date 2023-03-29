$(document).ready(function () {
    let prodLeft = [2, 3, 4, 6, 7, 8, 9, 9, 11, 11, 12, 14, 14, 15, 15, 16, 16, 16, 17, 17, 18, 18];

    function a(b) {
        let timeLeft = b;
        let secondsLeft, minutesLeft;
        let timerElement = document.querySelector(".timer");
        let count = setInterval(function () {
            if (timeLeft <= 0) {
                clearTimeout(count)
            } else {
                timeLeft--;
                let min = parseInt(timeLeft / 60);
                minutesLeft = min.toString();
                if (minutesLeft.length === 1) {
                    minutesLeft = "0" + minutesLeft
                }
                let sec = timeLeft % 60;
                secondsLeft = sec.toString();
                if (secondsLeft.length === 1) {
                    secondsLeft = "0" + secondsLeft
                }
                if (sec === 0) {
                    document.querySelector(".prod_left_val").innerHTML = prodLeft[min]
                }

            }
        }, 1000)
    }

    let name = window.location.pathname;
    let tstamp = window.localStorage.getItem(name + "-tstamp");
    let limitedSeconds = 1278;
    let prodElement = document.querySelector(".prod_left_val");
    if (tstamp !== null) {
        let now = Math.round(new Date().getTime() / 1000);
        let then = tstamp;
        limitedSeconds = limitedSeconds - (now - then);
        let prod = Math.floor(limitedSeconds / 60);
        if (prod < 0) {
            prod = 0
        }
        prodElement.innerHTML = prodLeft[prod]
    } else {
        tstamp = Math.round(new Date().getTime() / 1000);
        window.localStorage.setItem(name + "-tstamp", tstamp);
        prodElement.innerHTML = 19
    }
    a(limitedSeconds);

});