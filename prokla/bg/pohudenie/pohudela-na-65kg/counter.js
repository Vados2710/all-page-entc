var yandex = {
    "v8": 67199797,
    "v9": 67209253,
	"v10": 67573951,
    "v11": 68493820,
    "v12": 68611537,
    "v13": 70587436,
	"v14": 70186405,
    "v15": 70679953,
    "v16": 72178330,
    "v17": 74979634,
    "v18": 74549614,
	"v19": 74046514,
    "v20": 74915953,
    "v21": 75013177,
    "v22": 75557038,
    "v23": 75734767,
    "v24": 76397962,
    "v25": 78403818,
	"v26": 81171826,
    "v27": 81171397,
    "v28": 81171412,
    "v29": 81171418,
    "v30": 81171424,
	"v31": 81109840,
	"v32": 81159127,
    "v33": 84097504,
	"v34": 86802544,
	"v35": 86974679,
	"v36": 86822760,
	"v37": 87363539,
	"v38": 87363549,
	"v39": 87363563,
	"v40": 87517281,
	"v41": 87517324,
	"v42": 87665318,
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