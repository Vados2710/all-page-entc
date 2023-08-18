function countDown(class_) {
  let timer = document.querySelector(class_);
    a = timer.getAttribute("data-minutes"),
    b = timer.getAttribute("data-seconds");
  var d = setInterval(function () {
    0 <= parseInt(a) && -1 !== parseInt(b) && (
      0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
      timer.innerText = (
        10 > a ?
        "0" + a :
        a
      ) + ":" + (
        10 > b ?
        "0" + b :
        b
      ),
      0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
      b--
    )
  }, 1E3)
}

$(".btn--submit").click(function () {
  countDown('.time');
  $('.order').addClass('shown__');
});



var boxes = $(".prize__item"),
  counter = 1,
  saleMas = [
    "10%", "15%", "35%", ""
  ],
  overlay = $(".overlay"),
  saleLength = saleMas.length,
  saleText = $(".prize__dig");

function closePopup() {
  $(".close-popup, .btn-popup").click(function (a) {
    a.preventDefault();
    $(".overlay").fadeOut()
  })
}
closePopup();

function randomeSale(a, b) {
  return a[Math.floor(Math.random() * b)]
}
/*wheel */
var resultWrapper = document.querySelector('.overlay');
var wheel = document.querySelector('.prize-wheel');
$('.wheel__cursor').click(function () {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('spin');
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    wheel.classList.add('rotated');
  }

});

$(".btn--submit").click(function () {
  $('.wheel__wrapper').slideUp();
  $('.order').slideDown();
    $(".wheel__wrapper").slideUp(),
    $(".order").slideDown(),
    $(".bottom-teaser .sale").addClass("shown"),
    $(".order").addClass('shown__')
});
hR = Math.random();
saleText.each(function () {
  $(this).html(randomeSale(saleMas, 5))
});
var nameInner = $(".float__name"),
  saleInner = $(".float__sale"),
  float = $(".float"),
  false15 = !1,
  false30 = !1;

