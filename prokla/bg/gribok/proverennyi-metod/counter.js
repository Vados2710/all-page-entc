var yandex = {
    "v1": 72425131,
    "v2": 73100917,
    "v3": 73100920,
    "v4": 73209574,
    "v5": 73209577,
    "v6": 73295578,
    "v7": 73100932,
    "v8": 73100935,
    "v9": 73100938,
    "v10": 73100914,
    "v11": 73495918,
    "v12": 73897288,
    "v13": 76649694,
	"v14": 82031098,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('bg', '').replace('59', '').replace('prelp', '')

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