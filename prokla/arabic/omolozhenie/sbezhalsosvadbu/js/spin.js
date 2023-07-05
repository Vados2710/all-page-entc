$(document).ready(function () {
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var wheel = document.querySelector('.wheel-img');
    const wheelCursor = document.querySelector('.wheel-cursor');

    function spin() {
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 9000);
            wheel.classList.add('rotated');
        }
    }

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
    });

    $(wheelCursor).on('click', (e) => {
        e.preventDefault();
        spin();
    })

    // var fiveSeconds = (new Date).getTime() + 6e5;
    // $("#clock").countdown(fiveSeconds, {
    //     elapse: !0
    // }).on("update.countdown", function (e) {
    //     var t = $(this);
    //     e.elapsed ? t.html("") : t.html(e.strftime("<span>%M</span> : <span>%S</span>"))
    // });
    var popupShow = 1;

    function showVisitors() {
        var e = (130, 251, Math.floor(122 * Math.random() + 130));
        $("#peoples").text(""), $("#peoples").text(e)
    }
    $("html").mouseleave(function () {
        1 === popupShow && (popupShow = 0, $(".popup, .background").fadeIn())
    }), $(".close, .popup_btn").click(function () {
        $(".popup, .background").fadeOut()
    }), setInterval(function () {
        showVisitors()
    });

    // SCROLL

    $("a[href='#toForm']").on("click", function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $('.form-scroll').offset().top - 30
        }, 1500);
    });
});