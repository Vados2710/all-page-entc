//unselected header | fix for unexpected selection IE
const headerBlock = document.querySelectorAll('.header')
for (let i = 0; i < headerBlock.length; i++) {
    headerBlock[i].onselectstart = function () {
        return false
    }
}


// preloader

$(window).on('load', function () {
    let preload = $('.preload');
    preload.delay(2000).fadeOut('slow');
});

// breadcumps
setTimeout(function () {
  $('.header__right').addClass('pseudo');
}, 1000);

"use strict";
var pop = document.querySelector('.ever-popup');


$(function() {
  $('#twenty').twentytwenty({

      no_overlay: true,

  });

  $('#twenty').addClass('makecha');



  $('#twenty1').twentytwenty({

      no_overlay: true,

  });

  $('#twenty1').addClass('makecha');
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 100
  }, 1500);
});
//=include ../components/b-ways/b-ways.js
//=include ../components/d-effect/d-effect.js
$(document).ready(function () {
  $(".graph__button").on('click', function () {
    $(".graph__button").removeClass("active");
    $(this).addClass("active");
    $(this).parent().removeClass("tab1 tab2 tab3")
      .addClass("tab" + $(this)[0].getAttribute("data-tab"));
  });

  var canvas = document.getElementById('graph__canvas');
  var ctx = canvas.getContext('2d');
  var w = 900;
  var h = 500;
  canvas.width = w;
  canvas.height = h;

  function draw() {
    ctx.strokeStyle = '#f3f3f3';
    for (var i = 0; i <= 1500; i += 25) {
      ctx.beginPath();
      ctx.moveTo(0, -900 + i);
      ctx.lineTo(1000, 1000 - 900 + i);
      ctx.stroke();
      ctx.closePath();
    }
  }
  draw();
});

$(document).ready(function () {
  $('.sliderr').slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    prevArrow: $('.review_prev'),
    nextArrow: $('.review_next')
  });
  $('.sliderr').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    if (window.innerWidth > 1239) {
      var thumbN = $('.sliderr__thumb-next img');
      var thumbP = $('.sliderr__thumb-prev img');
      var newAtt = thumbN[0].getAttribute("src");
      var x = newAtt.split("");
      var xx = newAtt.split("");
      if (currentSlide === 9) {
        x[x.length - 5] = 0;
        xx[xx.length - 5] = currentSlide - 1;
      } else if (currentSlide === 0) {
        x[x.length - 5] = currentSlide + 1;
        xx[xx.length - 5] = 9;
      } else {
        x[x.length - 5] = currentSlide + 1;
        xx[xx.length - 5] = currentSlide - 1;
      }
      var y = x.join("");
      var yy = xx.join("");
      thumbN[0].setAttribute("src", y);
      thumbP[0].setAttribute("src", yy);
    }
  });

});

$(document).ready(function () {
  var allSectXY = [];
  var currentS = 1;
  var initSect = function () {
      allSectXY = [0];
      var blocks = $(".ways, .how, .effect, .info, .review, .use, .order, .header2");
      for ( var i = 0; i < blocks.length; i++) {
          var xx = $(blocks[i]).offset().top;
          allSectXY.push(xx);
      }
  };
  $(window).resize(function() {
      initSect();
  });
  initSect();
  $(".sideR__dots_dot").on('click', function () {
      var goTo = $(this)[0].getAttribute("data-b");
      $('html, body').animate({
          scrollTop: allSectXY[goTo - 1]
      }, 1000);
  });
  $(window).scroll(function() {
      var winScrollTop = window.pageYOffset;
      for (var i = 0 ; i < allSectXY.length; i++) {
          if (i === allSectXY.length - 1 && winScrollTop > allSectXY[i] - 100) {
              $(".sideR__number").text("0" + allSectXY.length);
              currentS = allSectXY.length;
              $(".sideR").removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9").addClass("b_" + currentS);
          }
          if (winScrollTop > allSectXY[i] - 100 && winScrollTop < allSectXY[i + 1] && currentS !== i+1) {
              $(".sideR__number").text("0" + (i + 1));
              currentS = i + 1;
              $(".sideR").removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9").addClass("b_" + currentS);
          }
      }
  });
});


function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
    telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
    isNaN(event.data)
      ? this.value = this.value.replace(/[^0-9+]/, '')
      : false;
  }
}

initInputValidation();

window.addEventListener("load", function () {
  const popup = document.querySelector('.ever-popup');

  document.addEventListener('click', function () {
    if (popup && popup.classList.contains('show')) {
      initInputValidation();
    }
  })
});