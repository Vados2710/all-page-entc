var yandex = {
    "v5": 68617429,
    "v6": 69484162,
    "v7": 68827936,
    "v8": 69751732,
    "v10": 70298056,
    "v11": 71159443,
    "v12": 71160670,
    "v13": 75448363,
    "v14": 78194584,
    "v15": 79057711,
    "v16": 81170731,
	"v17": 82079431,
    "v18": 81170665,
	"v19": 82263055,
    "v20": 81170683,
    "v21": 81171385,
    "v22": 81171454,
    "v23": 81170650,
    "v24": 81171430,
    "v25": 81170719,
    "v26": 81171442,
	"v27": 82106881,
	"v28": 81644836,
	"v29": 83985280,
    "v30": 84101476,
    "v31": 86512595,
    "v32": 86513186,
	"v33": 86915174,
	"v34": 87540968,
	"v35": 87541001,
	"v36": 87541032,
	"v37": 87708791,
	"v38": 89343221,
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