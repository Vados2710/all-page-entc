(function ($, document) {
  var pluses = /\+/g;

  function raw(s) {
      return s;
  }

  function decoded(s) {
      return decodeURIComponent(s.replace(pluses, ' '));
  }

  $.cookie = function (key, value, options) {
      // key and at least value given, set cookie...
      if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
          options = $.extend({}, $.cookie.defaults, options);

          if (value == null) {
              options.expires = -1;
          }

          if (typeof options.expires === 'number') {
              var days = options.expires, t = options.expires = new Date();
              t.setDate(t.getDate() + days);
          }

          value = String(value);

          return (document.cookie = [
              encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
              options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
              options.path ? '; path=' + options.path : '',
              options.domain ? '; domain=' + options.domain : '',
              options.secure ? '; secure' : ''
          ].join(''));
      }

      // key and possibly options given, get cookie...
      options = value || $.cookie.defaults || {};
      var decode = options.raw ? raw : decoded;
      var cookies = document.cookie.split('; ');
      for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
          if (decode(parts.shift()) === key) {
              return decode(parts.join('='));
          }
      }
      return null;
  };

  $.cookie.defaults = {};

})(jQuery, document);

(function ($) {
  var rStartMiliseconds = ($.cookie('randDate')) ? $.cookie('randDate') : new Date().getTime() - (29 * 24 * 60 * 60 * 1000);

  if (!$.cookie('randDate')) $.cookie('randDate', new Date().getTime() - (29 * 24 * 60 * 60 * 1000), {expires: 1});

  var rStart = new Date(parseInt(rStartMiliseconds));
  var startMonth = rStart.getMonth() + 1;
  if (startMonth < 10) startMonth = '0' + startMonth;

  var methods = {
      init: function (options) {
          return this;
      },
      rstart: function () {
          return this.each(function (i) {
              $(this).html(rStart.getDate() + '/' + startMonth + '/' + rStart.getFullYear());
          });
      },
      rdate: function () {
          return this.each(function (x) {
              var z = (x >= 16) ? 16 : x;
              var nextDate = new Date(rStart.getTime() + (z * (12 + z) * (60 + x) * 60 * (1000 + x)));
              if (x >= 31) nextDate = new Date(parseInt(rStartMiliseconds) + 2494600000 + x * 150000);
              ndate = nextDate.getDate();
              nmonth = nextDate.getMonth() + 1;
              nyear = nextDate.getFullYear();
              nhour = nextDate.getHours();
              if (ndate < 10) ndate = '0' + ndate;
              if (nmonth < 10) nmonth = '0' + nmonth;
              if (nhour < 10) nhour = '0' + nhour;
              nminutes = nextDate.getMinutes();
              if (nminutes < 10) nminutes = '0' + nminutes;
              nsec = nextDate.getSeconds();
              if (nsec < 10) nsec = '0' + nsec;
              $(this).html(ndate + '.' + nmonth + '.' + nyear + ' - ' + nhour + ':' + nminutes);
          });
      },
      ryear: function () {
          return this.each(function (i) {
              $(this).html(new Date().getFullYear());
          });
      }
  };

  $.fn.randDate = function (method) {
      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
          return methods.init.apply(this, arguments);
      } else {
          $.error('Method ' + method + ' does not exist for jQuery.randDate');
      }
  };
})(jQuery);

$(function () {
  var obj = $('.rstart, .startdate');
  if (obj.length) {
      obj.randDate('rstart');
  }

  obj = $('.rdate, .ypdate');
  if (obj.length) {
      obj.randDate('rdate');
  }

  obj = $('.ryear, .nowyear');
  if (obj.length) {
      obj.randDate('ryear');
  }
});

months_localized = {
  'ru': ['Г‘ВЏГђВЅГђВІГђВ°Г‘в‚¬Г‘ВЏ', 'Г‘вЂћГђВµГђВІГ‘в‚¬ГђВ°ГђВ»Г‘ВЏ', 'ГђВјГђВ°Г‘в‚¬Г‘вЂљГђВ°', 'ГђВ°ГђВїГ‘в‚¬ГђВµГђВ»Г‘ВЏ', 'ГђВјГђВ°Г‘ВЏ', 'ГђВёГ‘ЕЅГђВЅГ‘ВЏ', 'ГђВёГ‘ЕЅГђВ»Г‘ВЏ', 'ГђВ°ГђВІГђВіГ‘Ж’Г‘ВЃГ‘вЂљГђВ°', 'Г‘ВЃГђВµГђВЅГ‘вЂљГ‘ВЏГђВ±Г‘в‚¬Г‘ВЏ', 'ГђВѕГђВєГ‘вЂљГ‘ВЏГђВ±Г‘в‚¬Г‘ВЏ', 'ГђВЅГђВѕГ‘ВЏГђВ±Г‘в‚¬Г‘ВЏ', 'ГђВґГђВµГђВєГђВ°ГђВ±Г‘в‚¬Г‘ВЏ'],
  'fr': ['janvier', 'fГѓВ©vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aoГѓВ»t', 'septembre', 'octobre', 'novembre', 'dГѓВ©cembre'],
  'bg': ['ГђВЇГђВЅГ‘Ж’ГђВ°Г‘в‚¬ГђВё', 'ГђВ¤ГђВµГђВІГ‘в‚¬Г‘Ж’ГђВ°Г‘в‚¬ГђВё', 'ГђЕ“ГђВ°Г‘в‚¬Г‘вЂљ', 'ГђВђГђВїГ‘в‚¬ГђВёГђВ»', 'ГђЕ“ГђВ°ГђВ№', 'ГђВ®ГђВЅГђВё', 'ГђВ®ГђВ»ГђВё', 'ГђВђГђВІГђВіГ‘Ж’Г‘ВЃГ‘вЂљ', 'ГђВЎГђВµГђВїГ‘вЂљГђВµГђВјГђВІГ‘в‚¬ГђВё', 'ГђЕѕГђВєГ‘вЂљГђВѕГђВјГђВІГ‘в‚¬ГђВё', 'ГђВќГђВѕГђВµГђВјГђВІГ‘в‚¬ГђВё', 'ГђвЂќГђВµГђВєГђВµГђВјГђВІГ‘в‚¬ГђВё'],
  'nl': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  'pt': ['Janeiro', 'Fevereiro', 'MarГѓВ§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  'de': ['Januar', 'Februar', 'MГѓВ¤rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  'tr': ['Ocak', 'Г…Еѕubat', 'Mart', 'Nisan', 'MayГ„В±s', 'Haziran', 'Temmuz', 'AГ„Еёustos', 'EylГѓВјl', 'Ekim', 'KasГ„В±m', 'AralГ„В±k'],
  'it': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  'hu': ['JanuГѓВЎr', 'FebruГѓВЎr', 'MГѓВЎrcius', 'ГѓВЃprilis', 'MГѓВЎjus', 'JГѓВєnius', 'JГѓВєlius', 'Augusztus', 'Szeptember', 'OktГѓВіber', 'November', 'December'],
  'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'id': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  'ms': ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  'hi': ['Г В¤Е“Г В¤ВЁГ В¤ВµГ В¤В°', 'Г В¤В«Г В¤В°Г В¤В¬Г В¤В°', 'Г В¤В®Г В¤ВѕГ В¤В°Г ВҐВЌГ В¤ЕЎ', 'Г В¤вЂ¦Г В¤ВЄГ ВҐВЌГ В¤В°Г ВҐЛ†Г В¤ВІ', 'Г В¤В®Г В¤Л†', 'Г В¤Е“Г ВҐвЂљГ В¤ВЁ', 'Г В¤Е“Г ВҐВЃГ В¤ВІГ В¤ВѕГ В¤Л†', 'Г В¤вЂ¦Г В¤вЂ”Г В¤ВёГ ВҐВЌГ В¤В¤', 'Г В¤ВёГ В¤ВїГ В¤В¤Г В¤В®Г ВҐВЌГ В¤В¬Г В¤В°', 'Г В¤вЂ¦Г В¤вЂўГ ВҐВЌГ В¤ЕёГ ВҐвЂљГ В¤В¬Г В¤В°', 'Г В¤ВЁГ В¤ВµГ В¤вЂљГ В¤В¬Г В¤В°', 'Г В¤В¦Г В¤ВїГ В¤ВёГ В¤вЂљГ В¤В¬Г В¤В°'],
  'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  'ro': ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  'pl': ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzeГ…вЂєnia', 'paГ…Вєdziernika', 'listopada', 'grudnia'],
  'sr': ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  'cs': ['ledna', 'ГѓВєnora', 'bГ…в„ўezna', 'dubna', 'kvГ„вЂєtna', 'Г„ВЌervna', 'Г„ВЌervence', 'srpna', 'zГѓВЎГ…в„ўГѓВ­', 'Г…в„ўГѓВ­jna', 'listopadu', 'prosince'],
  'sk': ['januГѓВЎra', 'februГѓВЎra', 'marca', 'aprГѓВ­la', 'mГѓВЎja', 'jГѓВєna', 'jГѓВєla', 'augusta', 'septembra', 'oktГѓВіbra', 'novembra', 'decembra'],
  'el': ['ГЋв„ўГЋВ±ГЋВЅГЋВїГЏвЂ¦ГЋВ¬ГЏВЃГЋВ№ГЋВїГЏвЂљ', 'ГЋВ¦ГЋВµГЋВІГЏВЃГЋВїГЏвЂ¦ГЋВ¬ГЏВЃГЋВ№ГЋВїГЏвЂљ', 'ГЋЕ“ГЋВ¬ГЏВЃГЏвЂћГЋВ№ГЋВїГЏвЂљ', 'ГЋвЂГЏв‚¬ГЏВЃГЋВЇГЋВ»ГЋВ№ГЋВїГЏвЂљ', 'ГЋЕ“ГЋВ¬ГЋВ№ГЋВїГЏвЂљ', 'ГЋв„ўГЋВїГЏВЌГЋВЅГЋВ№ГЋВїГЏвЂљ', 'ГЋв„ўГЋВїГЏВЌГЋВ»ГЋВ№ГЋВїГЏвЂљ', 'ГЋвЂГЏВЌГЋВіГЋВїГЏвЂ¦ГЏЖ’ГЏвЂћГЋВїГЏвЂљ', 'ГЋВЈГЋВµГЏв‚¬ГЏвЂћГЋВ­ГЋВјГЋВІГЏВЃГЋВ№ГЋВїГЏвЂљ', 'ГЋЕёГЋВєГЏвЂћГЏЕЅГЋВІГЏВЃГЋВ№ГЋВїГЏвЂљ', 'ГЋВќГЋВїГЋВ­ГЋВјГЋВІГЏВЃГЋВ№ГЋВїГЏвЂљ', 'ГЋвЂќГЋВµГЋВєГЋВ­ГЋВјГЋВІГЏВЃГЋВ№ГЋВїГЏвЂљ'],
  'th': ['Г ВёВЎГ ВёВЃГ ВёВЈГ ВёВІГ ВёвЂћГ ВёВЎ', 'Г ВёВЃГ ВёВёГ ВёВЎГ Вё Г ВёВІГ ВёЕѕГ ВёВ±Г Вёв„ўГ ВёЛњГ В№Е’', 'Г ВёВЎГ ВёВµГ Вёв„ўГ ВёВІГ ВёвЂћГ ВёВЎ', 'Г В№в‚¬Г ВёВЎГ ВёВ©Г ВёВІГ ВёВўГ Вёв„ў', 'Г ВёЕѕГ ВёВ¤Г ВёВ©Г Вё Г ВёВІГ ВёвЂћГ ВёВЎ', 'Г ВёВЎГ ВёВґГ ВёвЂ“Г ВёВёГ Вёв„ўГ ВёВІГ ВёВўГ Вёв„ў', 'Г ВёВЃГ ВёВЈГ ВёВЃГ ВёЕЅГ ВёВІГ ВёвЂћГ ВёВЎ', 'Г ВёВЄГ ВёВґГ ВёвЂЎГ ВёВ«Г ВёВІГ ВёвЂћГ ВёВЎ', 'Г ВёВЃГ ВёВ±Г Вёв„ўГ ВёВўГ ВёВІГ ВёВўГ Вёв„ў', 'Г ВёвЂўГ ВёВёГ ВёВҐГ ВёВІГ ВёвЂћГ ВёВЎ', 'Г ВёЕѕГ ВёВ¤Г ВёВЁГ ВёЛ†Г ВёВґГ ВёВЃГ ВёВІГ ВёВўГ Вёв„ў', 'Г ВёЛњГ ВёВ±Г Вёв„ўГ ВёВ§Г ВёВІГ ВёвЂћГ ВёВЎ'],
  'vi': ['ThГѓВЎng MГЎВ»в„ўt', 'ThГѓВЎng Hai', 'ThГѓВЎng Ba', 'ThГѓВЎng BГЎВ»вЂn', 'ThГѓВЎng NГ„Ж’m', 'ThГѓВЎng SГѓВЎu', 'ThГѓВЎng BГЎВєВЈy', 'ThГѓВЎng TГѓВЎm'],
  'fil': ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  'ar': ['Г™Е Г™вЂ ГВ§Г™Е ГВ±', 'Г™ВЃГВЁГВ±ГВ§Г™Е ГВ±', 'Г™вЂ¦ГВ§ГВ±ГВі', 'ГВЈГВЁГВ±Г™Е Г™вЂћ', 'Г™вЂ¦ГВ§Г™Е Г™Л†', 'Г™Е Г™Л†Г™вЂ Г™Е Г™Л†', 'Г™Е Г™Л†Г™вЂћГ™Е Г™Л†', 'ГВЈГВєГВіГВ·ГВі', 'ГВіГВЁГВЄГ™вЂ¦ГВЁГВ±', 'ГВЈГ™Ж’ГВЄГ™Л†ГВЁГВ±', 'Г™вЂ Г™Л†Г™ВЃГ™вЂ¦ГВЁГВ±', 'ГВЇГ™Е ГВіГ™вЂ¦ГВЁГВ±'],
  'ur': ['ГВ¬Г™вЂ Г™Л†ГВ±Г›Е’', 'Г™ВЃГВ±Г™Л†ГВ±Г›Е’', 'Г™вЂ¦ГВ§ГВ±ГљвЂ ', 'ГВ§Г™ВѕГВ±Г›Е’Г™вЂћ', 'Г™вЂ¦ГВ¦Г›Е’', 'ГВ¬Г™Л†Г™вЂ ', 'ГВ¬Г™Л†Г™вЂћГВ§ГВ¦Г›Е’', 'ГВ§ГљВЇГВіГВЄ', 'ГВіГВЄГ™вЂ¦ГВЁГВ±', 'ГВ§ГљВ©ГВЄГ™Л†ГВЁГВ±', 'Г™вЂ Г™Л†Г™вЂ¦ГВЁГВ±', 'ГВЇГВіГ™вЂ¦ГВЁГВ±'],
  'nb': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nn': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'no': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nb_NO': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'km': ['ГЎЕѕЛњГЎЕѕв‚¬ГЎЕѕЕЎГЎЕѕВ¶', 'ГЎЕѕв‚¬ГЎЕѕВ»ГЎЕѕЛњГЎЕёвЂ™ГЎЕѕвЂ”ГЎЕёЛ†', 'ГЎЕѕЛњГЎЕѕВ·ГЎЕѕвЂњГЎЕѕВ¶', 'ГЎЕѕЛњГЎЕёВЃГЎЕѕЕёГЎЕѕВ¶', 'ГЎЕѕВ§ГЎЕѕЕёГЎЕѕвЂ”ГЎЕѕВ¶', 'ГЎЕѕЛњГЎЕѕВ·ГЎЕѕВђГЎЕѕВ»ГЎЕѕвЂњГЎЕѕВ¶', 'ГЎЕѕв‚¬ГЎЕѕв‚¬ГЎЕёвЂ™ГЎЕѕв‚¬ГЎЕѕЕ ГЎЕѕВ¶', 'ГЎЕѕЕёГЎЕѕВёГЎЕѕ ГЎЕѕВ¶', 'ГЎЕѕв‚¬ГЎЕѕвЂ°ГЎЕёвЂ™ГЎЕѕвЂ°ГЎЕѕВ¶', 'ГЎЕѕВЏГЎЕѕВ»ГЎЕѕвЂєГЎЕѕВ¶', 'Гўв‚¬ЛњГЎЕѕЕ“ГЎЕѕВ·ГЎЕѕвЂ¦ГЎЕёвЂ™ГЎЕѕвЂ ГЎЕѕВ·ГЎЕѕв‚¬ГЎЕѕВ¶', 'ГЎЕѕвЂ™ГЎЕёвЂ™ГЎЕѕвЂњГЎЕѕВј'],
  'zh': ['Г¤Вёв‚¬Г¦Е“Л†', 'Г¤ВєЕ’Г¦Е“Л†', 'Г¤ВёвЂ°Г¦Е“Л†', 'ГҐвЂєвЂєГ¦Е“Л†', 'Г¤ВєвЂќГ¦Е“Л†', 'ГҐвЂ¦В­Г¦Е“Л†', 'Г¤ВёЖ’Г¦Е“Л†', 'ГҐвЂ¦В«Г¦Е“Л†', 'Г¤В№ВќГ¦Е“Л†', 'ГҐВЌВЃГ¦Е“Л†', 'ГҐВЌВЃГ¤Вёв‚¬Г¦Е“Л†', 'ГҐВЌВЃГ¤ВєЕ’Г¦Е“Л†']
};

days_localized = {
  'ru': ['ГђВІГђВѕГ‘ВЃГђВєГ‘в‚¬ГђВµГ‘ВЃГђВµГђВЅГ‘Е’ГђВµ', 'ГђВїГђВѕГђВЅГђВµГђВґГђВµГђВ»Г‘Е’ГђВЅГђВёГђВє', 'ГђВІГ‘вЂљГђВѕГ‘в‚¬ГђВЅГђВёГђВє', 'Г‘ВЃГ‘в‚¬ГђВµГђВґГђВ°', 'Г‘вЂЎГђВµГ‘вЂљГђВІГђВµГ‘в‚¬ГђВі', 'ГђВїГ‘ВЏГ‘вЂљГђВЅГђВёГ‘вЂ ГђВ°', 'Г‘ВЃГ‘Ж’ГђВ±ГђВ±ГђВѕГ‘вЂљГђВ°'],
  'fr': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  'bg': ['ГђВќГђВµГђВґГђВµГђВ»Г‘ВЏ', 'ГђЕёГђВѕГђВЅГђВµГђВґГђВµГђВ»ГђВЅГђВёГђВє', 'ГђвЂ™Г‘вЂљГђВѕГ‘в‚¬ГђВЅГђВёГђВє', 'ГђВЎГ‘в‚¬Г‘ВЏГђВґГђВ°', 'ГђВ§ГђВµГ‘вЂљГђВІГ‘Е Г‘в‚¬Г‘вЂљГ‘Е ГђВє', 'ГђЕёГђВµГ‘вЂљГ‘Е ГђВє', 'ГђВЎГ‘Е ГђВ±ГђВѕГ‘вЂљГђВ°'],
  'nl': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  'pt': ['Domingo', 'Segunda Feira', 'TerГѓВ§a Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'SГѓВЎbado'],
  'de': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  'tr': ['Pazar', 'Pazartesi', 'SalГ„В±', 'ГѓвЂЎarГ…Еёamba', 'PerГ…Еёembe', 'Cuma', 'Cumartesi'],
  'it': ['Domenica', 'LunedГѓВ¬', 'MartedГѓВ¬', 'MercoledГѓВ¬', 'GiovedГѓВ¬', 'VenerdГѓВ¬', 'Sabato'],
  'hu': ['VasГѓВЎrnap', 'HГѓВ©tfГ…вЂ', 'Kedd', 'Szerda', 'CsГѓВјtГѓВ¶rtГѓВ¶k', 'PГѓВ©ntek', 'Szombat'],
  'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'hi': ['Г В¤ВёГ ВҐвЂ№Г В¤В®Г В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤В®Г В¤вЂљГ В¤вЂ”Г В¤ВІГ В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤В¬Г ВҐВЃГ В¤В§Г В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤вЂ”Г ВҐВЃГ В¤В°Г ВҐвЂљГ В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤В¶Г ВҐВЃГ В¤вЂўГ ВҐВЌГ В¤В°Г В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤В¶Г В¤ВЁГ В¤ВїГ В¤ВµГ В¤ВѕГ В¤В°', 'Г В¤В°Г В¤ВµГ В¤ВїГ В¤ВµГ В¤ВѕГ В¤В°'],
  'ms': ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  'id': ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  'es': ['Domingo', 'Lunes', 'Martes', 'MiГѓВ©rcoles', 'Jueves', 'Viernes', 'SГѓВЎbado'],
  'ro': ['DuminicГ„Ж’', 'Luni', 'MarГ…ВЈi', 'Miercuri', 'Joi', 'Vineri', 'SГѓВўmbГ„Ж’tГ„Ж’'],
  'pl': ['niedziela', 'poniedziaГ…вЂљek', 'wtorek', 'Г…вЂєroda', 'czwartek', 'piГ„вЂ¦tek', 'sobota'],
  'sr': ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Г„Е’etvrtak', 'Petak', 'Subota'],
  'cs': ['nedГ„вЂєle', 'pondГ„вЂєlГѓВ­', 'ГѓВєterГѓВЅ', 'stГ…в„ўeda', 'Г„ВЌtvrtek', 'pГѓВЎtek', 'sobota'],
  'sk': ['nedeГ„Вѕa', 'pondelok', 'utorok', 'streda', 'Г…ВЎtvrtok', 'piatok', 'sobota'],
  'el': ['ГЋЕЎГЏвЂ¦ГЏВЃГЋВ№ГЋВ±ГЋВєГЋВ®', 'ГЋвЂќГЋВµГЏвЂ¦ГЏвЂћГЋВ­ГЏВЃГЋВ±', 'ГЋВ¤ГЏВЃГЋВЇГЏвЂћГЋВ·', 'ГЋВ¤ГЋВµГЏвЂћГЋВ¬ГЏВЃГЏвЂћГЋВ·', 'ГЋ ГЋВ­ГЋВјГЏв‚¬ГЏвЂћГЋВ·', 'ГЋ ГЋВ±ГЏВЃГЋВ±ГЏЖ’ГЋВєГЋВµГЏвЂ¦ГЋВ®', 'ГЋВЈГЋВ¬ГЋВІГЋВІГЋВ±ГЏвЂћГЋВї'],
  'th': ['Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёВ­Г ВёВІГ ВёвЂ”Г ВёВґГ ВёвЂўГ ВёВўГ В№Е’', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёЛ†Г ВёВ±Г Вёв„ўГ ВёвЂ”Г ВёВЈГ В№Е’', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёВ­Г ВёВ±Г ВёвЂЎГ ВёвЂћГ ВёВІГ ВёВЈ', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёЕѕГ ВёВёГ ВёЛњ', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёЕѕГ ВёВ¤Г ВёВ«Г ВёВ±Г ВёВЄГ ВёЕЎГ ВёвЂќГ ВёВµ', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ ВёВЁГ ВёВёГ ВёВЃГ ВёВЈГ В№Е’', 'Г ВёВ§Г ВёВ±Г Вёв„ўГ В№в‚¬Г ВёВЄГ ВёВІГ ВёВЈГ В№Е’'],
  'vi': ['ChГЎВ»В§ NhГЎВєВ­t', 'ThГЎВ»В© Hai', 'ThГЎВ»В© Ba', 'ThГЎВ»В© TГ†В°', 'ThГЎВ»В© NГ„Ж’m', 'ThГЎВ»В© SГѓВЎu', 'ThГЎВ»В© BГЎВєВЈy'],
  'ar': ['ГВ§Г™вЂћГВ§ГВ­ГВЇ', 'ГВ§Г™вЂћГВ§ГВ«Г™вЂ Г™Е Г™вЂ ', 'ГВ§Г™вЂћГВ«Г™вЂћГВ§ГВ«ГВ§ГВЎ', 'ГВ§Г™вЂћГВ§ГВ±ГВЁГВ№ГВ§ГВЎ', 'ГВ§Г™вЂћГВ®Г™вЂ¦Г™Е ГВі', 'ГВ§Г™вЂћГВ¬Г™вЂ¦ГВ№ГВ©', 'ГВ§Г™вЂћГВіГВЁГВЄ'],
  'fil': ['Linggo', 'Lunes', 'Martes', 'Miyerkoles', 'Huebes', 'Biyernes', 'Sabado'],
  'ur': ['ГВ§ГВЄГ™Л†ГВ§ГВ±', 'Г™ВѕГ›Е’ГВ±', 'Г™вЂ¦Г™вЂ ГљВЇГ™вЂћ', 'ГВЁГВЇГљВѕ', 'ГВ¬Г™вЂ¦ГВ№ГВ±ГВ§ГВЄ', 'ГВ¬Г™вЂ¦ГВ№Г›ВЃ', 'Г›ВЃГ™ВЃГВЄГ›ВЃ'],
  'nb': ['SГѓВёndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'LГѓВёrdag'],
  'nn': ['SГѓВёndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'LГѓВёrdag'],
  'no': ['SГѓВёndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'LГѓВёrdag'],
  'nb_NO': ['SГѓВёndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'LГѓВёrdag'],
  'km': ['ГЎЕѕВўГЎЕѕВ¶ГЎЕѕвЂГЎЕѕВ·ГЎЕѕВЏГЎЕёвЂ™ГЎЕѕв„ў', 'ГЎЕѕвЂ¦ГЎЕёВђГЎЕѕвЂњГЎЕёвЂ™ГЎЕѕвЂ™', 'ГЎЕѕВўГЎЕѕвЂћГЎЕёвЂ™ГЎЕѕвЂљГЎЕѕВ¶ГЎЕѕЕЎГЎЕёВЌ', 'ГЎЕѕвЂ“ГЎЕѕВ»ГЎЕѕвЂ™', 'ГЎЕѕвЂ“ГЎЕёвЂ™ГЎЕѕЕЎГЎЕѕ ГЎЕѕЕёГЎЕёвЂ™ГЎЕѕвЂќГЎЕѕВ·ГЎЕёВЌ', 'ГЎЕѕЕёГЎЕѕВ»ГЎЕѕв‚¬ГЎЕёвЂ™ГЎЕѕЕЎ', 'ГЎЕѕЕёГЎЕёвЂ¦ГЎЕѕЕЎГЎЕёВЌ'],
  'zh': ['Г¦ЛњЕёГ¦Е“ЕёГҐВ¤В©', 'Г¦ЛњЕёГ¦Е“ЕёГ¤Вёв‚¬', 'Г¦ЛњЕёГ¦Е“ЕёГ¤ВєЕ’', 'Г¦ЛњЕёГ¦Е“ЕёГ¤ВёвЂ°', 'Г¦ЛњЕёГ¦Е“ЕёГҐвЂєвЂє', 'Г¦ЛњЕёГ¦Е“ЕёГ¤ВєвЂќ', 'Г¦ЛњЕёГ¦Е“ЕёГҐвЂ¦В­']
};

function dtimes(d) {
  //g is the number of the day [1..7]
  var g = 5;

  if (g == 1 || g == 4 || g == 6) {

      var now = new Date();
      now.setDate(now.getDate() + d + 1);
      document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
  } else if (g == 2 || g == 5 || g == 7) {
      var now = new Date();
      now.setDate(now.getDate() + d + 1 - 1);
      document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
  } else if (g == 3) {
      var now = new Date();
      now.setDate(now.getDate() + d + 1 - 2);
      document.write((now.getDate()) + " " + months_localized[lang_locale][now.getMonth()]);
  }
}

function dtime(d) {
  var now = new Date();
  now.setDate(now.getDate() + d + 1);
  document.write(days_localized[lang_locale][now.getDay()] + " " + (now.getDate()) + ", " + " " + months_localized[lang_locale][now.getMonth()] + " " + now.getFullYear());
}

function dtime_nums(d, like_eu) {
  var now = new Date();
  now.setDate(now.getDate() + d + 1);

  var dayNum = '';
  if (now.getDate() < 10) {
      dayNum = '0';
  }
  dayNum += now.getDate();

  var monthNum = '';
  if (now.getMonth() + 1 < 10) {
      monthNum = '0';
  }
  monthNum += now.getMonth() + 1;

  if (like_eu === true) {
      document.write(dayNum + "." + monthNum + "." + (now.getFullYear()));
  } else {
      document.write(monthNum + "." + dayNum + "." + (now.getFullYear()));
  }

}