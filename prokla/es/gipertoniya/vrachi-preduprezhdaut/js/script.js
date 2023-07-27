$(document).ready(function () {
    $(this).scroll(function () {
        if ($(window).width() > 1024) {
            $('.sidebar').css('position', 'sticky');
        }
    });
});