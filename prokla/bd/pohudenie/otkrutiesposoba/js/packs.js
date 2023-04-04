

///Date for comments

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

////////////

//Weight Calc
$(function () {
    $("#calcweight").click(function (a) {
        a.preventDefault();
        a = Math.ceil(Number($("#minus_weight").val()) / .666666);
        Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ? $(".formResult").html("<p><b>আপনি যদি নীচের নির্দেশাবলী অনুসরণ করেন, আপনি ডাউনলোড করতে পারেন" + $("#minus_weight").val() + " কেজি মাত্র " + a + " ডায়েট এবং ব্যায়াম ছাড়া দিন!!</b></p><p>অবিশ্বাস্য শোনাচ্ছে? নীচের নিবন্ধটি পড়ুন এবং আপনি এটি খুব সম্ভবত দেখতে পাবেন! এটি আপনার জীবন পরিবর্তন করবে!</p>") : $(".formResult").html("<p><b>তথ্যটি ভুল।</b></p>");
        $(".formResult").css({
            transition: "background 1s",
            backgroundColor: "#ff7426c4",
            border: '2px solid #ff7426c4'
        });
        setTimeout(function () {
            $(".formResult").css({
                backgroundColor: "#fff"
            })
        }, 2E3)
    })
});


//video

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
    $(this)
        .find($('.video-cover'))
        .css('display', 'none');
    $(this)
        .find($("video"))[0]
        .play();
});