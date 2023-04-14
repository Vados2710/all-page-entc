

var countDownTime = 10800;
      function countDownTimer() {
          var hours = parseInt( countDownTime / 3600 ) % 24;
          var minutes = parseInt( countDownTime / 60 ) % 60;
          var seconds = countDownTime % 60;

          var h1 = (hours < 10 ? "0" + hours : hours); 
          var m2 = (minutes < 10 ? "0" + minutes : minutes);
          var s3 = (seconds  < 10 ? "0" + seconds : seconds);

          document.getElementById("h").innerHTML = h1;
          document.getElementById("m").innerHTML = m2;
          document.getElementById("s").innerHTML = s3;

          document.getElementById("hr1").innerHTML = h1;
          document.getElementById("ms2").innerHTML = m2;
          document.getElementById("sd3").innerHTML = s3;

          document.getElementById("houer").innerHTML = h1;
          document.getElementById("min").innerHTML = m2;
          document.getElementById("sec").innerHTML = s3;

          document.getElementById("houer1").innerHTML = h1;
          document.getElementById("min2").innerHTML = m2;
          document.getElementById("sec3").innerHTML = s3;
          
          if(countDownTime < 0) {
              clearInterval(countDownTime);
              document.getElementById("count").innerHTML = "countdown's over!";
              document.getElementById("count2").innerHTML = "countdown's over!";
              document.getElementById("count3").innerHTML = "countdown's over!";
              document.getElementById("count4").innerHTML = "countdown's over!";}

          countDownTime = countDownTime - 1;
          setTimeout(function(){ countDownTimer() }, 1000);
          
      }
countDownTimer();
 