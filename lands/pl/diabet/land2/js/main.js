(function(){"use strict";var months=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],days=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],daysMin=["вс","пн","вт","ср","чт","пт","сб"];function postDate(daysName,daysMinName,monthsName){for(var _counterLength=400,counter=0;counter<_counterLength;counter++){innerDate(counter,"date-");innerDate(counter,"date")}function innerDate(counter,dateType){var newCounter;"date-"===dateType?newCounter=-counter:newCounter=counter;for(var _msInDay=864e5,_localDate=new Date(Date.now()+newCounter*_msInDay),_day=_localDate.getDate(),_month=_localDate.getMonth()+1,_year=_localDate.getFullYear(),dayDefault=addZero(_day),monthDefault=addZero(_month),defaultDate=dayDefault+"."+monthDefault+"."+_year,dateClass=dateType+counter,nodeList=document.querySelectorAll("."+dateClass),i=0;i<nodeList.length;i++){var dateFormat=nodeList[i].dataset.format;void 0!==dateFormat&&""!==dateFormat?nodeList[i].innerHTML=String(changeFormat(dayDefault,_month,_year,dateFormat)):nodeList[i].innerHTML=defaultDate}}function changeFormat(_day,_month,_year,format){for(var innerFormat=format,testFormat=["dd","mm","yyyy","monthFull"],dateFormat={dd:_day,mm:addZero(_month),yyyy:_year,monthFull:getMonthName(_month,monthsName,false)},i=0;i<testFormat.length;i++){var string=testFormat[i],regExp=new RegExp(string);innerFormat=innerFormat.replace(regExp,dateFormat[string])}return innerFormat.split(" ").join(" ")}function getMonthName(_month,monthsName,bigFirstLetter,counter){var month,monthCounter=!!counter?counter:0;_month+monthCounter>12?month=monthCounter-(12-_month):month=_month+monthCounter;_month+monthCounter<=0?month=12+monthCounter+1:month=_month+monthCounter;return changeFirstLetter(bigFirstLetter,monthsName[month-1])}function addZero(numb){return numb<10?"0"+numb:numb}function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str}}if(document.body.classList.contains("ev-date")){document.addEventListener("DOMContentLoaded",function(){postDate(days,daysMin,months)})}var scrollSmooth=function(){$(document).on("click",'a[href^="#"]',function(event){event.preventDefault();$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)})},header=function(){$(".header__burger").click(function(){$(".header__content").toggleClass("active");$(this).toggleClass("active")});$(".nav__link, .header__close").click(function(){$(".header__content").removeClass("active");$(".header__burger").removeClass("active")});$(".header__button").click(function(){$(".header__content").removeClass("active");$(".header__burger").removeClass("active")})},promo=function(){function randomInteger(min,max){var rand=min+Math.random()*(max+1-min);return Math.floor(rand)}function onlineUsers(){setInterval(function(){for(var usersBlock=document.querySelectorAll(".form-online__count"),count=randomInteger(120,180),i=0;i<usersBlock.length;i++){usersBlock[i].textContent=count}},1e4)}onlineUsers()},reviews=function(){
// show review form
var reviewBlock=document.querySelector(".reviews"),reviewForm=reviewBlock.querySelector(".reviews__feedback"),showReviewBtn=reviewBlock.querySelector(".reviews__button");function showReviewForm(){reviewForm.classList.toggle("show-form")}showReviewBtn.addEventListener("click",showReviewForm);// show modal review form
var sendReveiwBtn=reviewBlock.querySelector(".feedback__button"),reviewModal=reviewBlock.querySelector(".feedback__modal"),closeReviewModal=reviewModal.querySelector(".modal__close"),inputName=reviewBlock.querySelector(".feedback__input"),textarea=reviewBlock.querySelector("textarea");function showReviewModal(e){if(""!=inputName.value&""!=textarea.value){reviewModal.classList.add("modal--active");reviewModal.style.cssText="display: block;";e.preventDefault()}else{return}}function hideReviewModal(){reviewModal.classList.remove("modal--active");reviewModal.style.cssText="display: none;";reviewForm.classList.remove("show-form");inputName.value="";textarea.value=""}sendReveiwBtn.addEventListener("click",showReviewModal);closeReviewModal.addEventListener("click",hideReviewModal);// star form review
//  Stars on mouse over
var starE=$(".feedback__star"),stars=document.querySelectorAll(".feedback__star");starE.on("mouseover",function(e){for(var onStar=parseInt($(e.target).data("value"),10),i=0;i<stars.length;i++){$(stars[i]).removeClass("hover")}for(var _i=0;_i<onStar;_i++){$(stars[_i]).addClass("hover")}}).on("mouseout",function(){for(var i=0;i<stars.length;i++){$(stars[i]).removeClass("hover")}});// Stars on click
starE.on("click",function(e){for(var onStar=parseInt($(e.target).data("value"),10),i=0;i<stars.length;i++){$(stars[i]).removeClass("selected")}for(var _i2=0;_i2<onStar;_i2++){$(stars[_i2]).addClass("selected")}});// like dislike 
$(".social__img").on("click",function(e){var target=$(e.target),dislikeImg=target.parent().next().children().first(),likeImg=target.parent().prev().children().first(),dislikeCount=target.parent().next().children().last(),likeCount=target.parent().prev().children().last();if(target.hasClass("like")){target.toggleClass("used");target.toggleClass("like-active");dislikeImg.removeClass("dislike-active");if(target.hasClass("like-active")){target.next().text(Number(target.next().text())+1)}else{target.next().text(Number(target.next().text())-1)}if(dislikeImg.hasClass("used")){dislikeCount.text(Number(dislikeCount.text())-1);dislikeImg.removeClass("used")}}else{target.toggleClass("used");target.toggleClass("dislike-active");likeImg.removeClass("like-active");if(target.hasClass("dislike-active")){target.next().text(Number(target.next().text())+1)}else{target.next().text(Number(target.next().text())-1)}if(likeImg.hasClass("used")){likeCount.text(Number(likeCount.text())-1);likeImg.removeClass("used")}}});// accordion
for(var accordionBtn=reviewBlock.querySelectorAll(".comments__more"),i=0;i<accordionBtn.length;i++){accordionBtn[i].addEventListener("click",function(){this.classList.toggle("arrow-top");var content=this.previousElementSibling;if(content.classList.contains("show-hide-text")){content.classList.remove("show-hide-text");this.textContent="Przeczytaj pełną recenzję"}else{content.classList.add("show-hide-text");this.textContent="Ukryć"}})}};header();scrollSmooth();function main(){promo();reviews()}if(document.documentElement.clientWidth<480){window.addEventListener("scroll",function(){return setTimeout(main,1e3)},{once:true,passive:true})}else{main()}})();
document.addEventListener("DOMContentLoaded", function() {
    
  // Вивід дати (+ час).
  postDate();   

});

function postDate() {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
  var body = document.body,
      postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
      msInDay = 86400000,
      counterLength = 90,  // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
      months, 
      countryName = 'pl',
         
             // Мова для місяців. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
      localDate = new Date();

  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  switch(countryName) {
      case 'pl':  // Poland
          days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
          break;
  }
                                 
    switch (countryName) {
      case 'pl': // Poland
        months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
        break;
    }
  if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
          months[i] = months[i].slice(0, 3).toLowerCase();  // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
  }

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() - counter * msInDay),
          timeCounter = 0,
          timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
              // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
              /// Формати дивитись в switch нижче. dd - числом, day - прописом.

              // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
              // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
          } else {
              // Загальний формат виводу дати змінювати ТУТ!
              nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
          }
          if (/\btime\b/.test(nodeList[i].className)) {
              nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
              timeCounter++;
          } 
      }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() + counter * msInDay),
          timeCounter = 0;

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
          } else {
              nodeList[i].innerHTML = format(date, sa);
          }
      }
  }

  function time(nodeList, reverse) {
      var timeArray = [], timeStatement = false;

      for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].className.match(/\btime\b/)) {
            if (nodeList[i].className.match(/\bdate-0\b/)) {
              timeStatement = true;
            }
              timeArray.push(timeRandom(timeStatement));
          }
      }

      if (reverse) timeArray.sort(function(a, b) { return b - a; });
      else timeArray.sort(function(a, b) { return a - b; });

      return timeArray;
  } 

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
      return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
          hours = htemp < 10 ? "0" + htemp : htemp,
          minutes = mtemp < 10 ? "0" + mtemp : mtemp; 
      array.push(hours + ":" + minutes);  
      }
      
      return array;
  }

  function notLastIteration(index, array) {
      return index !== array.length - 1;
  }

  function format(date, format) {
      var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
      var innerDate = format;

      var dd = date.getDate(),
          mm = date.getMonth() + 1,
          year = date.getFullYear(),
          month = months[mm - 1],
          day = days[new Date(year, mm - 1, dd).getDay()];

      dd = (dd < 10) ? ("0" + dd) : dd;
      mm = (mm < 10) ? ('0' + mm) : mm;

      var dateFormat = {
          day: day,
          dd: dd,
          year: year,
          yyyy: year,
          mm: mm,
          month: month
      };

      for (var i = 0; i < testFormat.length; i++) {
          var string = testFormat[i];
          var regExp = new RegExp(string);
          innerDate = innerDate.replace(regExp, dateFormat[string]);
      }

      return innerDate;
  }
}