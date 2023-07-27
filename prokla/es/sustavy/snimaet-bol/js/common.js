var privacyBtn = $('.privacy-link');
var contactBtn = $('.contact-link');
var modal = $('.modal');
var contactModal = $('.modal--contact');
var privacyModal = $('.modal--privacy');
var overlay = $('.overlay-bg');
var closeBtn = $('.modal__close-button');



privacyBtn.on('click', function (e) {

    if (!modal.hasClass('modal--active')) {
        privacyModal.addClass('modal--active');
        overlay.addClass('overlay-bg--active');
    } else {
        privacyModal.removeClass('modal--active');
        overlay.removeClass('overlay-bg--active');
    }
    return false;
});

contactBtn.on('click', function (e) {

    if (!modal.hasClass('modal--active')) {
        contactModal.addClass('modal--active');
        overlay.addClass('overlay-bg--active');
    } else {
        contactModal.removeClass('modal--active');
        overlay.removeClass('overlay-bg--active');
    }
    return false;
});

overlay.on('click', function () {
    modal.removeClass('modal--active');
    overlay.removeClass('overlay-bg--active');
});

closeBtn.on('click', function () {
    modal.removeClass('modal--active');
    overlay.removeClass('overlay-bg--active');
});
var webAddress = $('.site');

webAddress.innerText = window.location.href;