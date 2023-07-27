//polyfill foreach for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

var privacyBtn = document.querySelector('.footer-link--privacy');
var privacyModal = document.querySelector('.modal--privacy');
var overlay = document.querySelector('.overlay-bg');
var modals = document.querySelectorAll('.modal');
var closeBtns = document.querySelectorAll('.modal__close-button');

privacyBtn.addEventListener('click', function(e) {
	e.preventDefault();
	if (!privacyModal.classList.contains('modal--active')) {
		privacyModal.classList.add('modal--active');
		overlay.classList.add('overlay-bg--active');
	} else {
		privacyModal.classList.remove('modal--active');
		overlay.classList.remove('overlay-bg--active');
	}
  return false;
});


overlay.addEventListener('click', function() {
	modals.forEach(function(modal) {
    modal.classList.remove('modal--active');
  });
	overlay.classList.remove('overlay-bg--active');
});

closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    modals.forEach(function(modal) {
      modal.classList.remove('modal--active');
    })
		overlay.classList.remove('overlay-bg--active');
  })
})

var webAddresses = document.querySelectorAll('.modal__website');
webAddresses.forEach(function(webAddress){
  webAddress.innerText = window.location.href;
});

document.addEventListener(
        "DOMContentLoaded",
        function () {
          var privacyLinks = document.querySelectorAll(".ac_footer a");
          privacyLinks[0].innerHTML = "Reportar";
        },
        false
      );