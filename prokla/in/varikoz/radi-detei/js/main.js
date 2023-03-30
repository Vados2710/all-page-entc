$(document).ready(function () {
    $(function () {

        $('.close').click(function () {
            $('.screenLock').fadeOut(300);
        });
        var flag = true;
        $(window).mouseout(function (e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                $('.screenLock').fadeIn(300);
                flag = false;
            }
        })
    });
});