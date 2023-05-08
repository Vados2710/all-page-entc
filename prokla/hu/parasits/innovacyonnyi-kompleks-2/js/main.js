const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

document.addEventListener("DOMContentLoaded", function () {
  const stickBlock = document.querySelector('.scroll-header');
  const footer = document.querySelector("#stop");

  function setPos() {
    const stickParent = stickBlock.parentElement;
    const stickParentTop = stickParent.getBoundingClientRect().top;
    document.getElementById('scroll-header').classList.remove('visible')
    if (window.pageYOffset > stickParentTop + 500) {
      // stickBlock.style.position = "fixed";
      // stickBlock.style.top = "0";
      document.getElementById('scroll-header').classList.add('visible')

      if (stickBlock.getBoundingClientRect().bottom > footer.getBoundingClientRect().top - 20) {
        stickBlock.style.top = -(stickBlock.getBoundingClientRect().bottom - footer.getBoundingClientRect().top) + "px";
      }

    } else {
      stickBlock.style.position = "static";
    }
  }
  setPos();
  window.addEventListener("scroll", setPos);
});

let showCommentForm = document.getElementById('commnetCreate');
let commentFormWrapper = document.getElementById('commnetCreateWrapper');
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
// let age = document.getElementById('commentAge');
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
        document.getElementById('commentFoto').innerHTML = 'Fénykép feltöltve';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Fénykép feltöltése';
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Köszönjük! Visszajelzését elküldtük moderációra.';
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Töltsön ki minden mezőt!'
    }  
    message.classList.add('show');
});


showCommentForm.addEventListener('click', function (event) {
    showCommentForm.classList.remove("show");
    commentFormWrapper.classList.add("show");
});