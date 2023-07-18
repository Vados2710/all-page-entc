$(document).ready(function() {
    $('a[href="form"]').click(function() {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 300
        }, 1800);
        return false;
    });
     $('a[href="#"]').click(function() {
        return false;
    });
});
