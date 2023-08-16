const months = [
    'януари',
    'февруари',
    'март',
    'април',
    'май',
    'юни',
    'юли',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['зима', 'пролет', 'лято', 'есен'];
function postDate(t, e, n, r, o) {
  for (let t = 0; t < 730; t++) a(t, 'date-'), a(t, 'date');
  function a(t, e) {
    let n;
    n = 'date-' === e ? -t : t;
    const r = new Date(Date.now() + 864e5 * n),
      o = r.getDate(),
      a = r.getMonth() + 1,
      s = r.getFullYear(),
      c = l(o),
      u = c + '.' + l(a) + '.' + s,
      d = e + t,
      m = document.querySelectorAll('.' + d);
    for (let t = 0; t < m.length; t++) {
      const e = m[t].dataset.format;
      m[t].innerHTML = void 0 !== e && '' !== e ? String(i(c, a, s, e, n)) : u;
    }
  }
  function i(t, e, n, r, o) {
    let a = r;
    const i = ['dd', 'mm', 'yyyy', 'year'],
      c = { dd: t, mm: l(e), yyyy: n, year: s(n, o) };
    for (let t = 0; t < i.length; t++) {
      let e = i[t],
        n = new RegExp(e);
      a = a.replace(n, c[e]);
    }
    return a.split(' ').join(' ');
  }
  function s(t, e) {
    return t + e;
  }
  function l(t) {
    return t < 10 ? '0' + t : t;
  }
}
document.body.classList.contains('ev-date') &&
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });