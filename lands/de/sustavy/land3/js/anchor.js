$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
    telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
    isNaN(event.data)
        ? this.value = this.value.replace(/[^0-9+]/, '')
        : false;
  }
}
initInputValidation();

window.addEventListener("load", function () {
  const popup = document.querySelector('.ever-popup');

  document.addEventListener('click', function () {
    if (popup && popup.classList.contains('show')) {
      initInputValidation();
    }
  })
});