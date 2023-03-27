function func() {
    $(document).ready(function () {
        $nav = $(".item");
        $h = $nav.offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > $h) {
                $nav.addClass("fixed")
            } else {
                $nav.removeClass("fixed")
            }
        })
    })
}

setTimeout(func, 1000);

function func() {
    $(document).ready(function () {
        if (document.documentElement.clientWidth) {
            var a = $(".fxd").offset().top;
            var c = $("#hdr");
            var b = $("#ftr");
            $(window).scroll(function () {
                if ($(window).scrollTop() > a) {
                    c.fadeIn();
                    b.fadeIn()
                } else {
                    c.fadeOut();
                    b.fadeOut()
                }
            })
        }
    })
}

setTimeout(func, 1000);