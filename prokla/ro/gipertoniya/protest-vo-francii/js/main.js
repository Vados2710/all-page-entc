const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let showCommentForm = document.getElementById('commnetCreate');
let commentFormWrapper = document.getElementById('commnetCreateWrapper');
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');

let city = document.getElementById('commentCity');
let age = document.getElementById('commentAge');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let notice = document.getElementById('commentNotice');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let createCommentImage = document.getElementById('createCommentImage');
commentImage.addEventListener('change', function (event) {
    event.preventDefault();
    if (commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Fotografia este încărcată';
        createCommentImage.classList.add("added");
    } else {
        document.getElementById('commentFoto').innerHTML = 'Atașați fotografia';
        createCommentImage.classList.remove("added");
    }
});
btn.addEventListener('click', function (event) {
    event.preventDefault();

    if (name.value.trim() && city.value.trim() && text.value.trim() && age.value.trim()) {
        name.value = '';
        city.value = '';
        age.value = '';
        text.value = '';
        commentImage.value = '';
        form.classList.remove("show");
        message.classList.add("show");
        createCommentImage.classList.remove("added");
    } else {
        notice.classList.add("show");
    }
});
showCommentForm.addEventListener('click', function (event) {
    showCommentForm.classList.remove("show");
    commentFormWrapper.classList.add("show");
});
