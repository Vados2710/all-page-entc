$(document).ready(function() {
    $('.block5-slider').slick({
        infinite: false,
        slidesToShow: 1
    });
    $('.block5-slider-btn, .block7-composition-btn, .block7-mechanic-btn').click(function() {
        $(this).parent().toggleClass('active');
        var text = $(this).text();
        if (text == "+") {
            $(this).text("-")
        }
        else {
            $(this).text("+")
        }
    });
    (function () {
        window.addEventListener("resize", resizeThrottler, false);
        var resizeTimeout;

        function resizeThrottler() {
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function () {
                    resizeTimeout = null;
                    drawTriangle();
                }, 300);
            }
        }
    }());
    // $('.block7-composition-btn').click(function() {
    //     $(this).parent().toggleClass('active');
    //     var text = $(this).text();
    //     if (text == "+") {
    //         $(this).text("-")
    //     }
    //     else {
    //         $(this).text("+")
    //     }
    // });
    $('.block5-slider').on('afterChange', function(event, slick, currentSlide){
        var currentNumber = currentSlide + 1;
        $('.block5-slider-current').text(currentNumber);
        $('.block5-slider-item').removeClass('active');
        $('.block5-slider-btn').text("+");
    });
    let drawTriangle = function () { // For triangles with shadow painting
        let canvas = document.getElementById('triangle');
        if(!canvas) {
            return
        } else {
            let context = canvas.getContext('2d');
            context.clearRect(0,0,30,40);
            context.beginPath();
            context.moveTo(15, 20);
            context.lineTo(31, 12);
            context.lineTo(31, 28);
            context.closePath();
            context.shadowColor = "rgba(0,0,0,.15)";
            context.shadowBlur = 20;
            context.shadowOffsetX = -1;
            context.shadowOffsetY = 0;
            context.fillStyle = "#fff";
            context.fill();
            context.strokeStyle="#e8e8e8";
            context.stroke();
        }
    };
    drawTriangle();
});
function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[A-Za-zА-Яа-я\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
