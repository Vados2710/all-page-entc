var $nav,$h=0;
$(window).load(function () {
  $nav = $(".sidebar__inner");
  $h = $nav.offset().top;
  $(window).scroll(function(){
    if ( $(window).scrollTop() > $h) {
      $nav.addClass("fixed");
    }else{
      $nav.removeClass("fixed");
    }
  }); 
});