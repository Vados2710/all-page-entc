$(document).ready(function () {

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right")
    });

    let topOffset = 70;
    $(document).on('scroll',function(){
      const topBarHeight = $('.top-bar').height()
      const navbarOffet = $('#sticky-main-navbar').offset()
      if ($(document).scrollTop() > topOffset) {
        $('#sticky-main-navbar').addClass('sticky-button')
      }else {
        $('#sticky-main-navbar').removeClass('sticky-button')
      }
    })

});

function getdate(duration){
  var timer = duration,
    minutes, seconds;
    setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
  

    // document.querySelector('#hours-1').textContent ="00";
    // document.querySelector('#minutes-1').textContent =minutes;
    // document.querySelector('#sec-1').textContent =seconds;

    $("#hours-1").html("00" + '<span>Hrs</span>'),
  $("#minutes-1").html(minutes + '<span>mins</span>'),
  $("#sec-1").html(seconds + '<span>secs</span>');

    if (--timer < 0) {
      timer = duration;
    }
    }, 1000);
}
var mins = 60 * 10;
getdate(mins)
