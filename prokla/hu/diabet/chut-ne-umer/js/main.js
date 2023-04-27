$(document).ready(function () {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 10,
      },
      500
    );
  });
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth()+1;
  var year = now.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  var div = document.getElementsByClassName("date-0");

  for (var i = 0; i < div.length; i++) {
    var elem = div[i];
    elem.innerHTML = day + "." + month + "." + year;
  }

  $(".js-btn").click(function (e) {
    e.preventDefault();

    var _this = $(this);

    var altText = _this.data("text");

    var currText = _this.text();

    var _ref = [currText, altText];
    altText = _ref[0];
    currText = _ref[1];

    _this.data("text", altText);

    _this.text(currText);

    $(".content-hide").toggleClass("show");
  });
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
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}

youtubeShowVideo();
