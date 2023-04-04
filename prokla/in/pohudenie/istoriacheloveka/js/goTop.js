$(document).on('ready', function () {

    $(".scroll").on("click touched", function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $(".form").offset().top}, 800);
    })
});