

var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
  var elemY = placeY[i];
  elemY.innerHTML = year;
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


$("a").attr('data-scroll', '#box');

$(function () {
  $('a').click(function (evt) {
    evt.preventDefault();
    var target = $(this).attr('data-scroll');
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, "slow");
  });
});