if (document.body.classList.contains("ev-date")) {
  function Datee() {
    var e,
      t = 864e5,
      r = new Date();
    e = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "Nopember",
      "Desember",
    ];
    for (var n = 0; n < 90; n++) {
      var a = "date-" + n,
        o = document.getElementsByClassName(a),
        s = new Date(r.getTime() - n * t),
        u = 0;
      m = i((m = c(o)));
      for (var y = 0; y < o.length; y++) {
        (d = o[y].dataset).format
          ? (o[y].innerHTML = f(s, d.format))
          : (o[y].innerHTML = f(s)),
          /\btime\b/.test(o[y].className) &&
            ((o[y].innerHTML += " " + m[u]), u++);
      }
    }
    for (n = 0; n < 90; n++) {
      var m;
      (a = "date" + n),
        (o = document.getElementsByClassName(a)),
        (s = new Date(r.getTime() + n * t)),
        (u = 0);
      m = i((m = c(o)));
      for (y = 0; y < o.length; y++) {
        var d;
        (d = o[y].dataset).format
          ? (o[y].innerHTML = f(s, d.format))
          : (o[y].innerHTML = f(s));
      }
    }
    function c(e, t) {
      for (var r = [], n = 0; n < e.length; n++)
        e[n].className.match(/\btime\b/) &&
          r.push(Math.round(0 + 1440 * Math.random()));
      return (
        t
          ? r.sort(function (e, t) {
              return t - e;
            })
          : r.sort(function (e, t) {
              return e - t;
            }),
        r
      );
    }
    function i(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var n = Math.floor(e[r] / 60),
          a = e[r] % 60,
          o = n < 10 ? "0" + n : n,
          s = a < 10 ? "0" + a : a;
        t.push(o + ":" + s);
      }
      return t;
    }
    function f(t, r) {
      var n = "",
        a = t.getDate(),
        o = t.getFullYear(),
        s = t.getMonth() + 1;
      switch (r || !0) {
        case "yyyy":
          return (n += "" + o);
        case "yyyy-1":
          return (n += "" + o - 1);
        case "yyyy-2":
          return (n += "" + o - 2);
        case "mm.dd.yyyy":
          return (
            (n += s < 10 ? "0" + s : s),
            (n += "."),
            (n += a < 10 ? "0" + a : a),
            (n += "." + o)
          );
        case "month":
          return (n += e[s - 1].toLowerCase());
        case "dd":
          return (n += a < 10 ? "0" + a : a);
        case "dd month":
          return (
            (n += a < 10 ? "0" + a : a),
            (n += " "),
            (n += e[s - 1].toLowerCase())
          );
        case "dd month yyyy":
          return (
            (n += a < 10 ? "0" + a : a),
            (n += " "),
            (n += e[s - 1].toLowerCase()),
            (n += " " + o)
          );
        case "day dd, month yyyy":
          return (
            (n += [
              "Воскресенье",
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота",
            ][new Date(o, s - 1, a).getDay()]),
            (n += " "),
            (n += a < 10 ? "0" + a : a),
            (n += " "),
            (n += e[s - 1]),
            (n += " " + o)
          );
        case "dd/mm/yyyy":
          return (
            (n += a < 10 ? "0" + a : a),
            (n += "/"),
            (n += s < 10 ? "0" + s : s),
            (n += "/" + o)
          );
        case "dd-mm-yyyy":
          return (
            (n += a < 10 ? "0" + a : a),
            (n += "-"),
            (n += s < 10 ? "0" + s : s),
            (n += "-" + o)
          );
        default:
          return (
            (n += a < 10 ? "0" + a : a),
            (n += "."),
            (n += s < 10 ? "0" + s : s),
            (n += "." + o)
          );
      }
    }
  }
  document.addEventListener("DOMContentLoaded", Datee);
}

