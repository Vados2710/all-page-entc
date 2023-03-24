let doors = document.querySelectorAll('.door');
let doorSales = document.querySelectorAll('.door__sales');
let doorWrapper = document.querySelector('.door__wrapper');
let spinResultWrapper = document.querySelector('.spin-result-wrapper');
let orderBlock = document.querySelector('#order');
let orderBlockForm = document.querySelector('.order_block_form');
let door1 = document.getElementById('door__1');
let door2 = document.getElementById('door__2');
let door3 = document.getElementById('door__3');
let doorSale1 = document.getElementById('door__sales1');
let doorSale2 = document.getElementById('door__sales2');
let doorSale3 = document.getElementById('door__sales3');
let imageNews = document.querySelector('.prodImg');
let discount = '50%';
doors.forEach(function (door) {
    door.addEventListener('click', openDoor);
});
var closePopup = document.querySelector('.close-popup');
$('.pop-up-button').click(function (a) {
    $('.spin-result-wrapper').fadeOut();
    a.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});
$('.close-popup, .pop-up-button').click(function (a) {
    $('.spin-result-wrapper').fadeOut();
    a.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});

function openDoor(e) {
    e.currentTarget.classList.add('open');
    setTimeout(function () {
        spinResultWrapper.style.display = 'block';
        setTimeout(function () {
            orderBlock.style.display = 'block';
            doorWrapper.style.display = 'none';
            document.querySelector('.door__head').style.display = 'none';
        }, 3500);
    }, 3500);
    doorSales.forEach(function (sale) {
        if (door1.classList.contains('open')) {
            doorSale1.innerHTML = discount;
            doorSale2.innerHTML = discount === '50%' ? '25%' : '50%';
            doorSale3.innerHTML = discount === '50%' ? '10%' : '25%';
        } else if (door2.classList.contains('open')) {
            doorSale2.innerHTML = discount;
            doorSale1.innerHTML = discount === '50%' ? '10%' : '25%';
            doorSale3.innerHTML = discount === '50%' ? '25%' : '50%';
        } else if (door3.classList.contains('open')) {
            doorSale1.innerHTML = discount === '50%' ? '25%' : '50%';
            doorSale3.innerHTML = discount;
            doorSale2.innerHTML = discount === '50%' ? '10%' : '25%';
        }
    });
    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains('open')) {
            setTimeout(function () {
                doors[i].classList.add('open');
            }, 2500);
        }
    }
    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener('click', openDoor);
    }
}



//date
const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","dayMin","monthMin","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), monthMin: getMonthName(_month, monthsMinName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}