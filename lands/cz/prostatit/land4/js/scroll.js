$(document).on('click', '.scroll_toform', function (event) {
  event.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $('#form').offset().top,
    },
    1000
  );
});
