$("a[href='#ordernow'], .toform").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: $('#ordernow').offset().top}, 800);
});