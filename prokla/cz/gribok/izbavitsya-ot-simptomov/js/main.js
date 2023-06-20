let inputFile = $('.input-file');
let fileText = $('.comment-avatar');
let fileFlag = true;
let reviewsPopup = $('.reviews-popup');
let reviewsInput = $('.reviews-input');


inputFile.change(function () {
    if (inputFile.val() && fileFlag) {
        fileText.html('Fotografie byla nahrána');
        fileFlag = false;
    }
});

$('.reviews-form').submit(function (event) {
    fileText.html('Nahrát fotografii');
    reviewsPopup.fadeIn();
    event.preventDefault();
    setTimeout(function () {
        reviewsPopup.fadeOut();
    }, 2000);
    reviewsInput.val('');
});

