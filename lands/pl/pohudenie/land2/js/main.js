const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
    });
});

$(".header__burger").click(function () {
    $(".header__content").toggleClass('active');
    $(this).toggleClass('active');
});
$(".header__link").click(function () {
    $(".header__content").removeClass('active');
    $(".header__burger").removeClass('active');
});
$(".header__btn").click(function () {
    $(".header__content").removeClass('active');
    $(".header__burger").removeClass('active');
});
$(".burder__closs").click(function () {
    $(".header__content").removeClass('active');
    $(".header__burger").removeClass('active');
});

$(function () {
    $(".help-box__title").click(function (evt) {
        evt.preventDefault();
        var $this = $(this);
        var $parent = $this.parents(".help__box");
        $parent.siblings().removeClass("active");
        $parent.toggleClass("active");
        $parent.siblings().find(".help-box__text").slideUp(300);
        $this.next().slideToggle(300);
    });
});

$(function () {
    var $togglersCollection = $('.faq__item-toggler');
    $togglersCollection.click(function (evt) {
        evt.preventDefault();
        var $this = $(this);
        $togglersCollection.not(this).removeClass('show');
        $this.parent('.faq__item').siblings().find('.faq__item-description').slideUp(300);
        $this.toggleClass('show').next('.faq__item-description').slideToggle(300);
    });
});

var reviews = (function () {
    $(".reviews-item__btn").on("click", function () {
        $(this).parent().toggleClass("active");

        if (!$(this).data("status")) {
            $(this).html("Скрыть отзыв");
            $(this).data("status", true);
        } else {
            $(this).html("Прочитать весь отзыв");
            $(this).data("status", false);
        }
    }); // $(window).on("load", function() {
    //   $(".reviews-list").mCustomScrollbar();
    // });

    $(".star1").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active1");
    });
    $(".star2").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active2");
    });
    $(".star3").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active3");
    });
    $(".star4").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active4");
    });
    $(".star5").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active5");
    });
    $(".feedback-btn").click(function () {
        var reviewInput1 = $(".input__val-1").val().length,
            reviewInput2 = $(".input__val-2").val().length,
            // reviewInput3 = $(".input__val-3").val().length,
            reviewInput4 = $(".input__val-4").val().length;
        var pattern = /^[A-Za-zА-Яа-яЁё]{0,}$/;
        var nameTest = pattern.test($(".input__val-1").val());
        var cityTest = pattern.test($(".input__val-3").val());

        if (reviewInput1 !== 0 && nameTest) {
            $(".feedback-name").removeClass('error');
        } else {
            $(".feedback-name").addClass('error');
        }


        if (reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120) {
            $(".feedback-age").removeClass('error');
        } else {
            $(".feedback-age").addClass('error');
        } // && reviewInput3 !== 0 && cityTest && reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120


        if (reviewInput4 !== 0) {
            $(".feedback-text").removeClass('error');
        } else {
            $(".feedback-text").addClass('error');
        }

        if (reviewInput1 !== 0 && nameTest && reviewInput4 !== 0 && reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120) {
            $(".input__val-1").val("");
            $(".input__val-2").val(""); // $(".input__val-3").val("");

            $(".input__val-4").val("");
            $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
            $(".feedback-modal").fadeIn();
            setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
        }
    });
    $(".input__val-2").on("input", function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ""));
    });
    $(".feedback").fadeOut();
    $(".feedback-modal").fadeOut();
    $(".reviews-btn").click(function () {
        $(".feedback").fadeIn();
    });
});
$(".social__img").on("click", function (e) {
    var target = $(e.target),
        dislikeImg = target.parent().next().children().first(),
        likeImg = target.parent().prev().children().first(),
        dislikeCount = target.parent().next().children().last(),
        likeCount = target.parent().prev().children().last();

    if (target.hasClass("like")) {
        target.toggleClass("used");
        target.toggleClass("like-active");
        dislikeImg.removeClass("dislike-active");

        if (target.hasClass("like-active")) {
            target.next().text(Number(target.next().text()) + 1);
        } else {
            target.next().text(Number(target.next().text()) - 1);
        }

        if (dislikeImg.hasClass("used")) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass("used");
        }
    } else {
        target.toggleClass("used");
        target.toggleClass("dislike-active");
        likeImg.removeClass("like-active");

        if (target.hasClass("dislike-active")) {
            target.next().text(Number(target.next().text()) + 1);
        } else {
            target.next().text(Number(target.next().text()) - 1);
        }

        if (likeImg.hasClass("used")) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass("used");
        }
    }
});

function main() {
    scrollSmooth();
    reviews();
}

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
    }, {
        once: true
    });
} else {
    main();
}
