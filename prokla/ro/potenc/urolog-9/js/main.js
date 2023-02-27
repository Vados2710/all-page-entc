$((function () {
    $(".screenLock").css({
        height: $(document).height() + "px"
    }), $("a.order-btn").click((function () {
        return $(this).closest("form").submit(), !1
    })), $(".close").click((function () {
        $(".screenLock").fadeOut(300)
    }));
    var c = !0;
    $(window).mouseout((function (o) {
        o.pageY - $(window).scrollTop() < 1 && 1 == c && ($(".screenLock").fadeIn(300), c = !1)
    }))
}));