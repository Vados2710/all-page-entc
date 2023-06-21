$(function () {
    $('.close-ex').click(function () {
        $('#ouibounce-modal').fadeOut(300);
        $('#ouibounce-modal').addClass('popup-hide');
    })
    $('.underlay').click(function () {
        $('#ouibounce-modal').fadeOut(300);
        $('#ouibounce-modal').addClass('popup-hide');
    })
    var flag = true;
    $(document).mouseleave(function (e) {
        $('#ouibounce-modal').fadeIn(300);
        flag = false;
    })
});

