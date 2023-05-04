// $(document).on("click", "a", function (event) {
//   event.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: $("#ordertop").offset().top,
//     },
//     1000
//   );
// });

var boxImages = document.querySelectorAll(".box__images");

for (var i = 0; i < boxImages.length; i++) {
  boxImages[i].addEventListener("click", function () {
    this.classList.contains("show")
      ? this.classList.remove("show")
      : this.classList.add("show");
  });
}
