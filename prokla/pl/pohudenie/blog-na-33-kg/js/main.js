var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
  var elemY = placeY[i];
  elemY.innerHTML = year;
}

$(".add-comment-form").submit(function (e) {
  e.preventDefault();

  $(".add-comment-form").trigger("reset");
  alert("Dziękuję bardzo za opinię!");
});
