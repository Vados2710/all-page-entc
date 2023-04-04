var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");
var params = window.location.search.replace("?", "").split("&").reduce(function (c, b) {
    var a = b.split("=");
    c[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    return c
}, {});

function spin() {
    if (!wheel.classList.contains("rotated")) {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block"
        }, 2000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".order_block").slideDown();
            $("#timer-countdown").timeTo({
                displayHours: false,
                seconds: 601,
                theme: "black",
                fontSize: 30
            })
        }, 6000);
        wheel.classList.add("rotated")
    }
}