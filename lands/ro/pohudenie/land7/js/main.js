$(document).ready(function () {
    $(".table_ul>ul>li>label").click(function () {
        $(this).toggleClass("active");
    });
    var _currentDate = new Date();
    var count = 16; // 8 hours
    var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);

    $('.timer').countdown({
        until: _toDate,
        format: 'DHMS',
        compact: true,
        startTime: '03:03:03',
        layout: $('.timer').html()

    });
    $('.scroll').on('touchstart click', function () {
        $("html, body").animate({scrollTop: $('#toform').offset().top}, 900);
        return false;
    });

    $('.calc-form').on('submit', function (e) {
        e.preventDefault();
        $('.s_item-1').slideUp(300).delay(100).queue(
            function () {
                $('.loader').fadeIn(300).addClass('loactive');
                $('.s_item-2').slideDown(300);
                $(this).dequeue();
            }
        ).delay(2200).queue(function () {
            $('.s_item-2').slideUp(300).delay(100).queue(function () {
                $('.s_item-3').slideDown(200);
                calc()
                $(this).dequeue();
            });
            $(this).dequeue();
        });

        return false
    })

});

function calc() {
    var num1, num2, num3, num4, result;
    // num1 = document.getElementById('weight').value;
    // num1 = parseInt(num1);
    num4 = '3';

    // num3 = document.getElementById('new').value;
    // num3 = parseInt(num3);
    result = Math.ceil(num4);
    document.getElementById('num').innerHTML = result;
}
