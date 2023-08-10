var yandex = {
    "v1": 72425146,
    "v2": 73101076,
    "v3": 73101079,
    "v4": 73101082,
    "v5": 73101085,
    "v6": 73101088,
    "v7": 73101091,
    "v8": 73101094,
    "v9": 73495933,
    "v10": 73943032,
    "v11": 76280251,
    "v12": 81170752,
	"v13": 84195235,
	"v14": 84284026,
	"v15": 85391530,
	"v16": 87285868,
	"v17": 90680180,
	"v18": 90680172,
	"v19": 90680193,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('it', '').replace('39', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('it', '')
        .replace('39', '')
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