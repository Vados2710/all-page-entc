$(document).ready(function () {
    $(this).scroll(function () {
        if ($(window).width() > 1024) {
            $('.sidebar').css('transform', 'translateY(' + $(document).scrollTop() / 1.1 + 'px)');
        }
    });
});