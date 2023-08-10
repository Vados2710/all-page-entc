const months=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],monthMin = ['','','','','','','','','','','',''],days = ['domenica','lunedi','martedì','mercoledì','giovedi','venerdì','sabato'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','estate','autunno'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","dayMin","monthMin"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), monthMin: getMonthName(_month, monthsMinName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$('.hide').click(function () {
	$(this).toggleClass('remove');
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



btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim()  && text.value.trim()) {
        message.innerHTML = 'Grazie! La tua recensione è stata inviata per moderazione.';
        name.value = '';
        text.value = '';
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Compila tutti i campi'
    }  
    message.classList.add('show');
});


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
// $('.answer-7').click(function () {
//     if($(this).hasClass('answer-first')) {
//         result += 1;
//     }
//     $('.question-7').removeClass('show');
//     $('.question-8').addClass('show');
// });

// $('.answer-8').click(function () {
//     if($(this).hasClass('answer-first')) {
//         result += 1;
//     }
//     $('.question-8').removeClass('show');
//     if(result === 8) {
//         $('.test__result-1').addClass('show');
//     } else {
//         $('.test__result-2').addClass('show');
//     }
// });