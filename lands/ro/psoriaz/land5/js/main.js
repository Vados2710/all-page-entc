$(window).on("load", function () {
  let preload = $(".preload");
  preload.delay(2000).fadeOut("slow");
});

setTimeout(function () {
  $(".header__right").addClass("pseudo");
}, 1000);

("use strict");

var pop = document.querySelector(".ever-popup");

// setTimeout(initSelect, 1000);

// function initSelect() {
//   var inputSelect = document.querySelector(".country-select"),
//     customSelect = document.querySelectorAll(".custom-select"),
//     customOptions = document.querySelectorAll(".options");

//   var each = function each(arr, callback, thisArg) {
//     var i,
//       length = arr.length;

//     for (i = 0; i < length; i = i + 1) {
//       callback(arr[i], i, arr);
//     }
//   };

//   //set options to custom select

//   each(inputSelect.querySelectorAll("option"), function (e) {
//     if (e.selected) {
//       each(document.querySelectorAll(".selected"), function (el) {
//         el.classList.add(e.value);

//         el.innerHTML = '<span class="countryName">' + e.innerText + "</span>";
//       });
//     }
//   });

//   function setOptions(select, setFirstOption) {
//     each(select.querySelectorAll("option"), function (e) {
//       each(customOptions, function (el) {
//         var customOption = document.createElement("a"),
//           countryText = document.createElement("span");

//         customOption.classList.add("option", e.value);

//         customOption.classList.add(e.value);

//         customOption.setAttribute("href", "?&country_code=".concat(e.value));

//         customOption.setAttribute("data-value", e.value);

//         countryText.classList.add("option-text");

//         countryText.innerText = e.innerHTML;

//         customOption.appendChild(countryText);

//         el.appendChild(customOption);
//       });
//     });

//     setFirstOption();
//   }

//   function setFirstOption() {
//     var first;

//     each(customOptions, function (e) {
//       for (var i = 0; i < inputSelect.children.length; i++) {
//         if (inputSelect.children[i].hasAttribute("selected")) {
//           first = inputSelect.children[i];
//         }
//       }
//     });

//     for (var j = 0; j < customOptions.length; j++) {
//       for (var k = 0; k < customOptions[j].children.length; k++) {
//         if (
//           customOptions[j].children[k].getAttribute("data-value") ===
//           first.value
//         ) {
//           customOptions[j].insertBefore(
//             customOptions[j].children[k],
//             customOptions[j].children[0]
//           );
//         }
//       }
//     }
//   }

//   each(document.querySelectorAll(".form-wrap"), function (e) {
//     e.addEventListener("click", function (event) {
//       var t = event.target;

//       if (
//         t === this.querySelector(".countryName") ||
//         t === this.querySelector(".selected")
//       ) {
//         this.querySelector(".options").classList.toggle("opened");

//         this.querySelector(".selected").classList.toggle("disabled");
//       } else if (
//         this.querySelector(".options").classList.contains("opened") ||
//         this.querySelector(".selected").classList.contains("disabled")
//       ) {
//         this.querySelector(".options").classList.remove("opened");

//         this.querySelector(".selected").classList.remove("disabled");
//       }
//     });
//   });

//   setOptions(inputSelect, setFirstOption);

//   var head = document.querySelectorAll(".header");

//   each(head, function (e) {
//     var hoverText = document.createElement("span");

//     hoverText.classList.add("hover-text");

//     hoverText.innerHTML = "Priveşte cum se va schimba pielea";

//     e.appendChild(hoverText);
//   });
//   var handle = document.querySelectorAll(".beer-handle");

//   each(handle, function (e) {
//     var line = document.createElement("span"),
//       hoverText = document.createElement("span");

//     line.classList.add("line");

//     hoverText.classList.add("hover-text");

//     hoverText.innerHTML = "Priveşte cum se va schimba pielea";

//     e.appendChild(hoverText);

//     e.appendChild(line);
//   });
// }


$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 100,
    },
    1500
  );
});


$(document).ready(function () {

    $("#twenty").twentytwenty({
    no_overlay: true,
  });

  $("#twenty").addClass("makecha");

  $("#twenty1").twentytwenty({
    no_overlay: true,
  });

  $("#twenty1").addClass("makecha");
});


function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute(
      "src",
      "https://i.ytimg.com/vi/" + y.dataset.id + "/hqdefault.jpg"
    );
    i.setAttribute("alt", "video-preview");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function () {
      var a = document.createElement("iframe");
      a.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.id +
          "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
      );
      a.setAttribute("allow", "autoplay");
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}
youtubeShowVideo();

function main () {
  document
  .querySelector(".video-control")
  .addEventListener("click", function (event) {
    document.querySelector(".poster").style.display = "none";
    this.style.display = "none";
    document.querySelector("iframe").src += "?autoplay=1&amp;rel=0";
  });

  
  $(".graph__button").on("click", function () {
    $(".graph__button").removeClass("active");
    $(this).addClass("active");
    $(this)
      .parent()
      .removeClass("tab1 tab2 tab3")
      .addClass("tab" + $(this)[0].getAttribute("data-tab"));
  });

  var canvas = document.getElementById("graph__canvas");
  var ctx = canvas.getContext("2d");
  var w = 900;
  var h = 500;
  canvas.width = w;
  canvas.height = h;

  function draw() {
    ctx.strokeStyle = "#f3f3f3";
    for (var i = 0; i <= 1500; i += 25) {
      ctx.beginPath();
      ctx.moveTo(0, -900 + i);
      ctx.lineTo(1000, 1000 - 900 + i);
      ctx.stroke();
      ctx.closePath();
    }
  }
  draw();


  $(".sliderr").slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    prevArrow: $(".review_prev"),
    nextArrow: $(".review_next"),
  });
  $(".sliderr").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      if (window.innerWidth > 1239) {
        var thumbN = $(".sliderr__thumb-next img");
        var thumbP = $(".sliderr__thumb-prev img");
        var newAtt = thumbN[0].getAttribute("src");
        var x = newAtt.split("");
        var xx = newAtt.split("");
        if (currentSlide === 9) {
          x[x.length - 5] = 0;
          xx[xx.length - 5] = currentSlide - 1;
        } else if (currentSlide === 0) {
          x[x.length - 5] = currentSlide + 1;
          xx[xx.length - 5] = 9;
        } else {
          x[x.length - 5] = currentSlide + 1;
          xx[xx.length - 5] = currentSlide - 1;
        }
        var y = x.join("");
        var yy = xx.join("");
        thumbN[0].setAttribute("src", y);
        thumbP[0].setAttribute("src", yy);
      }
    }
  );


  var allSectXY = [];
  var currentS = 1;
  // var initSect = function () {
  //   allSectXY = [0];
  //   var blocks = $(
  //     ".ways, .how, .effect, .info, .review, .use, .order, .header2"
  //   );
  //   for (var i = 0; i < blocks.length; i++) {
  //     var xx = $(blocks[i]).offset().top;
  //     allSectXY.push(xx);
  //   }
  // };

  // $(window).resize(function () {
  //   initSect();
  // });
  // initSect();


  $(".sideR__dots_dot").on("click", function () {
    var goTo = $(this)[0].getAttribute("data-b");
    $("html, body").animate(
      {
        scrollTop: allSectXY[goTo - 1],
      },
      1000
    );
  });
  $(window).scroll(function () {
    var winScrollTop = window.pageYOffset;
    for (var i = 0; i < allSectXY.length; i++) {
      if (i === allSectXY.length - 1 && winScrollTop > allSectXY[i] - 100) {
        $(".sideR__number").text("0" + allSectXY.length);
        currentS = allSectXY.length;
        $(".sideR")
          .removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9")
          .addClass("b_" + currentS);
      }
      if (
        winScrollTop > allSectXY[i] - 100 &&
        winScrollTop < allSectXY[i + 1] &&
        currentS !== i + 1
      ) {
        $(".sideR__number").text("0" + (i + 1));
        currentS = i + 1;
        $(".sideR")
          .removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9")
          .addClass("b_" + currentS);
      }
    }
  });
}


if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  main();
};


const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}