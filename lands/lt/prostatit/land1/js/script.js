
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 730) {
    $('.navbar-topper').fadeIn();
  } else {
    $('.navbar-topper').fadeOut();
  }
});


$(document).on('click', 'a[href^="#"], .button-down', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});