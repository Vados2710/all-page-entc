let order = document.querySelector('#order')
let form = document.querySelector('#test-form');
let anketa = document.querySelector('#anketa');

let stepHtml = document.querySelector('#step')


$(document).ready(function () {




    document.querySelector('.year').innerHTML = new Date().getFullYear()




    for (var i = 0; i < document.querySelectorAll('.date').length; i++) {
        document.querySelectorAll('.date')[i].innerHTML = new Date().toLocaleDateString('ru')
    }
});




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

