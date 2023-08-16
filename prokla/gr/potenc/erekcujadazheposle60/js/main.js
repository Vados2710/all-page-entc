const months=['ο Ιανουάριος','ο Φεβρουάριος','ο Μάρτιος','ο Απρίλιος','ο Μάιος','ο Ιούνιος','ο Ιούλιος','ο Αύγουστος','ο Σεπτέμβριος','ο Οκτώβριος','ο Νοέμβριος','ο Δεκέμβριος'],monthMin = ['','','','','','','','','','','',''],days = ['η Κυριακή','η Δευτέρα','η Τρίτη','η Τετάρτη','η Πέμπτη','η Παρασκευή','το Σάββατο'],daysMin = ['','','','','','',''],seasons = ['ο χειμώνας','η άνοιξη','το καλοκαίρι','το φθινόπωρο'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayMin","monthMin","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthMin: getMonthName(_month, monthsMinName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
// -------------spin-------------------
let resultWrapper = $(".spin-result-wrapper");
let result_1 = $(".result_1");
let result_2 = $(".result_2");
let wheel = $(".wheel_wrapper");
let buttons = document.querySelectorAll(".pop-up-button");
let cursor_img = document.querySelector(".cursor_img");
let counter = 0;

$(".wheel-cursor").on("click", function (event) {
    $(this).off(event);
    wheel.addClass("super-rotation");
    setTimeout(function () {
        //cursor_img.src = "images/gift.png";
        result_1.fadeIn();
    }, 7500);
});

function spin() {
    counter++;
    if (counter === 1) {
        result_1.fadeOut();
        wheel.addClass("super-rotation2");
        setTimeout(function () {
            result_2.fadeIn();
        }, 7500);
    }
    if (counter === 2) {
        result_2.fadeOut();
        $(".spin-wrapper").slideUp();
        $(".order_block").slideDown();
        start_timer();
    }
}

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        spin();
    });
});

$(".close-popup").on("touchend, click", function () {
    spin();
});

// --------------SCROLL-------------------
var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.05;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

// --------------Timer-------------------
var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}
