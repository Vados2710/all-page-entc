var yandex = {
    "v1": 72425134,
    "v2": 73100953,
    "v3": 73100956,
    "v4": 73100959,
    "v5": 73100962,
    "v6": 73100965,
    "v7": 73100968,
    "v8": 73100971,
    "v9": 73293577,
    "v10": 73100950,
    "v11": 73495921,
	"v12": 78438373,
	"v13": 81169873,
    "v14": 81170806,
	"v15": 84195208,
	"v16": 85391491,
	"v17": 85685698,
	"v18": 87436060,
	"v22": 90679483,
	"v23": 90679497,
	"v24": 90679506,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('de', '').replace('49', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('de', '')
        .replace('49', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});