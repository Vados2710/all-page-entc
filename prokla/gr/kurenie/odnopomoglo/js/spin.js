$(document).ready(function () {
    // -------------spin-------------------
    var wheel = document.querySelector(".wheel-img");
    $(".cursor-text").on("click", function (event) {
        $(this).off(event);

        if (!wheel.classList.contains("rotated")) {
            wheel.classList.add("super-rotation");
            setTimeout(function () {
                $(".spin-wrapper").slideUp();
                $(".order_block").slideDown();

                start_timer();
            }, 7500);
            wheel.classList.add("rotated");
        }
    });

    // --------------SCROLL-------------------
    $(".btn").on("touchend, click", function (e) {
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
    document.getElementById("#min").innerHTML = "0" + mins;
    document.getElementById("#sec").innerHTML = secs;
}

// validation

$("[name='phone']").on("input", function () {
    $(this).val(
        $(this)
            .val()
            .replace(/[A-Za-zА-Яа-яЁё]/, "")
    );
});
$("[name='name']").on("input", function () {
    $(this).val($(this).val().replace(/[0-9]/, ""));
});

let input = document.querySelectorAll('[name="name"], [name="phone"');
input.forEach((el) => {
    el.oninput = () => {
        if (el.value.charAt(0) === " ") {
            el.value = "";
        }
    };
});

$("#order_form").submit(function () {
    let phone = $("[name='phone']").val();
    if (phone.length < 6) {
        $("[name='phone']").css({ border: "2px solid red" });
        return false;
    } else {
        return true;
    }
});

$("[name='phone']").keyup(function () {
    if ($("[name='phone']").val().length > 5) {
        $("[name='phone']").css({ border: "2px solid green" });
    }
    else {
        $("[name='phone']").css({ border: "2px solid red" });
    }
});
