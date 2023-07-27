$(document).ready(function () {
    $('a').not('.ac_footer a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#order_form1').offset().top
        }, 500);
    });
});
