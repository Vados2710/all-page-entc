var b1 = $("#b1");
var b2 = $("#b2");
var b3 = $("#b3");
var b4 = $("#b4");
var b5 = $("#b5");
var b6 = $("#b6");
var b7 = $("#b7");

function hideBanner(anh) {
    anh.fadeOut("slow");
}

function showBanner(anh) {
    anh.fadeIn("slow");
}
var hightDevice = document.documentElement.clientHeight;
var heightBody = document.body.offsetHeight;
var whenShowB2 = heightBody;
var whenShowB3 = heightBody;
var whenShowB4 = heightBody;
var whenShowB5 = heightBody;
var whenShowB6 = heightBody;

var b1isHide = false;
var b2isHide = true;
var b3isHide = true;
var b4isHide = true;
var b5isHide = true;
var b6isHide = true;
var b7afterForm = true;
$(window).load(function() {
    whenShowB2 = $("#showB2").offset().top - 100;
    whenShowB3 = $("#showB3").offset().top - 160;
    whenShowB4 = $("#showB4").offset().top - 100;
    whenShowB5 = $("#showB5").offset().top - 100;
    whenShowB6 = $("#showB6").offset().top - 160;
});

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                if (target.selector == '#form')
                    form = 54;
                else
                    form = 0;

                $("html, body").animate({
                        scrollTop: target.offset().top - form
                    },
                    1000,
                    function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            
                        }
                    }
                );
            }
        }
    });

function showComments() {
    if ($(".opinion-box .comments button span").hasClass("active")) {
        $(".opinion-box .comments .content").fadeOut("slow");
        $(".opinion-box .comments button span").removeClass("active");
    } else {
        $(".opinion-box .comments .content").fadeIn("slow");
        $(".opinion-box .comments button span").addClass("active");
    }
}

function showNewComments() {
    if ($(".opinion-box .comments-new button span").hasClass("active")) {
        $(".opinion-box .comments-new .content").fadeOut("slow");
        $(".opinion-box .comments-new button span").removeClass("active");
    } else {
        $(".opinion-box .comments-new .content").fadeIn("slow");
        $(".opinion-box .comments-new button span").addClass("active");
    }
}

function ExpiryTime() {
    hideBanner(b6);
    if (b7afterForm)
        showBanner(b7);
}

function counterBanner() {
    showBanner(b6);
    $(document).ready(function() {
        if (typeof $.countdown !== 'undefined' && typeof $.countdown === "object") {
            $(".timeCounter").countdown({
                until: "+3min",
                compact: true,
                format: "MS",
                description: "",
                onExpiry: ExpiryTime
            });
        }
    });
}