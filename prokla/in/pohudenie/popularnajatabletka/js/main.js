$(document).ready(function () {
    var text1 = $('#text1').text();
    var text2 = $('#text2').text();
    var text3 = $('#text3').text();
    var text4 = $('#text4').text();
    now = new Date();
    var perem = (24 - now.getHours()) * 70;
    $(".el-timer").attr("data-timer", perem);
    if (window.innerWidth > 800) {
        $(".el-timer").TimeCircles({
            "animation": "smooth",
            "bg_width": 1,
            "fg_width": 0.1,
            "circle_bg_color": "#eaeaea",
            "time": {
                "Days": {
                    "text": text1,
                    "color": "red",
                    "show": true
                },
                "Hours": {
                    "text": text2,
                    "color": "red",
                    "show": true
                },
                "Minutes": {
                    "text": text3,
                    "color": "red",
                    "show": true
                },
                "Seconds": {
                    "text": text4,
                    "color": "red",
                    "show": true
                }
            }
        });
    } else {
        $(".el-timer").TimeCircles({
            "animation": "smooth",
            "bg_width": 1,
            "fg_width": 0.03,
            "circle_bg_color": "#eaeaea",
            "time": {
                "Days": {
                    "text": text1,
                    "color": "red",
                    "show": false
                },
                "Hours": {
                    "text": text2,
                    "color": "red",
                    "show": true
                },
                "Minutes": {
                    "text": text3,
                    "color": "red",
                    "show": true
                },
                "Seconds": {
                    "text": text4,
                    "color": "red",
                    "show": true
                }
            }
        });
    }

    $(window).on("load resize", function (e) {
        function setHeight() {
            $('ul.del li').height('auto');

            var maxVal = 0;

            $('ul.del li').each(function () {
                maxVal = Math.max(maxVal, $(this).height());
                console.log(maxVal);
            });

            $('ul.del li').height(maxVal);
        }

        setHeight();
    });


    var count = 6;
    var count_width = 70;
    $nav = $(".coupon_start");
    $h = $nav.offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > $h) {

            counter();
            $(window).unbind('scroll');

        }

    });

    function counter() {
        var timeCount = setInterval(function () {
            $('.prod_count').html(count);
            count--;
            count_width = count_width - 10;
            $('.bar').css('width', count_width + 'px')
        }, 5000);
        setTimeout(function () {
            clearInterval(timeCount);
        }, 30000);
    }
});

