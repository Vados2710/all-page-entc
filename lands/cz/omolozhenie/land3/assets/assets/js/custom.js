$(document).ready(function() {

/* BxSlider */
	$(".bxslider").bxSlider();
/*$(".fancybox").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600, 
    'speedOut'    : 200, 
    'overlayShow' : false
  });*/
/* Smooth Scroll */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 850);
	        return false;
	      }
	    }
	  });
	});

var i = 0;
  function yved(){
  i=1;
  $('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
  }
  setTimeout(function(){
  setInterval(
  function(){
  i=i+1;
  if(i>10) i=1;//10 - количество уведомлений
  $('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
  },12000);// - задержка в мс меду показами уведомлений
  yved();
  },12000);// - задержка в мс перед показом первого уведомления

});