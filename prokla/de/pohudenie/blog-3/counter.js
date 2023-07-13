var yandex = {
    "v15": 67199800,
    "v16": 67209256,
	"v17": 67757947,
	"v18": 67949650,
    "v19": 68260867,
    "v20": 68493823,
    "v21": 68611540,
    "v22": 68727703,
	"v23": 70187617,
    "v24": 69588160,
    "v25": 69588196,
    "v26": 69456403,
    "v27": 71189737,
    "v28": 71728894,
    "v30": 75042091,
    "v31": 74842189,
    "v32": 73303276,
    "v33": 74615959,
    "v34": 73588939,
    "v35": 74515783,
    "v36": 74992858,
    "v37": 74846584,
    "v38": 74999479,
    "v39": 75026041,
    "v41": 74558422,
    "v42": 74558476,
    "v43": 75376744,
    "v44": 75299461,
    "v45": 75200557,
    "v46": 75257311,
    "v47": 76598563,
    "v48": 76394464,
    "v49": 78315547,
    "v50": 81170674,
	"v52": 81679717,
	"v53": 82130854,
    "v54": 84175000,
	"v55": 84171217,
	"v56": 84460093,
	"v57": 87591819,
	"v58": 87591839,
	"v59": 87591864,
	"v60": 87591874,
	"v62": 87745231,
	"v63": 87906921,
	"v63-2": 87912796,
	"v64": 88846040,
	"v65": 88866685,
	"v66": 88910543,
	"v67": 88911195,
	"v68": 88939533,
	"v71": 88978197,
	"v72": 88965573,
	"v73": 88965974,
	"v74": 88990279,
	"v75": 89110730,
	"v76": 90642205,
	"v77": 90731617,
	"v78": 90731636,
	"v79": 90731647,
	"v80": 90745933,
	"v81": 90745954,
	"v82": 90745973,
	"h2opor": 90326604,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('de', '').replace('39', '').replace('prelp', '')

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