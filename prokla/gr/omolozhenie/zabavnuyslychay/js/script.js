$(document).ready(function() {
    $('.pre_toform,.vtbadlink').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:
            $('form').offset().top
        }, 500);
    });
    $('#timer').countdown({
        until: '+0d +0h 12m ',
        format: 'MS',
        compact: true,
        layout:  '{m10}{m1}:' + '{s10}{s1}'
    });
});