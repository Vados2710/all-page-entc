var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img");



function spin() {
  wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"),

    setTimeout(function () {
      resultWrapper.style.display = "block"
    },
      8e3),

    setTimeout(function () {
      $(".spin-wrapper").slideUp(),
        $(".order_block").slideDown(),
        start_timer()
    },
      1e4),
    wheel.classList.add("rotated"))
}

var closePopup = document.querySelector(".close-popup"); 

$(".close-popup, .pop-up-button").click(function (a) { 
  a.preventDefault(), 

  $(".spin-result-wrapper").fadeOut(); 

  var b = $("#roulette").offset().top; 

  $("body,html").animate({ 
    scrollTop: b }, 800) 
  }); 

    var intr, time = 600; 
    
    function start_timer() { 
      intr = setInterval(tick, 1e3) 
    } 

    function tick() { --time; var a = Math.floor(time / 60), b = time - 60 * a; 0 == a && 0 == b && clearInterval(intr), b = 10 <= b ? b : "0" + b, $("#min").html("0" + a), $("#sec").html(b) 
  }