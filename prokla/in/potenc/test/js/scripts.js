$(document).ready(function () {
  $('.first-block .start').on('click', function (e) {
    e.preventDefault();
    var parent = $(this).parents('.first-block');
    $(this).fadeOut(0);
    parent.find('.s-start').fadeOut(0);
    parent.find('.s-next').fadeIn(0);
    parent.find('.s-next').find('._step').eq(0).addClass('active');
  });

  var count = 0;
  $('.s-next .next-slide').on('click', function (e) {
    e.preventDefault();
    var step = $(this).parents('.steps-div').find('._step');
    var activeSlide = $(this).parents('.steps-div').find('._step.active');
    activeSlide.each(function () {
      $(this).removeClass('active');
    });
    count++;
    $('.dots').find('.dot').eq(count).addClass('d-actual');
    if (count === 4) {
      $(this).fadeOut(0);
      $(this).parents('.s-next').find('.dots').fadeOut(0);
      $('._last').addClass('active');
    } else {
      step.eq(count).addClass('active');
    }
  });
});