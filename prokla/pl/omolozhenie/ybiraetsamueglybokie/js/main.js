const buttons = document.getElementsByClassName("read_more"),
    onButtonClick = e => {
        const t = e.target,
            r = t.getAttribute("data-target"),
            n = document.getElementById(r);
        t.innerHTML = "Czytaj mniej" === t.innerHTML ? "Czytaj więcej..." : "Czytaj mniej", n.classList.toggle("show"), $slickSlider.find(".slick-slide").height("auto"), $slickSlider.slickSetOption(null, null, !0)
    },
    attachingEvent = e => e.addEventListener("click", onButtonClick);
Array.prototype.forEach.call(buttons, attachingEvent), document.querySelector(".show_more").addEventListener("click", (() => {
    document.querySelector(".more_ingredients").style.height = "auto", document.querySelector(".show_more").style.display = "none"
}));
let paragraphs = document.querySelectorAll("p");

function updateheight() {
    _.parents(".slick-list").height(_.parents(".slider_wrapper.slick-active").height())
}
paragraphs.forEach((function (e) {
    var t = e.innerHTML;
    t = (t = t.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;")).replace(/(\s)([^<][\S]{1})[\s]+/g, "$1$2&nbsp;"), e.innerHTML = t
})), $(document).ready((function () {
    $(".opinions_slider").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: $(".arrow_prev"),
        nextArrow: $(".arrow_next"),
        dots: !1,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: !0,
                centerPadding: "20%",
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: !0,
                centerPadding: "10px",
                slidesToShow: 1
            }
        }]
    })
})), $(document).ready((function () {
    $(".top_opinions_slider").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "20px",
        variableWidth: !0,
        arrows: !0,
        adaptiveHeight: !0,
        prevArrow: $(".top_arrow_prev"),
        nextArrow: $(".top_arrow_next"),
        dots: !1,
        responsive: [{
            breakpoint: 576,
            settings: {
                variableWidth: !1,
                centerPadding: "0"
            }
        }]
    })
})), $(".read_more").each((function (e) {
    $(this).click((function () {
        _ = $(this), updateheight()
    }))
}));