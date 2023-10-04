var triesCount = 2,
  tries = 0;
$("#tries_count").text(triesCount),
  $(".try").on("click", function () {
    $(this).parent(".boxes_item").hasClass("afterlose-boxes_item") ||
      $("#boxesContainer").hasClass("stop_trying") ||
      (0 == tries &&
        ($("#boxesContainer").addClass("stop_trying"),
        $(this).attr("src", "images/box_d.png"),
        $(this).addClass("shake"),
        $(this).parent(".boxes_item").addClass("afterlose-boxes_item"),
        $(".box-tooltip-title").html(
          '<b>Você não ganhou nada</b><br> Você tem  <span style="color: red;">1 Tentativa</span>! restante! Int tente novamente!'
        ),
        $(".box-tooltip-btn").html("EXPERIMENTE COM"),
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100);
        }, 850)),
      1 == tries &&
        ($("#boxesContainer").addClass("stop_trying"),
        $(this)
          .parent(".boxes_item")
          .html('<p class="win_prize">50% DE DESCONTO</p>'),
        $(".box-tooltip-title").html(
          '<b>Parabéns!</b><br>Seus ganhos têm um:<br><b style="color: red;">50% de desconto</b>'
        ),
        $(".box-tooltip-btn").html("OBTER EREXOL"),
        $(".box-tooltip-ico>img").attr("src", "images/congrat.png"),
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100);
        }, 1e3)));
  }),
  $(".box-popup-wrapper.tooltip").bind("click", function (t) {
    $("#boxesContainer").removeClass("stop_trying"),
      $(".box-popup-wrapper").fadeOut(90),
      tries++,
      triesCount--,
      $("#tries_count").html(
        '<span style="color: red;">' + triesCount + "</span>"
      ),
      2 == tries &&
        ($("#boxesContainer").slideUp("fast"),
        $(".lead-form-box").slideDown("fast"),
        start_timer(),
        $("body,html").animate(
          {
            scrollTop: $("#scroll_to").offset().top - 20,
          },
          400
        ));
  });