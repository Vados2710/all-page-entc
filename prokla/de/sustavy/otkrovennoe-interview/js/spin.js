var resultWrapper = document.querySelector('.spin-result-wrapper'),
  wheel = document.querySelector('.wheel-img');
function spin() {
  wheel.classList.contains('rotated')
    ? (resultWrapper.style.display = 'block')
    : (wheel.classList.add('super-rotation'),
      setTimeout(function () {
        resultWrapper.style.display = 'block';
      }, 8e3),
      setTimeout(function () {
        $('.spin-wrapper').slideUp(), $('.order_block').slideDown(), timer();
      }, 1e4),
      wheel.classList.add('rotated'));
}
var closePopup = document.querySelector('.close-popup');
function timer() {
  var e = new Date().getTime() + 6e5;
  $('#clock')
    // .countdown(e, { elapse: !0 })
    .on('update.countdown', function (e) {
      var t = $(this);
      e.elapsed ? t.html('Time is over') : t.html(e.strftime('<span>%M</span> : <span>%S</span>'));
    });
}
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault(), $('.spin-result-wrapper').fadeOut();
  $('html, body').animate(
    {
      scrollTop: $('#ordera0').offset().top,
    },
    700
  );
});

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});
function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};

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
