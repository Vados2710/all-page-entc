let order = document.querySelector('#order')
let form = document.querySelector('#test-form');
let anketa = document.querySelector('#anketa');

let stepHtml = document.querySelector('#step')


$(document).ready(function () {


    function scrollto() {
        $(".scrollto").click(function () {
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 80}, 1500);
            return false;
        });
    }

    scrollto()

    document.querySelector('.year').innerHTML = new Date().getFullYear()


    $('.boxes > div').click(function () {
        if ($(this).parent().hasClass('boxesfirsttry')) {
            $('.boxes').removeClass('boxesfirsttry');
            $(this).addClass('openbox');
            $(this).find('.try').hide();
            $(this).find('.opentry').show();
            setTimeout(function () {
                $('.sweet-overlay').show();
                $('.sweet-alert').show();
            }, 500);
        } else if ($(this).parent().hasClass('boxeslasttry')) {
            if (!$(this).hasClass('openbox')) {
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                $(this).find('.boxtext').css('display', 'block');
                setTimeout(function () {
                    $('.spin-result-wrapper').show();
                    setTimeout(function () {
                        $('#boxesContainer').slideUp(250);
                        setTimeout(function () {
                            $('.order_block').slideDown(250);
                            $('html, body').animate({
                                scrollTop: $('.order_block').offset().top
                            }, 1000);
                            for (var i=0;i<document.querySelectorAll('a').length; i++){
                                document.querySelectorAll('a')[i].setAttribute('href', '#afterHref')
                            }
                        }, 500)
                    }, 500)
                }, 500);
            }
        }

    });

    $('#update').click(function () {
        $('.sweet-overlay').hide();
        $('.sweet-alert').hide();
        $('.boxes').addClass('boxeslasttry');
    });
    $('.close-popup').click(function (e) {
        close(e)
    })
    $('.pop-up-button').click(function (e) {
        close(e)
    })


    for (var i = 0; i < document.querySelectorAll('.date').length; i++) {
        document.querySelectorAll('.date')[i].innerHTML = new Date().toLocaleDateString('ru')
    }
});

function close(e) {
    e.preventDefault()
    $('.spin-result-wrapper').hide();
    $('#countdown').timeTo(600);
    window.scrollTo(getCoords(order).left, getCoords(order).top)
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}


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
    $('.question-7').removeClass('show');
    $('.question-8').addClass('show');
});

$('.answer-8').click(function () {
    result += 1;
    stepHtml.innerHTML = result
    if (result === 9) {
        document.querySelector('.lds-ripple').style.display = 'block'
        $('#plan').css('display', 'none')
        $('.question-8').removeClass('show');
        setTimeout(function () {
                document.querySelector('.lds-ripple').style.display = 'none'
                $('.test__result-1').addClass('show');
                document.querySelector('.lds-ripple').style.display = 'none'
            }
            , 1000)

    }
});

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};

document.querySelector('.today').innerHTML = new Date().toLocaleString('ru', options);


document.querySelector('.yesterday').innerHTML = addDays(new Date(), 1).toLocaleString('ru', options);
