$(document).ready(function() {
    $(function (mouseMoved) {
        $("body").append('<div class="mouse"><div class="line_top mouse_moved"></div></div>');
        var flag = true;
        $('.mouse_moved').mouseover(function () {
            if (flag == true) {
                    $('.mouse-moved-up').show();
                }
                flag = false;
        });
    });
    $('.close, .modal').click(function () {
        $('.screenLock').hide();
    });
});