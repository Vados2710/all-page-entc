function startTimer(t) {
    var e, n, r = t,
        a = setInterval(function () {
            e = parseInt(r / 60, 10), n = parseInt(r % 60, 10), n = 10 > n ? "0" + n : n, $("#clock").text(e + ' : '  + n ), --r < 0 && (clearInterval(a))
        }, 1000)
    }
    startTimer((9 * 60) + 00);

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");

function hide_warn(){$('.ac_gdpr_fix').hide();}  


document.addEventListener('DOMContentLoaded', function(){
    function getParam(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
     
    var cc = getParam("country_code");
    if (!cc || cc === "HU") {
        Array.from(document.querySelectorAll(".country-select")).forEach(function(item) {
            item.value = "HU";
        });
    }
     
}, false);