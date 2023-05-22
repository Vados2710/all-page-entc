var yandex = {
    "v1": 72425149,
    "v2": 73101112,
    "v3": 73101118,
    "v4": 73101121,
    "v5": 73101124,
    "v6": 73101127,
    "v7": 73101130,
    "v8": 73101133,
    "v9": 73101136,
    "v10": 73101106,
    "v11": 73101109,
    "v12": 73495936,
    "v13": 81170800,
	"v14": 84076924,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('pl', '').replace('159', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('pl', '')
        .replace('159', '')
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