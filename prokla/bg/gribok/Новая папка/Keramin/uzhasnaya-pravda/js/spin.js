jQuery(document).ready(function (e) {
  var t = e('.spin-result-wrapper, .pop-up-window'),
    n = e('.wheel-img');

  e('.cursor-text').on('click', function (i) {
    e(this).off(i),
      n.hasClass('rotated')
        ? t.css({ display: 'block' })
        : (n.addClass('super-rotation'),
          setTimeout(function () {
            t.css({ display: 'block' });
          }, 8e3),
          setTimeout(function () {
            e('.spin-wrapper').slideUp(),
              e('.order_block').slideDown(),
              e('#timer').yuukCountDown({
                starttime: a(),
                endtime: a(10),
                endCallBack: function () {
                  e('.countdown-time').append('Time Out'), e('.clearfix').hide();
                },
              });
          }, 9500),
          n.addClass('rotated'));
  }),
    e('.close-popup, .pop-up-button').click(function (t) {
      t.preventDefault(), e('.spin-result-wrapper').fadeOut();
    });

  e('.close, .overlay, .popup_btn').click(function () {
    e('.overlay, .spin-result-wrapper').fadeOut();
  });
});
