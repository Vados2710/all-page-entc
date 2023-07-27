jQuery(document).ready(function (c) {
    var a = c(".spin-result-wrapper, .pop-up-window");
    var b = c(".wheel-img");
    c(".spin_active").on("click", function (d) {
        localStorage.setItem("spin", "1");
        c(this).off(d);
        if (b.hasClass("rotated")) {
            a.css({display: "block"})
        } else {
            b.addClass("super-rotation");
            setTimeout(function () {
                a.css({display: "block"})
            }, 8000);
            setTimeout(function () {
                c(".spin-wrapper").slideUp();
                c(".order_block").slideDown();
                var e = new Date().getTime() + 600000;
                c("#clock").countdown(e, {elapse: true}).on("update.countdown", function (f) {
                    var g = c(this);
                    if (f.elapsed) {
                        g.html("00 : 00")
                    } else {
                        g.html(f.strftime("<span>%M</span> : <span>%S</span>"))
                    }
                })
            }, 9500);
            b.addClass("rotated")
        }
    });
    if (localStorage.getItem("spin") == 1) {
        c(".spin-wrapper").hide();
        c(".order_block").show()
    } else {
        c(".spin-wrapper").show();
        c(".order_block").hide()
    }
    c(document).keydown(function (d) {
        if (d.keyCode === 27) {
            a.fadeOut()
        }
    });
    c(".close-popup, .spin-result-wrapper").click(function () {
        a.fadeOut()
    });
    c("a").on("touchend, click", function (d) {
        d.preventDefault();
        c("body,html").animate({scrollTop: c(".scroll").offset().top}, 400)
    });
    c(".search input").keypress(function (d) {
        if (d.which == 13) {
            c(".search input").val("");
            c("body,html").animate({scrollTop: c(".scroll").offset().top}, 400)
        }
    });
    c(".ac_footer a, .ac_gdpr_fix a").unbind("click")
});