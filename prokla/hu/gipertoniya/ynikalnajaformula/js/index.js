const months = [
    'január',
    'február',
    'március',
    'április',
    'május',
    'június',
    'július',
    'augusztus',
    'szeptember',
    'október',
    'november',
    'december',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['tél', 'tavasz', 'nyár', 'ősz'];
function postDate(t, e, n, o, r) {
  for (let t = 0; t < 60; t++) s(t, 'date-'), s(t, 'date');
  function s(t, e) {
    let n;
    n = 'date-' === e ? -t : t;
    const o = new Date(Date.now() + 864e5 * n),
      r = o.getDate(),
      s = o.getMonth() + 1,
      a = o.getFullYear(),
      l = c(r),
      u = l + '.' + c(s) + '.' + a,
      m = e + t,
      d = document.querySelectorAll('.' + m);
    for (let t = 0; t < d.length; t++) {
      const e = d[t].dataset.format;
      d[t].innerHTML = void 0 !== e && '' !== e ? String(i(l, s, a, e, n)) : u;
    }
  }
  function i(t, e, r, s, i) {
    let u = s;
    const m = ['dd', 'mm', 'yyyy', 'monthFull', 'monthMin', 'monthOnly', 'year'],
      d = { dd: t, mm: c(e), yyyy: r, monthFull: a(e, n, !1), monthMin: a(e, o, !1), monthOnly: a(e, n, !1, i), year: l(r, i) };
    for (let t = 0; t < m.length; t++) {
      let e = m[t],
        n = new RegExp(e);
      u = u.replace(n, d[e]);
    }
    return u.split(' ').join(' ');
  }
  function a(t, e, n, o) {
    const r = o || 0;
    let s;
    return (
      (s = t + r > 12 ? r - (12 - t) : t + r),
      (s = t + r <= 0 ? 12 + r + 1 : t + r),
      (i = n),
      (a = e[s - 1]),
      i && a && a.length > 0 ? a[0].toUpperCase() + a.slice(1) : a
    );
    var i, a;
  }
  function l(t, e) {
    return t + e;
  }
  function c(t) {
    return t < 10 ? '0' + t : t;
  }
}
document.body.classList.contains('ev-date') &&
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
