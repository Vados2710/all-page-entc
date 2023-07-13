var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
$('.cursor-text ').click(function (e) {
   e.preventDefault();
   if (wheel.classList.contains('rotated')) {} else {
      wheel.classList.add('super-rotation');
      setTimeout(function () {
         resultWrapper.style.display = "block";
      }, 8000);
      setTimeout(function () {
         $('.spin-wrapper').slideUp();
         $('.order_block').slideDown();
      }, 10000);
      wheel.classList.add('rotated');
   }
});
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
   e.preventDefault();
   $('.spin-result-wrapper').fadeOut();
});

function outputDat(m, fullM) {
   var d = new Date();
   var p = new Date(d.getTime() - m * 86400000);
   var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre'.split(',');
   var w = p.getDate();
   var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
   return ret;
}
var time = 2400;
var intr;

function start_timer() {
   intr = setInterval(tick, 1000);
}

function tick() {
   time = time - 1;
   var mins = Math.floor(time / 60);
   var secs = time - mins * 60;
   if (mins == 0 && secs == 0) {
      clearInterval(intr);
   }
   secs = secs >= 10 ? secs : "0" + secs;
   $("#min").html("0" + mins);
   $("#sec").html(secs);
}
$(document).ready(function () {
   function scroll(who, where) {
      $(who).on("touchend, click", function (e) {
         e.preventDefault();
         $('body,html').animate({
            scrollTop: $(where).offset().top
         }, 700);
      });
   };
   scroll('.to_form', '.scroll-spin');
});
$(function () {
   var storageCountdownReset = "countdownResetAirbag",
      storageCountdownTime = "countdownTimeAirbag",
      countdownResetTimeVal = 41,
      nowDateTime = new Date().getTime(),
      countdownReset = localStorage.getItem(storageCountdownReset);
   if (countdownReset == null) {
      localStorage.setItem(storageCountdownReset, nowDateTime)
   } else {
      if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
         var countdownTime = (new Date).getTime() + 24e5;
         localStorage.setItem(storageCountdownTime, countdownTime);
         localStorage.setItem(storageCountdownReset, nowDateTime);
      }
   }
   if (localStorage.getItem(storageCountdownTime)) {
      var countdownTime = localStorage.getItem(storageCountdownTime);
   } else {
      countdownTime = (new Date).getTime() + 24e5;
   }
   $(".countdown").countdown(countdownTime, function (s) {
      $(this).html(s.strftime('' +
         '<div class="countdown__item minute">%M</div>' +
         '<span>:</span>' +
         '<div class="countdown__item second">%S</div>'));
   }).on('update.countdown', function (e) {
      countdownTime = e.finalDate.getTime();
      localStorage.setItem(storageCountdownTime, countdownTime);
   }).on('finish.countdown', function (e) {
      $('.countdown').countdown('stop');
   });
})