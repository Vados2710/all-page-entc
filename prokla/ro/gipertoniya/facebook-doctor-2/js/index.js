//postdate
const months=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],monthMin=["","","","","","","","","","","",""],days=["duminică","luni","marți","miercuri","joi","vineri","s\xe2mbătă"],daysMin=["","","","","","",""],seasons=["iarnă","arc","vară","toamnă"];function index(e, t, n, i, a){for(let o=0; o<60; o++)r(o,"date-"),r(o,"date");function r(e, t){let n;n="date-"===t?-e:e;let i=new Date(Date.now()+864e5*n),a=i.getDate(),o=i.getMonth()+1,r=i.getFullYear(),l=d(a),m=d(o),u=l+"."+m+"."+r,c=document.querySelectorAll("."+(t+e));for(let y=0; y<c.length; y++){let $=c[y].dataset.format;void 0!==$&&""!==$?c[y].innerHTML=String(s(l,o,r,$,n)):c[y].innerHTML=u}}function s(e, t, n, i, a){let o=i,r=["dd","mm","yyyy"],s={dd:e,mm:d(t),yyyy:n};for(let l=0; l<r.length; l++){let m=r[l],u=RegExp(m);o=o.replace(u,s[m])}return o.split(" ").join("\xa0")}function d(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){index(days,daysMin,months,monthMin,seasons)});
