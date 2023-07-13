$(document).ready(function(){
     
        !function(){
            var t;
            try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function (t) {
            t.state && location.replace(vitrina)
            }
            } catch (o) {}
        }();

       
        d = new Date();
        p = new Date(d.getTime() - 10 * 86400000);
        var yr = d.getFullYear();
        montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
        date_html = p.getDate() + '.' + montha[p.getMonth()] + '.' + yr;
        p0 = new Date(d.getTime() - 0 * 86400000);
        date_html0 = p0.getDate() + '.' + montha[p0.getMonth()] + '.' + yr;
        $('.date').html(date_html0);
});

window.onload = function() {
    if(window.screen.width > 767) {
        function func() {
            $(document).ready(function () {
                $nav = $(".fxd");
                $h = $nav.offset().top;
                $(window).scroll(function () {
                    if ($(window).scrollTop() > $h) {
                        $(".prod_side").addClass('active');
                    }
                    else {
                        $(".prod_side").removeClass('active');
                    }
                });
            })
        }
        setTimeout(func, 100);
    }
};