$(document).ready(function () {
   let swiper = new Swiper(".mmSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      // effect: "fade",
      navigation: {
         nextEl: ".swiper__next",
         prevEl: ".swiper__prev",
      },
      pagination: {
         el: ".swiper-pagination",
         type: "fraction",
      },
   });
});