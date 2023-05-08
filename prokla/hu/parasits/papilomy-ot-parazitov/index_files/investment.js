$('#popuphandler').on('mouseenter', function(e) {
     e.preventDefault();
  $('.popup-overlay').toggle(500);
  /*$('#popuphandler').toggleClass('is-white');*/
  $('.demon_popup').toggleClass('active');
});

 $(document).mouseup(function (e) {
     var popup = $(".popup");
     var button = $("#popuphandler")
     if (!$('#popuphandler').is(e.target) && !$('.popup').is(e.target) && !button.is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0 && button.has(e.target).length == 0) {
         $('.popup-overlay').hide(500);
         /*$('#popuphandler').removeClass('is-white');*/
     }
 });

  $('.demon_close').on('click', function () {
     $('.popup-overlay').hide(500);
     /*$('#popuphandler').removeClass('is-white');*/
     $('.demon_popup').removeClass('active');
 });



