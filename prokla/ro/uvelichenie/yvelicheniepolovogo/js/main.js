"use strict";
let app = {
    _constructorSlider(i) {
        $(i).on("init", (function (i, t) {
            $(".slider-nav .slick-slide.slick-current").addClass("is-active")
        })).slick({
            dots: !0,
            infinite: !0,
            speed: 500,
            fade: !0,
            mobileFirst: !0,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 4e3,
            responsive: [{
                breakpoint: 992,
                settings: {
                    infinite: !0,
                    dots: !1,
                    arrows: !0
                }
            }]
        })
    },
    _scroll(i, t) {
       
        
    },
    init() {
        this._constructorSlider(".reviews")
    }
};
window.addEventListener("load", (function () {
    app.init()
})), $(document).ready((function () {
    app.init();
    
}));