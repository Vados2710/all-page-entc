const months=['januar','februar','märz','april','mai','juni','juli','august','september','oktober','november','dezember'],monthMin = ['','','','','','','','','','','',''],days = ['sonntag','montag','dienstag','mittwoch','donnerstag','freitag','samstag'],daysMin = ['','','','','','',''],seasons = ['Winter','Frühling','Sommer','Herbst'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","dayMin","monthMin","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), monthMin: getMonthName(_month, monthsMinName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let flag = 0;
document.body.addEventListener('mouseleave', function (event) {
    let e = event || window.event;
    e = e.clientY;
    let popup = document.querySelector('.prop-up');

    if (popup && e < 10 && flag === 0) {
        popup.classList.add('see');
        flag++;
    }
});
let z = document.querySelectorAll(".blanket, .dialoh-close");
for (let i = 0; i < z.length ; i++) {
    z[i].addEventListener("click", function () {
        let popup = document.querySelector('.prop-up');
        popup.classList.remove('see');
    });
}

window.addEventListener('load', function(){


    let Sticky = function(options) {
        let stickyEl = document.querySelector(options.stickyEl);
        let stickyStartEl = document.querySelector(options.stickyStartEl);
        let stickyEndEl = document.querySelector(options.stickyEndEl) || stickyStartEl;
        let stickyCustomClass = options.stickyCustomClass;
        let stickyOffsetY = options.stickyOffsetY || 0;

        let stickyElHeight = stickyEl.getBoundingClientRect().height;
        let coordStickyStart = stickyStartEl.getBoundingClientRect().top;

        if (stickyStartEl === stickyEndEl) {
            coordStickyEnd = stickyStartEl.getBoundingClientRect().bottom;
        } else {
            coordStickyEnd = stickyEndEl.getBoundingClientRect().top;
        }


        stickyEl.classList.add('fixed');
        stickyEl.style.position = 'fixed';

        // Зона прокрутки
        if (coordStickyStart < 0 && (coordStickyEnd - stickyOffsetY - stickyElHeight) > 0) {
            stickyEl.style.top = stickyOffsetY + 'px'
            stickyEl.classList.add(stickyCustomClass);
        }
        // вище зони прокрутки
        else if (coordStickyStart >  stickyOffsetY) {
            stickyEl.style.top = coordStickyStart  + 'px';
            stickyEl.classList.remove(stickyCustomClass);

        }
        // нижче зони прокрутки
        else if (coordStickyEnd - stickyElHeight  <  stickyOffsetY) {
            stickyEl.style.top = coordStickyEnd  - stickyElHeight  + 'px';
            stickyEl.classList.remove(stickyCustomClass);
        }

    }

    window.addEventListener('scroll', function() {
        let sticky1 = new Sticky({
            // селектор елемента, який має бути фіксований
            stickyEl: '.sidebar-content',
            // селектор елемента, верхня координата якого є стартовою точкою для фіксації елементу
            stickyStartEl: '#enw-main-content',

            // селектор елемента, верхня координата якого є кінцевою точкою для фіксації елементу
            // якщо не задавати, то кооридината береться з нижньої точки stickyStartEl
            // stickyEndEl: '.end',

            // кастомний клас при фіксації
            stickyCustomClass: 'active',
            // кастомний відступ від верхнього краю екрану, default - 0
            stickyOffsetY: 40
        });
    });
});


//
// window.addEventListener('load', function(){
//
//
//     let Sticky = function(options) {
//         let stickyEl = document.querySelector(options.stickyEl);
//         let stickyStartEl = document.querySelector(options.stickyStartEl);
//         let stickyEndEl = document.querySelector(options.stickyEndEl) || stickyStartEl;
//         let stickyCustomClass = options.stickyCustomClass;
//
//         let stickyElHeight = stickyEl.getBoundingClientRect().height
//         let coordStickyStart = stickyStartEl.getBoundingClientRect().top;
//
//         if (stickyStartEl === stickyEndEl) {
//             coordStickyEnd = stickyStartEl.getBoundingClientRect().bottom;
//         } else {
//             coordStickyEnd = stickyEndEl.getBoundingClientRect().top;
//         }
//
//
//         stickyEl.classList.add('fixed');
//
//         if (coordStickyStart < 0 && (coordStickyEnd - stickyElHeight) > 0) {
//             stickyEl.style.top = 0 + 'px'
//             stickyEl.classList.add(stickyCustomClass);
//         }
//         else if (coordStickyStart > 0) {
//             stickyEl.style.top = coordStickyStart + 'px';
//             stickyEl.classList.remove(stickyCustomClass);
//
//         } else if (coordStickyEnd - stickyElHeight < 0) {
//             stickyEl.style.top = coordStickyEnd - stickyElHeight + 'px';
//             stickyEl.classList.remove(stickyCustomClass);
//         }
//
//     }
//
//
//     window.addEventListener('scroll', function() {
//         let sticky1 = new Sticky({
//             stickyEl: '.sidebar-content',
//             stickyStartEl: '#enw-main-content',
//             stickyCustomClass: 'active'
//         });
//     });
// });
