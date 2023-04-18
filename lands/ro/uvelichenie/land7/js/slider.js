//slick depending on window resize
var resizeTimeout;

function resizeThrottler() {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      actualResizeHandler();
    }, 66);
  }
}

function actualResizeHandler() {
  if (window.innerWidth < 992) {
    $('.mobile-slider').not('.slick-initialized').slick({
      adaptiveHeight: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: "unslick"
        }
      ]
    });
  }
}

window.addEventListener("resize", resizeThrottler, false);