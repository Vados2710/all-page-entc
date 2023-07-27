$('a').not('.ac_footer a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:
            $('.toscroll').offset().top
    }, 500);
});
// -------------spin-------------------
var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

$('.cursor-text').on("click", function (event) {
    $(this).off(event);
    if (!wheel.classList.contains("rotated")) {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".tov").slideUp();
            $(".order_block").slideDown();
            // -------------TIMER------------------------
            var fiveSeconds = new Date().getTime() + 600000;
            $("#clock")
                .countdown(fiveSeconds, { elapse: true })
                .on("update.countdown", function (event) {
                    var $this = $(this);
                    if (event.elapsed) {
                        $this.html("El tiempo ha terminado");
                    } else {
                        $this.html(event.strftime("<span>%M</span> : <span>%S</span>"));
                    }
                });
        }, 10000);
        wheel.classList.add("rotated");
    }
});

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    var top = $(".toscroll").offset().top;
    $("body,html").animate({ scrollTop: top }, 800);
});

// -------------TableModalForMobile------------------------

function openModalTable() {
    var element = document.getElementsByClassName("statistic")[0];
    element.classList.add("table__modal");
    document.body.style['overflow-y'] = 'hidden';
}

function closeModalTable() {
    var element = document.getElementsByClassName("statistic")[0];
    element.classList.remove("table__modal");
    document.body.style['overflow-y'] = 'auto';
}


$.get("https://api.sypexgeo.net/json/", function (location) {
    if (location.region && location.region.name_es) {
        let userRegion = location.region.name_es;
        console.log(userRegion);
        $(".user-city").text(userRegion);
    }
});