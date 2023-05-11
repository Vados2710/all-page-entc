const months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['tél', 'tavasz', 'nyár', 'ősz'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date')
  }

  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? newCounter = -counter : newCounter = counter;
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + (newCounter * _msInDay)),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
    }
  }

  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ')
  }

  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
    _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
  }

  function getYearWithCounter(year, counter) {
    return year + counter
  }

  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb
  }

  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
  }
}

if (document.body.classList.contains('ev-date')) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons)
  });
}

!(function ($, window, document) {
  'use strict';
  var pluginName = 'commentPopUp',
    defaults = {
      nextArrow: '<a class="next btn-bar buttons"></a>',
      prevArrow: '<a class="prev btn-bar buttons"></a>',
    };

  function CommentPopUp(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }
  $.extend(CommentPopUp.prototype, {
    init: function () {
      this.buildCache();
      this.$element.find('.slides').slick({
        dots: false,
        appendArrows: this.settings.wrapperArrows,
        nextArrow: this.settings.nextArrow,
        prevArrow: this.settings.prevArrow,
        fade: true,
      });
      this.$element.css('opacity', 1);
    },
    buildCache: function () {
      this.$element = $(this.element);
    },
  });
  ($.fn.commentPopUp = function (options) {
    return this.each(function () {
      $.data(this, "plugin_" + pluginName) || $.data(this, "plugin_" + pluginName, new CommentPopUp(this, options));
    });
  });
})(jQuery, window, document);

"use strict";
!(function ($, window, document, undefined) {
  var pluginName = "testimonial_slider_new",
    defaults = {};

  function TestimonialSliderNew(element, options) {
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.prevBtn = this.$element.find(".btn-prev");
    this.nextBtn = this.$element.find(".btn-next");
    this.slides = this.$element.find(".card");
    this.parent = this.$element.find(".testimonial_slider_box");
    this.actualSlide = 0;
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.init();
  }
  $.extend(TestimonialSliderNew.prototype, {
    init: function () {
      if ((this.parent.hasClass('d-slider') && $(window).width() > 768) || (this.parent.hasClass('m-slider') && $(window).width() < 769)) {
        this.switchSlide();
        this.bindEvents();
      }
    },
    switchSlide: function () {
      this.hideAllSlides();
      this.showActualSlide();
    },
    hideAllSlides: function () {
      this.slides.hide();
    },
    showActualSlide: function () {
      $(this.slides[this.actualSlide]).show();
    },
    bindEvents: function () {
      this.prevBtn.bind("click", this.prevSlide);
      this.nextBtn.bind("click", this.nextSlide);
    },
    prevSlide: function () {
      if (this.actualSlide === 0) this.actualSlide = this.slides.length - 1;
      else --this.actualSlide;
      this.switchSlide();
    },
    nextSlide: function () {
      if (this.actualSlide === this.slides.length - 1) this.actualSlide = 0;
      else ++this.actualSlide;
      this.switchSlide();
    }
  });
  $.fn.testimonialSliderNew = function (options) {
    return this.each(function () {
      $.data(this, "plugin_" + pluginName) || $.data(this, "plugin_" + pluginName, new TestimonialSliderNew(this, options));
    });
  }
})(jQuery, window, document);

!(function ($, window, document) {
  'use strict';
  var pluginName = 'carousel',
    defaults = {};

  function Carousel(element, options) {
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.prevBtn = this.$element.find(".btn-prev");
    this.nextBtn = this.$element.find(".btn-next");
    this.slides = this.$element.find(".carousel-item");
    this.actualSlide = 0;
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.nextSlideAuto = this.nextSlideAuto.bind(this);
    this.init();
  }
  $.extend(Carousel.prototype, {
    init: function () {
      this.showSlider();
      this.switchSlide();
      this.bindEvents();
      this.nextSlideAuto();
    },
    showSlider: function () {
      this.$element.addClass("visible");
    },
    switchSlide: function () {
      this.hideAllSlides();
      this.showActualSlide();
    },
    hideAllSlides: function () {
      this.slides.hide();
    },
    showActualSlide: function () {
      $(this.slides[this.actualSlide]).show();
    },
    bindEvents: function () {
      this.prevBtn.bind("click", this.prevSlide);
      this.nextBtn.bind("click", this.nextSlide);
    },
    prevSlide: function () {
      if (this.actualSlide === 0) this.actualSlide = this.slides.length - 1;
      else --this.actualSlide;
      this.switchSlide();
    },
    nextSlide: function () {
      if (this.actualSlide === this.slides.length - 1) this.actualSlide = 0;
      else ++this.actualSlide;
      this.switchSlide();
    },
    nextSlideAuto: function () {
      let nextButton = this.nextBtn;
      setInterval(function () {
        nextButton.click()
      }, 10000);
    }
  });
  ($.fn.carousel = function (options) {
    return this.each(function () {
      $.data(this, "plugin_" + pluginName) || $.data(this, "plugin_" + pluginName, new Carousel(this, options));
    });
  });
  document.addEventListener("DOMContentLoaded", function init() {
    var sidebarQuery = document.getElementsByClassName("sidebar_placeholder desktop");
    sidebarQuery = sidebarQuery.length > 0 ? sidebarQuery : document.getElementsByClassName("container__wrapper--sidebar desktop");
    if (sidebarQuery.length > 0) {
      var sidebar = sidebarQuery[0].lastElementChild;
      if (sidebar != null && typeof sidebar != "undefined" && window.pageYOffset > sidebar.offsetTop) {
        $(".main-carousel-wrapper").carousel();
      } else if (sidebar == null || typeof sidebar == "undefined") {
        return;
      } else {
        window.clearTimeout(window.carouselTimeout);
        window.carouselTimeout = setTimeout(function () {
          init();
        }, 1000);
      }
    } else {
      $(".main-carousel-wrapper").carousel();
    }
  });
})(jQuery, window, document);

!(function ($, window, document, undefined) {

  "use strict";

  $(document).ready(function () {
    $('body').css('position', 'relative'); //endure body has this because its needed to stick other container
    if ($('.sticky_bar_container').length === 0) {

      let sticky_bar_container = $('<div></div>');
      $(sticky_bar_container).addClass('sticky_bar_container');
      $(sticky_bar_container).css('position', 'sticky');
      $(sticky_bar_container).css('top', '0');
      $(sticky_bar_container).css('z-index', '1000');

      $('body').prepend($(sticky_bar_container));

    }
    $('body').find('.sticky_bar_container').prepend($('.sticky_bar_6')); //move to body to stick container on it 
  });

  var sticky_bar7 = true;
  var sticky_bar6 = true;

  function countdown(element, minutes, seconds) {
    if (sticky_bar7 === true) {
      var time = minutes * 60 + seconds;
      var interval = setInterval(function () {
        var el = document.querySelector(element);
        if (time <= 0) {
          el.innerHTML = "00:00";
          setTimeout(function () {
            countdown('clock', 0, 5);
          }, 2000);
          clearInterval(interval);
          return;
        }
        var minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        var text = minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
      }, 1000);
    }

  }
})(jQuery, window, document);

!(function ($, window, document, undefined) {
  "use strict";
  $(document).ready(function () {
    $('body').css('position', 'relative');
    if ($('.sticky_bar_container').length === 0) {
      let sticky_bar_container = $('<div></div>');
      $(sticky_bar_container).addClass('sticky_bar_container');
      $(sticky_bar_container).css('position', 'sticky');
      $(sticky_bar_container).css('top', '0');
      $(sticky_bar_container).css('z-index', '1000');
      $('body').prepend($(sticky_bar_container));
    }
    $('body').find('.sticky_bar_container').prepend($('.sticky_bar'));
  });
  var sticky_bar5 = true;
  window.addEventListener("scroll", function () {
    if (sticky_bar5 === true) {
      if ($(window).scrollTop() > $('.sticky_bar5-on').offset().top) {
        sticky_bar5 = false;
        $('.sticky_bar .fly-box').hide();
        $('.b5').fadeIn('slow');
        setTimeout(function () {
          $('.b5').fadeOut('slow');
        }, 5000);
      }
    }
  });
})(jQuery, window, document);