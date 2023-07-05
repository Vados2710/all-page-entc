$(document).ready(function () {
    $('a[href="#form"]').on("touchend, click", function (a) {
        a.preventDefault();
        $("body,html").animate({scrollTop: $("#form").offset().top}, 800)
    })
});