$(document).on('click', '.navbar a, .content-box a', function (e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $('#scroll-point').offset().top
  }, 1000);
  return false;
});

