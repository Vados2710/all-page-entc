$(document).ready(function () {
  var flag = true;

  function showPopup() {
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.modal').fadeIn(300);
        flag = false;
      }
    });
    $(".modal-flex").on('click', function (event) {
      if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close")) {
        $('.modal').fadeOut(300);
      }
    });
  }

  //проверка браузера с которого зашли и разрешения экрана
  if (($(window).width() > 1023)) {
    showPopup();
  }
});
var close = document.querySelector(".modal-close");
var button = document.querySelector(".modal-btn");

function hidePopup() {
  $(".modal").fadeOut(300);
}

button.addEventListener('click', hidePopup);
close.addEventListener('click', hidePopup);



$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 60
  }, 1000);
});