$(document).ready(function () {
  
  // Mobile menu trigger
  $(".js-menu-mobile").click(function () {
    $(".js-menu-list").slideToggle("fast");
  });
  $(window).resize(function() {
    var menuTrigger = $(".js-menu-mobile")
    var menuList = $(".js-menu-list")
    if ( $(window).width() < 600 ) {
      if (menuTrigger.is(":hidden") ){
        menuTrigger.css('display', '');
      }
    } else {
      menuList.css('display', '');
    }
  });
  // Mobile menu trigger.end
  
});