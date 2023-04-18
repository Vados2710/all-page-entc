$('.pre_toform').on('click touch', function(e){
  e.preventDefault();
  $('html, body').animate({ scrollTop:
  $('.order__form').offset().top }, 500);
});