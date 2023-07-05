if (typeof adc !== 'object') var adc = {};
if (!adc.timer) adc.timer = {
  selectors: {
    box: 'timer',          // !класс! блока в который будет инициализирован таймер
    item: 'item',          // составляющая класса для элементов таймера
    number: 'number',      // составляющая класса для чисел
    delimiter: 'delimiter' // составляющая класса для разделителя
  },
  replace: function (box, start) {
    var _t = this.timer[box],
      num = start !== 'C' ? +_t.format[start] < 10 ? '0' + _t.format[start] : _t.format[start] + '' : _t.format[start];

    for (var i = num.length; i > 0;) {
      i--;
      if (_t.box.find('[data-adc-number=' + start + (num.length - i) + ']').text() !== num[i]) {
        _t.box.find('[data-adc-number=' + start + (num.length - i) + ']').html(num[i]);
      }
    }
  },
  counting: function (box, init) {
    var _t = this.timer[box],
      stop = false,
      sC = [],
      sD = [],
      time = Math.floor((_t.settings.time - (new Date())));

    if (time < 0) {
      time = 0;
      stop = true;
    }

    if (_t.format.C) {
      var num = time % 1000;
      _t.format.C = (num < 10 ? '00' + num : num < 100 ? '0' + num : num + '').slice(0, _t.settings.ms);
      if (_t.settings.type === 'string') {
        sC.push(_t.format.C);
      } else {
        if (!init) this.replace(box, 'C');
      }
    }

    time = Math.floor(time / 1000);


    if (_t.format.D) {
      _t.format.D = Math.floor(time / 86400) + '';
      if (!_t.settings.limit) time = time % 86400;

      if (_t.settings.type === 'string') {
        sD.push(_t.format.D);
      } else {
        if (!init) this.replace(box, 'D');
      }
    }

    if (_t.format.H) {
      if (_t.settings.limit) {
        time = time % 86400;
        _t.format.H = Math.floor(time / 3600) + '';
      } else {
        _t.format.H = Math.floor(time / 3600) + '';
        time = time % 3600;
      }

      if (_t.settings.type === 'string') {
        sD.push(+_t.format.H < 10 ? '0' + _t.format.H : _t.format.H);
      } else {
        if (!init) this.replace(box, 'H');
      }
    }

    if (_t.format.M) {
      if (_t.settings.limit) {
        time = time % 3600;
        _t.format.M = Math.floor(time / 60) + '';
      } else {
        _t.format.M = Math.floor(time / 60) + '';
        time = time % 60;
      }

      if (_t.settings.type === 'string') {
        sD.push(+_t.format.M < 10 ? '0' + _t.format.M : _t.format.M);
      } else {
        if (!init) this.replace(box, 'M');
      }
    }

    if (_t.format.S) {
      if (_t.settings.limit) {
        time = time % 60;
      }
      _t.format.S = time + '';

      if (_t.settings.type === 'string') {
        sD.push(+_t.format.S < 10 ? '0' + _t.format.S : _t.format.S);
      } else {
        if (!init) this.replace(box, 'S');
      }
    }

    if (_t.settings.type === 'string') {
      _t.box.find('[data-adc-timer="full"]').html(sD.join(_t.settings.delimiter) + (sC.length ? _t.settings.delimiterC + sC[0] : ''));
    }

    //console.log(time);

    return stop;
  },
  timeout: function (box) {
    var _t = this.timer[box],
      th = this,
      ms = +'1000'.slice(0, _t.format.C && _t.settings.ms > 0 && _t.settings.ms < 3 ? 4 - _t.format.C.length : 4);

    clearTimeout(_t.timeout);

    _t.timeout = setTimeout(function () {
      if (!th.counting(box)) {
        th.timeout(box);
      } else {
        _t.settings.callback();
      }
    }, ms);
  },
  genTimer: function (box) {
    var th = this,
      _t = th.timer[box],
      _s = th.selectors,
      temp = '',
      format = _t.settings.format.toUpperCase().split(''),
      formul = {D: 1, H: 1, M: 1, S: 1, C: 1};
    _t.format = {};

    for (var i = 0; i < format.length; i++) {
      if (format[i] in formul && (format[i] !== 'C' || format[i] === 'C' && _t.settings.ms > 0 && _t.settings.ms < 3)) _t.format[format[i]] = true;
    }

    function itemBox(c1, c2, count, id) {
      var temp = '<span class="' + c1 + '" data-adc-timer="' + id + '">';
      if (count < _t.format[id].length) count = _t.format[id].length;
      for (var i = 0; i < count; i++) {
        temp += '<span class="' + c2 + '" data-adc-number="' + id + (count - i) + '">0</span>';
      }
      return temp + '</span>';
    }

    function delimBox(cls, count, delimiter, id) {
      if (count > 0 && delimiter !== '' && (id !== 'C' || id === 'C' && _t.settings.ms > 0 && _t.settings.ms < 3)) {
        return _t.settings.type !== 'string' ? '<span class="' + cls + '">' + delimiter + '</span>' : delimiter;
      }
      return '';
    }

    setTimeout(function () {
      if (_t.settings.type === 'string') temp += '<span class="' + _t.settings.class + '__' + _s.item + '" data-adc-timer="full">';

      th.counting(box, 1);

      var count = 0;
      for (var key in _t.format) {
        if (_t.format.hasOwnProperty(key) && _t.format[key]) {
          var delimiter = key !== 'C' ? _t.settings.delimiter : _t.settings.delimiterC;
          if (_t.settings.type === 'string') {
            temp += delimBox('', count, delimiter);
            temp += _t.format[key];
          } else if (_t.settings.type === 'normal') {
            var item = _t.settings.class + '__' + _s.item,
              num = _t.settings.class + '__' + _s.number,
              delim = _t.settings.class + '__' + _s.delimiter;
            temp += delimBox(delim, count, delimiter, key) + itemBox(item, num, key !== 'C' ? 2 : 0, key);
          }
          count++;
        }
      }

      if (_t.settings.type === 'string') temp += '</span>';

      _t.box.html(temp);
      th.counting(box);
      th.timeout(box);
    });
  },
  genSettings: function (obj, box) {
    var temp = {},
      settings = {
        class: box,
        callback: function () {}, //фунция пользователя выполняемая по заверщению таймера
        type: 'normal', // тип таймера, есть 3 варианта: normal, string, animate //animate временно не работает
        time: 300,       // время таймера в секундах
        //restart: false, // автоматический перезапуск таймера при достижении нуля //временно не работает
        //start: 30,      // время таймера после его автоматического перезапуска, работает только есть параметр restart = true //временно не работает
        ms: 0,          // отображение милисекунд (работает только в типах normal и string), имеет 3 варианта: 0 - не показывать, 1 - показывать милисекунды в десятках, 2 - показывать милисекунды в сотых
        format: 'HMS',  // D - дни, H - часы, M - минуты, S - секунды, C - милимекунды
        delimiter: ':', // разделитель чисел
        delimiterC: '.',// разделитель секунд от милисекунд
        limit: true//,    // лимитирование значения, false - нет лимита, т.е. если число более временого порога они все будут отображены, true - лимит включен, т.е. более временого порога не будет показано (часов макс 24, мин и сек макс 60)
        //direction: '-'  // направление отсчета: "-" (минус) таймер уменьшается, "+" (плюс) таймер увеличивается //временно не работает
      };


    if (typeof obj === 'object' && !obj.length) {
      for (var key in settings) {
        if (settings.hasOwnProperty(key)) {
          temp[key] = key in obj ? obj[key] : settings[key];
        }
      }
    } else {
      temp = settings;
    }

    temp.time = (new Date()).getTime() + temp.time * 1000;

    return temp;
  },
  init: function (obj) {
    var _t = this,
      box = typeof obj === 'object' && !obj.length && 'class' in obj ? obj.class : _t.selectors.box;
    if (!_t.timer) _t.timer = {};

    _t.timer[box] = {box: $('.' + box)};
    _t.timer[box].settings = _t.genSettings(obj, box);
    if (_t.timer[box].timeout) clearTimeout(_t.timer[box].timeout);
    _t.genTimer(box);
  }
};

$(function () {
   adc.timer.init({time: 14*60+60, format: 'HMS',type: 'normal'});
});