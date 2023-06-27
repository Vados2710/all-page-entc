$(document).on('ready', function () {
    
    var _currentDate = new Date(),
        count = 15,
        toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1),
        $it = 9,
        $countWrap = $('.js-count');

    $('.toform').click(function () {
        $("html, body").animate({scrollTop: $(".form-horizontal").offset().top}, 1000);
        return false;
    });


    $('.timeqwqw').countdown({
        until: toDate,
        format: 'HMS',
        compact: true,
        layout:
        '<span class="hours">{h10}{h1}</span>' +
        '<span class="minutes">{m10}{m1}</span>' +
        '<span class="seconds">{s10}{s1}</span>' +
        '<div class="clear"></div>'
    }).removeClass('hidden');

    function $Time() {
        var timerId = setInterval(function () {
            $countWrap.text($it);
            if ($it > 5) {
                $it--;
            }
        }, 30000);
    }

    setTimeout(function () {
        $('#countp').html('9');
    }, 7000);

    setTimeout($Time, 8000);
    

});