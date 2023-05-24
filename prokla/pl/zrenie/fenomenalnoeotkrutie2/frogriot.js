$(window).load(function(){
function addParamsToUrl(url, params) {
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            url += (url.split('?')[1] ? '&' : '?') + encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        }
    }
    return url;
}

function getUrlVars() {
    var vars = {};
    var href = document.URL ? document.URL : window.location.href;
    href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

jQuery(function () {
	var params = getUrlVars();

	jQuery('.cta-btn').prop('href', function (i, val) {
		return addParamsToUrl(val, params);
	});
});
})