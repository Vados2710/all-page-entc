
 
 //slick
 $slickSolution = false;
function solSlider(){
    if($(window).width() < 991){
        if(!$slickSolution){
            $(".b-solutions, .b-recovery, .b-steps").slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            });
            $slickSolution = true;
        }
    } else if($(window).width() > 991){
        if($slickSolution){
            $('.b-solutions, .b-recovery, .b-steps').slick('unslick');
            $slickSolution = false;
        }
    }
};
$(function(){
    $('.slider-thumb').slick({
        autoplay: true,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        slidesPerRow: 1,
        slidesToShow: 5,
        asNavFor: '.slider-preview',
        focusOnSelect: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,

    });
    $('.slider-preview').slick({
        autoplay: true,
        infinite: true,
        vertical: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        asNavFor: '.slider-thumb',
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1200,
                settings:
                    {
                        vertical: false,
                        // verticalSwiping: false,
                        asNavFor: '.slider-thumb',
                    }

            }
        ]
    });
    solSlider();

    $(window).on('resize', function(){
        solSlider();
    });

    $('.b-menu a').click(function(event){
        event.preventDefault();
        var target = $(this.getAttribute("href"));
        $("html, body").animate({scrollTop: target.offset().top-84}, 1000);
        return false;
    });
    if ($(window).width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });
    }
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $(window).height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };

    var _num = $('.b-count').text();
    var int = setInterval(function() {
        if (_num > 0) {
            _num--;
            $('.b-count').text(_num);
        } else {
            clearInterval(int);
           
        }
    }, 4000);

});




//disclaimer, privacy, terms popups
 var disclaimerBtn = document.querySelector('.top-bar__item--disclaimer');
 var privacyBtn = document.querySelector('.main-footer__link--privacy');
 var termsBtn = document.querySelector('.main-footer__link--terms');
 var disclaimerModal = document.querySelector('.modal--disclaimer');
 var privacyModal = document.querySelector('.modal--privacy');
 var termsModal = document.querySelector('.modal--terms');
 var overlay = document.querySelector('.overlay-bg');
 var modals = document.querySelectorAll('.modal');
 var closeBtns = document.querySelectorAll('.modal__close-button');


 disclaimerBtn.addEventListener('click', function (e) {
     e.preventDefault();
     if (!disclaimerModal.classList.contains('modal--active')) {
         disclaimerModal.classList.add('modal--active');
         overlay.classList.add('overlay-bg--active');
     } else {
         disclaimerModal.classList.remove('modal--active');
         overlay.classList.remove('overlay-bg--active');
     }
     return false;
 });

 privacyBtn.addEventListener('click', function (e) {
     e.preventDefault();
     if (!privacyModal.classList.contains('modal--active')) {
         privacyModal.classList.add('modal--active');
         overlay.classList.add('overlay-bg--active');
     } else {
         privacyModal.classList.remove('modal--active');
         overlay.classList.remove('overlay-bg--active');
     }
     return false;
 });

 termsBtn.addEventListener('click', function (e) {
     e.preventDefault();
     if (!termsModal.classList.contains('modal--active')) {
         termsModal.classList.add('modal--active');
         overlay.classList.add('overlay-bg--active');
     } else {
         termsModal.classList.remove('modal--active');
         overlay.classList.remove('overlay-bg--active');
     }
     return false;
 });

 overlay.addEventListener('click', function () {
     modals.forEach(function (modal) {
         modal.classList.remove('modal--active');
     })
     overlay.classList.remove('overlay-bg--active');
 });

 closeBtns.forEach(function (closeBtn) {
     closeBtn.addEventListener('click', function () {
         modals.forEach(function (modal) {
             modal.classList.remove('modal--active');
         })
         overlay.classList.remove('overlay-bg--active');
     })
 })

 var webAddresses = document.querySelectorAll('.modal__website');
 webAddresses.forEach(function (webAddress) {
     webAddress.innerText = window.location.href;
 });
 