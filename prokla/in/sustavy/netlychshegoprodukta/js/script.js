var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

$("#push_0nmdlkhxjax__submit").on("click", function () {
    let pushMess = $("#push_0nmdlkhxjax__message").val();
    if (pushMess !== undefined && pushMess !== "") {
        $(".push-comment-popup").fadeIn();
        setTimeout(function () {
            $(".push-comment-popup").fadeOut();
            $("#push-comments").slideUp()
        }, 3000)
    }
});