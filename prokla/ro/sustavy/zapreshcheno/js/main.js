var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") ||
        (wheel.classList.add("super-rotation"),
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8e3),
        setTimeout(function () {
            $(".spin-wrapper").slideUp(), $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer();
        }, 1e4),
        wheel.classList.add("rotated"));
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault(), $(".spin-result-wrapper").fadeOut();
    let t = $("#roulette");
    t || (t = $("#order_form"));
    
});
var intr,
    time = 600;
function start_timer() {
    intr = setInterval(tick, 1e3);
}
function tick() {
    time -= 1;
    var e = Math.floor(time / 60),
        t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}
//date
const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","dayMin","monthMin","monthOnly","season","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayMin: getDaysName(_day, _month, _year, daysMinName, true), monthFull: getMonthName(_month, monthsName, true), monthMin: getMonthName(_month, monthsMinName, true), monthOnly: getMonthName(_month, monthsName, true, counter), year: getYearWithCounter(_year, counter), season: getSeasonsName(seasonsName, _month, true), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) {const monthNumber = month === 12 ? 0 : month,seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);return changeFirstLetter(bigFirstLetter, array[seasonIndex]);} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}