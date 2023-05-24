let flag = 0;
document.body.addEventListener("mouseleave", function (event) {
  let e = event || window.event;
  e = e.clientY;
  let popup = document.querySelector(".prop-up");

  if (popup && e < 10 && flag === 0) {
    popup.classList.add("see");
    flag++;
  }
});
let z = document.querySelectorAll(".blanket, .dialoh-close");
for (let i = 0; i < z.length; i++) {
  z[i].addEventListener("click", function () {
    let popup = document.querySelector(".prop-up");
    popup.classList.remove("see");
  });
}

var flagOne = 0;
// $(document).ready(function () { postFixedSidebar(); });
// $(window).resize(function () {
//     // postFixedSidebar();
// });

var articleS = $(".starts div span");
for (let i = 0; i < articleS.length; i++) {
  articleS[i].addEventListener("mouseover", function () {
    $(articleS[i])
      .parent()
      .removeClass("starts__1 starts__2 starts__3 starts__4 starts__5");
    $(articleS[i])
      .parent()
      .addClass("starts__" + (i + 1));
  });
}
$(".starts div")[0].addEventListener("mouseleave", function () {
  $(this).removeClass("starts__1 starts__2 starts__3 starts__4 starts__5");
});

// function postFixedSidebar(className) {
//     var className = className || 'sticky';
//     var $sticky;
//     if (flagOne === 0) {
//         $sticky = $('.' + className).wrap('<div class="' + className + '-wrapper"></div>').parent();
//         flagOne++;
//     }
//     $sticky = $(".sticky-wrapper");
//     var stickyTop = $(".exxxe")[0].getBoundingClientRect().top + pageYOffset;
//     var stickyLeft2 = $(".exxxe")[0].getBoundingClientRect().left;

//     $(window).scroll(fixedScrolling);
//     fixedScrolling();

//     function isScreen() {
//         return (stickyTop <= $(window).scrollTop());
//     }

//     function fixedScrolling() {
//         if (isScreen()) {
//             $sticky.addClass('fixed').css({ maxWidth: 260, left: stickyLeft2 });
//         }
//         else $sticky.removeClass('fixed');
//     }
// }
// /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

$(window).scroll(function () {
  if ($(this).scrollTop() > 292) {
    $(".prod-sidebar").addClass("active");
  } else {
    $(".prod-sidebar").removeClass("active");
  }
});
var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
  var elemY = placeY[i];
  elemY.innerHTML = year;
}
