$(document).ready(function () {
  // -------------spin-------------------
  var resultWrapper = document.querySelector('.spin-result-wrapper');
  var wheel = document.querySelector('.wheel-img');

  $('.wheel-active').click(function () {
    if (wheel.classList.contains('rotated')) {

    } else {
      wheel.classList.add('super-rotation');
      setTimeout(function () {
        resultWrapper.style.display = 'block';
      }, 8000);
      setTimeout(function () {
        $('.spin-wrapper').slideUp();
        $('.order_block').slideDown();
      }, 10000);
      wheel.classList.add('rotated');
    }
  });
  var closePopup = document.querySelector('.close-popup');
  $('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
  });
})
let time = 600;
let intr;
let count = 0;

function start_timer() {
  count++
  if (count === 1) {
    intr = setInterval(tick, 1000);
    count++
  } else {
    return false
  }
};