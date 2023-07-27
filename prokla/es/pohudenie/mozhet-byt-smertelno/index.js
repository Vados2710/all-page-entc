function contentSlider() {
  new Swiper('.swiper', {
    slidesPerView: 1,
    grabCursor: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.main__slider__navigation .swiper-button-next',
      prevEl: '.main__slider__navigation .swiper-button-prev',
    },
    breakpoints: {
      860: {
        slidesPerView: 2,
      },
    }  
  });
}
contentSlider();