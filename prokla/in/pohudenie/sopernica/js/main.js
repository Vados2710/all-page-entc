$(document).ready(function(){
    $(window).scroll(function () {
        $nav = $(".fxd");
        $h = $nav.offset().top;
        if ($(window).scrollTop()> $h) {
            $("header").addClass("header_scrl");

        } else {
            $("header").removeClass("header_scrl");
        }
    });
    function func() {

            $nav = $(".fxd");
            $h = $nav.offset().top;
            $obj = $("#ftr");
            $obj2 = $("#hdr");
            $(window).scroll(function () {
                if ($(window).scrollTop() > $h) {
                    $obj.fadeIn();
                    $obj2.fadeIn();
                } else {
                    $obj.fadeOut();
                    $obj2.fadeOut();
                }
            });

    }
    setTimeout(func, 1000);

        var resultWrapper = document.querySelector('.spin-result-wrapper');
        var wheel = document.querySelector('.wheel-img');
           $('.active').on( "click", function( event ) {
        $( this ).off( event );

           function startTimer(t) {
            var e, n, r = t,
                a = setInterval(function () {
                    e = parseInt(r / 60, 10), n = parseInt(r % 60, 10), n = 10 > n ? "0" + n : n, $(".vtimer").text(e + ' : '  + n ), --r < 0 && (clearInterval(a))
                }, 1000)
            }
            startTimer((9 * 60) + 00);
               if (wheel.classList.contains('rotated')) {
                   resultWrapper.style.display = "block";
               } else {
                   wheel.classList.add('super-rotation');
                   setTimeout(function() {
                       resultWrapper.style.display = "block";
                   }, 8000);
                   setTimeout(function() {
                       $('.spin-wrapper').slideUp();
                        $('.order_block').slideDown();
                   }, 10000);
                   wheel.classList.add('rotated');

           }
           var closePopup = document.querySelector('.close-popup');
           $('.close-popup, .pop-up-button').click(function(e){
             e.preventDefault();
            $('.spin-result-wrapper').fadeOut();
            var top = $('.spin_scr').offset().top;
            $('body,html').animate({scrollTop: top}, 800);
        });
})
});