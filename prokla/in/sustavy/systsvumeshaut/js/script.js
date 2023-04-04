$('html').mouseleave(function () {
  $('.popup').fadeIn();
});

$('.close, .popup_btn').click(function () {
  $('.popup').fadeOut();
});
