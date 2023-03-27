

            function timerSettings() {
                var time = localStorage.getItem('time'),
                    different = document.querySelector(".timer-different"),
                    hours = parseInt(time / 3600, 10),
                    minutes = parseInt((time - hours * 3600 ) / 60, 10),
                    seconds = parseInt(time % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : "" + minutes;
                seconds = seconds < 10 ? "0" + seconds : "" + seconds;
                hours = hours < 10 ? "0" + hours : "" + hours;

                var hoursHTML = document.getElementsByClassName("hours");
                var minutesHTML = document.getElementsByClassName("minutes");
                var secondsHTML = document.getElementsByClassName("seconds");

                if (--time < 0) {
                    localStorage.removeItem("ever-timer");
                    return;
                }
                if (different) {
                    seconds = seconds.split("");
                    minutes = minutes.split("");
                    hours = hours.split("");

                    diFilling(hoursHTML, hours);
                    diFilling(minutesHTML, minutes);
                    diFilling(secondsHTML, seconds);
                } else {
                    filling(hoursHTML, hours);
                    filling(minutesHTML, minutes);
                    filling(secondsHTML, seconds);
                }

                localStorage.setItem("time", time);
                setTimeout(timerSettings, 1000);
            }

            function filling(obj, value) {
                for (var i = 0; i < obj.length; i++) {
                    obj[i].innerHTML = value;
                }
            }

            function diFilling(obj, value) {
                for (var i = 0; i < obj.length; i++) {
                    obj[i].innerHTML = value[i % 2];
                }
            }