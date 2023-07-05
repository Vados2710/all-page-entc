var header = $(".header"), scrollPrev = 0;
$(window).scroll(function () {
    var a = $(window).scrollTop();
    if (a > 100 && a > scrollPrev) {
        header.addClass("out")
    } else {
        header.removeClass("out")
    }
    scrollPrev = a
});
$("button.mobile").click(function () {
    $(".modal").css("display", "block")
});
$("button.close2").click(function () {
    $(".modal").css("display", "none")
});
$("#show").click(function () {
    $(".mobile-menu").toggleClass("showPanel");
    $(".close").css("display", "block");
    $(".burger").css("display", "none")
});
$("#hide").click(function () {
    $(".close").css("display", "none");
    $(".burger").css("display", "block")
});

$(".view-all").on("touchend, click", function (a) {
    $(".hidden").removeClass("hidden");
    $(".comment_margin-none:first").removeClass("comment_margin-none");
    $(".view-all").addClass("hidden")
});
$(document).ready(function () {
    $(".open-form").on("touchend, click", function (a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup").toggleClass("hide");
        $(".blur").toggleClass("active")
    });
    $(".popup__close").on("touchend, click", function (a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});
let num = document.querySelectorAll(".counter-num");
let counter = document.querySelectorAll(".counter");
$(document).mouseup(function (a) {
    var b = $(".header-nav-mobile");
    if (!b.is(a.target) && b.has(a.target).length === 0) {
        $(".mobile-menu").removeClass("showPanel");
        $(".header-logo").removeClass("active");
        $(".close").css("display", "none");
        $(".burger").css("display", "block");
        $(".bg-blur").removeClass("show")
    }
});
const ReviewMore = $(".comments-items-more");
$("#show-more").click(function (a) {
    a.preventDefault();
    ReviewMore.slideToggle()
});
for (let j = 0; j < counter.length; j++) {
    let count = 0;
    counter[j].addEventListener("click", function () {
        if (count === 0) {
            count++;
            num[j].innerHTML = parseInt(num[j].innerHTML) + 1
        } else {
            if (count === 1) {
                count--;
                num[j].innerHTML = parseInt(num[j].innerHTML) - 1
            }
        }
    })
}
$(document).ready(function () {
    $(".open-popup").on("touchend, click", function (a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    });
    $(".close2").on("touchend, click", function (a) {
        a.preventDefault();
        $("#textInput").val("");
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});