const months=['януари','февруари','март','април','май','юни','юли','август','септември','октомври','ноември','декември'],monthMin = ['','','','','','','','','','','',''],days = ['неделя','понеделник','вторник','сряда','четвъртък','петък','събота'],daysMin = ['','','','','','',''],seasons = ['зима','пролет','лято','есен'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, monthDefault, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: _month, yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


let name = document.getElementById('name');
let city = document.getElementById('city');
let message = document.getElementById('message');
let file = document.getElementById('file');
let btn = document.getElementById('createReview');

btn.addEventListener('click', function(){
   if (name.value.trim() !== '' && city.value.trim() !== '' && message.value.trim() !== '') {
      name.value = '';
      city.value = '';
      message.value = '';
      document.getElementById('messageError').classList.remove('show');
      document.getElementById('iconFileLoad').classList.remove('show');
      document.getElementById('iconFile').classList.add('show')
      document.getElementById('feedback').classList.add('show');
      setTimeout(function () {
         document.getElementById('feedback').classList.remove('show');
      }, 2000)
   } else {
      document.getElementById('messageError').classList.add('show');
   }
})

file.addEventListener('change', function () {
   if (file.files.length > 0) {
      document.getElementById('iconFileLoad').classList.add('show');
      document.getElementById('iconFile').classList.remove('show')
   } else {
      document.getElementById('iconFileLoad').classList.remove('show');
      document.getElementById('iconFile').classList.add('show')
   }
})


var block = document.querySelector('.sidebar__inner');
var positionBlockTop = block.getBoundingClientRect().top + window.pageYOffset;
var blockComments = document.getElementById('comments');
var positionBlockCommentsTop = blockComments.getBoundingClientRect().top + window.pageYOffset;
var sidebar = document.getElementById('side');

window.addEventListener('resize', function(){
    block.style.position = 'static';
    positionBlockTop = block.getBoundingClientRect().top + window.pageYOffset;
});
window.addEventListener('scroll', function() {
    console.log(window.pageYOffset)

   if (window.pageYOffset < 5800  && window.pageYOffset > 120) {
      block.style.position = 'fixed';
      block.style.top = 20 + 'px';
      block.style.bottom = 'auto';
   } else if (window.pageYOffset > 5800 && window.pageYOffset < 120) {
      block.style.position = 'absolute';
      block.style.top = 'auto';
      block.style.bottom = 20 + 'px';
   } else{
       block.style.position = 'static';
   }
});

const fieldInput = document.querySelectorAll('.field_input')
const accept = document.querySelector('#accept')


accept.addEventListener('click', showResult)
var values  = {
    growth: 0,
    age: 0,
    sizeNow: 0,
    wishSize: 0
}
for (var i=0;i < fieldInput.length;i++){
    fieldInput[i].onchange = function (){
        values[this.getAttribute('name')] = this.value
    }
}

function showResult(){
    var valuesMap = Object.keys(values).map(function(e) {
        return values[e]
    })
    var resultValue = valuesMap.every(function (el) {return el !== 0})
    if (resultValue){
                document.querySelector('#loader').classList.add('active')
                document.querySelector('.field').style.display = 'none'
                document.querySelector('.notice').classList.remove('active')
                accept.style.display = 'none'
                setTimeout(function (){
                    document.querySelector('#loader').classList.remove('active')
                    document.querySelector('.result').classList.add('active')
                }, 1000)
    }else{
        document.querySelector('.notice').classList.add('active')
    }


}


function initializeTimer() {

    if (!localStorage.getItem("ever-timer")) {
        var time = {
            hours: 0,
            minutes: 27,
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
        minutes = parseInt((time - hours * 3600 ) / 60, 10),
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

