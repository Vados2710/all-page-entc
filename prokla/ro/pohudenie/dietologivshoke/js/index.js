function startTimer(e, t) {
  var r,
    a,
    o = e;
  setInterval(function () {
    (r = parseInt(o / 60, 10)),
      (a = parseInt(o % 60, 10)),
      (r = r < 10 ? "0" + r : r),
      (a = a < 10 ? "0" + a : a),
      (t.textContent = r + ":" + a),
      --o < 0 && (o = e);
  }, 1e3);
}
function postDate(e, t, r) {
  var i,
    e = e || "dd.mm.yyyy",
    t = t || "ge",
    r = r || !1,
    a = new Date();
  switch (t) {
    case "ge":
      i = [
        "იანვარი",
        "თებერვალი",
        "მარტი",
        "აპრილი",
        "მაისი",
        "ივნისი",
        "ივლისი",
        "აგვისტო",
        "სექტემბერი",
        "ოქტომბერი",
        "ნოემბერი",
        "დეკემბერი",
      ];
      break;
    case "it":
      i = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ];
      break;
    case "es":
      i = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      break;
    case "fr":
      i = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      break;
    case "pt":
      i = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      break;
    case "de":
      i = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ];
      break;
    case "bg":
      i = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
      ];
      break;
    case "pl":
      i = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
      ];
      break;
    case "ro":
      i = [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie",
      ];
      break;
    case "hu":
      i = [
        "Január",
        "Február",
        "Március",
        "Április",
        "Május",
        "Június",
        "Július",
        "Augusztus",
        "Szeptember",
        "Október",
        "November",
        "December",
      ];
      break;
    case "gr":
    case "cy":
      i = [
        "Ιανουάριος",
        "Φεβρουάριος",
        "Μάρτιος",
        "Απρίλιος",
        "Μάιος",
        "Ιούνιος",
        "Ιούλιος",
        "Αύγουστος",
        "Σεπτέμβριος",
        "Οκτώβριος",
        "Νοέμβριος",
        "Δεκέμβριος",
      ];
      break;
    case "ru":
      i = [
        "Января",
        "Февраля",
        "Марта",
        "Апрель",
        "Май",
        "Июнь",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
      ];
  }
  if (r)
    for (var o = 0; o < i.length; o++) i[o] = i[o].slice(0, 3).toLowerCase();
  for (var n = 0; n < 90; n++)
    for (
      var u = "date-" + n,
        s = document.getElementsByClassName(u),
        c = new Date(a.getTime() - 864e5 * n),
        m = 0,
        d = (function (e) {
          for (var t = [], r = 0; r < e.length; r++) {
            var a = Math.floor(e[r] / 60),
              o = e[r] % 60;
            t.push(
              (a = a < 10 ? "0" + a : a) + ":" + (o = o < 10 ? "0" + o : o)
            );
          }
          return t;
        })(
          (function (e) {
            for (var t, r = [], a = !1, o = 0; o < e.length; o++)
              e[o].className.match(/\btime\b/) &&
                (e[o].className.match(/\bdate-0\b/) && (a = !0),
                r.push(
                  (t = a)
                    ? ((t = 60 * (t = new Date()).getHours() + t.getMinutes()),
                      Math.round(0 + Math.random() * t))
                    : Math.round(0 + 1440 * Math.random())
                ));
            return (
              r.sort(function (e, t) {
                return e - t;
              }),
              r
            );
          })(s)
        ),
        o = 0;
      o < s.length;
      o++
    )
      (l = s[o].dataset).format
        ? (s[o].innerHTML = b(c, l.format))
        : (s[o].innerHTML = b(c, e)),
        /\btime\b/.test(s[o].className) &&
          ((s[o].innerHTML += " " + d[m]), m++);
  for (n = 0; n < 90; n++)
    for (
      var l,
        u = "date" + n,
        s = document.getElementsByClassName(u),
        c = new Date(a.getTime() + 864e5 * n),
        m = 0,
        o = 0;
      o < s.length;
      o++
    )
      (l = s[o].dataset).format
        ? (s[o].innerHTML = b(c, l.format))
        : (s[o].innerHTML = b(c));
  function b(e, t) {
    var r = "",
      a = e.getDate(),
      o = e.getFullYear(),
      n = e.getMonth() + 1;
    switch (t || !0) {
      case "tom":
        return (r += a + 1), (r += ".") + (n < 10 ? "0" + n : n);
      case "mm.dd.yyyy":
        return (
          (r += n < 10 ? "0" + n : n),
          (r += "."),
          (r += a < 10 ? "0" + a : a) + "." + o
        );
      case "dd month yyyy":
        return (
          (r += a < 10 ? "0" + a : a), (r += " "), (r += i[n - 1]) + " " + o
        );
      case "dd month":
        return (r += a < 10 ? "0" + a : a), (r += " ") + i[n - 1];
      case "month":
        return r + i[n - 1].toLowerCase();
      case "day dd, month yyyy":
        return (
          (r += [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
          ][new Date(o, n - 1, a).getDay()]),
          (r += " "),
          (r += a < 10 ? "0" + a : a),
          (r += " "),
          (r += i[n - 1]) + " " + o
        );
      case "dd/mm/yyyy":
        return (
          (r += a < 10 ? "0" + a : a),
          (r += "/"),
          (r += n < 10 ? "0" + n : n) + "/" + o
        );
      case "dd-mm-yyyy":
        return (
          (r += a < 10 ? "0" + a : a),
          (r += "-"),
          (r += n < 10 ? "0" + n : n) + "-" + o
        );
      case "yyyy.mm.dd":
        return (
          (r += o),
          (r += "."),
          (r += n < 10 ? "0" + n : n),
          (r += ".") + (a < 10 ? "0" + a : a)
        );
      case "month dd, yyyy":
        return (
          (r += i[n - 1]),
          (r += " "),
          (r += a < 10 ? "0" + a : a),
          (r += ", ") + o
        );
      case "dd month, yyyy":
        return (
          (r += a < 10 ? "0" + a : a),
          (r += " "),
          (r += i[n - 1]),
          (r += ", ") + o
        );
      default:
        return (
          (r += a < 10 ? "0" + a : a),
          (r += "."),
          (r += n < 10 ? "0" + n : n) + "." + o
        );
    }
  }
}

  