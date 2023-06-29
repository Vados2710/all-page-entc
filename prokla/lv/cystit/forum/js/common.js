$(document).ready(function () {

  var side = $('.side__wrap'),
    sideHeight = side.height() + side.offset().top,
    sideBarHeight = side.height();

  $(document).on('scroll', function () {

    var winHeight = $(window).height(),
      limit = sideBarHeight - winHeight,
      limitScroll = (sideHeight - winHeight),
      documentScroll = $(document).scrollTop();

    if (documentScroll >= limitScroll) {
      side.addClass('fix');
      side.css('bottom', limit);
    }
    else if (documentScroll <= limitScroll) {
      side.removeClass('fix');
      side.removeAttr('style')
    }
  });

});



