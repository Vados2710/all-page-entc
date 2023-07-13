var yandex = {
    "v1": 51633617,
    "v2": 51633671,
    "v3": 51633737,
    "v4": 51633785,
    "v5": 51633824,
    "v6": 51633845,
    "v7": 53626567,
    "v8": 53630020,
    "v9": 53630083,
    "v10": 53630110,
    "v11": 54157774,
    "v12": 67318204,
    "v13": 67307461,
    "v14": 67869508,
    "v15": 69661882,
	"v16": 69683101,
	"v18": 87745196,
	"v19": 88693490,
	"v20": 88965557,
	"v21": 88965959,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('de', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('de', '')
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