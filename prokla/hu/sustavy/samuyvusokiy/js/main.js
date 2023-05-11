var day = new Date().toLocaleDateString();
var place = document.getElementsByClassName("rnow");
for (let i = 0; i < place.length; i++) {
  var elem = place[i];
  elem.innerHTML = day;
}

var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
  var elemY = placeY[i];
  elemY.innerHTML = year;
}