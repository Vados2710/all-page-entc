var disclaimerBtn = document.querySelector('.terms--disclaimer');
var disclaimerModal = document.querySelector('.modal--disclaimer');
var overlay = document.querySelector('.overlay-bg');
var modals = document.querySelectorAll('.modal');
var closeBtns = document.querySelectorAll('.modal__close-button');


disclaimerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!disclaimerModal.classList.contains('modal--active')) {
        disclaimerModal.classList.add('modal--active');
        overlay.classList.add('overlay-bg--active');
    } else {
        disclaimerModal.classList.remove('modal--active');
        overlay.classList.remove('overlay-bg--active');
    }
    return false;
});




overlay.addEventListener('click', function () {
    modals.forEach(function (modal) {
        modal.classList.remove('modal--active');
    })
    overlay.classList.remove('overlay-bg--active');
});

closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        modals.forEach(function (modal) {
            modal.classList.remove('modal--active');
        })
        overlay.classList.remove('overlay-bg--active');
    })
})

$(document).ready(function() {

	



	

function Random(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var count = $('.best-form-digits:eq(0)').text(),
    time = setTimeout(function t() {
      count--;
      $('.best-form-digits').text(count);
      var b = Random(1, 75);
      if (count > 4) {
        time = setTimeout(t, b * 1000);
      }
    }, Random(5, 10)* 1000);	
   
});
