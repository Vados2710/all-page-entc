var intr, time = 600;

function spin() {
    var wheel = document.querySelector(".wheel-img");
    if (!wheel.classList.contains("rotated")) {
        wheel.classList.add("super-rotation")
        setTimeout(function() {
            $("#productOne").slideUp();
            $(".spin-wrapper").slideUp();
            $("#mtc").slideDown();
            // document.querySelector('.spin-result-wrapper').style.display = 'block';
            // start_timer()
        }, 8e3),
        wheel.classList.add("rotated")
    } 
    // else {
    //     document.querySelector('.spin-result-wrapper').style.display = 'block';
    // }
            // $('.close-popup, .pop-up-button, .hhh').click(function(e){
			// 	$('.spin-result-wrapper').fadeOut();
            // });
}

// function start_timer() {
//     intr = setInterval(tick, 1e3)
// }

// function tick() {
//     time -= 1;
//     var e = Math.floor(time / 60),
//         t = time - 60 * e;
//     0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
// }
