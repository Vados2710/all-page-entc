$(function () {
    var $privacyTitle = $('#js_title');
    $callBack = $('#call-back');
    $privacyTitle.on('click', function () {
        if (!$(this).hasClass('active')) {
            showCallBack($(this), $callBack);
        } else {
            return false
        }
    });
    $('#call-back .close').on('click', function () {
        hideCallBack($privacyTitle, $callBack);
    });
});

function showCallBack(titleBlock, callBack) {
    titleBlock.addClass('active');
    callBack.show();
    callBack.animate({
        opacity: 1,
        top: 40
    }, 200);
}

function hideCallBack(titleBlock, callBack) {
    callBack.animate({
        opacity: 0,
        top: -450
    }, 200, function () {
        titleBlock.removeClass('active');
        callBack.removeAttr('style');
    });
}
