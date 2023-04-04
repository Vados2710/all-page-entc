"use strict";

$(document).ready(function () {
  var nav = $(".nav");
  var container = $(".container");
  var topofobj = $(nav).offset().top;
  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    if (windowScroll > topofobj) {
      $(nav).addClass("_fixed");
      container.css("margin-top", "107px");
    } else {
      $(nav).removeClass("_fixed");
      container.css("margin-top", "35px");
    };
  });
});