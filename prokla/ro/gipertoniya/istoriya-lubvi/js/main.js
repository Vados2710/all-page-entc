const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let age = document.getElementById('commentAge');
let city = document.getElementById('commentCity');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');


commentImage.addEventListener('change', function(event){
    event.preventDefault();
    if(needPhoto.classList.contains("show")) {
        needPhoto.classList.remove("show");
    }
    if(!addedPhoto.classList.contains("show")) {
        addedPhoto.classList.add("show");
    }
    if(commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Fotografia este încărcată';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Încărca-ţi fotografia dvs';
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Mulțumesc! Recenzia dvs. a fost trimisă pentru moderare.';
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Completaţi toate câmpurile'
    }  
    message.classList.add('show');
});


