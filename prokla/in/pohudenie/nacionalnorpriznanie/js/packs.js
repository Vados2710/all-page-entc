////////////

//Weight Calc
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault(); a = Math.ceil(Number($("#minus_weight").val()) / .666666); Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ? $(".formResult").html("<p><b>यदि आप नीचे निर्देशों का पालन करेंगे तो बस " + $("#minus_weight").val() + " दिन में " + a + " किलो घटा लेंगे, बिना डाइट या एक्सर्साइज़ के!</b></p><p>क्या आपको लगता है ये असंभव है? लेख को आखिर तक पढ़ें और आपका मन बदल जाएगा। उम्मीद है इससे आपकी ज़िंदगी भी बदल जाएगी!</p>") : $(".formResult").html("<p><b>गलत आंकड़े।</b></p>");
    $(".formResult").css({ transition: "background 1s", backgroundColor: "#ff7426c4", border: '2px solid #ff7426c4' }); setTimeout(function () { $(".formResult").css({ backgroundColor: "#fff" }) }, 2E3)
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