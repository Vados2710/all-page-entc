"use strict";

(function () {
  var btnList = document.querySelectorAll('a');
  var anchor = document.querySelector('.anchor');

  function findBtn(i) {
    btnList[i].addEventListener('click', function (e) {
      e.preventDefault();
      ScrollToResolver(anchor);
    });
  }

  for (var i = 0; i < btnList.length; i++) {
    findBtn(i);
  }

  function ScrollToResolver() {
    var anchorPosition = anchor.getBoundingClientRect().top + pageYOffset;
    var animationTime = 600;
    var framesCount = 200;
    var scrollBy = anchorPosition / framesCount;
    var scroller = setInterval(function () {
      var elem = anchor.getBoundingClientRect().top + pageYOffset;
      var win = window.pageYOffset + window.innerHeight;

      if (scrollBy < elem - win) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, elem);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  }
})();
