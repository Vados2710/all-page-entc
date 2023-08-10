//post date
const months=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",],monthMin=["","","","","","","","","","","",""],days=["domenica","lunedi","marted\xec","mercoled\xec","giovedi","venerd\xec","sabato",],daysMin=["","","","","","",""],seasons=["inverno","primavera","estate","autunno"];function postDate(e,t,n,o,a){for(let r=0;r<60;r++)i(r,"date-"),i(r,"date");function i(e,t){let n;n="date-"===t?-e:e;let o=new Date(Date.now()+864e5*n),a=o.getDate(),r=o.getMonth()+1,i=o.getFullYear(),d=l(a),m=l(r),u=d+"."+m+"."+i,c=document.querySelectorAll("."+(t+e));for(let y=0;y<c.length;y++){let g=c[y].dataset.format;void 0!==g&&""!==g?c[y].innerHTML=String(s(d,r,i,g,n)):c[y].innerHTML=u}}function s(e,t,n,o,a){var r,i;let s=o,d=["dd","mm","yyyy","year"],m={dd:e,mm:l(t),yyyy:n,year:(r=n,i=a,r+i)};for(let u=0;u<d.length;u++){let c=d[u],y=RegExp(c);s=s.replace(y,m[c])}return s.split(" ").join("\xa0")}function d(e,t){return e+t}function l(e){return e<10?"0"+e:e}function m(e,t){return e&&t&&t.length>0?t[0].toUpperCase()+t.slice(1):t}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){postDate(days,daysMin,months,monthMin,seasons)});

var reviews = function () {
  var inputFile = $(".input-file");
  var labelFile = $(".input-file");
  var fileText = $(".reviews-form__file-text");
  var inputName = $(".inputName");
  var inputText = $(".inputText");
  inputFile.change(function (e) {
    fileText.html("Foto caricata");
    fileText.css("color", "#237a27");
    labelFile.addClass("rloaded");
  });
  $(".com-form").submit(function (e) {
    e.preventDefault();
    fileText.html("Allega foto");
    fileText.css("color", "#000");
    alert(
      "Grazie per il feedback, la tua recensione è inviata per la moderazione!"
    );
    labelFile.removeClass("rloaded");
    inputName.val("");
    inputText.val("");
  });
};
reviews();