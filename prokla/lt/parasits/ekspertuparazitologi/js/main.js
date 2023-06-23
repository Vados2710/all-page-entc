let o = 1;
$(".questionario__btn").on("touchend, click", (function () {
    let e = $(".question[data-question-portion=" + o + "] input:checked").length,
        t = $(".question[data-question-portion=" + o + "]").data("answersSum");
    return console.log(e), console.log(t), e < t ? ($(".questionario__prompt").fadeIn(), void setTimeout((function () {
        $(".questionario__prompt").fadeOut()
    }), 3e3)) : 5 === o ? ($(".question").slideUp(), $(".questionario__controls").fadeOut(), $(".questionario__loader").fadeIn(), void setTimeout((function () {
        $(".questionario__loader").fadeOut(), $(".questionario__results").fadeIn()
    }), 3500)) : (4 === o && $(".questionario__btn").html("Obțineți rezultatul"), $(".question--active").removeClass("question--active").addClass("question--asked"), o++, void $(".question[data-question-portion=" + o + "]").addClass("question--active"))
}))



let e = 0;
$(".lotery__item--unbroken").on("touchend, click", (function () {
    let t = $(this);
    if (e < 1) setTimeout((function () {
        $("#lotery-failure").fadeIn()
    }), 500), e++;
    else {
        if (1 !== e) return;
        $(t).find("span").text("50%"), $(t).find("span").css({
            fontSize: "38px",
            fontWeight: "600"
        }), setTimeout((function () {
            $("#lotery-success").fadeIn()
        }), 700), e++
    }
    let o = $(t).find("img");
        $(t).find(), $(t).removeClass("lotery__item--unbroken").addClass("lotery__item--broken")
})), $(".lotery__modal-btn").on("touchend, click", (function () {
    $(".lotery__modal").fadeOut()
})), $(".lotery__modal-btn--toForm").on("touchend, click", (function () {
    $(".lotery-wrap").slideUp(), $(".order-form-wrap").slideDown(), $("body,html").animate({
        scrollTop: $("#form").offset().top - 10
    }, 400);

}))



function togleAdultContent () {
    let items = document.querySelectorAll('.adult')
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.currentTarget.classList.toggle('adult--open')
        })
    }
}


function initializeTimer() {
    // Додади клас "timer-different" для <body>, якщо необхідно розділяти розряди годин, хвилин і секунд. Наприклад, http://prntscr.com/japnvo

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


function setComparePrice () {
    let currentPrice = offer_params.priceMain * 2;
    let priceStep = +currentPrice.innerHTML
    let prices = document.querySelectorAll('.other-price')
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = Math.round(priceStep + (priceStep * +prices[i].dataset.price))
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
  //  setComparePrice ()
    togleAdultContent ()

initializeTimer() 

var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top - 10,  // отступ от окна браузера до id
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
})

const months=['sausis','vasaris','kovas','balandis','gegužės','birželis','liepa','rugpjūtis','rugsėjis','spalis','lapkritis','gruodis'],monthMin = ['','','','','','','','','','','',''],days = ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],daysMin = ['','','','','','',''],seasons = ['žiema','pavasaris','vasara','ruduo'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}