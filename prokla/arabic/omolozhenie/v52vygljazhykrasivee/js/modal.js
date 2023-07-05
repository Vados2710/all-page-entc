$(document).ready(function () {
  $('.cls').on('click', function (e) {
    e.preventDefault();
    $('#modal').toggleClass('is-visible');
  });
  $('#modal_btn').on('click', function (e) {
    e.preventDefault();
    $('#modal').toggleClass('is-visible');
  });    
});

$(window).resize(function() {
  modal()
});

$(window).load(function () {
  modal()  
});

function modal() {
  if ( $(window).width() < 460) {
    var isVisible = false;

    if (isVisible) return;
    
    var $element = $('.yellow_block');

    $(window).scroll(function () {
      var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top + $element.height();
  
      if (scroll > offset) {
        $('#modal').addClass('is-visible');
        isVisible = true;
      }
    });
  }
}


