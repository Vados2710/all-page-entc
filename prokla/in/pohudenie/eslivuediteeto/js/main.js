window.onload = function () {
    function startTimer(t) {
        var e, n, r = t,
            a = setInterval(function () {
                e = parseInt(r / 60, 10), n = parseInt(r % 60, 10), n = 10 > n ? "0" + n : n, $("#timerr").text(e + ':' + n), --r < 0 && (clearInterval(a))
            }, 1000)
    }

    startTimer((5 * 60) + 00);
}

var $nav,$h=0;
$(window).load(function () {
    $nav = $(".banner");
    $h = $nav.offset().top;
    $(window).scroll(function(){
        if ( $(window).scrollTop() > $h) {
            $nav.addClass("banner_fixed").show();
        } else{
            $nav.removeClass("banner_fixed");
        }
    });
});
