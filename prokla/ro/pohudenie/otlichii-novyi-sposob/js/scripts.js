// Post Date
const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 125;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


var hidden = document.querySelectorAll('.interview__btn');

$(hidden).click(function(){
    $(".interview").css("display", "none");
});

$(hidden).click(function(){
    $(".interview__after").css("display", "block");
});


//   счетчик опросов

$(function() {
    $(hidden).click(function() {
        $('.count').html(function(i, val) {
            return val * 1 + 1;
        });
    });
});


function reviews() {
    let toggleBtn = document.querySelector('.addcomenct');
    let addComment = document.querySelector('.add-comm');
    let formBtn = document.querySelector('.button-form');
    let inputName = document.querySelector('.input-name');
    let inputText = document.querySelector('.input-text');
    let file = document.querySelector('.file');
    let customFile = document.querySelector('.file__input');
    let customFileText = document.querySelector('.file__text');


    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        addComment.style.display = 'block';
        toggleBtn.style.display = 'none';
        toggleBtn.parentElement.classList.add('hide');
    });
    customFile.addEventListener('change', function () {
        customFileText.innerHTML = 'Fotografia este încărcată';
        this.parentElement.classList.add('upload');
    });
    formBtn.onclick = function(e) {

        if (inputName.value !== '' && inputText.value !== '' && file.value !== '') {
            e.preventDefault();
            inputName.value = '';
            inputText.value = '';
            file.value = "";
            customFileText.innerHTML = 'Atașați fotografia';
            customFile.parentElement.classList.remove('upload');
            alert("Mulțumesc! Recenzia dvs. a fost trimisă pentru moderare.");
            addComment.style.display = 'none';
        }
    };
}
reviews();