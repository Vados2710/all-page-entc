$(document).ready(function() {
    // --------------SCROLL-------------------
    $('a').on("touchend, click", function(e) {
        e.preventDefault();
        $("body,html").animate({
                scrollTop: $("#order").offset().top 
            },
            400
        );
    });

});
