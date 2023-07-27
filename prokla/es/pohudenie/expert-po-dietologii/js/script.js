$(document).ready(function () {
    var header = $('.header'),
        scrollPrev = 0;
    let counter = document.querySelectorAll('.counter');
    let numLike = document.querySelectorAll('.counter-num-like');
    let numDislike = document.querySelectorAll('.counter-num-dislike');
    let counterLike = document.querySelectorAll('.counter-like');
    let counterDislike = document.querySelectorAll('.counter-dislike');

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    const mobileMenu = $('.header-mobile');
    const closeMenu = $('.close');
    const burgerMenu = $('.burger');
    const blurBg = $('.bg-blur');

    function showMobileMenu() {
        $('html').css('overflow-y', 'hidden')
        mobileMenu.addClass('showPanel');
        closeMenu.css('display', 'block');
        blurBg.fadeIn();
        burgerMenu.css('display', 'none');
    }

    function closeMobileMenu() {
        $('html').css('overflow-y', 'scroll');
        mobileMenu.removeClass('showPanel');
        closeMenu.css('display', 'none');
        burgerMenu.css('display', 'block');
        blurBg.fadeOut();
    }


    $("#show").click(
        function() {
            showMobileMenu();
        }
    );
    $("#hide").click(
        function() {
            closeMobileMenu();
        }
    );
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header-top-navigation-mobile").length) {
            closeMobileMenu();
        }
        e.stopPropagation();
    });


    $("a[href='#to_form']").on("click", function (event) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#order").offset().top
        }, 500);
    });
    $(".header-mobile a[href='#to_form']").on("click", function (event) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#order").offset().top
        }, 500);
        closeMobileMenu();
    });

    for (let j = 0; j < counter.length; j++) {
        let countLike = 0;
        let countDislike = 0;
        counterLike[j]?.addEventListener("click", function () {
            if (countLike === 0 && countDislike === 1) {
                countLike++;
                countDislike--;
                numLike[j].innerHTML = parseInt(numLike[j].innerHTML) + 1;
                numDislike[j].innerHTML = parseInt(numDislike[j].innerHTML) - 1;
            } else if (countLike === 0) {
                countLike++;
                numLike[j].innerHTML = parseInt(numLike[j].innerHTML) + 1;
            } else if (countLike === 1) {
                countLike--;
                numLike[j].innerHTML = parseInt(numLike[j].innerHTML) - 1;
            }
        });
        counterDislike[j]?.addEventListener("click", function () {
            if (countDislike === 0 && countLike === 1) {
                countDislike++;
                countLike--;
                numDislike[j].innerHTML = parseInt(numDislike[j].innerHTML) + 1;
                numLike[j].innerHTML = parseInt(numLike[j].innerHTML) - 1;
            } else if (countDislike === 0) {
                countDislike++;
                numDislike[j].innerHTML = parseInt(numDislike[j].innerHTML) + 1;
            } else if (countDislike === 1) {
                countDislike--;
                numDislike[j].innerHTML = parseInt(numDislike[j].innerHTML) - 1;
            }
        });
    }
    $('.review-image').magnificPopup({
        type: 'image',
    });
    $('.images').magnificPopup({
        type: 'image',
    });
    function showPopup() {
        $('.popup').css('display', 'flex');
    }
    $('.close-popup').on('click', function () {
        $('.popup').fadeOut();
    });
    setTimeout(function () {
        showPopup();
    }, 10000);

    const ReviewMore = $('.comments-items-more');

    $('#show-more').click(function(event) {
        event.preventDefault();
        ReviewMore.slideToggle();
    });

    $(function () {
        $("#container1").twentytwenty({
            default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
            orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
            before_label: 'hasta', // подпись 'до'
            after_label: 'después', // подпись 'после'
            no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
            move_slider_on_hover: false, // двигать "ползунок" слайдера вместе с курсором мыши
            move_with_handle_only: true, // двигать слайдер только за его "ползунок"
            click_to_move: false // разрешить перемещение "ползунка" слайдера по клику на изображении
        });
    });

    $('.btn-chat').click(function () {
        $('.chat').toggleClass('chat-transform');
        $('.btn-chat img').toggleClass('rotate')
    });
    $("#form a[href='#to_form']").on("click", function (event) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#order").offset().top
        }, 500);
        $('.chat').toggleClass('chat-transform');
        $('.btn-chat img').toggleClass('rotate');
    });

    $("#open-modal").click(function () {
        $(".modal-menu").fadeIn();
    });

    $(".close-modal").click(function () {
        $(".modal-menu").fadeOut();
    });

})




