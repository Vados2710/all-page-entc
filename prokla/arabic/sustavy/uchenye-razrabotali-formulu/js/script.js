var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var time = 600;

if(localStorage.getItem('wheel')){
	 $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
	  time = localStorage.getItem('time')
      start_timer();
	   $('.btm').text("طلب Clareene مع خصم %50!");
}

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
	  localStorage.setItem('wheel', true);
    }, 8000);
    setTimeout(function () {
      
    }, 10000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
	  $('.btm').text("طلب Clareene مع خصم %50!");
  $('.spin-result-wrapper').fadeOut();

  var top = $('#form').offset().top;
  $('body,html').animate({ scrollTop: top }, 800);
});


var intr;
function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;

if(time < 0){time = 0;  $("#min").html("00"); $("#sec").html("00");}
  localStorage.setItem('time', time);
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
     
  if (mins == 0 && secs == 0) {
    return;
  }
  secs = secs >= 10 ? secs : "0" + secs;

  $("#min").html("0" + mins);
  $("#sec").html(secs);
}

