var yandex = {
    "v1": 85476826,
    "v2": 85540507,
    "v3": 85540468,
    "v4": 86564871,
    "v5": 86623051,
	"v6": 87448499,
	"v7": 88357319,
	"v8": 88698730,
	"v9": 88707744,
	"v10": 88768647,
	"v11": 88752945,
	"v12": 88719984,
	"v13": 88719841,
	"v14": 88717538,
	"v15": 88716144,
	"v16": 88719594,
	"v17": 88753288,
	"v18": 88719198,
	"v19": 88721812,
	"v21": 88751298,
	"v22": 88807777,
	"v23": 88807109,
	"v24": 88879954,
	"v25": 88866492,
	"v26": 88879313,
	"v27": 88882772,
	"v28": 88910081,
	"v29": 88914803,
	"v30": 88966601,
	"v31": 89378483,
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
        .replace('confirm.html', '')
        .replace('it', '')
        .replace('39', '');
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