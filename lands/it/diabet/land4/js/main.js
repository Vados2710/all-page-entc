(function () {
  "use strict";
  const months = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['domenica', 'lunedi', 'martedì', 'mercoledì', 'giovedi', 'venerdì', 'sabato'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['inverno', 'primavera', 'estate', 'autunno'];

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
      const testFormat = ["dd", "mm", "yyyy", "monthFull"],
        dateFormat = {
          dd: _day,
          mm: addZero(_month),
          yyyy: _year,
          monthFull: getMonthName(_month, monthsName, false),
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
  var scrollSmooth = function () {
      $(document).on("click", 'a[href^="#"]', function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
        }, 500)
      })
    },
    header = function () {
      $(".header__burger").click(function () {
        $(".header__content").toggleClass("active");
        $(this).toggleClass("active")
      });
      $(".nav__link, .header__close").click(function () {
        $(".header__content").removeClass("active");
        $(".header__burger").removeClass("active")
      });
      $(".header__button").click(function () {
        $(".header__content").removeClass("active");
        $(".header__burger").removeClass("active")
      })
    },
    promo = function () {
      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand)
      }

      function onlineUsers() {
        setInterval(function () {
          for (var usersBlock = document.querySelectorAll(".form-online__count"), count = randomInteger(120, 180), i = 0; i < usersBlock.length; i++) {
            usersBlock[i].textContent = count
          }
        }, 1e4)
      }
      onlineUsers()
    },
    reviews = function () {
      // show review form
      var reviewBlock = document.querySelector(".reviews"),
        reviewForm = reviewBlock.querySelector(".reviews__feedback"),
        showReviewBtn = reviewBlock.querySelector(".reviews__button");

      function showReviewForm() {
        reviewForm.classList.toggle("show-form")
      }
      showReviewBtn.addEventListener("click", showReviewForm); // show modal review form
      var sendReveiwBtn = reviewBlock.querySelector(".feedback__button"),
        reviewModal = reviewBlock.querySelector(".feedback__modal"),
        closeReviewModal = reviewModal.querySelector(".modal__close"),
        inputName = reviewBlock.querySelector(".feedback__input--name"),
        inputAge = reviewBlock.querySelector(".feedback__input--age"),
        textarea = reviewBlock.querySelector("textarea");

      function showReviewModal(e) {
        if ("" != inputName.value & inputAge.value >= 18 & "" != textarea.value) {
          reviewModal.classList.add("modal--active");
          reviewModal.style.cssText = "display: block;";
          e.preventDefault()
        } else {
          return
        }
      }

      function hideReviewModal() {
        reviewModal.classList.remove("modal--active");
        reviewModal.style.cssText = "display: none;";
        reviewForm.classList.remove("show-form");
        inputName.value = "";
        inputAge.value = "";
        textarea.value = ""
      }
      sendReveiwBtn.addEventListener("click", showReviewModal);
      closeReviewModal.addEventListener("click", hideReviewModal); // star form review
      //  Stars on mouse over
      var starE = $(".feedback__star"),
        stars = document.querySelectorAll(".feedback__star");
      starE.on("mouseover", function (e) {
        for (var onStar = parseInt($(e.target).data("value"), 10), i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass("hover")
        }
        for (var _i = 0; _i < onStar; _i++) {
          $(stars[_i]).addClass("hover")
        }
      }).on("mouseout", function () {
        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass("hover")
        }
      }); // Stars on click
      starE.on("click", function (e) {
        for (var onStar = parseInt($(e.target).data("value"), 10), i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass("selected")
        }
        for (var _i2 = 0; _i2 < onStar; _i2++) {
          $(stars[_i2]).addClass("selected")
        }
      }); // like dislike 
      $(".social__img").on("click", function (e) {
        var target = $(e.target),
          dislikeImg = target.parent().next().children().first(),
          likeImg = target.parent().prev().children().first(),
          dislikeCount = target.parent().next().children().last(),
          likeCount = target.parent().prev().children().last();
        if (target.hasClass("like")) {
          target.toggleClass("used");
          target.toggleClass("like-active");
          dislikeImg.removeClass("dislike-active");
          if (target.hasClass("like-active")) {
            target.next().text(Number(target.next().text()) + 1)
          } else {
            target.next().text(Number(target.next().text()) - 1)
          }
          if (dislikeImg.hasClass("used")) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass("used")
          }
        } else {
          target.toggleClass("used");
          target.toggleClass("dislike-active");
          likeImg.removeClass("like-active");
          if (target.hasClass("dislike-active")) {
            target.next().text(Number(target.next().text()) + 1)
          } else {
            target.next().text(Number(target.next().text()) - 1)
          }
          if (likeImg.hasClass("used")) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass("used")
          }
        }
      }); // accordion
      for (var accordionBtn = reviewBlock.querySelectorAll(".comments__more"), i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener("click", function () {
          this.classList.toggle("arrow-top");
          var content = this.previousElementSibling;
          if (content.classList.contains("show-hide-text")) {
            content.classList.remove("show-hide-text");
            this.textContent = "Visualizzare la recensione completa"
          } else {
            content.classList.add("show-hide-text");
            this.textContent = "Nascondi"
          }
        })
      }
    };
  header();
  scrollSmooth();

  function main() {
    promo();
    reviews()
  }
  if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
      return setTimeout(main, 1e3)
    }, {
      once: true,
      passive: true
    })
  } else {
    main()
  }
})();

window.addEventListener("load", function() {
  const popup = document.querySelector('.ever-popup');
  const html = document.querySelector('html');
  
  document.addEventListener('click', function() {
    if(popup && popup.classList.contains('show')) {
      html.classList.add('lock');
    } else {
      html.classList.remove('lock');
    }
  })
});

document.addEventListener('mouseleave', function () {
  const popup = document.querySelector('.ever-popup');
  const html = document.querySelector('html');
  
  if(popup && popup.classList.contains('show')) {
    html.classList.add('lock');
  } else {
    html.classList.remove('lock');
  }
});