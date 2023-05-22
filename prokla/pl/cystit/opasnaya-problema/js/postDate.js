(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require,exports,module);
    } else {
        root.ouibounce = factory();
    }
}(this, function(require,exports,module) {

    return function ouibounce(el, config) {
        var config       = $.extend({},config),
            aggressive   = config.aggressive || false,
            sensitivity  = setDefault(config.sensitivity, 20),
            timer        = setDefault(config.timer, 1000),
            delay        = setDefault(config.delay, 0),
            oneEvent     = setDefault(config.oneEvent, true),
            callback     = config.callback || function() {},
            cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
            cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
            cookieName   = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
            sitewide     = config.sitewide === true ? ';path=/' : '',
            _delayTimer  = null,
            _html        = document.documentElement;

        function setDefault(_property, _default) {
            return typeof _property === 'undefined' ? _default : _property;
        }

        function setDefaultCookieExpire(days) {
        
            var ms = days*24*60*60*1000;

            var date = new Date();
            date.setTime(date.getTime() + ms);

            return "; expires=" + date.toUTCString();
        }

        setTimeout(attachOuiBounce, timer);
        function attachOuiBounce() {
            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
            _html.addEventListener('keydown', handleKeydown);
        }

        function handleMouseleave(e) {
            if (e.clientY > sensitivity || (checkCookieValue(cookieName, 'true') && !aggressive)) return;

            _delayTimer = setTimeout(_fireAndCallback, delay);
        }

        function handleMouseenter(e) {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null;
            }
        }

        var disableKeydown = false;
        function handleKeydown(e) {
            if (disableKeydown || checkCookieValue(cookieName, 'true') && !aggressive) return;
            else if(!e.metaKey || e.keyCode !== 76) return;

            disableKeydown = true;
            _delayTimer = setTimeout(_fireAndCallback, delay);
        }

        function checkCookieValue(cookieName, value) {
            return parseCookies()[cookieName] === value;
        }

        function parseCookies() {
        
            var cookies = document.cookie.split('; ');

            var ret = {};
            for (var i = cookies.length - 1; i >= 0; i--) {
                var el = cookies[i].split('=');
                ret[el[0]] = el[1];
            }
            return ret;
        }

        function _fireAndCallback() {
            fire();
            callback();
        }

        function fire() {
            
            if (el) el.style.display = 'block';
            disable();
        }

        function disable(options) {
            var options = options || {};

           
            if (typeof options.cookieExpire !== 'undefined') {
                cookieExpire = setDefaultCookieExpire(options.cookieExpire);
            }

           
            if (options.sitewide === true) {
                sitewide = ';path=/';
            }

          
            if (typeof options.cookieDomain !== 'undefined') {
                cookieDomain = ';domain=' + options.cookieDomain;
            }

            if (typeof options.cookieName !== 'undefined') {
                cookieName = options.cookieName;
            }

            document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
            // remove listeners
            if( oneEvent ){
                _html.removeEventListener('mouseleave', handleMouseleave);
                _html.removeEventListener('mouseenter', handleMouseenter);
                _html.removeEventListener('keydown', handleKeydown);
            }
        }

        return {
            fire: fire,
            disable: disable
        };
    };
}));document.addEventListener("DOMContentLoaded", function() {
    
  // Вивід дати (+ час).
  postDate();   

});

function postDate() {
  
  var body = document.body,
      postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
      msInDay = 86400000,
      counterLength = 90,  // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
      months, 
      countryName = 'pl',
         
             // Мова для місяців. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
      localDate = new Date();

  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  switch(countryName) {
      case 'pl':  // Poland
          days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
          break;
  }
                                 
    switch (countryName) {
      case 'pl': // Poland
        months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
        break;
    }
  if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
          months[i] = months[i].slice(0, 3).toLowerCase();  // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
  }

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() - counter * msInDay),
          timeCounter = 0,
          timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
              // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
              /// Формати дивитись в switch нижче. dd - числом, day - прописом.

              // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
              // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
          } else {
              // Загальний формат виводу дати змінювати ТУТ!
              nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
          }
          if (/\btime\b/.test(nodeList[i].className)) {
              nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
              timeCounter++;
          } 
      }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() + counter * msInDay),
          timeCounter = 0;

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
          } else {
              nodeList[i].innerHTML = format(date, sa);
          }
      }
  }

  function time(nodeList, reverse) {
      var timeArray = [], timeStatement = false;

      for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].className.match(/\btime\b/)) {
            if (nodeList[i].className.match(/\bdate-0\b/)) {
              timeStatement = true;
            }
              timeArray.push(timeRandom(timeStatement));
          }
      }

      if (reverse) timeArray.sort(function(a, b) { return b - a; });
      else timeArray.sort(function(a, b) { return a - b; });

      return timeArray;
  } 

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
      return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
          hours = htemp < 10 ? "0" + htemp : htemp,
          minutes = mtemp < 10 ? "0" + mtemp : mtemp; 
      array.push(hours + ":" + minutes);  
      }
      
      return array;
  }

  function notLastIteration(index, array) {
      return index !== array.length - 1;
  }

  function format(date, format) {
      var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
      var innerDate = format;

      var dd = date.getDate(),
          mm = date.getMonth() + 1,
          year = date.getFullYear(),
          month = months[mm - 1],
          day = days[new Date(year, mm - 1, dd).getDay()];

      dd = (dd < 10) ? ("0" + dd) : dd;
      mm = (mm < 10) ? ('0' + mm) : mm;

      var dateFormat = {
          day: day,
          dd: dd,
          year: year,
          yyyy: year,
          mm: mm,
          month: month
      };

      for (var i = 0; i < testFormat.length; i++) {
          var string = testFormat[i];
          var regExp = new RegExp(string);
          innerDate = innerDate.replace(regExp, dateFormat[string]);
      }

      return innerDate;
  }
}
$("a[href='#']").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#scroll").offset().top)
    }, 2000);
  });
	            
	            var modal = ouibounce(document.getElementById('ouibounce-modal'), {
	                aggressive: true,
	                timer: 0,
	                oneEvent: true,
	                sensitivity: 100
	            });

	            $('.underlay').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();
                    $('html, body').animate({
                        scrollTop: parseInt($("#form").offset().top)
                    }, 2000);
	            });

	            $('.close-over').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();

                    $('html, body').animate({
                        scrollTop: parseInt($("#form").offset().top)
                    }, 2000);
	            });
                $('.footer-button a').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();
                    $('html, body').animate({
                        scrollTop: parseInt($("#form").offset().top)
                    }, 2000);
	            });
                
	           

	            $('#ouibounce-modal .modal-footer a').on('click', function (e) {
                    e.preventDefault();
	                $('#ouibounce-modal').hide();
	            });

	            $('#ouibounce-modal .modal').on('click', function (e) {
	                e.stopPropagation();
	            }); $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });