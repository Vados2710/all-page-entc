$(window).on('resize', function(e){
  var init = $(".sidebar__list").data('init-slider');
  if(window.innerWidth < 992){
    if(init != 1){
      $('.sidebar__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }).data({'init-slider': 1});
    }
  }
  else {
    if(init == 1){
      $('.sidebar__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');