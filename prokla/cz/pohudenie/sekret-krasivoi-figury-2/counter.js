var yandex = {
    "v1": 81170818,
    "v2": 81170821,
    "v3": 81170824,
    "v4": 81170827,
    "v5": 85907807,
	"v6": 87256968,
	"v7": 88711432,
	"v8": 88711440,
	"v9": 88774010,
	"v10": 88846458,
	"v11": 88847043,
	"v12": 88843852,
	"v13": 88846068,
	"v14": 88846597,
	"v15": 89121683,
	"v16": 89253648,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('cz', '').replace('820', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('cz', '')
        .replace('820', '')
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