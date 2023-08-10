$(document).ready(function () {
  // -------------spin-------------------
  let resultWrapper = document.querySelector(".spin-result-wrapper");
  let wheel = document.querySelector(".wheel-img");

  function spin() {
    if (!wheel.classList.contains("rotated")) {
      wheel.classList.add("super-rotation");
      setTimeout(function () {
        resultWrapper.style.display = "block";
      }, 8000);
      setTimeout(function () {
        $(".spin-wrapper").slideUp();
        $(".order_block").slideDown();
        // -------------TIMER------------------------
        var fiveSeconds = new Date().getTime() + 600000;
        $("#clock")
          .countdown(fiveSeconds, { elapse: true })
          .on("update.countdown", function (event) {
            var $this = $(this);
            if (event.elapsed) {
              $this.html("Lejárt az idő");
            } else {
              $this.html(event.strftime("<span>%M</span> : <span>%S</span>"));
            }
          });
      }, 10000);
      wheel.classList.add("rotated");
    }
  }

  $(".cursor-text").on("click", spin);

  $(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    $("body,html").animate({ scrollTop: $(".toform").offset().top }, 400);
  });
});
