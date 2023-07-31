(function () {
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['invierno', 'primavera', 'verano', 'otoño'];

  function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
      innerDate(counter, 'date-');
      innerDate(counter, 'date')
    }

    function innerDate(counter, dateType) {
      let newCounter;
      dateType === 'date-' ? newCounter = -counter : newCounter = counter;
      const _msInDay = 86400000,
        _localDate = new Date(Date.now() + (newCounter * _msInDay)),
        _day = _localDate.getDate(),
        _month = _localDate.getMonth() + 1,
        _year = _localDate.getFullYear();
      const dayDefault = addZero(_day),
        monthDefault = addZero(_month),
        defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
      const dateClass = dateType + counter,
        nodeList = document.querySelectorAll('.' + dateClass);
      for (let i = 0; i < nodeList.length; i++) {
        const dateFormat = nodeList[i].dataset.format;
        dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
      }
    }

    function changeFormat(_day, _month, _year, format, counter) {
      let innerFormat = format;
      const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
        dateFormat = {
          dd: _day,
          mm: addZero(_month),
          yyyy: _year,
          monthFull: getMonthName(_month, monthsName, false),
          year: getYearWithCounter(_year, counter),
        };
      for (let i = 0; i < testFormat.length; i++) {
        let string = testFormat[i];
        let regExp = new RegExp(string);
        innerFormat = innerFormat.replace(regExp, dateFormat[string]);
      }
      return innerFormat.split(' ').join(' ')
    }

    function getMonthName(_month, monthsName, bigFirstLetter, counter) {
      const monthCounter = !!counter ? counter : 0;
      let month;
      _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
      _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
      return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
    }

    function getYearWithCounter(year, counter) {
      return year + counter
    }

    function addZero(numb) {
      return numb < 10 ? '0' + numb : numb
    }

    function changeFirstLetter(isBig, str) {
      return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
    }
  }
  if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
      postDate(days, daysMin, months, monthMin, seasons)
    });
  }


  var e = (function () {
    $(document).on("click", 'a[href^="#"]', function (i) {
      i.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500)
    })
  });

  var g = (function () {
    $(".illness-box__title").click(function () {
      $(".illness__box").removeClass("active");
      $(this).parent().addClass("active")
    })
  });

  var d = (function () {

    var j = $(window).height();

    function i(k) {
      $(k).each(function () {
        var m = $(this),
          l;
        if (m.height() >= j) {
          l = m.offset().top + j - 100
        } else {
          l = m.offset().top + m.height()
        }
        if ($(document).scrollTop() + j >= l) {
          m.addClass("active")
        }
      })
    }

    $(document).on("scroll", function () {
      i(".peel__box");
      i(".composition-item__ingredient");
      i(".study__box");
      i(".use__pack")
    })
  });
  var c = (function () {
    
    $(".star1").on("click", function () {
      $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active1")
    });
    $(".star2").on("click", function () {
      $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active2")
    });
    $(".star3").on("click", function () {
      $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active3")
    });
    $(".star4").on("click", function () {
      $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active4")
    });
    $(".star5").on("click", function () {
      $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active5")
    });
    $(".feedback-btn").click(function () {
      var m = $(".input__val-1").val().length,
        l = $(".input__val-4").val().length;
      var n = /^[A-Za-zА-Яа-яЁё]{0,}$/;
      var k = n.test($(".input__val-1").val());
      var o = n.test($(".input__val-3").val());
      if (m !== 0 && k) {
        $(".feedback-name").removeClass("error")
      } else {
        $(".feedback-name").addClass("error")
      }
      if (l !== 0) {
        $(".feedback-text").removeClass("error")
      } else {
        $(".feedback-text").addClass("error")
      }
      if (m !== 0 && k && l !== 0) {
        $(".input__val-1").val("");
        $(".input__val-4").val("");
        $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
        $(".feedback-modal").fadeIn();
        setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000)
      }
    });
    $(".input__val-2").on("input", function () {
      $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ""))
    });
    $(".feedback").fadeOut();
    $(".feedback-modal").fadeOut();
    $(".reviews-btn").click(function () {
      $(".feedback").fadeIn()
    });
    var i = document.querySelectorAll(".x_price_previous");
    var j = document.querySelectorAll(".x_price_current");
    $(".social__img").on("click", function (o) {
      var n = $(o.target),
        p = n.parent().next().children().first(),
        l = n.parent().prev().children().first(),
        k = n.parent().next().children().last(),
        m = n.parent().prev().children().last();
      if (n.hasClass("like")) {
        n.toggleClass("used");
        n.toggleClass("like-active");
        p.removeClass("dislike-active");
        if (n.hasClass("like-active")) {
          n.next().text(Number(n.next().text()) + 1)
        } else {
          n.next().text(Number(n.next().text()) - 1)
        }
        if (p.hasClass("used")) {
          k.text(Number(k.text()) - 1);
          p.removeClass("used")
        }
      } else {
        n.toggleClass("used");
        n.toggleClass("dislike-active");
        l.removeClass("like-active");
        if (n.hasClass("dislike-active")) {
          n.next().text(Number(n.next().text()) + 1)
        } else {
          n.next().text(Number(n.next().text()) - 1)
        }
        if (l.hasClass("used")) {
          m.text(Number(m.text()) - 1);
          l.removeClass("used")
        }
      }
    })
  });
  var b = (function () {
    $(window).on("scroll resize", function () {
      j(".x_order_form");
      i()
    });

    function j() {
      var q = $(".banner"),
        m = $(".main-banner"),
        l = $(window).scrollTop(),
        s = l + $(window).height(),
        p = $(window).width();
      var u = 0;
      for (var k = 0; k < arguments.length; k++) {
        $(arguments[k]).each(function (w, r) {
          var o = $(r).offset().top,
            x = o + $(r).outerHeight(),
            v = $(r).offset().left,
            n = v + $(r).width();
          o <= s && x >= l && v <= p && n >= 0 && (u += 1)
        })
      }
      l <= 100 || u > 0 ? q.fadeOut() : q.fadeIn().css({
        bottom: m.outerHeight()
      })
    }

    function i() {
      const k = document.querySelector(".main-banner"),
        l = document.querySelector(".banner");
      let redBannerHeight;
      k ? redBannerHeight = k.clientHeight : k;
      redBannerHeight ? l.style.bottom = redBannerHeight - 1 + "px" : l.style.bottom = 0 + "px"
    }
  });
  $(".info__link").on("click", function () {
    var j = $(this);
    var i = j.attr("href");
    if (i !== undefined && i !== "") {
      $("html").animate({
        scrollTop: $(i).offset().top
      }, 1000)
    }
    return false
  });
  var h = (function () {
    function i(m, l) {
      var n = m - 0.5 + Math.random() * (l - m + 1);
      n = Math.round(n);
      return n
    }

    function j(n, l) {
      var o = i(n, l),
        m = o - i(5, 9);
      $(".footer__count--online").text(o);
      $(".footer__count--offline").text(m);
      setTimeout(j, 15000, 42, 24)
    }
    j(42, 24);

    function k(o, n) {
      var l = document.getElementById(o);
      var m = new Date().getFullYear() - n;
      return l.innerHTML = m
    }
    k("yyyy-0", 0);
    k("yyyy-5", 5);
    k("yyyy-10", 10);
    k("yyyy-15", 15);
    k("yyyy-20", 20)
  });

  let flag = true;

  function setNum() {
    $(document).on("scroll", function () {
      var windowHeight = $(window).height();
      var blockNum = $(".study__content"),
        height;
      if (blockNum.height() >= windowHeight) {
        height = blockNum.offset().top + windowHeight - 100;
      } else {
        height = blockNum.offset().top + blockNum.height();
      }

      if ($(document).scrollTop() + windowHeight >= height && flag === true) {
        $(".number").each(function () {
          var self = $(this);
          if (self[0].dataset.state === "true") {
            let count = 0;
            let num = self[0].dataset.num;
            const timer = setInterval(function () {
              if (count >= num) {
                clearInterval(timer);
                self[0].dataset.state = false;
                self[0].textContent = num;
              } else {
                count = Math.floor(count + (num / (1500 / 100)));
                self[0].textContent = count;
              }
            }, 100);
          }
        });
        flag = false;
      }
    });
  }

  function a() {
    e();
    g();
    d();
    c();
    b();
    h();
    setNum();
  }
  if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
      return setTimeout(a, 1000)
    }, {
      once: true
    })
  } else {
    a()
  }
}());