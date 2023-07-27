function func() {
    $(document).ready(function () {
        $nav = $(".side1");
        $h = $nav.offset().top;
        $(window).scroll(function(){
            if ( $(window).scrollTop() > $h) {
                $nav.addClass("fixed");
            }else{
                $nav.removeClass("fixed");
            }
        });
    })
}
setTimeout(func, 500);