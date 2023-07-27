$(document).ready((function () {
    var e, t, n, s, a, l = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        i = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    function o(e, t) {
        let n = e - .5 + Math.random() * (t - e + 1);
        return Math.round(n)
    }! function (e, t, n) {
        for (var s = (e = $('.' + e)).length - 1; s >= 0; s--) {
            var a = new Date;
            a.setDate(a.getDate() - o(s, s + 1)), e.eq(e.length - s - 1).text(t[a.getDate() - 1] + '.' + n[a.getMonth()] + '.' + a.getFullYear())
        }
    }('js-commits__date', l, i),
    function (e, t, n) {
        var s = new Date;
        $('.' + e).text(t[s.getDate() - 1] + '.' + n[s.getMonth()] + '.' + s.getFullYear())
    }('data', l, i), $('.' + 'year').text((new Date).getFullYear()), e = 'send-message', t = 'commits__add-btn', n = 'commits__field-name', s = 'commits__field-message', a = 'commits__sucses', n = $('.' + n), s = $('.' + s), sucses = $('.' + a), $('.' + a).hide(), $('.' + t).click((function () {
        n.length && ('' == n.val() ? (n.css('outline', '1px solid red'), s.length && ('' == s.val() ? s.css('outline', '1px solid red') : s.css('outline', '1px solid green'))) : (n.css('outline', '1px solid green'), s.length ? '' == s.val() ? s.css('outline', '1px solid red') : (s.css('outline', '1px solid green'), $('.' + e).hide(), $('.' + a).fadeIn()) : ($('.' + e).hide(), $('.' + a).fadeIn())))
    }))
}));