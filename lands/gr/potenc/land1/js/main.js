    $(document).ready(function(){
	 var destroy = true; 
	 function slideDetect() {
	    if (window.innerWidth > 999 && !destroy) {             
	       $('.comment').slick('unslick');       
	       destroy = true;
	    } else if (window.innerWidth < 999 && destroy) {
	       $('.comment').slick({
	        infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    dots: true   
	      });	         
	      destroy = false;
	      } 
	 };
	slideDetect();
	function changePanel(){
		if (window.innerWidth >= 992) { 

				windTop = $(window).scrollTop();
			choiseTop = $('.libido-section').offset().top;
			timer = $('.timer-header')
			var btn = $('.btn-block');
			if(windTop >= choiseTop)  {
				timer.addClass('disp-none');
				btn.css('display', 'block');


			}else{
				timer.removeClass('disp-none');
				btn.css('display', 'none');
			}
		}
		
		
	}

		var
            navbar = $(".btn-fix-wrap"),
            jsNavbarPoint = $('.point'),
            jsNavbarPoint2 = $('.point2'),
            jsNavbarPointxs = $('.point-xs'),
            jsNavbarPoint2xs = $('.point2-xs'),

            jsNavbarShowTop = jsNavbarPoint.offset().top + jsNavbarPoint.innerHeight(),
            jsNavbarShowBottom = jsNavbarPoint2.offset().top,

            /*xs*/
            jsNavbarShowTopxs = jsNavbarPointxs.offset().top + jsNavbarPointxs.innerHeight(),
            jsNavbarShowBottomxs = jsNavbarPoint2xs.offset().top,
            /* /xs*/

			windowHeigth = window.innerHeight,

			windowWidth =  window.innerWidth;


		function hideButton() {
            navbar.removeClass("fixed");
        };

        function showButton() {
            navbar.addClass("fixed");
        };


        $(window).on("scroll", function() {
            var scrolledTop = $(window).scrollTop(),
                scrolledBottom = scrolledTop + windowHeigth;

            if(windowWidth >= 480){
            	if (scrolledTop >= jsNavbarShowTop) {
                	if (scrolledBottom >= jsNavbarShowBottom) {
                    	hideButton();
                	} else {
                   		showButton()
               		 }

            	} else {
               		 hideButton();
            	}
            }else{
            	if (scrolledTop >= jsNavbarShowTopxs) {
                	if (scrolledBottom >= jsNavbarShowBottomxs) {
                    	hideButton();
                	} else {
                    	showButton()
                	}

            	} else {
               		hideButton();
            	}
            }
           
            
        });

          $(window).on("resize", function() {
  	     jsNavbarShowTop = jsNavbarPoint.offset().top + jsNavbarPoint.innerHeight(),
         jsNavbarShowBottom = jsNavbarPoint2.offset().top,

            /*xs*/
         jsNavbarShowTopxs = jsNavbarPointxs.offset().top + jsNavbarPointxs.innerHeight(),
         jsNavbarShowBottomxs = jsNavbarPoint2xs.offset().top,
            /* /xs*/

		windowHeigth = window.innerHeight;
    slideDetect();
   
  });

  $('.fa-bars').click(function(){
		$(this).next().slideToggle();
	});

  
  	if(windowWidth <= 480){
  		$('.menu_item a').click(function(){
  			$('.menu').slideToggle();
  		});
  	}

  $('a[href^="#"]').click(function(e){
        el = $(this).attr("href");
        des = $(el).offset().top - 55;
        $('html, body').animate({scrollTop: des}, 1000);
        return false;
  });
   $('.top-panel').removeClass('default');

  $(window).scroll(function(){
    if($(this).scrollTop() > 20){
      $('.top-panel').addClass('default').fadeIn('fast');
    }else{
      $('.top-panel').removeClass('default').fadeIn('fast');
    };
    changePanel();
  });

  $(".js-to-form").on("click", function() {
     var scrollWindow = $(window).scrollTop(),
         visibleForms = $("form:visible");

     if(visibleForms) {
         var closestFormOffset = $(visibleForms[0]).offset().top,
             toScroll = Math.abs(scrollWindow - closestFormOffset),
             i;

         for (i = 1; i < visibleForms.length; i++) {
            var curFormOffset = $(visibleForms[i]).offset().top,
                curToScroll = Math.abs(scrollWindow - curFormOffset);
            if (toScroll > curToScroll) {
              toScroll = curToScroll;
              closestFormOffset = $(visibleForms[i]).offset().top;
            }
         }
         $('html, body').animate({scrollTop: closestFormOffset}, 1000);
     }
  })

});


/*document.documentElement.clientWidth*/