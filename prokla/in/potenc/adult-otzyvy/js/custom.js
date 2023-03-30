function ClickTrack(click) {
  if (window.trackClick)
    trackClick(click);
}

function EmailTrack(email) {
  if (window.trackEmail)
    trackEmail(email);
}

function delayLinkRedirect(obj) {
  _c1n4_ = true;
  var nu = $(obj).attr('href');
  setTimeout(function () {
    document.location.href = nu;
  }, 300);
  return false
}

// Blokada desnog klika

/*   $(document).on("contextmenu", function(event){
        event.preventDefault();
    }); */


jQuery(document).ready(function () {
  var $container = $('#items');
  $container.imagesLoaded(function () {
    $container.masonry({
      itemSelector: '.item',
      columnWidth: 260,
      isAnimated: true,
      isFitWidth: true
    });
  });
});

/* ------------------------------------------------------------------------- */

var monthNames = new Array(
  "01", "02", "03", "04", "05", "06", "07",
  "08", "09", "10", "11", "12");



