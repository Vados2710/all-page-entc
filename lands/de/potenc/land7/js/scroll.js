/**
 * Created by User on 014 14.08.17.
 */
$(document).ready(function() {
    $('.toform').click(function() {
        $("html, body").animate({
            scrollTop: $("#footform").offset().top - 300
        }, 1000);
        return false;
    });
});