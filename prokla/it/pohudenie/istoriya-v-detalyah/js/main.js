const months=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],monthMin = ['','','','','','','','','','','',''],days = ['domenica','lunedi','martedì','mercoledì','giovedi','venerdì','sabato'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','estate','autunno'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


$(document).ready(function () {
    var $header_leaves = $(".header-leaves");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && screen.width > '767') {
            $header_leaves.addClass("transparent");
        } else if ($(this).scrollTop() <= 100 && $header_leaves.hasClass("transparent")) {
            $header_leaves.removeClass("transparent");
        }
    });
});



let search = document.querySelector('.search-submit');
let subscribe = document.querySelector('.wysija-submit');
let searchField = document.querySelector('.search-field');
let subscribeField = document.querySelector('.wysija-input');


search.addEventListener('click',function (){
    searchField.value = "";
})

subscribe.addEventListener('click',function (){
    subscribeField.value = "";
})

function comments() {


    function fadeOut(el) {
        let opacity = 1;
        let timer = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(timer);
                document.querySelector(el).style.display = "none";
            }
            document.querySelector(el).style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 30);
    }

    function fadeIn(el) {
        let opacity = 0.01;
        document.querySelector(el).style.display = "block";
        let timer = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            document.querySelector(el).style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 30);
    }


    let form = document.querySelector('#commentform');
    let textarea = document.querySelector('#comment');
    let nameInput = document.querySelector('#author');
    let email = document.querySelector('#email');

    form.addEventListener('submit', function (evt) {

        if ( textarea.value !== "" && nameInput.value !== "" && email.value !== ""  ) {
            evt.preventDefault();
            textarea.value = "";
            nameInput.value = "";
            email.value = "";
            fadeIn('.form-popup');
            setTimeout(fade, 3000);

            function fade() {
                fadeOut('.form-popup');
            }
        }
    })


}

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
        function () {
            return setTimeout(comments, 1000)
        }, {
            once: true,
            passive: true
        });
} else {
    comments();
}


			