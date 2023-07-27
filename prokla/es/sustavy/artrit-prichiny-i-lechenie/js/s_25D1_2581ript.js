function scrollToForm() {
  let link = $('a[href*="#form__block"]');
  let form = $('#form__block');

  if ($(window).width() > 860) {
    offset = 50
  } else if ($(window).width() <= 860) {
    offset = 89
  } else if ($(window).width() <= 400) {
    offset = 110
  }
  
  link.on('click', function() {
    setTimeout(function() {
      $('html, body').stop().animate({
        scrollTop: $(form).offset().top - offset
      }, 777);
    }, 0);

  });
}
scrollToForm();