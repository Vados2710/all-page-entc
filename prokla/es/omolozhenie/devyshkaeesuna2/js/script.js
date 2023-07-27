$("a").on("touchend, click", function(e) {
  e.preventDefault();
  $('body,html').animate({
      scrollTop: $('.main__order').offset().top
  }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a, .main__order-popup-close, .main__order-popup-link").unbind("click");

//spin

jQuery(document).ready(function($) {

  // -------------spin-------------------
  var resultWrapper = $('.main__order-popup');
  var wheel = $('.main__order-wheel-img');
  var popupIsOpen = false;

  $('.main__order-wheel-cursor-text').on("click", function(event) {
      $(this).off(event);
      if (!wheel.hasClass('rotated')) {
          wheel.addClass('super-rotation');
          setTimeout(function() {
              resultWrapper.css({
                  'display': 'block'
              });
              popupIsOpen = true;
              $('.main__order-luck').slideUp();
              $('.main__order-product').slideDown();
          }, 8000);
          wheel.addClass('rotated');
      }
  });

  // --------------POPUP-------------------
  function closingPopup() {
      if (popupIsOpen) {
          popupIsOpen = false;
          resultWrapper.fadeOut();
          $('body,html').animate({
              scrollTop: $('.main__order').offset().top
          }, 400);
          $('.main__order-popup-close, .main__order-popup-link').unbind("touchend, click");
      }
  }

  $(document).keydown(function(e) {
      if (e.keyCode === 27 && popupIsOpen) {
          closingPopup();
      }
  });

  $('.main__order-popup-close, .main__order-popup-link').on("touchend, click", function(e) {
      e.preventDefault();
      closingPopup();
  });

});

//seats

function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var count = $(".last-seats-number").eq(0).text(),
  timeLeft = setTimeout(function t() {
      count--;
      $(".last-seats-number").text(count);
      var b = Random(1, 75);
      if (count > 4) {
          timeLeft = setTimeout(t, b * 1000);
      }
  }, Random(5, 10) * 1000);