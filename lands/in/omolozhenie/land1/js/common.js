if (typeof app !== "object") {
    var app = {}
}
app.genIco = function (c) {
    var b = this, a = $(c.selector);
    if (!b.spriteSvg) {
        b.spriteSvg = $(c.sprite)
    }
    a.each(function () {
        var m = $(this), k = b.spriteSvg.find("#" + m.data("svg")), d = k[0].attributes,
            f = '<div class="data-svg">\n<svg xmlns="http://www.w3.org/2000/svg"';
        for (var h = 0; h < d.length; h++) {
            f += " " + (d[h].name === "id" ? 'class="svg_' + d[h].value + '"' : d[h].name + '="' + (d[h].value) + '"')
        }
        f += ">\n";
        for (l = 0; l < k[0].childNodes.length; l++) {
            var e = k[0].childNodes[l];
            if (e.nodeName !== "#text") {
                f += "<" + e.nodeName;
                for (var g = 0; g < e.attributes.length; g++) {
                    f += " " + e.attributes[g].name + '="' + (e.attributes[g].value) + '"'
                }
                f += "></" + e.nodeName + ">"
            }
        }
        f += "\n</svg>\n</div>";
        if (m.data("position") === "a") {
            m.append(f)
        } else {
            m.prepend(f)
        }
    })
};
app.diagram = function (d, c) {
    var e = this;
    _s = e.diagDat;
    if (!_s) {
        e.diagDat = {};
        _s = e.diagDat;
        _s.box = $("." + d.box);
        _s.osY = _s.box.find("." + d.box + "--" + d.osY);
        _s.wrap = _s.box.find("." + d.box + "--" + d.wrap)
    }
    if (!_s.width || _s.width !== _s.wrap.innerWidth()) {
        _s.width = _s.wrap.innerWidth();
        _s.osY.height(_s.width);
        _s.box.height(_s.width)
    }
    if (e.deviceDB[e.device] > 598) {
        _s.box.css("margin-top", "-" + _s.width + "px")
    } else {
        _s.box.css("margin-top", 0)
    }
};
app.cdnInit = function () {
    if (!app.cdn) {
        var a = $("#cdnUrl").attr("src");
        if (a) {
            app.cdn = a.replace("js/common.js", "")
        }
    }
};
app.slider = function (b) {
    var d = this, e;
    if (!d.sliderDat) {
        d.sliderDat = {}
    }

    function c(g) {
        e = d.sliderDat[g.name];
        if (!e) {
            d.sliderDat[g.name] = {};
            e = d.sliderDat[g.name];
            e.wrap = $(g.wrap);
            e.dom = e.wrap.html();
            e.slider = e.wrap.find(g.box);
            e.option = g.option ? g.option : {xs: {}};
            if (!e.option.xs) {
                e.option.xs = {}
            }
            var f = [];
            for (var j in d.deviceDB) {
                if (d.deviceDB.hasOwnProperty(j)) {
                    if (!e.option[j]) {
                        f.push(j)
                    } else {
                        for (var h = 0; h < f.length; h++) {
                            e.option[f[h]] = e.option[j]
                        }
                        f = []
                    }
                }
            }
            e.def = undefined
        }
        if (e.def !== e.option[d.device]) {
            e.def = e.option[d.device];
            if (typeof e.slider.destroySlider === "function") {
                e.slider.destroySlider();
                e.wrap.html(e.dom);
                e.slider = e.wrap.find(g.box)
            }
            if (e.def !== "none") {
                e.slider.bxSlider(e.def)
            }
        }
    }

    if (!b.name || typeof b.name !== "string") {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                c(b[a])
            }
        }
    } else {
        c(b)
    }
};
app.progress = function (a, b) {
    a = typeof a.attr !== "function" ? $(a) : a;
    a.each(function () {
        var i = $(this);
        if (i.data("val")) {
            var h = i.find("span"), g = i.data("val"), d = i.find("svg:not([class])").width(), f = i.find(".circle"), e,
                c;
            if (!f.data("dasharray")) {
                f.attr("data-dasharray", f.attr("stroke-dasharray"))
            }
            e = d * f.data("dasharray") / 164;
            c = (e - ((e * g) / 100));
            if (!b) {
                f.attr({"stroke-dasharray": e, "stroke-dashoffset": e});
                i.animate({outline: "0px"}, {
                    duration: 1000, easing: "linear", progress: function (k, j) {
                        h.text(Math.round(g * j));
                        f.attr("stroke-dashoffset", e - ((e * g) / 100) * j)
                    }
                })
            } else {
                if (c !== +f.attr("stroke-dashoffset")) {
                    f.attr({"stroke-dasharray": e, "stroke-dashoffset": c})
                }
            }
        }
    })
};
app.scrollTo = function (b, a) {
    var c = this, d = 0;
    if (b !== 0) {
        b = typeof b.attr === "function" ? b : $(b);
        if (b.length) {
            d = b.offset().top + (isNaN(a) ? 0 : +a)
        }
    }
    if (!c.html) {
        c.html = $("html, body")
    }
    c.html.animate({scrollTop: d}, 1000)
};
app.init = function () {
    var c = this, a = {
        ico: {selector: "[data-svg]", sprite: "#sprite"},
        diagram: {
            box: "changes__diagram",
            osY: "osY",
            wrap: "wrap",
            param: "param",
            age: "age",
            indent: "indent",
            interval: [30, 60],
            step: 5
        },
        slider: {
            time: {
                name: "time",
                box: ".time__slider",
                wrap: ".time__slider--wrap",
                option: {xs: {infiniteLoop: false, hideControlOnEnd: true}}
            },
            reviews: {
                name: "reviews",
                box: ".reviews__slider",
                wrap: ".reviews__slider--wrap",
                option: {sm1: {slideWidth: 600, minSlides: 2, maxSlides: 4, moveSlides: 1}, md: "none"}
            }
        },
        progress: "[data-val]",
        butToForm: ".button:not(.form__button)"
    };
    c.deviceDB = {xl: 1199, lg: 991, md1: 849, md: 767, sm1: 599, sm: 424, xs: 0};

    function b() {
        for (var d in c.deviceDB) {
            if (c.deviceDB.hasOwnProperty(d) && c.deviceDB[d] < window.innerWidth) {
                return d
            }
        }
    }

    c.device = b();
    c.progressBox = $(a.progress);
    c.cdnInit();
    c.genIco(a.ico);
    c.diagram(a.diagram, 1);
    $(a.butToForm).on("touchend click", function (d) {
        d.preventDefault();
        c.scrollTo(".form__wrap", -20)
    });
    $(window).on("load", function () {
        c.slider(a.slider)
    }).on("resize", function () {
        if (c.device !== b()) {
            c.device = b();
            c.slider(a.slider);
            c.progress(c.progressBox, 1)
        }
        c.diagram(a.diagram)
    }).on("scroll", function () {
        c.progressBox.each(function () {
            var d = $(this);
            if (window.innerHeight / 2 - this.getBoundingClientRect().top > 0 && !d.hasClass("init")) {
                c.progress(d);
                d.addClass("init")
            }
        })
    })
};
$(function () {
    app.init();
    $(".change-package-selector2").on("change", (function () {
        $(".item-gift").hide();
        $("." + $(this).val() + "_pack").show();
        $('.change-package-selector2 [value="' + $(this).val() + '"]').prop("selected", true);
        var a = $(this).val();
        set_package_prices(a);
        $(".old").css("display", "none");
        $(".new").css("display", "none");
        $(".old_" + a).css("display", "block");
        $(".new_" + a).css("display", "block")
    }))
});