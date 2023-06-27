$(document).ready(function(){
  var countrycode = window.country_code;

  var span = $('.text__location');


  if (countrycode == "KZ") {
    span.text('Казахстане');
  }

  function result() {
  var formSum=0;
  $(".tabs__question .text__block").each(function(){
    var curSum=0;
    $(this).find(":input").each(function() {
      if ($(this).is(":checked")) {
        if (!$(this).hasClass("nosum")) {
          curSum+=$(this).val()*1;
        }
      }

    });
    formSum+=curSum;


  });
  var total = formSum;
  if (total >= 0 && total < 10) {
    $(".popup__test-1").show();
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }
  else if (total > 9 && total < 19) {
    $(".popup__test-2").show();
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }
  else if (total > 18) {
    $(".popup__test-3").show();
    $(".block3 .first__window").hide();
    $(".block3 .second__window").show();
  }

};
  $(".popup__test .popup-close").click(function() {
    $(".popup__test").hide();
  });
  $(".popup__layer").click(function() {
    $(".popup__test").hide();
  });
  $(".popup__test .popup-btn").click(function() {
    $(".popup__test").hide();
  });

  var count = 0;

  $('.question__next').on('click', function(event){
    event.preventDefault();
    var flaga = false;
    $('.tabs__question-active .text__block').each(function() {
      if (flaga) {
        return ;
      }

      if ($(this).find('input:checked').length == 0) {
        flaga = true;
      }
    });

    if (flaga) {
      alert('Atsakyti į visus klausimus');
      // Повідомляєш курстувачеві, щоб відмітив всі інпути

    } else {
      count++;
      $('.tabs__list .list__item').removeClass('active');
      $('.tabs__list .list__item').eq(count).addClass('active');
      $('.tabs__question').removeClass('tabs__question-active');
      $('.tabs__question').eq(count).addClass('tabs__question-active');
    }

  });
  $('.question__result-btn').on('click', function(event){
    event.preventDefault();
    var flaga = false;
    $('.tabs__question-active .text__block').each(function() {
      if (flaga) {
        return ;
      }

      if ($(this).find('input:checked').length == 0) {
        flaga = true;
      }
    });

    if (flaga) {
      // Повідомляєш курстувачеві, щоб відмітив всі інпути
      alert('Atsakyti į visus klausimus');
    } else {
      result();
    }

  });


  $('.block8 .list__item').click(function(){
    var index = $(this).index();
    $('.content__block__right').removeClass('block__right-active');
    $('.content__block__right').eq(index).addClass('block__right-active');
    if ($(window).width() < '1024') {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.content__block__right').eq(index).removeClass('block__right-active');
      }
      else {
        $('.list__item').removeClass('active');
        $(this).addClass('active');
      }
    }
      else {
        $('.list__item').removeClass('active');
        $(this).addClass('active');
      }


  });



  $('.review__open').click(function() {
    $(this).toggleClass('is-open').parent().find('.review__text').toggleClass('is-show');
  });

  $('.block11__reviews').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.review__open').removeClass('is-open').parent().find('.review__text').removeClass('is-show');
  });

  $(".btn-open").click(function() {
    $(".popup-container-1").show(), $(".popup-container-1").mouseup(function(p) {
      var e = $(".popup-container");
      0 === e.has(p.target).length && (e.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""))
    })
  }), $(".popup-btn").click(function() {
    $(".popup-review").val().length > 0 && ($(".popup-block-second").addClass("active"), $(".popup-block-first").addClass("active"))
  }), $(".popup-close").click(function() {
    $(".popup-container").hide(), $(".popup-review").val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active")
  });

  $(".content").mCustomScrollbar({
    theme:"my-theme"
  });
  function windowSize(){
    if ($(window).width() < '999'){
      $(".content").mCustomScrollbar("destroy");
    } else {
      $(".content").mCustomScrollbar({
        theme:"my-theme"
      });
    }
  }
  $(window).resize(windowSize);



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
      centerMode: true,
      adaptiveHeight: true
    });
  } else {
    destroySlider(slider1);
  }
};
showSlider();
$(window).on('resize', showSlider);

});

$(".js-close, .js-overlay").click(function (e) {
  e.preventDefault();
  $(".popup-container").hide()
 });


 var PopUp = function () {
 
	var popUpBlock = $(".js-pop_up");
	var linkShowPopUp = $(".js-show-popUp");
	var overlay = $(".js-overlay");
	return {
	  initPopup: function initPopup() {
		 linkShowPopUp.click(function (e) {
			e.preventDefault();
 
			var _this = $(this);
 
			var target = $(_this.data("target"));
			target.toggleClass("active");
			overlay.addClass("active");
			noScroll.on();
		 });
		 $(".js-close, .js-overlay").click(function (e) {
			e.preventDefault();
			popUpBlock.removeClass("active");
			overlay.removeClass("active");
			noScroll.off();
		 });
	  },
	  init: function init() {
		 PopUp.initPopup();
	  }
	};
 }();
 
 function Reviews() {
 
  var inputFile = $('.js-input-file');
  var inputPhoto = $('.js-photo');
  var inputLoad = $('.js-load');
  var inputAge = $('.js-input-age');
  var reviewsForm = $('.js-reviews-form');
  function loadImage() {
     inputFile.change(function (e) {
      var file = e.target.files[0];
 
      if (!file) {
        return;
      }
      var urlFile = window.URL.createObjectURL(file);
      var loadText = inputLoad.data('text');
      inputLoad.text("".concat(loadText));
      inputPhoto.css('background', "url(\"".concat(urlFile, "\") no-repeat center"));
      inputPhoto.css('backgroundSize', 'cover');
     });
    };
    function validateForm() {
     var maxLenght = 3;
     inputAge.on('keydown', function (e) {
      if ((e.key.length == 1 && e.key.match(/[^0-9'".]/) || $(this).val().length >= maxLenght) && !(e.key == 'Backspace' || e.key == 'Delete')) {
        return false;
      }
 
      if (e.key == 'Backspace' || e.key == 'Delete') {
        return true;
      }
     });
    };
    function submitForm() {
     var counter = 0;
     
     reviewsForm.submit(function (e) {
      e.preventDefault();
      $('.r-popup__title').text('Ačiū! Jūsų atsiliepimas išsiųstas moderavimui');
      counter = 1;
      reviewsForm.css('display', 'none');
     });
     $('.reviews__btn').on('click', function () {
      if (counter == 1) {
        $('.r-popup__title').text('Dėkojame už atsakymą, atsiliepimą apie nuosaikumą');
      }
     });
    };
     loadImage();
     validateForm();
     submitForm();
  };
 
 Reviews();

 if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll', function () {
    return setTimeout(slidersInit, 1000), {
      once: true
    }
  });
} else {
  slidersInit();
}

function slidersInit() {
  $('.block7__slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    /*fade: true,*/
    dots: false,
    arrows:true,
    adaptiveHeight: true,
    asNavFor: '.block7__slider1',
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1

        }
      }
  ]
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }
      ]
  });
  $('.block11__reviews').slick({
    slidesToShow: 3,
    fade: false,
    variableWidth: true,
    speed: 200,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
}

// date 
const months=['sausis','vasaris','kovas','balandis','gegužės','birželis','liepa','rugpjūtis','rugsėjis','spalis','lapkritis','gruodis'],monthMin = ['','','','','','','','','','','',''],days = ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],daysMin = ['','','','','','',''],seasons = ['žiema','pavasaris','vasara','ruduo'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 730;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}