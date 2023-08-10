
window.onload = function () {
  let textarea = document.querySelector('.comment-area');
  let name = document.querySelector('.reviews-form__name');
  let file = document.querySelector('.file-label');
  let customFile = document.querySelector('#file');
  let customFileText = document.querySelector('.pust-comments__file-text');
  let popup = document.querySelector('.form-popup');
  let close = document.querySelector('.close');

  customFile.addEventListener('change', function () {
    customFileText.innerHTML = 'Foto aggiunto';
    file.classList.add('upload');
  });

  document.querySelector('#push_pwjqgx9__submit').addEventListener('click', function(event){
    if (textarea.value !== '' && name.value !== '' && customFile.value !== '') {
      event.preventDefault();
      textarea.value = "";
      name.value = "";
      customFile.value = "";
      customFileText.innerHTML = 'Carica la tua foto';
      file.classList.remove('upload');

      popup.classList.add('active');

      setTimeout(function () {
        popup.classList.remove('active');
      }, 3500);
    }
  });

  close.addEventListener('click', function () {
    popup.classList.remove('active');
  });
};

const months=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],monthMin = ['','','','','','','','','','','',''],days = ['domenica','lunedi','martedì','mercoledì','giovedi','venerdì','sabato'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','estate','autunno'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}