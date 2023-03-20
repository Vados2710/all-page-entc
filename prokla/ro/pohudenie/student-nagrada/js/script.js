const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$('#calcweight').click(function (a) {
  console.log('fffffffff');
  a.preventDefault();
  a = Math.ceil(Number($('#minus_weight').val()) / 0.666666);
  Number($('#weight').val()) > Number($('#minus_weight').val()) + 40
      ? $('.formResult').html(
      '<p><b>Dacă urmați instrucțiunile de mai jos, veți pierde ' +
      $('#minus_weight').val() +
      ' in soli ' +
      a +
      ' zile fara nici o dieta sau exercitii fizice!</b></p><p>Crezi că este imposibil? Citiți articolul de mai jos până la sfârșit și vă veți răzgândi. Sper că se va schimba\u00e0 Viata ta!</p>'
      )
      : $('.formResult').html(
      '<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>'
      );
  $('.formResult').css({
    transition: 'background 1s',
    backgroundColor: '#ff7426c4',
  });
  setTimeout(function () {
    $('.formResult').css({
      backgroundColor: '#fff',
    });
  }, 2e3);
});

