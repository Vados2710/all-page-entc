(function () {
    'use strict';
  
    // Smooth scroll
    var scrollSmooth = (function () {
      $(document).on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top + 5
        }, 500);
      });
    });
  
    // Burger menu  
    var header = (function () {
        var page = document.querySelector("html");
        var overlay = document.querySelector(".overlay");
        var burger = document.querySelector(".burger");
        var header = document.querySelector(".header__content");
        var navLinks = document.querySelectorAll(".nav__link");
      burger.addEventListener("click", function () {
        page.classList.toggle("active");
        overlay.classList.toggle("active");
        burger.classList.toggle("header__burger--active");
        header.classList.toggle("header__content--active");
      });
  
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", closeMenu);
      }
  
      overlay.addEventListener("click", closeMenu);
      window.addEventListener("resize", checkMenu);
  
      function closeMenu() {
        page.classList.remove("active");
        overlay.classList.remove("active");
        burger.classList.remove("header__burger--active");
        header.classList.remove("header__content--active");
      }
  
      function checkMenu() {
        if (document.documentElement.clientWidth > 767) {
          closeMenu();
        }
      }
    });
    
    // Animation on scroll
    var promo = (function () {
      var animItems = document.querySelectorAll(".animate-block");
  
      if (animItems.length > 0) {
        var animOnScroll = function animOnScroll() {
          if (document.documentElement.clientWidth > 1023) {
            for (var i = 0; i < animItems.length; i++) {
              var animItem = animItems[i];
              var animItemHeight = animItem.offsetHeight;
              var animItemOffset = offset(animItem).top;
              var animStart = 1.5;
              var animItemPoint = window.innerHeight - animItemHeight / animStart;
  
              if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
              }
  
              if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add("animated");
              }
            }
          } else {
            for (var _i = 0; _i < animItems.length; _i++) {
              animItems[_i].classList.remove("animated");
            }
          }
        };
  
        var offset = function offset(el) {
          var rect = el.getBoundingClientRect();
          var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
          };
        }; // setTimeout(function () {
  
  
        animOnScroll(); // }, 500);
  
        window.addEventListener("scroll", animOnScroll);
        window.addEventListener("resize", animOnScroll);
      }
    });
    
    // Specialists carousel https://kenwheeler.github.io/slick/
    var doc = (function () {
      var slider = $(".doc__content").slick({
        mobileFirst: true,
        adaptiveHeight: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<div class="slider__arrow slick-arrow--left slick-arrow"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false" style=""> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve"> <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" /> </svg></div>',
        nextArrow: '<div class="slider__arrow slick-arrow--right slick-arrow"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false" style=""> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve"> <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" /> </svg></div>',
        responsive: [{
          breakpoint: 1219,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // adaptiveHeight: false,
            arrows: false,
            infinite: false,
            vertical: true,
            verticalSwiping: true
          }
        }]
      });
      var countSlides = $(".doc__item").length;
      var lastSlide = 0;
      slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        lastSlide = currentSlide + 1;
      });
      slider.mousewheel(function (e) {
        if (e.deltaY < 0) {
          if (lastSlide !== countSlides) {
            e.preventDefault();
            $(this).slick('slickNext');
          }
        } else {
          if (lastSlide !== 1) {
            e.preventDefault();
            $(this).slick('slickPrev');
          }
        }
      });
    });
    
    // Composition carousel https://kenwheeler.github.io/slick/
    var composition = (function () {
      var slider = $(".composition__list").slick({
        mobileFirst: true,
        adaptiveHeight: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<div class="slider__arrow slick-arrow--left slick-arrow"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false" style=""> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve"> <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" /> </svg></div>',
        nextArrow: '<div class="slider__arrow slick-arrow--right slick-arrow"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false" style=""> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve"> <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" /> </svg></div>',
        responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            infinite: false,
            vertical: true,
            verticalSwiping: true
          }
        }]
      });
      var countSlides = $(".composition-list__item").length;
      var lastSlide = 0;
      slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        lastSlide = currentSlide + 1;
      });
      slider.mousewheel(function (e) {
        if (e.deltaY < 0) {
          if (lastSlide !== countSlides) {
            e.preventDefault();
            $(this).slick('slickNext');
          }
        } else {
          if (lastSlide !== 1) {
            e.preventDefault();
            $(this).slick('slickPrev');
          }
        }
      });
    });
    
    // Reviews carousel https://kenwheeler.github.io/slick/
    var reviews = (function () {
      $(".reviews__list").slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        prevArrow: '<div class="slick-arrow slick-arrow--left"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false"> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M101.061 13.0607C101.646 12.4749 101.646 11.5251 101.061 10.9393L91.5147 1.3934C90.9289 0.807611 89.9792 0.807611 89.3934 1.3934C88.8076 1.97919 88.8076 2.92893 89.3934 3.51472L97.8787 12L89.3934 20.4853C88.8076 21.0711 88.8076 22.0208 89.3934 22.6066C89.9792 23.1924 90.9289 23.1924 91.5147 22.6066L101.061 13.0607ZM0 13.5H100V10.5H0L0 13.5Z" fill="" /> </svg></div>',
        nextArrow: '<div class="slick-arrow slick-arrow--right"> <svg class="arrow-1" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg" aria-disabled="false"> <g> <g> <path d="M7.92.236a.888.888 0 0 1 1.22 0c.33.308.33.825 0 1.131L2.959 7.173h14.176c.475 0 .865.354.865.8 0 .446-.39.813-.865.813H2.959l6.18 5.794c.33.322.33.836 0 1.145a.893.893 0 0 1-1.218 0L.277 8.547a.775.775 0 0 1 0-1.135z"> </path> </g> </g> </svg> <svg class="arrow-2" width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M101.061 13.0607C101.646 12.4749 101.646 11.5251 101.061 10.9393L91.5147 1.3934C90.9289 0.807611 89.9792 0.807611 89.3934 1.3934C88.8076 1.97919 88.8076 2.92893 89.3934 3.51472L97.8787 12L89.3934 20.4853C88.8076 21.0711 88.8076 22.0208 89.3934 22.6066C89.9792 23.1924 90.9289 23.1924 91.5147 22.6066L101.061 13.0607ZM0 13.5H100V10.5H0L0 13.5Z" fill="" /> </svg></div>',
        responsive: [{
          breakpoint: 639,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }]
      });
      var readMore = 'Читать весь отзыв...';
      var readLess = 'Свернуть отзыв';
      var revList = document.querySelector('.reviews__list');
      revList.addEventListener('click', function (e) {
        if (e.target.classList.contains("reviews-list__more")) {
          if (e.target.parentElement.classList.contains("show")) {
            e.target.parentElement.classList.remove("show");
            e.target.textContent = readMore;
          } else {
            e.target.parentElement.classList.add("show");
            e.target.textContent = readLess;
          }
        }
      });
  
      $('.reviews__list').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var items = document.querySelectorAll('.reviews-list__item');
  
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("show");
        }
  
        var moreBtns = document.querySelectorAll('.reviews-list__more');
  
        for (var _i = 0; _i < moreBtns.length; _i++) {
          moreBtns[_i].textContent = readMore;
        }
      });
    });
  
    header();
    scrollSmooth();
  
    function main() {
      promo();
      doc();
      composition();
      reviews(); // bannerScroll();
    }
    
    // Lazy loading for mobile
    if (document.documentElement.clientWidth < 480) {
      window.addEventListener("scroll", function () {
        setTimeout(main, 1000);
      }, {
        once: true,
        passive: true
      });
    } else {
      main();
    }
  
  }());
  