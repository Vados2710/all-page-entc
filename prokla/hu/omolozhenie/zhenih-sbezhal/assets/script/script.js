var resultWrapper = document.querySelector(".spin-result-wrapper");
var rulet = document.querySelector(".rulet-img");

function spin() {
  if (rulet.classList.contains("rotated")) {
    resultWrapper.style.display = "block";
  } else {
    rulet.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";

      start_timer();
    }, 7000);

    rulet.classList.add("rotated");
  }
}

var closePopup = document.querySelector(".close-popup");

$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();

  $(".spin-result-wrapper").fadeOut(function () {
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
    }, 300);

  });

  $("body,html").animate({ scrollTop: $('.ordr_box').offset().top }, 800);

});

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
  $("#min").html("0" + mins);
  $("#sec").html(secs);
}

$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('.ordr_box').offset().top }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");

var packages = document.querySelectorAll('#package option');
var packageInfos = document.querySelectorAll('form ul li');
var packSelect = document.querySelector('#package');

var hidePacks = function () {
  for (var i = 0; i < packages.length; i++) {
    packageInfos[i].style.display = 'none';
  }
}

var showPack = function (pack) {
  hidePacks();

  packageInfos[pack].style.display = 'block';
}

for (var i = 0; i < packages.length; i++) {
  packages[i].setAttribute('value', i + '');
}

hidePacks();
showPack(0);

packSelect.addEventListener('change', function (evt) {
  evt.preventDefault();
  showPack(Number(evt.target.value));
});
