var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      timezoneClip = /[^-+\dA-Z]/g,
      pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = "0" + val;
        return val;
      };

    return function (date, mask, utc) {
      var dF = dateFormat;

      if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
        mask = date;
        date = undefined;
      }

      date = date ? new Date(date) : new Date;
      if (isNaN(date)) throw SyntaxError("invalid date");

      mask = String(dF.masks[mask] || mask || dF.masks["default"]);

      if (mask.slice(0, 4) === "UTC:") {
        mask = mask.slice(4);
        utc = true;
      }

      var _ = utc ? "getUTC" : "get",
        d = date[_ + "Date"](),
        D = date[_ + "Day"](),
        m = date[_ + "Month"](),
        y = date[_ + "FullYear"](),
        H = date[_ + "Hours"](),
        M = date[_ + "Minutes"](),
        s = date[_ + "Seconds"](),
        L = date[_ + "Milliseconds"](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
          d: d,
          dd: pad(d),
          ddd: dF.i18n.dayNames[D],
          dddd: dF.i18n.dayNames[D + 7],
          m: m + 1,
          mm: pad(m + 1),
          mmm: dF.i18n.monthNames[m],
          mmmm: dF.i18n.monthNames[m + 12],
          yy: String(y).slice(2),
          yyyy: y,
          h: H % 12 || 12,
          hh: pad(H % 12 || 12),
          H: H,
          HH: pad(H),
          M: M,
          MM: pad(M),
          s: s,
          ss: pad(s),
          l: pad(L, 3),
          L: pad(L > 99 ? Math.round(L / 10) : L),
          t: H < 12 ? "a" : "p",
          tt: H < 12 ? "am" : "pm",
          T: H < 12 ? "A" : "P",
          TT: H < 12 ? "AM" : "PM",
          Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
          o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
        };

      return mask.replace(token, function ($0) {
        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
      });
    };
  }();


  dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  };


  dateFormat.i18n = {
    dayNames: [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
  };

  Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
  };
  
  
  if (typeof adc === "undefined" || adc.constructor !== Object) var adc = {};
  if (!adc.date) adc.date = {
    selectors: {
      dataStart: document.querySelectorAll('[data-release]'),
      data: document.querySelectorAll('[data-date]'),
      year: document.querySelectorAll('[data-year]')
    },
    setting: {
      format: 'dd.mm.yyyy HH:MM',
      release: 10
    },
    help: function () {
      console.log('Поддерживаемые форматы:');
      console.log('d - день,              варианты записи: d - 1,     dd - 01,     ddd - Пон,     dddd - Понедельник;');
      console.log('m - месяц,             варианты записи: m - 1,     mm - 01,     mmm - Янв,     mmmm - Январь;');
      console.log('y - год,               варианты записи: yy - 21,   yyyy - 2021;');
    },
    random: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    init: function (obj) {
      var setting = this.setting;
      var i = 0;

      if (obj && obj.constructor === Object) {
        for (var key in setting) {
          if (setting.hasOwnProperty(key)) {
            if (obj[key]) setting[key] = obj[key];
          }
        }
      }

      this.setting.start = new Date().getTime() - (this.setting.release * 24 * 60 * 60 * 1000 + this.random(17642000, 43134000));

      if (this.selectors.dataStart.length) {
        for (i = 0; i < this.selectors.dataStart.length; i++) {
          this.selectors.dataStart[i].innerHTML = (new Date(this.setting.start)).format(this.setting.format);
        }
      }

      if (this.selectors.year.length) {
        for (i = 0; i < this.selectors.year.length; i++) {
          this.selectors.year[i].innerHTML = (new Date(this.setting.start)).format('yyyy');
        }
      }

      if (this.selectors.data.length) {
        var date = new Date().getTime();
        var difference = date - this.setting.start;
        var delay = new Date(this.setting.start);

        for (i = 0; i < this.selectors.data.length; i++) {
          var time = 0;
          if (i < 2 && this.selectors.data.length > 5) {
            time = this.random(5, 30) * 60000;
            difference -= time;
          } else if (difference > 330000000) {
            time = this.random(1000, 4000) * 60000;
            if (difference - time <= 90000000) {
              i--;
              time = 0;
            } else {
              difference -= time;
            }
          } else if (difference > 46800000) {
            time = this.random(100, 700) * 60000;
            if (difference - time <= 3600000) {
              i--;
              time = 0;
            } else {
              difference -= time;
            }
          } else {
            time = this.random(2, 30) * 60000;
            difference -= time;
          }

          if (time > 0) {
            delay = new Date(delay.getTime() + time);
            this.selectors.data[i].innerHTML = delay.format(this.setting.format);
          }
        }
      }
    }
  };