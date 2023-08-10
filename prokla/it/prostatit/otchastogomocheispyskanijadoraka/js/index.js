$((function () {
    $(".screenLock").css({
        height: $(document).height() + "px"
    }), $("a.order-btn").click((function () {
        return $(this).closest("form").submit(), !1
    })), $(".close, .screenLock").click((function () {
        $(".screenLock").fadeOut(300)
    })), $(".screenLock .msg").click((function (c) {
        c.stopPropagation()
    }));
    var c = !0;
    $(window).mouseout((function (o) {
        o.pageY - $(window).scrollTop() < 1 && 1 == c && ($(".screenLock").fadeIn(300), c = !1)
    }))
}));

function openImg(e) {
    const target = e.target;
    if (target.classList.contains("first") || target.classList.contains("second")) {
        const parent = target.parentNode.parentNode;
        parent.classList.toggle("show");
    }
  }
  
  document.addEventListener("click", openImg);