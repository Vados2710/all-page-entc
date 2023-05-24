//post date
const months=["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],monthMin=["","","","","","","","","","","",""],days=["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],daysMin=["","","","","","",""],seasons=["zima","wiosna","lato","jesień"];function index(e, t, n, i, o){for(let a=0; a<60; a++)s(a,"date-"),s(a,"date");function s(e, t){let n;n="date-"===t?-e:e;let i=new Date(Date.now()+864e5*n),o=i.getDate(),a=i.getMonth()+1,s=i.getFullYear(),l=r(o),c=r(a),y=l+"."+c+"."+s,m=document.querySelectorAll("."+(t+e));for(let $=0; $<m.length; $++){let u=m[$].dataset.format;void 0!==u&&""!==u?m[$].innerHTML=String(d(l,a,s,u,n)):m[$].innerHTML=y}}function d(e, t, n, i, o){let a=i,s=["dd","mm","yyyy"],d={dd:e,mm:r(t),yyyy:n};for(let l=0; l<s.length; l++){let c=s[l],y=RegExp(c);a=a.replace(y,d[c])}return a.split(" ").join("\xa0")}function r(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){index(days,daysMin,months,monthMin,seasons)});

//smooth scroll
for(var linkNav=document.querySelectorAll('[href^="#"]'),V=.2,i=0;i<linkNav.length;i++)linkNav[i].addEventListener("click",function(e){e.preventDefault();var l=window.pageYOffset,n=this.href.replace(/[^#]*(.*)/,"$1");function r(e){null===start&&(start=e);var a=e-start,c=t<0?Math.max(l-a/V,l+t):Math.min(l+a/V,l+t);window.scrollTo(0,c),c!=l+t?requestAnimationFrame(r):location.hash=n}t=document.querySelector(n).getBoundingClientRect().top,start=null,requestAnimationFrame(r)},!1);

//timer
function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};
