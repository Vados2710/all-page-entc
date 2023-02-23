$(document).ready(function () {
  $('.carousel').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    responsive: {
      991: {
        nav: true,
        dots: false
      }
    }
  })
});