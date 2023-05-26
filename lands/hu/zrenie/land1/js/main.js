"use strict";
$(window).load(function () {
   function e() {
      s = window.innerHeight, r.each(function (e) {
         l[e] = $(this).offset().top, a[e] = $(this).offset().top + $(this).innerHeight()
      })
      // , d.each(function (e) {
      //    c[e] = $(this).offset().top, p[e] = $(this).offset().top + $(this).innerHeight()
      // })
   }

   function i() {
      n.removeClass("fixed")
   }

   function t() {
      n.addClass("fixed")
   }

   function o(e, i) {
      $("html, body").animate({
         scrollTop: e.offset().top
      }, i)
   }
   var s, n = $(".navbar"),
      r = $(".js-button"),
      l = [],
      a = [],
      // d = $(".js-animated"),
      c = [],
      p = [];
   e(), $(window).on("resize", function () {
      e()
   }), $(window).on("scroll", function () {
      var e = $(window).scrollTop(),
         o = e + s,
         n = !0;
      if (e >= a[0] && o <= a[r.length - 2]) {
         for (var u = 1; u < r.length; u++) e <= a[u] && l[u] <= o && (n = !1);
         n ? t() : i(), n ? t() : i()
      } else i();
      // for (var h = 0; h < d.length; h++) e <= p[h] && c[h] <= o ? $(d[h]).addClass("is-animated") : $(d[h]).removeClass("is-animated")
   }), $(".js-open-popup").on("click", function (e) {
      e.preventDefault();
      var i = $(this).attr("href");
      $(i).fadeIn(400)
   }), $(".js-close-popup").on("click", function () {
      $(this).closest(".popup").fadeOut(0)
   }), $("#popup").on("click", function (e) {
      e.target == this && $(this).fadeOut(0)
   })
});
$(document).ready(function() {
	var mobileWidth = 0,

       Banner = $('.js-hurryup'),
      BannerClose = $('.js-hurryup-close'),
      BannerButton = $('.js-red-btn'),

		MenuLink = $('.js-link'),
		topMenu = $("nav"),
		topMenuItems = topMenu.find("a"),
		navbar = $(".navigation"),
    
		TopSection = $('.js-top-section'),
		BottomSection = $('.js-bottom-section'),
		TopSectionPosTop, TopSectionPos, BottomSectionPos,
    windowWidth, windowHeigth, MenuHeight;

function detectwindowWidth(){
		windowWidth = $(window).width();
	}

function detectSize(){
		windowWidth =  $(window).width();
		windowHeigth = window.innerHeight;
		MenuHeight = topMenu.innerHeight();
    TopSectionPosTop = TopSection.offset().top;
     TopSectionPos = TopSectionPosTop + TopSection.innerHeight();
      BottomSectionPos = BottomSection.offset().top;
	};
function animateScroll(element, speed) {
    var elemScroll = parseInt(element.data("scroll"));
    var toScroll = element.offset().top - 60;
    if(elemScroll) {
      toScroll += elemScroll;
    }
    $("html, body").stop().animate({
      scrollTop: toScroll}, speed);
  };

  function hideMenu() {
      navbar.removeClass("floating");
  };
  function showMenu() {
      navbar.addClass("floating");
     
    };  
function switchMenuItems(scrolled) {
    topMenuItems.each(function() {
      var link = $(this),
          idSection = link.attr("href"),
          sectionScroll = parseInt($(idSection).data("scroll")),
          sectionTop = $(idSection).offset().top,
          sectionBottom = sectionTop + $(idSection).innerHeight();

          if(sectionScroll) {
            sectionTop += sectionScroll -60;
            sectionBottom += sectionScroll -60;
          }

      if(scrolled + MenuHeight >= sectionTop && scrolled + MenuHeight <= sectionBottom) {        
        $(this).addClass("js-active");        
        return;
      }
      if(scrolled + MenuHeight > sectionBottom) {
        topMenuItems.removeClass("js-active");
      }
    });
    return;
  };

detectwindowWidth();
detectSize();

 $(window).on("resize", function() { 

 		detectwindowWidth();
 		detectSize();

});
 MenuLink.on("click", function(e) {
      e.preventDefault();
      var id = $(this).attr("href");
        topMenuItems.removeClass('js-active');
        animateScroll($(id), 900);
  });
$('.js-to-form').on("click", function(e) {
        e.preventDefault();
         var id = $(this).attr("href");
          animateScroll($(id), 900); 
  });
  BannerButton.on("click", function() {
      Banner.removeClass('js-ultra-hide');
      Banner.addClass('js-fixed'); 
      $(this).removeClass('js-active');    
   });

   BannerClose.on("click", function() {
      if(~Banner.attr('class').indexOf('js-fixed')){
        Banner.removeClass('js-fixed');
        BannerButton.addClass('js-active');
      }else{
        Banner.addClass('js-ultra-hide');
      }
   });


$(window).on("scroll", function() {  
    var scrolledTop = $(this).scrollTop(),
      scrolledBottom = scrolledTop + windowHeigth;
      
    if(scrolledTop >= TopSectionPos) {
      showMenu();
      switchMenuItems(scrolledTop);
    } else {
      hideMenu();
    }

   if(windowWidth > mobileWidth) { 
        if(scrolledTop >= TopSectionPos && scrolledBottom < BottomSectionPos) {
              if(~Banner.attr('class').indexOf('js-fixed')){               
               BannerButton.removeClass('js-active');
              } else{
                BannerButton.addClass('js-active');
              }
        } 
        else {
          BannerButton.removeClass('js-active');
          Banner.removeClass('js-fixed');
        }

        
        if(scrolledTop <= TopSectionPos){
              Banner.appendTo(TopSection);
              Banner.removeClass('js-hide');
        }
        if(scrolledBottom >= BottomSectionPos){
              Banner.appendTo(BottomSection);
              Banner.removeClass('js-hide');
        } 
    }
  });

});
// slider
(function() {
	function Carusel(wrapper) {
	  this.carousel = {
		 wrapper: wrapper,
		 slides: wrapper.children(),
		 limit: wrapper.children().length,
		 currentSlide: 0,
		 direction: 1 // 1 - right, 0 - left
	  };
 
	  this.hammer = new Hammer(this.carousel.wrapper.get(0));
 
	  this._updateHeight();
	  this._updateDirection();
	  this.setSlides(this.carousel.currentSlide);
	  this._setEvents();
 
	  return this;
	}
 
	Carusel.prototype._updateHeight = function() {
	  var maxHeight = $(this.carousel.slides[0]).height();
	  for (var i = 1; i < this.carousel.limit; i++) {
		 var newMaxHeight = $(this.carousel.slides[i]).height();
		 if (newMaxHeight > maxHeight) {
			maxHeight = newMaxHeight;
		 } else {
			continue;
		 }
	  }
	  this.carousel.wrapper.height(maxHeight);
	};
 
	Carusel.prototype.setSlides = function(currentSlide) {
	  $(this.carousel.slides).removeClass(
		 "slide--current slide--prev slide--next"
	  );
	  var nextSlide, prevSlide;
 
	  if (currentSlide == this.carousel.limit - 1) {
		 nextSlide = 0;
		 prevSlide = currentSlide - 1;
	  } else if (currentSlide == 0) {
		 nextSlide = currentSlide + 1;
		 prevSlide = this.carousel.limit - 1;
	  } else {
		 prevSlide = currentSlide - 1;
		 nextSlide = currentSlide + 1;
	  }
 
	  var divide = this.carousel.currentSlide - currentSlide;
	  if (divide == -1 || divide == this.carousel.limit - 1) {
		 this.carousel.direction = 1;
	  } else if (divide == 1 || -divide == this.carousel.limit - 1) {
		 this.carousel.direction = 0;
	  }
 
	  this._updateDirection();
	  $(this.carousel.slides[currentSlide]).addClass("slide--current");
	  $(this.carousel.slides[prevSlide]).addClass("slide--prev");
	  $(this.carousel.slides[nextSlide]).addClass("slide--next");
	  this.carousel.currentSlide = currentSlide;
	};
 
	Carusel.prototype.nextSlide = function() {
	  var next =
		 this.carousel.currentSlide + 1 == this.carousel.limit
			? 0
			: this.carousel.currentSlide + 1;
	  this.setSlides(next);
	  return this;
	};
 
	Carusel.prototype.prevSlide = function() {
	  var prev =
		 this.carousel.currentSlide - 1 < 0
			? this.carousel.limit - 1
			: this.carousel.currentSlide - 1;
	  this.setSlides(prev);
	  return this;
	};
 
	Carusel.prototype._updateDirection = function() {
	  var directionClass;
	  if (this.carousel.direction == 0) {
		 directionClass = "slide--left";
	  } else {
		 directionClass = "slide--right";
	  }
	  this.carousel.wrapper
		 .removeClass("slide--left slide--right")
		 .addClass(directionClass);
	};
 
	Carusel.prototype._setEvents = function() {
	  var _this = this;
 
	  if (_this.carousel.slides.length) {
		 _this.carousel.slides.on("click", function() {
			_this.setSlides($(this).index());
		 });
	  }
 
	  if (_this.hammer) {
		 _this.hammer.on("swipe", function(evt) {
			if (evt.direction == 2) {
			  _this.nextSlide();
			}
			if (evt.direction == 4) {
			  _this.prevSlide();
			}
		 });
	  }
 
 
	  $(".js-carousel-next").on("click", function() {
		 _this.nextSlide();
	  });
 
	  $(".js-carousel-prev").on("click", function() {
		 _this.prevSlide();
	  })
 
	  $(window).on("resize", function() {
		 _this._updateHeight();
	  });
	};
 
	window.Carusel = Carusel;
 })();
$(document).ready(function() {
	new Carusel($(".js-carousel"));
}); 
// slider end
(function (globalObj) {
   function animationDetect(animationsElements, innerElementsClass) {
      this.WINDOW = window;
      this.animateElements = $(animationsElements);
      this.innerElementsClass = innerElementsClass;
      this._setSizes();
      this._setEvents();
      return this
   };
   animationDetect.prototype._setSizes = function () {
      this.wh = this.WINDOW.innerHeight;
      this.whTop = this.wh * 0.2;
      this.whBottom = this.wh * 0.6
   };
   animationDetect.prototype._setAnimation = function (element) {
      var innerElements = $(element).find(this.innerElementsClass)
      $(element).addClass($(element).data("animation") + " is-animated");
      if (innerElements) {
         innerElements.each(function () {
            $(this).addClass("delay " + $(this).data("animation") + " is-animated")
         })
      }
   };
   animationDetect.prototype._setEvents = function () {
      var _this = this;
      if (_this.WINDOW) {
         $(_this.WINDOW).on("scroll", function () {
            var scrolled = $(this).scrollTop(),
               scrollTop = scrolled + _this.whTop,
               scrollBottom = scrollTop + _this.whBottom;
            _this.animateElements.each(function () {
               var offsetTopElement = $(this).offset().top,
                  offsetBottomElement = offsetTopElement + $(this).height();
               if (offsetTopElement <= scrollBottom && offsetBottomElement >= scrollTop)
                  _this._setAnimation(this)
            })
         }).scroll();
         $(this.WINDOW).on("resize", function () {
            _this._setSizes()
         })
      }
   };
   $(globalObj).ready(function () {
      new animationDetect(".js-animate", ".js-animate-inner")
   })
}(document));

$('.play').click(function () {
   $(this).css("display", "none");
   $("#video").get(0).play();
});


function prettyNumber(e, i) {
   for (var t = e.toString(); t.length < i;) t = "0" + t;
   return t
};

function updateCounters() {
   for (; countLength;) {
      var e = countdown[countLength - 1].querySelectorAll(".js-count-digit"),
         i = e.length,
         t = !1;
      if (0 === i) numberStr = prettyNumber(number, 2), countdown[countLength - 1].innerText = numberStr;
      else {
         numberStr = prettyNumber(number, i);
         for (var o = 0; o < i; o++) {
            if (!t) {
               var s = e[o].className.split(" ");
               0 == +numberStr[o] ? -1 == s.indexOf("passive") && (e[o].className += " passive") : t = !0
            }
            e[o].innerText = numberStr[o]
         }
      }
      countLength--
   }
   isStorage() && localStorage.setItem("lastNumber", numberStr)
}

function doCountdown() {
   if (countLength = countdown.length, !(number > 5)) return clearInterval(timer), 5;
   number -= getRandomInt(minProdCount, maxProdCount), updateCounters()
}

function getRandomInt(e, i) {
   return Math.floor(Math.random() * (i - e + 1)) + e
}

function isStorage() {
   return void 0 !== window.localStorage
};

var countdown = document.getElementsByClassName("js-countdown");
if (0 !== countdown.length) {
   var countLength = countdown.length,
      number = 83,
      order = 2,
      numberStr = String(number),
      minProdCount = 1,
      maxProdCount = 5,
      minTimer = 1e4,
      maxTimer = 5e4;
   if (!isNaN(parseInt(countdown[0].innerText)) && parseInt(countdown[0].innerText) > 5 && (number = countdown[0].innerText.trim()), isStorage()) {
      var lastNumber = parseInt(localStorage.getItem("lastNumber"));
      isNaN(lastNumber) || (number = lastNumber)
   }
   updateCounters();
   var timer = setInterval(doCountdown, getRandomInt(minTimer, maxTimer))
} else console.warn('You have to add "js-countdown" class for any DOM element');