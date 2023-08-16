//post date
const months=["ο Ιανουάριος","ο Φεβρουάριος","ο Μάρτιος","ο Απρίλιος","ο Μάιος","ο Ιούνιος","ο Ιούλιος","ο Αύγουστος","ο Σεπτέμβριος","ο Οκτώβριος","ο Νοέμβριος","ο Δεκέμβριος"],monthMin=["","","","","","","","","","","",""],days=["η Κυριακή","η Δευτέρα","η Τρίτη","η Τετάρτη","η Πέμπτη","η Παρασκευή","το Σάββατο"],daysMin=["","","","","","",""],seasons=["ο χειμώνας","η άνοιξη","το καλοκαίρι","το φθινόπωρο"];function postDate(t,e,n,o,l){for(let a=0;a<60;a++)s(a,"date-"),s(a,"date");function s(t,e){let n;n="date-"===e?-t:t;let o=new Date(Date.now()+864e5*n),l=o.getDate(),a=o.getMonth()+1,s=o.getFullYear(),r=i(l),$=i(a),y=r+"."+$+"."+s,u=document.querySelectorAll("."+(e+t));for(let c=0;c<u.length;c++){let m=u[c].dataset.format;void 0!==m&&""!==m?u[c].innerHTML=String(d(r,a,s,m,n)):u[c].innerHTML=y}}function d(t,e,o,l,a){let s=l,d=["dd","mm","yyyy","monthFull"],r={dd:t,mm:i(e),yyyy:o,monthFull:function t(e,n,o,l){var a,s;let d=0,i;return i=e+d>12?d-(12-e):e+d,a=o,s=n[(i=e+d<=0?12+d+1:e+d)-1],a&&s&&s.length>0?s[0].toUpperCase()+s.slice(1):s}(e,n,!1)};for(let $=0;$<d.length;$++){let y=d[$],u=RegExp(y);s=s.replace(u,r[y])}return s.split(" ").join("\xa0")}function i(t){return t<10?"0"+t:t}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){postDate(days,daysMin,months,monthMin,seasons)});


//comment form
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let city = document.getElementById('commentCity');
let age = document.getElementById('commentAge');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');

commentImage.addEventListener('change', function (event) {
    event.preventDefault();
    if (needPhoto.classList.contains("show")) {
        needPhoto.classList.remove("show");
    }
    if (!addedPhoto.classList.contains("show")) {
        addedPhoto.classList.add("show");
    }
    if (commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Η φωτογραφία&nbsp;ανέβηκε';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Επισύναψη&nbsp;φωτογραφίας';
    }
});

btn.addEventListener('click', function (event) {
    event.preventDefault();
    message.innerHTML = '';

    if (name.value.trim() && age.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Ευχαριστώ! Η κριτική στάλθηκε για εποπτεία.';
        name.value = '';
        age.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Συμπληρώστε όλα τα πεδία'
    }
    message.classList.add('show');
});