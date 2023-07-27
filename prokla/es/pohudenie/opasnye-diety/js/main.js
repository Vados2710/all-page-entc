var buttons = $(".arrows__button");
var previousButton = $(".arrows__button--previous");
var nextButton = $(".arrows__button--next");
var resultIndex = document.querySelector(".article__number");
var slides = document.querySelectorAll(".article__image-item");

$(function() {
  //slider
  $('.article__image-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: previousButton,
    nextArrow: nextButton,
    swipe: false
  });
  
  buttons.on("click",function() {
    var activeSlide = $(".slick-slide.slick-current.slick-active");
    $(".article__number").html(activeSlide.data("index"));
  })


  //fixed banner & scroll to form
  if ($(window).width() > 991) {
    var fixedBlock = $('.sidebar__banner');
    var topOfFixedBlock = fixedBlock.offset().top;
    $(window).on("scroll", function() {
      if (topOfFixedBlock <= $(window).scrollTop()) {
        fixedBlock.addClass('fixed');
      } else {
        fixedBlock.removeClass('fixed');
      }

      if (($(".order").offset().top - 100) <= $(window).scrollTop()) {
        fixedBlock.removeClass('fixed');
      }

      if (($(".comments").offset().top - 100) <= $(window).scrollTop()) {
        fixedBlock.addClass('fixed');
      }

      topOfComments = $('.comments__button').position().top;
      scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
      scrollDistanceFromTopOfComments = scrollDistanceFromTopOfDoc - topOfComments;
      if (scrollDistanceFromTopOfDoc > topOfComments) {
        fixedBlock.removeClass('fixed');
      }
    });
  }

  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('.order').offset().top
    }, 400);
  });

  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});