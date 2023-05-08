var yandex = {
    "v5": 67102636,
    "v6": 68586625,
    "v7": 68692993,
    "v8": 69662767,
    "v9": 69750472,
    "v10": 69722137,
    "v11": 81170713,
    "v12": 81170656,
    "v13": 81170644,
    "v14": 81171376,
    "v15": 81170728,
	"v16": 83928565,
	"v17": 84493747,
	"v18": 84851335,
	"v19": 84882451,
	"v20": 84882499,
	"v21": 85078867,
	"v22": 87906967,
	"v23": 89629060,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('hu', '').replace('full', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('hu', '')
        .replace('full', '')
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