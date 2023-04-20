var phone2 = document.querySelector('#phone2');
var btn2 = document.querySelector('#btn2');
var form2 = document.querySelector('#form2');
var message2 = document.querySelector('#hide2');


$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});
