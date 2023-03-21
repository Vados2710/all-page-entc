$(document).ready(function () {
    var $timer = $('.js-timer');

    $timer.countdown({
        until: '+0d +0h 15m ',
        format: 'HMS',
        compact: true,
        layout: '<li class="hours">{h10}{h1}</li>' +
            '<li> ore </li>' +
            '<li class="minutes">{m10}{m1}</li>' +
            '<li> minute </li>' +
            '<li class="seconds">{s10}{s1}</li>' +
            '<li> secunde </li>'
    });


    $("a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
  	$(".scroll-to").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 10 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});