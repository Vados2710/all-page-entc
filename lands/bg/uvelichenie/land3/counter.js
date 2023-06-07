var yandex = {
    "v1": 51616709,
    "v2": 56727268,
    "v3": 56727271,
    "v4": 56727274,
    "v5": 56727277,
    "v6": 56727280,
    "v7": 54157450,
    "v8": 54157459,
    "v9": 54157462,
    "v10": 54157537,
    "v11": 56727259,
    "v12": 56727265,
    "v13": 54810868,
    "v14": 67102906,
    "v15": 67102909,
    "v16": 67102930,
    "v17": 68575672,
    "v18": 68508958,
    "v19": 68851018
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('bg', '').replace('59', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('bg', '')
        .replace('59', '')
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