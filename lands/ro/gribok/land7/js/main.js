$(document).ready(function () {
    $(function () {
        $(".owl-carousel").owlCarousel({ items: 1, loop: !0, nav: !0, margin: 15,autoHeight:true }), $(".owl-prev").empty(), $(".owl-next").empty();
    });

    $(".nav__list").on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        menu.classList.remove('open');
        menu.classList.add('close');
        overlay.classList.remove('open');
        unlockScroll();
    });




    const menu = document.querySelector('.nav'),
        burger = document.querySelectorAll('.burger'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelectorAll('.btn-close');

    const lockScroll = () => {
        document.body.classList.add('lock');
    }

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    burger.forEach( el => {
        el.addEventListener('click', (e) => {
            menu.classList.add('open');
            menu.classList.remove('close');
            overlay.classList.add('open');
            lockScroll();
        });
    })

    btnClose.forEach ( el => {
        el.addEventListener('click', () => {
            menu.classList.remove('open');
            menu.classList.add('close');
            overlay.classList.remove('open');
            unlockScroll();
        });
    })

    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        menu.classList.add('close');
        overlay.classList.remove('open');
        unlockScroll();
    });

});