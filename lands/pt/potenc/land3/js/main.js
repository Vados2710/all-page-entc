function main() {
  $(document).ready(function () {
    function result() {
      var formSum = 0;
      $(".tabs__question .text__block").each(function () {
        var curSum = 0;
        $(this).find(":input").each(function () {
          if ($(this).is(":checked")) {
            if (!$(this).hasClass("nosum")) {
              curSum += $(this).val() * 1;
            }
          }
        });
        formSum += curSum;
      });
      var total = formSum;
      if (total >= 0 && total < 10) {
        $(".popup__test-1").show();
        $(".block3 .first__window").hide();
        $(".block3 .second__window").show();
      } else if (total > 9 && total < 19) {
        $(".popup__test-2").show();
        $(".block3 .first__window").hide();
        $(".block3 .second__window").show();
      } else if (total > 18) {
        $(".popup__test-3").show();
        $(".block3 .first__window").hide();
        $(".block3 .second__window").show();
      }
    };
    $(".popup__test .popup-close").click(function () {
      $(".popup__test").hide();
    });
    $(".popup__layer").click(function () {
      $(".popup__test").hide();
    });
    $(".popup__test .popup-btn").click(function () {
      $(".popup__test").hide();
    });
  
    var count = 0;
    $('.question__next').on('click', function (event) {
      event.preventDefault();
      var flaga = false;
      $('.tabs__question-active .text__block').each(function () {
        if (flaga) {
          return;
        }
  
        if ($(this).find('input:checked').length == 0) {
          flaga = true;
        }
      });
      if (flaga) {
        alert('Responda todas as perguntas');
      } else {
        count++;
        $('.tabs__list .list__item').removeClass('active');
        $('.tabs__list .list__item').eq(count).addClass('active');
        $('.tabs__question').removeClass('tabs__question-active');
        $('.tabs__question').eq(count).addClass('tabs__question-active');
      }
    });
    $('.question__result-btn').on('click', function (event) {
      event.preventDefault();
      var flaga = false;
      $('.tabs__question-active .text__block').each(function () {
        if (flaga) {
          return;
        }
        if ($(this).find('input:checked').length == 0) {
          flaga = true;
        }
      });
      if (flaga) {
        alert('Responda todas as perguntas');
      } else {
        result();
      }
    });
  
    $('.block8 .list__item').click(function () {
      var index = $(this).index();
      $('.content__block__right').removeClass('block__right-active');
      $('.content__block__right').eq(index).addClass('block__right-active');
      if ($(window).width() < '1024') {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.content__block__right').eq(index).removeClass('block__right-active');
        } else {
          $('.list__item').removeClass('active');
          $(this).addClass('active');
        }
      } else {
        $('.list__item').removeClass('active');
        $(this).addClass('active');
      }
    });
  
    $('.block11__reviews').slick({
      slidesToShow: 3,
      fade: false,
      variableWidth: true,
      speed: 200,
      centerMode: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $('.block7__slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.block7__slider1',
      touchMove: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          infinite: true,
        },
        breakpoint: 768,
        settings: {
          adaptiveHeight: false,
        }
      }]
    });
  
    $('.block7__slider1').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: '.block7__slider2',
      dots: false,
      touchMove: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }]
    });
  
    let slider1 = $('.slider__tabs');
    let sliderElements;
  
    function initSlider(slider, options) {
      slider.on('init', function () {
        setTimeout(function () {
          slider.addClass('is-ready');
        }, 100);
      });
      slider.not('.slick-initialized').slick(options);
    }
  
    function destroySlider(slider) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
    }
  
    function showSlider() {
      var tablet = ($(window).width()) < 768;
      if (tablet) {
        initSlider(slider1, {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          infinite: true,
          variableWidth: true,
          centerMode: true
        });
      } else {
        destroySlider(slider1);
      }
    };
    showSlider();
    $(window).on('resize', showSlider);
  
  
    $(".btn-open").click(function () {
        $(".popup-container-1").show(),
          $(".popup-container-1").mouseup(function (p) {
            var e = $(".popup-container");
            0 === e.has(p.target).length && (e.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""), $('.reviews-age').val(""), $('.reviews-name').val(""), $('.reviews__error').removeClass('active'))
          })
      }),
      $(".popup-btn").click(function () {
        let fail = false;
        if ($(".popup-review").val().length == 0) {
          fail = true;
          $('.text-err').addClass('active');
        }
        if ($('.reviews-age').val().length == 0) {
          fail = true;
          $('.age-err').addClass('active');
        }
  
        if ($('.reviews-name').val().length == 0) {
          fail = true;
          $('.name-err').addClass('active');
        }
        if (!fail) {
          $(".popup-block-second").addClass("active");
          $(".popup-block-first").addClass("active");
          $(".popup-review").val(""), $('.reviews-age').val(""), $('.reviews-name').val("");
        }
      }),
      $(".popup-close").click(function () {
        $(".popup-container").hide(), $(".popup-review").val(""), $('.reviews-age').val(""), $('.reviews-name').val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $('.reviews__error').removeClass('active')
      });
    $('.reviews-name').on('input', function () {
      $('.name-err').removeClass('active');
    })
    $('.reviews-age').on('input', function () {
      $('.age-err').removeClass('active');
    })
    $('.popup-review').on('input', function () {
      $('.text-err').removeClass('active');
    })
  
    var doctorText = $('.block6 .content__block');
    $(".plus").click(function () {
      $(this).toggleClass("is-open");
      doctorText.toggleClass("is-show");
    });
  
    // Block 7
    $('.toggler-review').click(function () {
      $(this).parent().find('.slider2__text').toggleClass('rev-show');
      $(this).toggleClass('is-open');
    });
    $('.block7__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.toggler-review').removeClass('is-open').parent().find('.slider2__text').removeClass('rev-show');
    });
  
    // Block 11
    function clearSliderItemState() {
      var allText = $('.review__text');
      allText.attr('data-expanded', 'false');
      more.removeClass('is-open');
      allText.removeClass('rev-show');
    }
    $('.block11__reviews').on('beforeChange', function () {
      clearSliderItemState();
    });
  
    var more = $('.review__open');
    more.on('click', function () {
      var parent = $(this).parent();
      var text = parent.children('.review__text');
      if (text.attr('data-expanded') == 'false') {
        var allText = $('.review__text');
        text.addClass('rev-show');
        allText.not(text).removeClass('rev-show');
        allText.attr('data-expanded', 'false');
        more.removeClass('is-open');
        $(this).addClass('is-open');
        text.attr('data-expanded', 'true');
      } else {
        clearSliderItemState();
      }
    });
  });
}


if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  main();
};