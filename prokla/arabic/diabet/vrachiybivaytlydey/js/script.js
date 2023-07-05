$(document).ready(function () {
    $("a").on("touchend, click", function (a) {
        a.preventDefault();
        $("body,html").animate({
            scrollTop: $("#roulette").offset().top
        }, 400)
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
    let popupShowed = false;
    $(document).mouseleave(function () {
        if (!popupShowed) {
            popupShowed = true;
            $("#ouibounce-modal").fadeIn();
            setTimeout(function () {
                $(".msg").slideDown()
            }, 300)
        }
    });
    $(".close-over, .vtgoodlink").on("click", function () {
        $("#ouibounce-modal").fadeOut()
    })
});