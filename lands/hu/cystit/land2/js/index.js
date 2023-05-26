var sl1 = 0;

$(document).ready(function() {


  $(".block6 .right-block .faq-block .qline .top-line").click(function() {
    var iconP = $(this).find(".line-icon");
    if ($(iconP).hasClass("open")) {
      $(iconP)
        .parent()
        .parent()
        .find(".line-answer")
        .removeClass("hidden");
      $(iconP).removeClass("open");
      $(iconP).addClass("close");
    } else {
      $(iconP)
        .parent()
        .parent()
        .find(".line-answer")
        .addClass("hidden");
      $(iconP).addClass("open");
      $(iconP).removeClass("close");
    }

    return false;
  });

  $(".block1 .top-line .mobile-menu a").click(function() {
    if ($(".mobile-menu-block").hasClass("open")) {
      $(".mobile-menu-block").removeClass("open");
    } else {
      $(".mobile-menu-block").addClass("open");
    }

    return false;
  });

  $(".block12 .right-block .quote-block .answer").click(function() {
    $(".block12 .right-block .quote-block .answer").addClass("answered");
    var i = 0;
    var j = 0;
    var k = 0;
    var g = setInterval(function() {
      i++;
      $(".block12 .right-block .quote-block .answered.answer-yes").attr(
        "style",
        "background: -moz-linear-gradient(0deg, rgb(115, 150, 40) " +
          i +
          "%, rgb(255, 255, 255) " +
          i +
          "%);background: -webkit-linear-gradient(0deg, rgb(115, 150, 40) " +
          i +
          "%, rgb(255, 255, 255) " +
          i +
          "%);background: -o-linear-gradient(0deg, rgb(115, 150, 40) " +
          i +
          "%, rgb(255, 255, 255) " +
          i +
          "%); background: -ms-linear-gradient(0deg, rgb(115, 150, 40) " +
          i +
          "%, rgb(255, 255, 255) " +
          i +
          "%);background: linear-gradient(90deg, rgb(115, 150, 40) " +
          i +
          "%, rgb(255, 255, 255) " +
          i +
          "%);"
      );
      if (i == 80) clearInterval(g);
    }, 2);

    var g2 = setInterval(function() {
      j++;
      $(".block12 .right-block .quote-block .answered.answer-no").attr(
        "style",
        "background: rgb(183, 0, 0);background: -moz-linear-gradient(0deg, rgb(183, 0, 0) " +
          j +
          "%, rgb(255, 255, 255) " +
          j +
          "%);background: -webkit-linear-gradient(0deg, rgb(183, 0, 0) " +
          j +
          "%, rgb(255, 255, 255) " +
          j +
          "%);                background: -o-linear-gradient(0deg, rgb(183, 0, 0) " +
          j +
          "%, rgb(255, 255, 255) " +
          j +
          "%);                background: -ms-linear-gradient(0deg, rgb(183, 0, 0) " +
          j +
          "%, rgb(255, 255, 255) " +
          j +
          "%);                background: linear-gradient(90deg, rgb(183, 0, 0) " +
          j +
          "%, rgb(255, 255, 255) " +
          j +
          "%);"
      );
      if (j == 15) clearInterval(g2);
    }, 10);

    var g3 = setInterval(function() {
      k++;
      $(".block12 .right-block .quote-block .answered.answer-show").attr(
        "style",
        "background: -moz-linear-gradient(0deg, rgb(42, 28, 72) " +
          k +
          "%, rgb(255, 255, 255) " +
          k +
          "%); background: -webkit-linear-gradient(0deg, rgb(42, 28, 72) " +
          k +
          "%, rgb(255, 255, 255) " +
          k +
          "%);              background: -o-linear-gradient(0deg, rgb(42, 28, 72) " +
          k +
          "%, rgb(255, 255, 255) " +
          k +
          "%);               background: -ms-linear-gradient(0deg, rgb(42, 28, 72) " +
          k +
          "%, rgb(255, 255, 255) " +
          k +
          "%);                background: linear-gradient(90deg, rgb(42, 28, 72) " +
          k +
          "%, rgb(255, 255, 255) " +
          k +
          "%);" + "color: #ccc;"
      );
      if (k == 85) clearInterval(g3);
    }, 2);

    return false;
  });

  setInterval(function() {
    sl1++;
    $(".block1 .top-line .tleft").hide();
    $(".block1 .top-line .tleft")
      .eq(sl1 % 3)
      .show();
  }, 3000);

  $(window).scroll(function() {
    if (come($(".block11 .item-block .item .itop .orangebg").eq(0))) {
      rew1();
    }
    if (come($(".block11 .item-block .item .itop .orangebg").eq(1))) {
      rew2();
    }
    if (come($(".block11 .item-block .item .itop .orangebg").eq(2))) {
      rew3();
    }
    if (come($(".block11 .item-block .item .itop .orangebg").eq(4))) {
      rew5();
    }
  });

  $(".morerew").click(function() {
    $(".block11 .item-block .more").hide();
    $(".block11 .item-block .spinner-more").show();
    setTimeout(function() {
      $(".block11 .item-block .item").show();
      rew4();
      rew5();
      rew6();
      $(".block11 .item-block .spinner-more").hide();
      $(".block11 .item-block .more .morerew").hide();
      $(".block11 .item-block .more .morerew2").show();
      $(".block11 .item-block .more").show();
    }, 5000);
    return false;
  });

  $(".morerew2").click(function() {
    $(".block11 .item-block .more").hide();
    $(".block11 .item-block .spinner-more").show();

    return false;
  });
});

function rew1() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(0)
    .animate(
      {
        width: "94px"
      },
      1000,
      function() {}
    );
}

function rew2() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(1)
    .animate(
      {
        width: "84px"
      },
      1000,
      function() {}
    );
}

function rew3() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(2)
    .animate(
      {
        width: "84px"
      },
      1000,
      function() {}
    );
}

function rew4() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(3)
    .animate(
      {
        width: "94px"
      },
      1000,
      function() {}
    );
}

function rew5() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(4)
    .animate(
      {
        width: "74px"
      },
      1000,
      function() {}
    );
}

function rew6() {
  $(".block11 .item-block .item .itop .orangebg")
    .eq(5)
    .animate(
      {
        width: "94px"
      },
      1000,
      function() {}
    );
}

function come(elem) {
  var docViewTop = $(window).scrollTop(),
    docViewBottom = docViewTop + $(window).height(),
    elemTop = $(elem).offset().top,
    elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$(document).ready(function () {
  //код jQuery
  get_timer('.timer');

  function get_timer(elem) {

      var date_new = new Date();

      date_new.setDate(date_new.getDate() + 1);
      date_new.setHours(0);
      date_new.setMinutes(0);
      date_new.setSeconds(0);
      date_new.setSeconds(date_new.getSeconds() - 1);

      var date = new Date();
      var timer = date_new - date;

      if (date_new > date) {
          hour = parseInt(timer / (60 * 60 * 1000)) % 24;
          if (hour < 10) {
              hour = '0' + hour;
          }

          hour = hour.toString();
          min = parseInt(timer / (1000 * 60)) % 60;

          if (min < 10) {
              min = '0' + min;
          }

          min = min.toString();
          sec = parseInt(timer / 1000) % 60;

          if (sec < 10) {
              sec = '0' + sec;
          }

          sec = sec.toString();
          $(elem).find(".hour").html(hour);
          $(elem).find(".min").html(min);
          $(elem).find(".sec").html(sec);
          setTimeout(get_timer, 1000, elem);
      }
  }
});