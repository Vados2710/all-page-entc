$(document).ready(function () {


 $('body').on('click', '.sec5__control', function () {
  var idx = $(this).index();

  $(this).html('-').addClass('opened').siblings().html('+').removeClass('opened');
  $('.sec5__item').eq(idx).addClass('active').siblings().removeClass('active');
 });


 $('body').on('click', '.sec5__control.opened', function () {
  $('.sec5__control').html('+').removeClass('opened');
  $('.sec5__item').removeClass('active');
 });


});