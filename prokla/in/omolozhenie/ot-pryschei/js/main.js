$(function () {
  //fixed banner
  if ($(window).width() > 991) {
    var fixedBlock = $('.sidebar__banner');
    // var topOfFixedBlock = fixedBlock.offset().top;
    $(window).on("scroll", function () {
      // if (topOfFixedBlock <= $(window).scrollTop())
      if ($(window).scrollTop() > 1989) {
        fixedBlock.addClass('fixed');
      } else {
        fixedBlock.removeClass('fixed');
      }

      topOfComments = $('.article__conclusion').position().top;
      scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
      scrollDistanceFromTopOfComments = scrollDistanceFromTopOfDoc - topOfComments;
      if (scrollDistanceFromTopOfDoc > topOfComments) {
        fixedBlock.removeClass('fixed');
      }
    });
  }
});