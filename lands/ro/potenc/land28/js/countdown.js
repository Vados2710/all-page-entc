var sec = 00;
var min = 15;
var hour = 00;

function refresh() {
  sec--;
  if (sec == -01) {
    sec = 59;
    min = min - 1;
  } else {
    min = min;
  }
  if (sec <= 9) {
    sec = "0" + sec;
  }
  if (min == -01) {
    min = 59;
    hour = hour - 1;
  } else {
    hour = hour;
  }

  if (document.getElementById) {
    hour1.innerHTML = (hour <= 9 ? "0" + hour : hour);
    min1.innerHTML = (min <= 9 ? "0" + min : min);
    sec1.innerHTML = sec;
  }

  inter = setTimeout("refresh()", 1000);
  if (hour == '00' && min == '00' && sec == '00') {
    sec = "00";
    clearInterval(inter);
  }
}
