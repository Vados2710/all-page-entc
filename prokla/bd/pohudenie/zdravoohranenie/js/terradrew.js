var time = 600;
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
  $(".timer").html("0" + mins + ' : ' + secs);
};

start_timer();

  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#terra-wrapper').offset().top
    }, 400);
  });
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click"); 