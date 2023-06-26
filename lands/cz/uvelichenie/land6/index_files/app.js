$(document).ready(function() {
	var mobileWidth = 767,
	destroy = true,


	MenuLink = $('.js-link'),
	topMenu = $("#fixed-nav"),
	topMenuItems = topMenu.find("li"),
	navbar = $(".navbar"),
	jsNavbarPoint = $('.js-button'),

	TopSection = $('#primary'),
	BottomSection = $('#last'),
	TopSectionPos, BottomSectionPos,

	windowWidth, windowHeigth, windowCenter, MenuHeight, jsNavbarShowTop, jsNavbarShowBottom;
	function detectwindowWidth(){
		windowWidth = $(window).width();
	}
function detectSize(){
		windowWidth =  $(window).width(),
		windowHeigth = window.innerHeight,
		windowCenter = window.innerHeight/2,
		MenuHeight = topMenu.innerHeight(),
		jsNavbarShowTop =jsNavbarPoint.offset().top + jsNavbarPoint.innerHeight(),  
		jsNavbarShowBottom = jsNavbarPoint.eq(1).offset().top,
		TopSectionPos = TopSection.offset().top + TopSection.innerHeight(),
		BottomSectionPos = BottomSection.offset().top;
	};
	function animateScroll(element,padding_top, speed) {
    $("html, body").animate({
      scrollTop: (element.offset().top + padding_top)}, speed);
  };

  function hideMenu() {
      navbar.removeClass("fixed");
  };
  function showMenu() {
      navbar.addClass("fixed");
    };
  function hideMenuMobyle(){      
      if(windowWidth <= mobileWidth) {
          hideMenu();
          $('body').css({'overflow' : 'visible'});
      }      
  }
    function switchMenuItems(scrolled) {
    topMenuItems.each(function() {
      var link = $(this).find("a"),
          idSection = link.attr("href"),
          sectionTop = $(idSection).offset().top ,
          sectionBottom = sectionTop + $(idSection).innerHeight();

      if(scrolled + MenuHeight >= sectionTop-windowHeigth/4 && scrolled + MenuHeight <= sectionBottom) {
         topMenuItems.removeClass("js-active");
        $(this).addClass("js-active");
        return;
      }
      if(scrolled + MenuHeight > sectionBottom) {
        topMenuItems.removeClass("js-active"); 
      }
    });
    return;
  };
	function slideDetect() {
		if(windowWidth <= mobileWidth && destroy){
			$('.components').slick({
				infinite: true,
				slidesToScroll: 1,
				autoplaySpeed: 4000,
				autoplay: true
			});
			$('.comments-list').slick({
				infinite: true,
				slidesToScroll: 1,
				autoplaySpeed: 10000,
				autoplay: true
			});
			destroy = false;
		} else if(windowWidth > mobileWidth && !destroy){
			$('.components, .comments-list').slick('unslick');
			destroy = true;
		};
	};
detectwindowWidth();
slideDetect();
detectSize();
 $(window).on("resize", function() { 
 		detectwindowWidth();
 		hideMenuMobyle();
 		slideDetect();
 		detectSize();
});
$(window).on("scroll", function() {  
    var scrolledTop = $(this).scrollTop();
    	scrolledBottom = scrolledTop + windowHeigth;

	if(scrolledTop >= jsNavbarShowTop) {  
            if(scrolledBottom >= jsNavbarShowBottom){
              hideMenu();
            }else{
              showMenu();
              switchMenuItems(scrolledTop);
            }
          } else {
            hideMenu();
          }
 });
  MenuLink.on("click", function(e) {
      e.preventDefault();
      var id = $(this).attr("href"),
          pt = +$(this).attr("data-offset");
          var type = typeof(pt);
          if(type  != "number") {
              pt = 0;
           }
        hideMenuMobyle();
        animateScroll($(id), pt, 900);
        topMenuItems.removeClass('js-active');
  });

$('.js-to-form').on("click", function(e) {
		e.preventDefault();
      var scrolledTop = $(window).scrollTop(),
          docHeight = $(document).outerHeight(true);
          id = $(this).attr("href");
          hideMenuMobyle();
          animateScroll($(id), 0, 900);
  });
});
