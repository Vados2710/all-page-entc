
    $(document).ready(function () {
        var nav = $("#fxd");
        var h = nav.offset().top;
        var obj = $("#ftr");
        $(window).scroll(function () {
            if ($(window).scrollTop() > h) {
                obj.fadeIn();

            } else {
                obj.fadeOut();

            }
        });


    });
    $(document).ready(function () {


        $("button").on("click", function () {


            $(this).closest(".spoil").find(".hide_visible").toggle();







        });

    });
