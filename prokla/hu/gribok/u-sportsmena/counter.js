var yandex = {
    "v1": 72425143,
    "v2": 73101037,
    "v3": 73101043,
    "v4": 73101046,
    "v5": 73101049,
    "v6": 73101052,
    "v7": 73101055,
    "v8": 73101058,
    "v9": 73101061,
    "v10": 73495930,
	"v11": 78433195,
    "v12": 81170533,
    "v13": 81170521,
    "v14": 81170536,
    "v15": 81170512,
    "v16": 81170647,
    "v17": 81170638,
    "v18": 81171391,
	"v19": 81171913,
	"v20": 81640705,
	"v21": 84195223,
    "v22": 86116224,
	"v23": 88796079,
	"v24": 88806497,
	"v25": 88806521,
	"v26": 88817108,
	"v27": 88832972,
	"v32": 88914695,
	"v33": 88914702,
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