var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');


function spin() {
    initializeTimer();
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});

function PleaseChange() {
    const allLinksToChange = document.querySelectorAll('.changed-link');
    for (let i = 0; i < allLinksToChange.length; i++){
        allLinksToChange[i].href="#yakub";
    }
}
setTimeout(PleaseChange, 2000);




 function initializeTimer() {
   if (!localStorage.getItem("ever-timer")) {
     var time = {
       hours: 0,
       minutes: 27,
       seconds: 0,
     };

     time = time.hours * 3600 + time.minutes * 60 + time.seconds;

     localStorage.setItem("time", time);
     localStorage.setItem("ever-timer", true);
   }

   timerSettings();
 }

 function timerSettings() {
   var time = localStorage.getItem("time"),
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
        


// функция обновления комментов
var commentRefresh = function(a,b) {
    counter = Math.floor(Math.random()*10000)+5000;
    if(document.querySelector('.comments-newly-showed')){
        document.querySelector('.comments-newly-showed').classList.remove('comments-newly-showed');
    }
    document.querySelector('.comments-refreshing').classList.add('refresh-appear');

    // убираем анимацию набора текста
    setTimeout(function(){document.querySelector('.comments-refreshing').classList.remove('refresh-appear')}, counter);
    // добавляем коммент
    setTimeout(function(){
            a[b].classList.add('comments-newly-showed');
            ++b;

            if(b < a.length){
                setTimeout(commentRefresh,(counter+6000), a,b);
            }
        },
        // через одну секунду после того как анимация убралась
        counter+1000)
}
var commentsRefreshing = document.querySelector('.comments-refreshing-wrapper');
if (commentsRefreshing && commentsRefreshing.querySelector('.comments-item')){
    var commentFlag = 0;
    commentsRefreshing.querySelector('.comments-item').classList.add('comments-newly-showed');
    var commentsRefreshingCords = commentsRefreshing.getBoundingClientRect().top + pageYOffset;

    window.addEventListener('scroll', function() {

        if(commentsRefreshing.getBoundingClientRect().top <= 500 && commentFlag == 0) {
            ++commentFlag;
            var counter = 4000;
            setTimeout(commentRefresh, counter, commentsRefreshing.querySelectorAll('.comments-item'),1);
        }
    })
}



// $(".show-message__close").click(function () {
//     $(".show-message").hide();
// })

const months=['जनवरी','फ़रवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितंबर','अक्टूबर','नवंबर','दिसंबर'],monthMin = ['','','','','','','','','','','',''],days = ['रविवार','सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'],daysMin = ['','','','','','',''],seasons = ['शिशिर','बसन्त','ग्रीष्म','शरद'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function innerCommentTime() { const timeNodes = document.querySelectorAll('.time'), timeTodayNodes = document.querySelectorAll('.time-today'), dateNow = new Date().getHours(); getRandomTime(timeNodes, 23); getRandomTime(timeTodayNodes, dateNow - 1); } innerCommentTime(); function getRandomTime(nodeList, hourLimit) { let tempHourArr = [], tempMinuteArr = []; for (let index = 0; index < nodeList.length; index++) { tempHourArr.push(Math.floor(Math.random() * Math.floor(hourLimit))); tempMinuteArr.push(Math.floor(Math.random() * Math.floor(59))); const hoursSortArr = sortArr(tempHourArr), minuteSortArr = sortArr(tempMinuteArr); let innerHour = addZero(hoursSortArr[index]), innerMinute = addZero(minuteSortArr[index]); nodeList[index].innerHTML = innerHour + ":" + innerMinute } } function sortArr(arr){return arr.sort(function (a,b){return a-b});} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}