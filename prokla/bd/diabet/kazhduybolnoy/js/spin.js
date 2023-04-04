// -------------spin-------------------
var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
  if (wheel.classList.contains("rotated")) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
    }, 10000);
    wheel.classList.add("rotated");
  }
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  var top = $(".toform").offset().top;
  // -------------TIMER------------------------
  var fiveSeconds = new Date().getTime() + 600000;
  $("#clock")
    .countdown(fiveSeconds, { elapse: true })
    .on("update.countdown", function (event) {
      var $this = $(this);
      if (event.elapsed) {
        $this.html("время истекло");
      } else {
        $this.html(event.strftime("<span>%M</span> : <span>%S</span>"));
      }
    });
  $("body,html").animate({ scrollTop: top }, 800);
});

// -----------------POPUP--------------------
var popupShow = 1;
$("html").mouseleave(function () {
  if (popupShow === 1) {
    popupShow = 0;
    $(".popup, .background").fadeIn();
  }
});
$(".close, .popup_btn").click(function () {
  $(".popup, .background").fadeOut();
});

// ----------------COUNTER-----------------------
function showVisitors() {
  function getRandom(min, max) {
    var res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
  }
  var x = getRandom(130, 251);
  $("#peoples").text("");
  $("#peoples").text(x);
}
setInterval(function () {
  showVisitors();
}, 8000);
