//date
const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','verão','outono'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

//Wheel
var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout((function () {
        resultWrapper.style.display = "block"
    }), 8e3), setTimeout((function () {
        $(".spin-wrapper").slideUp(300), $(".order_block").slideDown(300), start_timer()
    }), 1e4), wheel.classList.add("rotated"))
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (e) {
    e.preventDefault(), $(".spin-result-wrapper").fadeOut()
})), $(document).mouseup((function (e) {
    var t = $(".spin-result-wrapper");
    0 === t.has(e.target).length && t.hide()
}));

//Timer
var intr, time = 600;

function start_timer() {
    intr = setInterval(tick, 1e3)
}

function tick() {
    time -= 1;
    var e = Math.floor(time / 60),
        t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
}

//Scroll
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