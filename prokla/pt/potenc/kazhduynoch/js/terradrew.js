  // links scroll to form
  $("a:not(.js-noscroll)").click(function (e) {
    var top = $("#terra-wrapper").offset().top;
    e.preventDefault();
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });


  // popup btns scroll to form
  var closePopup = document.querySelector('.close-popup');
  $('.close-popup, .popup-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('#terra-wrapper').offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });

//init
