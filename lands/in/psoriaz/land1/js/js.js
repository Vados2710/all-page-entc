

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
      
       $('.block1-flex__item,.block1__p2, .block1__h2, .block1__p1 ').removeClass('active-scroll-top');
       $('.block1-flex__item,.block1__p2, .block1__h2, .block1__p1').addClass('active-scroll-down');
       
   } else {
     
       $('.block1__h2, .block1__p1, .block1__p2, .block1-flex__item').addClass('active-scroll-top');
       $('.block1__h2, .block1__p1, .block1__p2, .block1-flex__item').removeClass('active-scroll-down');
       
   }
   lastScrollTop = st;
});




const swiper = new Swiper('.swiper', {
 
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  speed: 1500,
        autoPlay: true,
        autoPlayDelay: 500 ,   
  

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1240: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
 
});




const swiper2 = new Swiper('.swiper2', {
  
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  speed: 1500,
        autoPlay: true,
        autoPlayDelay: 500 ,   

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
   
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    
  }
 

});
      


let
    menuBtn = document.querySelector(".menu-btn"),
    header = document.querySelector(".header"),


    menu = document.querySelector(".menu"),
    bigWrapper = document.querySelectorAll(".container-1920");





menuBtn.addEventListener("click", function () {
 menuBtn.classList.toggle("active");
 menu.classList.toggle("active");

 for (let k = 0; k < bigWrapper.length; k++) {
   bigWrapper[k].classList.toggle("blur");
 }
});
menuBtn.addEventListener("click", function () {
 menuBtn.classList.toggle("fix");
 
});
;(function() {
	'use strict';

	const now = new Date();
	const hBox = document.getElementById('hour'),
		  mBox = document.getElementById('minutes'),
		  sBox = document.getElementById('seconds');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		let tm = setInterval(() => {
			times[2]--;

			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();



  $(document).mouseup( function(e){
    var div = $( ".header-nav-mobile" ); 
    if ( !div.is(e.target) 
        && div.has(e.target).length === 0 ) {
          menu.classList.remove("active");
          menuBtn.classList.remove("active");
       
   for (let k = 0; k < bigWrapper.length; k++) {
    bigWrapper[k].classList.remove("blur");
  }
    }
  });
