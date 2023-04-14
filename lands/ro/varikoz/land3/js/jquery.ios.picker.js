!(function(t) {
  var n = t.event.dispatch || t.event.handle,
    e = t.event.special,
    a = "D" + +new Date(),
    l = "D" + (+new Date() + 1);
  (e.scrollstart = {
    setup: function(l) {
      var c,
        s = t.extend(
          {
            latency: e.scrollstop.latency
          },
          l
        ),
        i = function(t) {
          var e = this,
            a = arguments;
          c ? clearTimeout(c) : ((t.type = "scrollstart"), n.apply(e, a)),
            (c = setTimeout(function() {
              c = null;
            }, s.latency));
        };
      t(this)
        .bind("scroll", i)
        .data(a, i);
    },
    teardown: function() {
      t(this).unbind("scroll", t(this).data(a));
    }
  }),
    (e.scrollstop = {
      latency: 250,
      setup: function(a) {
        var c,
          s = t.extend(
            {
              latency: e.scrollstop.latency
            },
            a
          ),
          i = function(t) {
            var e = this,
              a = arguments;
            c && clearTimeout(c),
              (c = setTimeout(function() {
                (c = null), (t.type = "scrollstop"), n.apply(e, a);
              }, s.latency));
          };
        t(this)
          .bind("scroll", i)
          .data(l, i);
      },
      teardown: function() {
        t(this).unbind("scroll", t(this).data(l));
      }
    });
})(jQuery);

(function($) {
  function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }

  $.fn.picker = function(json, callback) {
    var options = json.data;
    var lineHeight = 70;
    $ele = $(this);
    $ele.empty();
    $ele.addClass("picker-wrapper");
    $ele.append('<div class="clone-scroller"></div>');
    $ele.append('<div class="picker-up"></div>');
    $ele.append('<div class="picker-down"></div>');
    $ele.append('<div class="picker-scroller"></div>');

    if (typeof json.lineHeight != "undefined") {
      lineHeight = json.lineHeight;
    }
    $.each(options, function(index, option) {
      $ele
        .find(".clone-scroller")
        .append('<div class="option">' + option + "</div>");
      $ele
        .find(".picker-scroller")
        .append('<div class="option">' + option + "</div>");
    });
    $ele.find(".clone-scroller").bind("scroll", function() {
      clockWise(lineHeight, callback);
    });
    $ele.find(".clone-scroller").bind("scrollstop", function(e) {
      var scrollAmount =
        Math.round($(this).scrollTop() / lineHeight) * lineHeight;
      $(this)
        .parent()
        .find(".clone-scroller")
        .animate(
          {
            scrollTop: scrollAmount
          },
          100
        );

      var eIndex = Math.round(unit / 45);
      var $scroller = $(".picker-scroller");
      var $clone = $(".clone-scroller");
      var $cloneScrollTop = $(".clone-scroller").scrollTop();
      var $options = $scroller.find(".option");
      var $optionsNo = $options.length;
      var $cloneHeight = lineHeight * $optionsNo;
      var totalDeg = 45 * $optionsNo;
      var unit = (totalDeg / $cloneHeight) * $cloneScrollTop;

      unit = Math.round(unit / 45) * 45;
      $scroller.css(
        "-webkit-transform",
        "translateZ(-90px) rotateX(" + unit + "deg)"
      );
    });

    /*setting css*/
    if (typeof json.lineHeight != "undefined") {
      var scrollWidth = getScrollbarWidth();
      $ele.css({
        height: lineHeight * 3 + "px",
        "line-height": lineHeight + "px",
        left: -scrollWidth,
        right: -scrollWidth
      });
      $ele.find(".clone-scroller").css({
        "padding-top": lineHeight * 1 + "px",
        "padding-bottom": lineHeight * 1 + "px"
      });
      $ele.find(".picker-scroller").css({
        "padding-top": lineHeight * 1 + "px",
        "padding-bottom": lineHeight * 1 + "px"
      });
      $ele.find(".picker-up").css("height", lineHeight * 1 + "px");
      $ele.find(".picker-down").css("height", lineHeight * 1 + "px");
    }
    // default selected
    if (typeof json.selected != "undefined") {
      $ele.find(".clone-scroller").scrollTop(lineHeight * json.selected);
      $ele.find(".picker-scroller").scrollTop(lineHeight * json.selected);
    }

    $ele
      .find(".picker-scroller")
      .find(".option")
      .each(function(index, $option) {
        $option = $($option);
        $option.css(
          "-webkit-transform",
          "rotateX(-" + 45 * index + "deg) translateZ(90px)"
        );
        if (index > 3) {
          $option.hide();
        }
      });
  };
})(jQuery);

var deg = 0;

function clockWise(lineHeight, callback) {
  var $scroller = $(".picker-scroller");
  var $clone = $(".clone-scroller");
  var $cloneScrollTop = $(".clone-scroller").scrollTop();
  var $options = $scroller.find(".option");
  var $optionsNo = $options.length;
  var $cloneHeight = lineHeight * $optionsNo;
  var totalDeg = 45 * $optionsNo;
  var unit = (totalDeg / $cloneHeight) * $cloneScrollTop;
  $scroller.css(
    "-webkit-transform",
    "translateZ(-90px) rotateX(" + unit + "deg)"
  );

  var eIndex = Math.round(unit / 45);
  if (callback) callback(eIndex);
  $($options).hide();
  $($options.get(eIndex)).show();
  for (i = eIndex; i < eIndex + 3; i++) {
    $($options.get(i)).show();
  }
  if (eIndex > 3) {
    for (i = eIndex; i >= eIndex - 3; i--) {
      $($options.get(i)).show();
    }
  } else {
    for (i = 0; i < 4; i++) {
      $($options.get(i)).show();
    }
  }
}
