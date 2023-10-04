//postdate
const months=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],monthMin=["","","","","","","","","","","",""],days=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],daysMin=["","","","","","",""],seasons=["inverno","primavera","ver\xe3o","outono"];function index(e, t, o, n, a){for(let r=0; r<60; r++)i(r,"date-"),i(r,"date");function i(e, t){let o;o="date-"===t?-e:e;let n=new Date(Date.now()+864e5*o),a=n.getDate(),r=n.getMonth()+1,i=n.getFullYear(),l=d(a),u=d(r),m=l+"."+u+"."+i,f=document.querySelectorAll("."+(t+e));for(let y=0; y<f.length; y++){let $=f[y].dataset.format;void 0!==$&&""!==$?f[y].innerHTML=String(s(l,r,i,$,o)):f[y].innerHTML=m}}function s(e, t, o, n, a){let r=n,i=["dd","mm","yyyy"],s={dd:e,mm:d(t),yyyy:o};for(let l=0; l<i.length; l++){let u=i[l],m=RegExp(u);r=r.replace(m,s[u])}return r.split(" ").join("\xa0")}function d(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){index(days,daysMin,months,monthMin,seasons)});

//smooth scroll
for(var linkNav=document.querySelectorAll('[href^="#"]'),V=.2,i=0;i<linkNav.length;i++)linkNav[i].addEventListener("click",function(e){e.preventDefault();var l=window.pageYOffset,n=this.href.replace(/[^#]*(.*)/,"$1");function r(e){null===start&&(start=e);var a=e-start,c=t<0?Math.max(l-a/V,l+t):Math.min(l+a/V,l+t);window.scrollTo(0,c),c!=l+t?requestAnimationFrame(r):location.hash=n}t=document.querySelector(n).getBoundingClientRect().top,start=null,requestAnimationFrame(r)},!1);

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