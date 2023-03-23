const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// wheel

var wheel = document.querySelector('.wheel-block');

function spin() {
    wheel.classList.add('super-rotation');
    setTimeout(function() {
        $('.spin-wrapper').slideUp();
    }, 5000);
}

// first form validation
var form = $('.js-submit');

$(document).ready(function(){
   
 
    if (document.cookie.indexOf('first_view') == -1) {
        $('.step-1').show();
    }

    if(document.cookie.indexOf('first_view') != -1){
        $('.step-1').hide();
        window.scrollTo(0, 0);
        $('.your-name').text(localStorage.getItem('user-name'));
        $('.step-2').fadeIn();
    }

    if(document.cookie.indexOf('second_view') != -1){
        $('.step-1').hide();
        $('.step-2').hide();
        $('.step-3').fadeIn();
        window.scrollTo(0, 0);
        $('.your-name-form').val(localStorage.getItem('user-name'));
        $('footer').show();
    }

    $('#quick_login_button2').on('click', function() {
        document.cookie = "second_view";
    });

    $('.cursor-text').on('click', function() {
        $("#quick_login_button1").trigger( "click" );
    });

    form.on('submit', function(e) {
		e.preventDefault();
        document.cookie = "first_view";
        localStorage.setItem('user-name', document.form1.name.value);
        $('.your-name').text(document.form1.name.value);
        $('.your-name-form').val(document.form1.name.value);
        $('html, body').animate({
            scrollTop: $('.spin-wrapper').offset().top - 0
        }, 500);
        setTimeout(function() {
            spin();
        }, 600);
        setTimeout(function() {
            $('.step-1').hide();
            $('.step-2').fadeIn();
            window.scrollTo(0, 0);
        }, 6500);

		var yourName = $('form[name="form1"] input[name="name"]').val();
		$('form[name="form2"] input[name="name"]').val(yourName);
	});

	$('.step-2_submit').click(function() {
		$('.step-2').hide();
		$('.step-3').fadeIn();
		window.scrollTo(0, 0);
		$('footer').show();
	});
});