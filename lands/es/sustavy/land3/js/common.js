$(document).ready(function () {


 $(window).scroll(function () {
  var scrt = $(window).scrollTop();
  // console.log(scrt);
  if (scrt > 620) {
   $('.form1').addClass('fixed');
  }
  else {
   $('.form1').removeClass('fixed');
  }
 });
  $('.for-event').on('click', function () {
  var el = $(this).attr('data-href');
//        console.log(el);
  $('html, body').animate({
   scrollTop: $(el).offset().top - 100}, 500);
  return false;
 });
});

