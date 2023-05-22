$(document).ready(function() {


  var flag = true;

  function showPopup() {
    $(window).mouseout(function(e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.exitblock').fadeIn(300);
        flag = false;
      }
    });
    $(".exitblock").on('click', function(event) {
      if ($(event.target).is($(".fon")) || $(event.target).is(".closeblock")) {
        $('.exitblock').fadeOut(300);
      }
    });
  }

  if (($(window).width() > 1023)) {
    showPopup();
  }
});
var close = document.querySelector(".closeblock");
var button = document.querySelector(".out-comebacker-content-btn");

function hidePopup() {
  $(".exitblock").fadeOut(300);
}
button.addEventListener('click', hidePopup);
close.addEventListener('click', hidePopup);

var reviews = (function() {

  var inputFile = $('.input-file');
  var labelFile = $('.input-file');
  var reviewsPopup = $('.reviews-popup');
  var fileText = $('.reviews-form__file-text');
  var inputName = $('.inputName');
  var inputText = $('.inputText');
  inputFile.change(function(e) {
    fileText.html('Zdjęcie zostało dodane');
    labelFile.addClass('rloaded');
  });
  $('.reviews-form').submit(function() {
      event.preventDefault();
      reviewsPopup.fadeIn();
      setTimeout(function() {
        reviewsPopup.fadeOut();
      }, 2000);
      fileText.html('Dodaj zdjęcie');
      labelFile.removeClass('rloaded');
      inputName.val('');
      inputText.val('');
  });
});
reviews();