"use strict";

$(document).ready(function () {
  var content = $(".container");
  var sidebar = $(".sidebar");

  $(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();

    if (windowTop > content.offset().top - 10) {
      sidebar.addClass("_fixed");
    } else {
      sidebar.removeClass("_fixed");
    }
  });

  function stopTick(periods) {
    if ($.countdown.periodsToSeconds(periods) === 1) {
      $('#timer').countdown("destroy").html("00:01");
    }
  }

  if ($('#timer').length) {
    $('#timer').countdown({
      until: 900,
      format: 'MS',
      onTick: stopTick,
      compact: true,
      layout: '<span>{m10}{m1}</span>' + '<span>{s10}{s1}</span>'
    }).removeClass('hidden');
  }
});