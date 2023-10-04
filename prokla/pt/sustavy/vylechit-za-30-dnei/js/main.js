const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','verão','outono'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 180;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(document).ready(function () {
  $('.click_ssty').click(function () {
    var show = $(this).attr('show');
    if (show == 1) {
      $(this).attr('show', 0);
      $(this).parent().children(".ctr_ima_s").slideUp(300);
      $(this).removeClass("click_ssty2");
      $(this).html('Mostrar');
    } else {
      $(this).attr('show', 1);
      $(this).parent().children(".ctr_ima_s").slideDown(300);
      $(this).addClass("click_ssty2");
      $(this).html('Ocultar');
    }
  });
  if (document.documentElement.clientWidth > 768) {
    $(function () {
      $('.eeee').click(function () {
        $('.eeee, .modal-block').fadeOut(300);
      })
    });
    var flag = true;
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.fadepopup, .eoxp').fadeIn(300);
        $('.eeee').fadeIn(300);
        flag = false;
      }
    });
    $(".r_1, .close").on('click', function () {
      $('.eeee, .modal-block').fadeOut(300);
    });
  }
});