(function () {
    'use strict';

    // Get current year
    const date = new Date();
    document.querySelector('.year').textContent = date.getFullYear();
    
    // Smooth scroll
    var scrollSmooth = (function () {
      $(document).on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
      });
    });

    // Reviews carousel https://kenwheeler.github.io/slick/
    $('.reviews__list').slick({
      adaptiveHeight: true,
      mobileFirst: true,
      dots: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }]
    });


    function main() {
      scrollSmooth();
    }

    // Questions accordion
    const questionBtn = document.querySelectorAll('.questions__list-item');

    for (let i = 0; i < questionBtn.length; ++i) {
      questionBtn[i].addEventListener('click', function() {
        for (let j = 0; j < questionBtn.length; ++j) {
          if (questionBtn[j] !== this) {
            questionBtn[j].classList.remove('show')
          }
        }
        this.classList.toggle('show');
      });
    }

    // Lazy loading for mobile
    if (document.documentElement.clientWidth < 480) {
      window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
      }, {
        once: true
      });
    } else {
      main();
    }

}());