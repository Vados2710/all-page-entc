$(document).ready(function() {
  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  var flag = true;



 
});
var close = document.querySelector(".closeblock");
var button = document.querySelector(".out-comebacker-content-btn");
var reviews = (function() {

  var inputFile = $('.input-file');
  var labelFile = $('.input-file');
  var reviewsPopup = $('.reviews-popup');
  var fileText = $('.reviews-form__file-text');
  var inputName = $('.inputName');
  var inputText = $('.inputText');
  inputFile.change(function(e) {
    fileText.html('Foto hochgeladen');
    labelFile.addClass('rloaded');
  });
  $('.reviews-form').submit(function() {
      event.preventDefault();
      reviewsPopup.fadeIn();
      setTimeout(function() {
        reviewsPopup.fadeOut();
      }, 2000);
      fileText.html('Ein Foto anhängen');
      labelFile.removeClass('rloaded');
      inputName.val('');
      inputText.val('');
  });
});
reviews();

let result = 0;
$('.test__answer-choice').click(function () {
    $(this).toggleClass('choiced');
});

$('.answer-1').click(function () {
    result += 1;
    $('.question-1').removeClass('show');
    $('.question-2').addClass('show');
});

$('.answer-2').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-2').removeClass('show');
    $('.question-3').addClass('show');
});

$('.answer-3').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-3').removeClass('show');
    $('.question-4').addClass('show');
});

$('.answer-4').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-4').removeClass('show');
    $('.question-5').addClass('show');
});

$('.answer-5').click(function () {
    if($('.test__answer-choice.choiced').length > 2) {
        result += 1;
    }
    $('.question-5').removeClass('show');
    $('.question-6').addClass('show');
});
$('.answer-6').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-6').removeClass('show');
    $('.question-7').addClass('show');
});
$('.answer-7').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-7').removeClass('show');
    $('.question-8').addClass('show');
});

$('.answer-8').click(function () {
    if($(this).hasClass('answer-first')) {
        result += 1;
    }
    $('.question-8').removeClass('show');
    if(result === 8) {
        $('.test__result-1').addClass('show');
    } else {
        $('.test__result-2').addClass('show');
    }
});