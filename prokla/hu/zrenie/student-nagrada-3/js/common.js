function spin() {
  var wheel = document.querySelector(".wheel-img");

  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");

    setTimeout(function () {
      $("#productOne").slideUp();
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
      document.querySelector(".spin-result-wrapper").style.display = "block";
   getCountdown();
    }, 7000),
      wheel.classList.add("rotated");
  } else {
    document.querySelector(".spin-result-wrapper").style.display = "block";
  }

  $(".close-popup, .pop-up-button, .hhh").click(function (e) {
       e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
      var top = $('.spin-wrapper').offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

  var days, hours, minutes, seconds;
  var target_date = new Date().getTime() + (500 * 1200);
  var countdown = document.querySelectorAll(".order__time");

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function getCountdown() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    seconds_left = seconds_left % 86400;
    hours = pad(parseInt(seconds_left / 1200));
    seconds_left = seconds_left % 1200;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    for (var i = 0; i < countdown.length; i++) {
      countdown[i].innerHTML = "<span>" + hours + "</span><span>:</span><span>" + minutes + "</span><span>:</span><span>" + seconds + "</span>";
    }
  }

  getCountdown();
  setInterval(function () {
    getCountdown();
  }, 1000);
}

var wheelCursor = document.querySelector('.wheel-cursor');
wheelCursor.addEventListener('click', spin);


    $('a').not('.ac_footer a').click( function(e){
      e.preventDefault();
            $('html, body').animate({ scrollTop:
$('#orderblock').offset().top }, 500);
    });
