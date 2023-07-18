let prev = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg>'
let next = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>'

$('.feedback-sliders').slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: '<button class="slick-next" type="button">'+next+'</button>',
  prevArrow: '<button class="slick-prev" type="button">'+prev+'</button>',
  appendArrows: $('.feedback-arrows')
});
$(function () {
  $('.menu__icon').on('click', function () {
    $(this).closest('.menu__icon').toggleClass('active');
    $('.main-menu').slideToggle('slow', function () {
      if ($('.main-menu').css('display') === 'none') {
        $('.main-menu').removeAttr('style');
      }
    });
  });
});

$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px',
    });
    return false;
  });
});
// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     display.textContent = minutes + ':' + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var fiveMinutes = 60 * 15,
//     display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

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