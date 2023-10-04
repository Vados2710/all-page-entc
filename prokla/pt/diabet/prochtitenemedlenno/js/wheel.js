const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','verão','outono'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

function closePopup() {
    $(".close-popup, .btn-popup").click(function (a) {
      a.preventDefault();
      $(".overlay").fadeOut()
    })
  }
  closePopup();
  
  
  function countDown(class_) {
    let timer = document.querySelector(class_);
    if (localStorage.getItem("sec" + class_) && localStorage.getItem(
      "min" + class_
    ))
      var a = localStorage.getItem("min" + class_),
        b = localStorage.getItem("sec" + class_);
    var d = setInterval(function () {
      0 <= parseInt(a) && -1 !== parseInt(b) && (
        0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
        timer.innerText = (
          10 > a
            ? "0" + a
            : a
        ) + ":" + (
          10 > b
            ? "0" + b
            : b
        ),
        0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
        b--,
        localStorage.setItem(
          "sec" + class_,
          b
        ),
        localStorage.setItem("min" + class_, a)
      )
    }, 1E3)
  }
  
  // Wheel
  var resultWrapper = document.querySelector('.overlay');
  var wheel = document.querySelector('.prize-wheel');
  var cursorText = document.querySelector('.wheel__cursor-text');
  var hand = document.querySelector(".hand-hidden");
  var oldPrice = document.querySelector('.old-price');
  var discount = document.querySelector('.discount');
  
  $('.wheel__cursor, .btn-wheel').click(function () {
    timerForm();
    if (!wheel.classList.contains('rotated')) {
      wheel.classList.add('spin');
      hand.style.display = "none";
      setTimeout(function () {
        resultWrapper.style.display = "block";
        cursorText.innerHTML = "- 50%";
        startConfetti();
      }, 8000);
      wheel.classList.add('rotated');
      $(".new-price").slideUp();
      $(".discount").slideUp();
    }
  
  });
  
  $(".btn--submit").click(function () {
    resultWrapper.style.display = "none";
  
    $(".wheel__content-inner").slideUp(),
      $(".form").slideDown(),
      $(".bottom-teaser .sale").addClass("shown"),
      $(".form").addClass('shown__');

      startCounter()
  
    setTimeout(function () {
      $(".discount").slideDown();
      discount.classList.add('blink');
    }, 2000);
  
    setInterval(function () {
  
      setTimeout(function () {
        oldPrice.classList.add('strike');
      }, 2000);
  
    }, 2000);
  
    setInterval(function () {
      $(".new-price").slideDown();
    }, 5000);
  
  
  });
  
  // Counter
  
  var flag = 0;
  function startCounter() {
  
    if (flag == 0) {
      let packWrap = document.querySelector(".loader__element");
  
      setTimeout(function () {
        let countPack = document.querySelector(".count"),
          loaderLine = document.querySelector(".loader__element"),
          defaultNum = 18;
        perc = 40;
  
        var num = 0;
  
        function getRandomPack() {
  
          if (num < 2) {
  
            defaultNum = defaultNum - 1;
            loaderLine.style.width = perc + '%';
            countPack.innerHTML = defaultNum;
            perc = perc - 10;
  
            setTimeout(opacitylow, 0);
            setTimeout(opacityhigh, 400);
  
          }
          else if (3 < num < 6 && defaultNum != 6) {
  
            defaultNum = defaultNum - 1;
            countPack.innerHTML = defaultNum;
            loaderLine.style.width = perc + '%';
            perc = perc - 2;
  
            setTimeout(opacitylow, 0);
            setTimeout(opacityhigh, 400);
  
          }
          num++;
        }
        function opacitylow() {
          packWrap.style.opacity = "0.3";
        }
        function opacityhigh() {
          packWrap.style.opacity = "1";
        }
        (function loop() {
          const interval = [6000, 8000, 12000];
          var rand = Math.floor(Math.random() * interval.length);
          let randomIntervalNum = interval[rand];
  
          setTimeout(function () {
            getRandomPack();
            loop();
  
          }, randomIntervalNum);
        })();
      }, 1000);
  
      flag++;
    }
  }
  
  
  function timerForm() {
    var time = 600;
    var intr;
  
    function start_timer() {
      intr = setInterval(tick, 1000);
    }
  
    start_timer()
  
    function tick() {
      time = time - 1;
      var mins = Math.floor(time / 60);
      var secs = time - mins * 60;
      if (mins === 0 && secs === 0) {
        clearInterval(intr);
      }
      secs = secs >= 10 ? secs : "0" + secs;
      $("#min").html("0" + mins);
      $("#sec").html(secs);
    }
  }
  
  // Confetti
  function startConfetti() {
  
    (function () {
      // globals
      var canvas;
      var ctx;
      var W;
      var H;
      var mp = 150; //max particles
      var particles = [];
      var angle = 0;
      var tiltAngle = 0;
      var confettiActive = true;
      var animationComplete = true;
      var deactivationTimerHandler;
      var reactivationTimerHandler;
      var animationHandler;
  
      // objects
  
      var particleColors = {
        colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
        colorIndex: 0,
        colorIncrementer: 0,
        colorThreshold: 10,
        getColor: function () {
          if (this.colorIncrementer >= 10) {
            this.colorIncrementer = 0;
            this.colorIndex++;
            if (this.colorIndex >= this.colorOptions.length) {
              this.colorIndex = 0;
            }
          }
          this.colorIncrementer++;
          return this.colorOptions[this.colorIndex];
        }
      }
  
      function confettiParticle(color) {
        this.x = Math.random() * W; // x-coordinate
        this.y = (Math.random() * H) - H; //y-coordinate
        this.r = RandomFromTo(10, 30); //radius;
        this.d = (Math.random() * mp) + 10; //density;
        this.color = color;
        this.tilt = Math.floor(Math.random() * 10) - 10;
        this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
        this.tiltAngle = 0;
  
        this.draw = function () {
          ctx.beginPath();
          ctx.lineWidth = this.r / 2;
          ctx.strokeStyle = this.color;
          ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
          ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
          return ctx.stroke();
        }
      }
  
      $(document).ready(function () {
        SetGlobals();
        InitializeButton();
        InitializeConfetti();
  
        $(window).resize(function () {
          W = window.innerWidth;
          H = window.innerHeight;
          canvas.width = W;
          canvas.height = H;
        });
  
      });
  
      function InitializeButton() {
        $('#stopButton').click(DeactivateConfetti);
        $('#startButton').click(RestartConfetti);
      }
  
      function SetGlobals() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
      } 
  
      function InitializeConfetti() {
        particles = [];
        animationComplete = false;
        for (var i = 0; i < mp; i++) {
          var particleColor = particleColors.getColor();
          particles.push(new confettiParticle(particleColor));
        }
        StartConfetti();
      }
  
      function Draw() {
        ctx.clearRect(0, 0, W, H);
        var results = [];
        for (var i = 0; i < mp; i++) {
          (function (j) {
            results.push(particles[j].draw());
          })(i);
        }
        Update();
  
        return results;
      }
  
      function RandomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
  
  
      function Update() {
        var remainingFlakes = 0;
        var particle;
        angle += 0.01;
        tiltAngle += 0.1;
  
        for (var i = 0; i < mp; i++) {
          particle = particles[i];
          if (animationComplete) return;
  
          if (!confettiActive && particle.y < -15) {
            particle.y = H + 100;
            continue;
          }
  
          stepParticle(particle, i);
  
          if (particle.y <= H) {
            remainingFlakes++;
          }
          CheckForReposition(particle, i);
        }
  
        if (remainingFlakes === 0) {
          StopConfetti();
        }
      }
  
      function CheckForReposition(particle, index) {
        if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
          if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
          {
            repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
          } else {
            if (Math.sin(angle) > 0) {
              //Enter from the left
              repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            } else {
              //Enter from the right
              repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
            }
          }
        }
      }
      function stepParticle(particle, particleIndex) {
        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
        particle.x += Math.sin(angle);
        particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
      }
  
      function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
        particle.x = xCoordinate;
        particle.y = yCoordinate;
        particle.tilt = tilt;
      }
  
      function StartConfetti() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        (function animloop() {
          if (animationComplete) return null;
          animationHandler = requestAnimFrame(animloop);
          return Draw();
        })();
      }
  
      function ClearTimers() {
        clearTimeout(reactivationTimerHandler);
        clearTimeout(animationHandler);
      }
  
      function DeactivateConfetti() {
        confettiActive = false;
        ClearTimers();
      }
  
      function StopConfetti() {
        animationComplete = true;
        if (ctx == undefined) return;
        ctx.clearRect(0, 0, W, H);
      }
  
      function RestartConfetti() {
        ClearTimers();
        StopConfetti();
        reactivationTimerHandler = setTimeout(function () {
          confettiActive = true;
          animationComplete = false;
          InitializeConfetti();
        }, 100);
  
      }
  
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
      })();
    })();
  }

  var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.05;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}