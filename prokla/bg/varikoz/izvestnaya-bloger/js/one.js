const months=['януари','февруари','март','април','май','юни','юли','август','септември','октомври','ноември','декември'],monthMin = ['','','','','','','','','','','',''],days = ['неделя','понеделник','вторник','сряда','четвъртък','петък','събота'],daysMin = ['','','','','','',''],seasons = ['зима','пролет','лято','есен'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","season","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), season: getSeasonsName(seasonsName, _month, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) {const monthNumber = month === 12 ? 0 : month,seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);return changeFirstLetter(bigFirstLetter, array[seasonIndex]);} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$('.hide').click(function () {
	$(this).toggleClass('remove');
});
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
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
        document.getElementById('commentFoto').innerHTML = 'Снимката е качена';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Качете снимката си';
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Благодарим ви! Отзивът ви е изпратен на модератор.';
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Попълнете всички полета!'
    }  
    message.classList.add('show');
});

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let x = document.querySelectorAll(".c-site-header a");
    for (let i = 0; i < x.length; i++) {
        x[i].href = "";
    }
}
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
for (let i = 0; i < z.length; i++) {
    z[i].addEventListener("click", function () {
        let popup = document.querySelector('.prop-up');
        popup.classList.remove('see');
    });
}

var flagOne = 0;
$(document).ready(function () {
    postFixedSidebar();
});
$(window).resize(function () {
    postFixedSidebar();
});


function postFixedSidebar(className) {
    var className = className || 'sticky';
    var $sticky;
    if (flagOne === 0) {
        $sticky = $('.' + className).wrap('<div class="' + className + '-wrapper"></div>').parent();
        flagOne++;
    }
    $sticky = $(".sticky-wrapper");
    var stickyTop = $(".exxxe")[0].getBoundingClientRect().top + pageYOffset;
    var stickyLeft2 = $(".exxxe")[0].getBoundingClientRect().left;

    $(window).scroll(fixedScrolling);
    fixedScrolling();

    function isScreen() {
        return (stickyTop <= $(window).scrollTop());
    }

    function fixedScrolling() {
        if (isScreen()) {
            $sticky.addClass('fixed').css({
                maxWidth: 260,
                left: stickyLeft2
            });
        } else $sticky.removeClass('fixed');
    }
}





let result = 0;
$('.test__answer-choice').click(function () {
    $(this).toggleClass('choiced');
});

$('.answer-1').click(function () {
    result += 1;
    $('.question-1').removeClass('show');
    $('.question-2').addClass('show');
});

$('.answer-2').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-2').removeClass('show');
    $('.question-3').addClass('show');
});

$('.answer-3').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-3').removeClass('show');
    $('.question-4').addClass('show');
});

$('.answer-4').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-4').removeClass('show');
    $('.question-5').addClass('show');
});

$('.answer-5').click(function () {
    if($('.test__answer-choice.choiced').length > 2) {
        result += 1;
    }
    $('.question-5').removeClass('show');
    $('.question-6').addClass('show');
});
$('.answer-6').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-6').removeClass('show');
    $('.question-7').addClass('show');
});

$('.answer-7').click(function () {
        if($(this).hasClass('answer-first')) {
            result += 1;
        }
        $('.question-7').removeClass('show');
        if(result === 7) {
            $('.test__result-1').addClass('show');
        } else {
            $('.test__result-2').addClass('show');
        }
    });
