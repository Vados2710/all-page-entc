const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["invierno", "primavera", "verano", "otoño"];

function postDate() {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, "date-");
        innerDate(counter, "date")
    }

    function innerDate(counter, dateType) {
        let newCounter;
        "date-" === dateType ? newCounter = -counter : newCounter = counter;
        const _msInDay = 864e5,
            _localDate = new Date(Date.now() + newCounter * _msInDay),
            _day = _localDate.getDate(),
            _month = _localDate.getMonth() + 1,
            _year = _localDate.getFullYear(),
            dayDefault = addZero(_day),
            monthDefault = addZero(_month),
            defaultDate = dayDefault + "." + monthDefault + "." + _year,
            dateClass = dateType + counter,
            nodeList = document.querySelectorAll("." + dateClass);
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = defaultDate
        }
    }

    function addZero(numb) {
        return numb < 10 ? "0" + numb : numb
    }
}
if (document.body.classList.contains("ev-date")) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    })
}
initializeTimer();

function initializeTimer() {
    if (!localStorage.getItem("ever-timer")) {
        var time = {
            hours: 0,
            minutes: 27,
            seconds: 0
        };
        time = 3600 * time.hours + 60 * time.minutes + time.seconds;
        localStorage.setItem("time", time);
        localStorage.setItem("ever-timer", true)
    }
    timerSettings()
}

function timerSettings() {
    var time = localStorage.getItem("time"),
        different = document.querySelector(".timer-different"),
        hours = parseInt(time / 3600, 10),
        minutes = parseInt((time - 3600 * hours) / 60, 10),
        seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : "" + minutes;
    seconds = seconds < 10 ? "0" + seconds : "" + seconds;
    hours = hours < 10 ? "0" + hours : "" + hours;
    var hoursHTML = document.getElementsByClassName("hours"),
        minutesHTML = document.getElementsByClassName("minutes"),
        secondsHTML = document.getElementsByClassName("seconds");
    if (--time < 0) {
        localStorage.removeItem("ever-timer");
        return
    }
    if (different) {
        seconds = seconds.split("");
        minutes = minutes.split("");
        hours = hours.split("");
        diFilling(hoursHTML, hours);
        diFilling(minutesHTML, minutes);
        diFilling(secondsHTML, seconds)
    } else {
        filling(hoursHTML, hours);
        filling(minutesHTML, minutes);
        filling(secondsHTML, seconds)
    }
    localStorage.setItem("time", time);
    setTimeout(timerSettings, 1e3)
}

function filling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value
    }
}

function diFilling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value[i % 2]
    }
}