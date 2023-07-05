$(document).ready(function (e) {
    $(".comm-slider").slick({
        dots: true,
        arrows: false,
        prevArrow: "<img src='img/left-slide.png' class='prev' alt='1'>",
        nextArrow: "<img src='img/right-slide.png' class='next' alt='2'>"
    })
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
