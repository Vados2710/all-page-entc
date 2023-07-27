var sec = 60,
  min = 59,
  h = 0;

function refreshTimer() {
  -1 == --sec ? (sec = 59, min -= 1) : min = min, sec <= 9 && (sec = "0" + sec), -1 == min && (min = 59, h -= 1), time_s = sec, time_h = h, time_m = min <= 9 ? "0" + min : min, $("#countdownTimer").text(time_m + " : " + time_s), inter = setTimeout("refreshTimer()", 1e3)
}
refreshTimer();

