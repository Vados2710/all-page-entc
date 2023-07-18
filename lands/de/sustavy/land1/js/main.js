const months=['januar','februar','märz','april','mai','juni','juli','august','september','oktober','november','dezember'],monthMin = ['','','','','','','','','','','',''],days = ['sonntag','montag','dienstag','mittwoch','donnerstag','freitag','samstag'],daysMin = ['','','','','','',''],seasons = ['Winter','Frühling','Sommer','Herbst'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$("#toggle-mnu").on("click", function (e) {
    e.preventDefault();
    $('.nav__overlay').toggleClass('show');
    $(this).toggleClass("on");
    $(this)
        .parent()
        .toggleClass("navbar_hide");
    $(this)
        .parent()
        .toggleClass("fixed-btn");
});
$(".menu__item a").on("click", function (e) {
    $("#toggle-mnu").toggleClass("on");
    $(".nav-btn").toggleClass("navbar_hide");
    $('.nav__overlay').removeClass('show');
});

$('.menu__exit, .nav__overlay').on('click', function () {
    $('.nav-btn').removeClass('fixed-btn');
    $('.nav-btn').addClass('navbar_hide');
    $('#toggle-mnu').removeClass('on');
    $('.nav__overlay').removeClass('show');
});



function main() {

    function compositionApp() {

        let active = 4;

        // const arrowTop = $('.composition__arrow-top');
        // const arrowBottom = $('.composition__arrow-bottom');

        $('.composition__item-' + active).addClass('active').siblings().removeClass('active');

        $('.composition__item').click(function () {
            clearInterval(timer)
            const className = $(this).attr('class');
            const numberReg = className.split("-")[1];

            const number = +numberReg.match(/\d/g);
            active = number;

            $('.composition__item-' + number).addClass('active').siblings().removeClass('active');

        })

        $('.composition__arrow-top').click(function () {
            $('.composition__arrow-top').find('.svg').removeClass('composition__arrow--animate');
            $('.composition__arrow-bottom').find('.svg').removeClass('composition__arrow--animate');
            clearInterval(timer);
            if (active == 1) {
                return
            }
            active--
            $('.composition__item-' + active).addClass('active').siblings().removeClass('active');
        });

        $('.composition__arrow-bottom').click(function () {
            $('.composition__arrow-top').find('.svg').removeClass('composition__arrow--animate');
            $('.composition__arrow-bottom').find('.svg').removeClass('composition__arrow--animate');
            clearInterval(timer);
            if (active == 4) {
                return
            }
            active++
            $('.composition__item-' + active).addClass('active').siblings().removeClass('active');
        });
    }

    compositionApp();

    var arrayComposition = $('.composition__item');
    var count = 0;

    var timer = setInterval(function () {
        if (count < arrayComposition.length) {
            $(arrayComposition[count++]).addClass('active').siblings().removeClass('active');
        } else {
            count = 0;
        }
    }, 2000);

    function clearComposition() {
        let w = $(window).innerWidth();

        if (w < 767) {
            console.log('here');

            $('.composition__item').removeClass('active');
            clearInterval(timer);
        }
    }

    clearComposition();

    $(window).resize(function () {
        let w = $(window).innerWidth();
        if (w < 767) {

            clearInterval(timer);
        }
    });




    $(".reviews-content").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });
    $(".reviews-content").on("afterChange", function (event, slick, currentSlide) {
        $(this)
            .find(".slick-slide.content-plus")
            .not(".slick-active")
            .removeClass("content-plus");
    });
    $(".reviews-box__cbtn").on("click", function () {
        this.parentElement.parentElement.classList.toggle("content-plus");
    });
    $(document).ready(function () {
        $('.nav-item a, .menu__item a').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({scrollTop: $(scroll_el).offset().top - 56}, 1000);
            }
            return false;
        });
    });
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
}

function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
    telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
    isNaN(event.data)
        ? this.value = this.value.replace(/[^0-9+]/, '')
        : false;
  }
}
initInputValidation();

window.addEventListener("load", function () {
  const popup = document.querySelector('.ever-popup');

  document.addEventListener('click', function () {
    if (popup && popup.classList.contains('show')) {
      initInputValidation();
    }
  })
});