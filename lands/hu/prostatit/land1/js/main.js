

document.addEventListener('DOMContentLoaded', function() {
  let navbar = document.querySelector('.navbar');
  let closeBanner = $('.hurryUp__close');
  let showBanner = $('.show-btn')
  let sections = document.querySelectorAll('.section-scroll');
  let navItems = document.querySelectorAll('.navbar__item');
  let coords = [];
  let hash;
  if (document.documentElement.clientWidth > 1023) {
    for (let i = 0; i < sections.length; i++) {
      coords.push(sections[i].offsetTop)
    }
  }

  
document.addEventListener('scroll', function() {

  // show/hide navbar
    if (window.pageYOffset > document.documentElement.clientHeight) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }


    // highlight navbar items

    // document.addEventListener('scroll', function() {
      if (document.documentElement.clientWidth > 1023) {

      }
      for (let p = 0; p < coords.length; p++) {
        if ((window.pageYOffset >= coords[p] && window.pageYOffset < coords[p + 1]) || (window.pageYOffset >= coords[p])) {
          if (!hash) {
            navItems[p].classList.add('js-active');
            hash = navItems[p]
          } else if (!!hash && hash !== navItems[p]) {
            navItems[p].classList.add('js-active');
            hash.classList.remove('js-active')
            hash = navItems[p];
          } else if (!!hash && hash === navItems[p]) {
          }
        } 
      }
    // })


}, {passive: true})

  closeBanner.on('click', function () {
    let banner = $('.hurryUp');
    banner.css('display', 'none')
    showBanner.addClass('open')
  })

  showBanner.on('click', function () {
    let banner = $('.hurryUp');  
    showBanner.removeClass('open');
    banner.css('display', '')
})
})



function main () {
  $('.comments-list').slick({
    dots: true,
    infinite: false,
    speed: 600,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  main();
};



$(document).on("click", 'a[href^="#"]', function (a) {
  a.preventDefault();
  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top - 10
  }, 800)
})