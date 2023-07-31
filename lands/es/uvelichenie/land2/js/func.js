var slider = function(root) {
  var me = this;
  me.root = $(root);

  var _init = function(element) {

    var next  = element.find(".next"),
    prev    = element.find(".prev"),
    items     = element.find("li"),
    itemsLen  = items.length,
    itemCount   = 0;

    next.click(function(event){
      event.preventDefault();
      itemCount++;
      if(itemCount == itemsLen ) {
        itemCount = 0;
      }
      items.eq(itemCount).stop(true,true).fadeIn(300).siblings().fadeOut(0);
    });

    prev.click(function(event){
      event.preventDefault();
      itemCount--;
      if(itemCount == (-1) ) {
        itemCount = (itemsLen - 1);
      }
      items.eq(itemCount).stop(true,true).fadeIn(300).siblings().fadeOut(0);
    });

    function anim() {
      next.trigger("click");
    }

    setInterval(anim, 1000);

  }

  me.root.each(function(){
    new _init( $(this) );
  });
}

$(document).ready(function(){
  new slider(".slider");
});

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
});

var scroller = function(root) {
  var me = this;
  me.root = $(root);

  var _init = function(element) {
    link = element.find("a.scroller");

    link.on("click",this,function(event){

      var thisHref = $(this).attr("href");
      target = $(thisHref).offset().top;

      $("body,html")
            .stop(true,true)
            .animate({
              scrollTop: target - 10
            });
    });
  }

  me.root.each(function(){
    new _init( $(this) );
  });
}

$(document).ready(function(){
  new scroller(".js-nav");

//  var select = new Select({ elem : $(".select") });

  $(".j-inp").focus(function(){
      var defVal = $(this).attr("defaultValue");
      if($(this).val() == defVal) $(this).val("");
    }).blur(function(){
      var defVal = $(this).attr("defaultValue");
      if($(this).val() == "") $(this).val(defVal);
    });
});
