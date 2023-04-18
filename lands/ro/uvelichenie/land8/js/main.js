$(document).ready(function () {
    $('.scroll').click(function () {
        $("html, body").animate({
            scrollTop: $("#form_bottom").offset().top
        }, 2000);
        return false;
    });
});