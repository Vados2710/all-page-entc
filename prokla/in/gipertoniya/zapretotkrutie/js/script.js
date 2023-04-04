$(document).ready(function () {
    $.get("https://api.sypexgeo.net/json/", function (a) {
        if (a.region && a.region.name_en) {
            let userRegion = a.region.name_en;
            $(".userRegion").text(userRegion)
        }
    });
    $("a").on("touchend, click", function (a) {
        a.preventDefault();
        $("body,html").animate({
            scrollTop: $(".toscroll").offset().top
        }, 400)
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click")
});