const months=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],monthMin=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],days=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],daysMin=["вс","пн","вт","ср","чт","пт","сб"],seasons=["зима","весна","лето","осень"];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


function main() {


let stepHtml = document.querySelector('#step')
let result = 1;
$('.test__answer-choice').click(function () {
    $(this).toggleClass('choiced');
});

$('.answer-1').click(function () {
    result += 1;
    $('.question-1').removeClass('show');
    $('.question-2').addClass('show');
    stepHtml.innerHTML = result
});

$('.answer-2').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    $('.question-2').removeClass('show');
    $('.question-3').addClass('show');
});

$('.answer-3').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    $('.question-3').removeClass('show');
    $('.question-4').addClass('show');
});

$('.answer-4').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    $('.question-4').removeClass('show');
    $('.question-5').addClass('show');
});

$('.answer-5').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    $('.question-5').removeClass('show');
    $('.question-6').addClass('show');
});

$('.answer-6').click(function () {
    result += 1;
    stepHtml.innerHTML = result

    $('.question-6').removeClass('show');
    $('.question-7').addClass('show');


});



$('.answer-7').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    if (result === 8) {
        document.querySelector('.lds-ripple').style.display = 'block'
        $('#plan').css('display', 'none')
        $('.question-7').removeClass('show');
        setTimeout(function () {
                document.querySelector('.lds-ripple').style.display = 'none'
                $('.test__result-1').addClass('show');
                document.querySelector('.lds-ripple').style.display = 'none'
            }
            , 1000)

    }
});


$(document).ready(function(){
    $('.photo-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
    });
    setTimeout(function (){
        $('#disc').attr({href: 'policy/disclosure.html', target:'_blank'})
        $('#tos').attr({href: 'policy/tos.html', target:'_blank'})
        $('#pol').attr({href: 'policy/privacy.html', target:'_blank'})
    }, 2000)

})

let blackbtn = document.querySelectorAll('.plus-18')
for (let i = 0;i<blackbtn.length;i++){
    blackbtn[i].addEventListener('click', function(e){
        document.querySelector('img[data-id="' + e.target.dataset.id +'"]').style.display = 'inline';
        document.querySelector('.plus-18[data-id="' + e.target.dataset.id +'"]').style.display = 'none';
        //.blackbtn[i].style.display = 'none';
    });
}

}

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
        function () {
            return setTimeout(main, 1000)
        }, {
            once: true,
            passive: true
        });
} else {
    main();
};



