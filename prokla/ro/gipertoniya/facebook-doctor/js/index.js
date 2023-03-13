//postdate
const months=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],monthMin=["","","","","","","","","","","",""],days=["duminică","luni","marți","miercuri","joi","vineri","s\xe2mbătă"],daysMin=["","","","","","",""],seasons=["iarnă","arc","vară","toamnă"];function index(e, t, n, i, a){for(let o=0; o<60; o++)r(o,"date-"),r(o,"date");function r(e, t){let n;n="date-"===t?-e:e;let i=new Date(Date.now()+864e5*n),a=i.getDate(),o=i.getMonth()+1,r=i.getFullYear(),l=d(a),m=d(o),u=l+"."+m+"."+r,c=document.querySelectorAll("."+(t+e));for(let y=0; y<c.length; y++){let $=c[y].dataset.format;void 0!==$&&""!==$?c[y].innerHTML=String(s(l,o,r,$,n)):c[y].innerHTML=u}}function s(e, t, n, i, a){let o=i,r=["dd","mm","yyyy"],s={dd:e,mm:d(t),yyyy:n};for(let l=0; l<r.length; l++){let m=r[l],u=RegExp(m);o=o.replace(u,s[m])}return o.split(" ").join("\xa0")}function d(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){index(days,daysMin,months,monthMin,seasons)});

//timer
initializeTimer();

function initializeTimer() {

    if (!localStorage.getItem("ever-timer")) {
        var time = {
            hours: 0,
            minutes: 10,
            seconds: 0
        };

        time = time.hours * 3600 + time.minutes * 60 + time.seconds;

        localStorage.setItem("time", time);
        localStorage.setItem("ever-timer", true);
    }

    timerSettings();

}

function timerSettings() {
    var time = localStorage.getItem('time'),
        different = document.querySelector(".timer-different"),
        hours = parseInt(time / 3600, 10),
        minutes = parseInt((time - hours * 3600) / 60, 10),
        seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : "" + minutes;
    seconds = seconds < 10 ? "0" + seconds : "" + seconds;
    hours = hours < 10 ? "0" + hours : "" + hours;

    var hoursHTML = document.getElementsByClassName("hours");
    var minutesHTML = document.getElementsByClassName("minutes");
    var secondsHTML = document.getElementsByClassName("seconds");

    if (--time < 0) {
        localStorage.removeItem("ever-timer");
        return;
    }
    if (different) {
        seconds = seconds.split("");
        minutes = minutes.split("");
        hours = hours.split("");

        diFilling(hoursHTML, hours);
        diFilling(minutesHTML, minutes);
        diFilling(secondsHTML, seconds);
    } else {
        filling(hoursHTML, hours);
        filling(minutesHTML, minutes);
        filling(secondsHTML, seconds);
    }

    localStorage.setItem("time", time);
    setTimeout(timerSettings, 1000);
}

function filling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value;
    }
}

function diFilling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value[i % 2];
    }
}