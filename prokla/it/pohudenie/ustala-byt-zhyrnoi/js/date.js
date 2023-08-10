
const months=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],monthMin=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],days=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],daysMin=["вс","пн","вт","ср","чт","пт","сб"],seasons=["зима","весна","лето","осень"];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
                       

$(".line__content").slick({
  infinite: !1,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: !0,
  dots: !0,
 
  centerPadding: "14px",
  prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="43" height="32" viewBox="0 0 43 32"><g><g><path  d="M.43 17.03l13.845 14.502c.54.578 1.414.578 1.954 0 .54-.58.54-1.522 0-2.1L4.743 17.465H41.65c.763 0 1.382-.665 1.382-1.486 0-.818-.619-1.483-1.382-1.483H4.743L16.23 2.53c.54-.579.54-1.517 0-2.1a1.341 1.341 0 0 0-.977-.434c-.354 0-.708.147-.978.435L.43 14.93c-.54.58-.54 1.52 0 2.1z"/></g></g></svg>',
  nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32"><g><g><path d="M43.554 17.03L29.336 31.533a1.413 1.413 0 0 1-2.037 0 1.518 1.518 0 0 1 0-2.1l11.76-11.966H1.44c-.795 0-1.44-.665-1.44-1.486 0-.818.645-1.483 1.44-1.483h37.618L27.3 2.53a1.517 1.517 0 0 1 0-2.1c.282-.287.65-.434 1.019-.434.368 0 .737.147 1.018.435L43.554 14.93c.562.58.562 1.52 0 2.1z"/></g></g></svg>',
  responsive: [{
    breakpoint: 1220,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !0,
      centerPadding: "2px"
    }
  }, {
    breakpoint: 1023,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !1,
      dots: !0,
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !1,
      dots: !0
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !1,
      dots: !0
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !1,
      dots: !0
    }
  }]
});




let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let city = document.getElementById('commentCity');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');

commentImage.addEventListener('change', function(event){
    event.preventDefault();
    if(needPhoto.classList.contains("show")) {
        needPhoto.classList.remove("show");
    }
    if(!addedPhoto.classList.contains("show")) {
        addedPhoto.classList.add("show");
    }
    if(commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Foto caricata';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Aggiungi foto';
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Grazie! La tua recensione è inviata per la moderazione.';
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Compila tutti i campi'
    }  
    message.classList.add('show');
});

