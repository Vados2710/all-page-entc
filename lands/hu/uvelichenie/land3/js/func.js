

var sliderBg = function(root) {
  var me = this;
  me.root = $(root);

  var _init = function(element) {

    var items   = element.find(".js-bg"),
    itemsLen  = items.length,
    itemCount   = 0;

    items.eq(0).siblings(".js-bg").css({display: 'none'});
    function anim() {
      itemCount++;
      if(itemCount == itemsLen ) {
        itemCount = 0;
      }
      items.eq(itemCount).stop(true,true).fadeIn(300).siblings(".js-bg").fadeOut(0);
    }

    setInterval(anim, 5000);

  }

  me.root.each(function(){
    new _init( $(this) );
  });
}

$(document).ready(function(){
  new sliderBg(".js-bg-slider");
  
  $('a').click(function(e){
      e.preventDefault();
    $("html, body").animate({scrollTop: $("form").offset().top - 300}, 1000);
          return false;
  })
  
});
