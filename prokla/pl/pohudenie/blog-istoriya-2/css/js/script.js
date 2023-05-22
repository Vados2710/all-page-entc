
function func() {
    $(document).ready(function () {
        $nav = $(".fxd");
        $h = $nav.offset().top;
        $obj = $("#ftr");
        $obj2 = $("#hdr");
        $(window).scroll(function(){
            if ( $(window).scrollTop() > $h) {
                $obj.fadeIn();
                $obj2.fadeIn();
            }else{
                $obj.fadeOut();
                $obj2.fadeOut();
            }
        });
    })
}
setTimeout(func, 1000);