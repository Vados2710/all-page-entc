$(document).ready(function() {
    // -------------spin-------------------
    var wheel = document.querySelector(".wheel-img");
    $(".cursor-text").on("click", function(event) {
        $(this).off(event);

        if (!wheel.classList.contains("rotated")) {
            wheel.classList.add("super-rotation");
            setTimeout(function() {
                $(".spin-wrapper").slideUp();
                $(".order_block").slideDown();
                /* $("#timer").yuukCountDown({
                    starttime: makeDate(),
                    endtime: makeDate(10),
                    endCallBack: function() {
                        $("#timer").html("Time Out");
                    },
                }); */
                start_timer();
            }, 7500);
            wheel.classList.add("rotated");
        }
    });

    function makeDate(n = 0) {
        var thisDate = new Date();
        var minute = thisDate.getMinutes() + n;
        var month = thisDate.getMonth() + 1;
        var final =
            thisDate.getFullYear() +
            "/" +
            month +
            "/" +
            thisDate.getDate() +
            " " +
            thisDate.getHours() +
            ":" +
            minute +
            ":" +
            thisDate.getSeconds();
        return final;
    }

    // --------------SCROLL-------------------
    $(".ord_button").on("touchend, click", function(e) {
        e.preventDefault();
        $("body,html").animate({ scrollTop: $(".toform").offset().top }, 800);
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");

});



let time = 300;
let intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.getElementById('#min').innerHTML = ("0" + mins);
    document.getElementById('#sec').innerHTML = (secs);
}

// validation 

$("[name='phone']").on("input", function() {
    $(this).val(
        $(this)
        .val()
        .replace(/[A-Za-zА-Яа-яЁё]/, "")
    );
});
$("[name='name']").on("input", function() {
    $(this).val($(this).val().replace(/[0-9]/, ""));
});