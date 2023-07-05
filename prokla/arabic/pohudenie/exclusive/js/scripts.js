jQuery(function(e){e(".sidebar").scrollToFixed({})});
  function toform(id) {
      id.click(function () { // ID откуда кливаем
        $('html, body').animate({
          scrollTop: $(".end__product").offset().top // класс объекта к которому приезжаем
        }, 700); // Скорость прокрутки
      });
    }
    toform($(".navigation__item"));