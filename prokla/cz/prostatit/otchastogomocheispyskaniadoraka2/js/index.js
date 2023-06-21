$(function() {
    $('.screenLock').css({
        height: $(document).height() + "px"
    });

    $('.close, .screenLock').click(function() {
        $('.screenLock').fadeOut(300);
    })
    $('.screenLock .msg').click(function(event) {
        event.stopPropagation();
    });
    var flag = true;
    $(window).mouseout(function(e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.screenLock').fadeIn(300);
            flag = false;
        }
    });


});


let openImage = function () {
    $(this).children(".first").toggleClass("show");
    $(this).children(".second").toggleClass("hide");
};

$(document).on("click", ".img-hide", openImage);