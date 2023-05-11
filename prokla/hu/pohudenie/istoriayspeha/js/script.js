

jQuery(document).ready(function ($) {
  var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
  var wheel = $('.wheel-img');

  $('.spin_active').on("click", function (event) {
    // localStorage.setItem('spin', "1");
    $(this).off(event);
    if (wheel.hasClass('rotated')) {
      resultWrapper.css({
        'display': 'block'
      });
    } else {
      wheel.addClass('super-rotation');
      setTimeout(function () {
        resultWrapper.css({
          'display': 'block'
        });
      }, 8000);
      setTimeout(function () {
        $('.spin-wrapper').slideUp();
        $('.order_block').slideDown();
        start_timer();
      }, 9500);
      wheel.addClass('rotated');
    }
  });

  // if (localStorage.getItem('spin') == 1) {
  //   $('.spin-wrapper').hide();
  //   $('.order_block').show();
  // } else {
  //   $('.spin-wrapper').show();
  //   $('.order_block').hide();
  // }

  var time = 600;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
    $("#min").html(mins);
    $("#sec").html(secs);
  }

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      resultWrapper.fadeOut();
    }
  });

  $('.close-popup, .spin-result-wrapper').click(function () {
    resultWrapper.fadeOut();
  });


  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('.scroll').offset().top - 10
    }, 1000);
  });

  $(".search input").keypress(function (e) {
    if (e.which == 13) {
      $(".search input").val('');
      $('body,html').animate({
        scrollTop: $('.scroll').offset().top - 10
      }, 1000);
    }
  });

  $(".bel-footer-block a").unbind("click");
});

let reviews = function () {
  let commentFileText = $('.pust-comments__file-text');
  let commentFileInput = $('#file');
  let commentTextArea = $('.comment-area');
  let commentName = $('.reviews-form__name');

  commentFileInput.change(function (e) {
    commentFileText.html('Fénykép feltöltve');
    commentFileText.css("color", "#237a27");
    commentFileText.addClass("loaded");
  });

  $('.reviews-form').submit(function (e) {
    if (commentTextArea.val() == '' || commentName.val() == '') {
      return false;
    }
    e.preventDefault();
    commentFileText.html('Fénykép feltöltése');
    commentFileText.css("color", "#000");
    commentTextArea.val('');
    commentName.val('');
    alert('Köszönjük! Visszajelzését elküldtük moderációra.');
    $('#push-comments').slideUp();
    $('#facebook .commentsList .commentItem:last-child').css("margin-bottom", "0");
  });
};

reviews();

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}