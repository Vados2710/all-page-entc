function update() {
  var Now = new Date(),
    Finish = new Date();
  Finish.setHours(23);
  Finish.setMinutes(59);
  Finish.setSeconds(59);
  if (
    Now.getHours() === 23 &&
    Now.getMinutes() === 59 &&
    Now.getSeconds === 59
  ) {
    Finish.setDate(Finish.getDate() + 1);
  }
  var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
  var hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  var min = Math.floor(sec / 60);
  sec -= min * 60;

  document.querySelector(".hours").innerHTML = pad(hrs);
  document.querySelector(".minutes").innerHTML = pad(min);
  document.querySelector(".seconds").innerHTML = pad(sec);
  
  setTimeout(update, 500);
}

function pad(s) {  
  s < 10 ? s = ("00" + s).substring(1) : s = ("00" + s).substring(2);
  return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
}

var lazyLoadInstance = new LazyLoad();

document.addEventListener('DOMContentLoaded', function() {
  update();
  lazyLoadInstance.update();

  var btn = document.querySelector('.js-gift-btn');
  
  var swiperParams = {
    loop: true,
    autoplay: {
      delay: 1,
      enabled: true,
    },
    freeMode: false,
    allowTouchMove: false,
    speed: 2500,
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      } 
    }
  };
  

  var swiper = new Swiper('.swiper', swiperParams),
        hiddenBlock = document.querySelector('.p-hidden-content'),
        formBlock = document.querySelector('.main-form'),
        giftBlock = document.querySelector('.p-gift');


  var modal = new GraphModal({
    isClose: function() {
      hiddenBlock.classList.add('is-visible');
      giftBlock.style.display = 'none';
      formBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  });

  // swiper.changeLanguageDirection('ltr');
  swiper.on('resize', function(){
    if(!count) {
      swiper.autoplay.start();
    }
  });
  var count = 0;
  
  btn.addEventListener('click', function() {
    // count++;
    function decrNum(i, endNumber) {
      var timer;
      swiper.autoplay.start();
      btn.setAttribute('disabled', true);
      if (i >= endNumber) {
        // console.log(i);
        swiper.params.speed = i;
        timer = setTimeout(function() {
          decrNum(i - 10, endNumber);
        }, i);
      } else {
        var timerID = setTimeout(function() {
          // if (count > 1) {
            swiper.slideToLoop(4, 400, false);
            btn.textContent = 'تهانينا!';
            btn.classList.add('p-gift__btn--win');
            var winTimer = setTimeout(function (){
              modal.open('win');
              clearTimeout(winTimer);
            }, 300);
          // } else {
            // swiper.slideToLoop(2, 400, false);
            // btn.textContent = 'Intentar otra vez';
            // btn.removeAttribute('disabled');
          // }
          swiper.autoplay.stop();
          clearTimeout(timerID);
        }, 2000);
        clearTimeout(timer);
      }
    }
    decrNum(300, 100);
  });

  
});


// --------------SCROLL-------------------
  $("a:not(a[href='#no_scroll'])").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#order-form').offset().top
    }, 400);
  });

  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");



$('.main-form__btn').click(function(){
  $(".ac_footer").css("display", "none");
});