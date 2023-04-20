(function () {
  'use strict';

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 40,
      },
      1000
    );
  });

  var flag = false;
  $('.js-scroll').on('click', function () {
    var bannerScroll = $('.banner');
    flag = true;
    bannerScroll.fadeIn();
    setTimeout(function () {
      flag = false;
    }, 1000);
  });
  $(window).on('scroll resize', function () {
    if (flag === false) {
      hideBannerScroll('.x_order_form', '.footer', '.deliver');
    }
  });

  function hideBannerScroll() {
    var bannerScroll = $('.banner'),
      bannerDelivery = $('.main-banner'),
      dT = $(window).scrollTop(),
      dB = dT + $(window).height(),
      dW = $(window).width();
    var cnt = 0;

    for (var iArr = 0; iArr < arguments.length; iArr++) {
      $(arguments[iArr]).each(function (i, hi) {
        var eT = $(hi).offset().top,
          eB = eT + $(hi).outerHeight(),
          eL = $(hi).offset().left,
          eR = eL + $(hi).width();

        if (eT <= dB && eB >= dT && eL <= dW && eR >= 0) {
          cnt += +1;
        }
      });
    }

    if (dT <= 100 || cnt > 0) {
      bannerScroll.fadeOut();
    } else {
      bannerScroll.fadeIn().css({
        bottom: bannerDelivery.outerHeight(),
      });
    }
  }

  function initSelect() {
    var inputSelect = $('.country-select').first(),
      customOptions = $('.options');
    var selected = $('.selected');
    var currentCountry = $('.country-select option:selected').first();
    var currentCountryCode = currentCountry.val();
    var selectedText = $('<span>', {
      class: 'option__text',
      text: currentCountry.text(),
    });
    selected.addClass(currentCountryCode);
    selectedText.appendTo(selected);

    function setOptions(select) {
      inputSelect.find('option').each(function (i, option) {
        var countryCode = option.value;
        var countryName = option.text;
        var link = $('<a>', {
          class: countryCode + ' option',
          href: '?&country_code='.concat(option.value),
          'data-value': countryCode,
        });
        var optionText = $('<span>', {
          class: 'option__text',
          text: countryName,
        });
        optionText.appendTo(link);

        if (countryCode !== currentCountryCode) {
          link.appendTo(customOptions);
        } else {
          link.prependTo(customOptions);
        }
      });
    }

    setOptions();
    $(window).on('click', function (e) {
      var target = $(e.target); // if (target.hasClass('selected')) {

      if (target.hasClass('custom-select') || target.hasClass('selected')) {
        // target.addClass('hide');
        target.parent().find('.options').addClass('opened');
      } else {
        // $('.hide').removeClass('hide');
        $('.opened').removeClass('opened');
      }
    });
  }

  initSelect();

  $('document').ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
      grabCursor: true,
      speed: 800,
      centeredSlides: true,
      slidesPerView: 'auto',
      slideShadows: true,
      loop: false,
      runCallbacksOnInit: false,
      initialSlide: 2,
      effect: 'coverflow',

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
        dragSize: 51,
      },

      breakpoints: {
        768: {
          coverflowEffect: {
            rotate: 0,
            stretch: 190,
            depth: 2,
            modifier: 1,
          },
        },
      },
    });
    mySwiper.on('slideChange', function () {
      // reviewsText.forEach(function(item, i, arr) {
      //     item.classList.remove('active');
      //   });
      for (var k = 0; k < reviewsText.length; k++) {
        reviewsText[k].classList.remove('active');
      }
    });
  });

  var reviewsToggle = function reviewsToggle(evt) {
    if (evt.target.classList.contains('reviews__item--text-toggle')) {
      var b = evt.srcElement.offsetParent;

      if (b.classList.contains('active')) {
        b.classList.remove('active');
      } else {
        b.classList.add('active');
      }
    }
  };

  var reviewsText = document.querySelectorAll('.reviews__item');

  for (var i = 0; i < reviewsText.length; i++) {
    var a = reviewsText[i];
    a.addEventListener('click', reviewsToggle);
  }
})();
//# sourceMappingURL=main.js.map

// phone
