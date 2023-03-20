$(function () {
  var t = document.querySelector(".wheel-img"),
    e = document.querySelector(".spin-result-wrapper");
  $(".cursor-text").click(function () {
    $(".cursor-text").css("pointer-events", "none"),
      t.classList.contains("rotated")
        ? (e.style.display = "block")
        : (t.classList.add("super-rotation"),
          setTimeout(function () {
            e.style.display = "block";
          }, 8e3),
          setTimeout(function () {
            $(".spin-wrapper").slideUp(), $(".order-block").slideDown();
          }, 1e4),
          t.classList.add("rotated"));
  })
});
