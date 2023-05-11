$('a').bind('click.smoothscroll',function (e) {
  e.preventDefault();

  var $target = $('#order_form');

  var h = $target.offset().top;

  $('html, body').stop().animate({
    'scrollTop': h - 80
  }, 500, 'swing');
});