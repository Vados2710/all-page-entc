const widgetDoorsSale = '50%';
const widgetDoorsGood = '<span class="productName"></span>';

let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");

let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let spinResultBtn = document.querySelector(".pop-up-button");
let orderBlock = document.querySelector(".order_block");

let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");

let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");

let customTitle = '';



for (let k = 0; k < doors.length; k++) {
    doors[k].addEventListener("click", openDoor);
}

function openDoor(e) {
    e.currentTarget.classList.add("open");


    for (let i = 0; i < doorSales.length; i++) {

        if (door1.classList.contains("open")) {
            doorSale1.innerHTML = widgetDoorsSale;

            doorSale2.innerHTML = "10%";

            doorSale3.innerHTML = "25%";
        } else if (door2.classList.contains("open")) {
            doorSale2.innerHTML = widgetDoorsSale;
            doorSale1.innerHTML =  "25%";
            doorSale3.innerHTML =  "10%";
        } else if (door3.classList.contains("open")) {
            doorSale1.innerHTML = "10%";
            doorSale3.innerHTML = widgetDoorsSale;
            doorSale2.innerHTML = "25%";
        }
    }


    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains("open")) {
            setTimeout(function () {
                doors[i].classList.add("open");
            }, 1500);
        }
    }

    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener("click", openDoor);
    }

    showResultWindow();
    showForm();
}

function showResultWindow() {
    setTimeout(function () {
        $('.spin-result-wrapper').css('display', 'block');
    }, 2500);
};

function showForm() {
    setTimeout(function () {
        $('.door__wrapper').slideUp();
        $('.order_block').slideDown();
        start_timer();
    }, 4000);
};

if (typeof customDoorsForm !== "undefined") {
    $('.default_order-block').remove();
    $('.default_spin-result-wrapper').remove();

    switch (customDoorsForm) {
        case 'id':
            customTitle = 'Tebak pintu mana yang ada diskon ' + widgetDoorsSale;
            break;
        case 'ph':
            customTitle = 'HUlaan KUNG ANONG PINTO ANG ' + widgetDoorsSale + ' OFF';
            break;
        case 'th':
            customTitle = 'เดาว่าประตูไหนลด ' + widgetDoorsSale;
            break;
        case 'ro':
            customTitle = 'GHICI CARE UȘĂ ARE O REDUCERE DE ' + widgetDoorsSale;
            break;
        case 'pe':
            customTitle = 'ADIVINA QUÉ PUERTA DESCUENTO ' + widgetDoorsSale;
            break;
        case 'ru':
            customTitle = 'Угадай за какой дверью скидка ' + widgetDoorsSale;
            break;
        default:
            customTitle = 'Guess which door the discount is behind ' + widgetDoorsSale;
    }

    $('.door__title').text(customTitle);
}

$((function () {
    $("a[href^='#']").click((function () {
        let e = $(this).attr("href");
        return document.getElementById(e.slice(1)) || (e = "#order_form"),
            $("html, body").animate({
                scrollTop: $(e).offset().top + "px"
            }),
            !1
    }
    )),
        $(".fadepopup input").click((function () {
            $(".eeee, .fadepopup").css("display", "none")
        }
        ))
}
));
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (e) {
    e.preventDefault(),
        $(".spin-result-wrapper").fadeOut();
    let t = $("#roulette");
    t || (t = $("#order_form"));
    let r = t.offset().top;
    $("body,html").animate({
        scrollTop: r
    }, 800)
}
));
initializeTimer() 
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

const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}