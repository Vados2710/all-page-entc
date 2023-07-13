tracker_url='http://e.losmetas.com/';
function lp_update_token(token,value)
{
    var o = document.createElement("img");
    o.src=tracker_url+'click.php?lp=data_upd&'+token+'='+value;
}
window.isMove = 0;

window.onload = function() {

    var date = new Date();
    window.start = date.getTime();
    setTimeout(function (){
        var domainResolve = (window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart);
        var loadTime = (window.performance.timing.loadEventEnd - window.performance.timing.responseEnd)/1000;
        if (loadTime < 0)  loadTime = 0;
        if (loadTime > 10)  loadTime = 30;
        var o = document.createElement("img");
        o.src=tracker_url +'click.php?lp=data_upd&event7=0&event9=' + window.isMove +'&event8=' + loadTime + '&event6=' + domainResolve + '&event5=' + window.framed + '&event10=' + window.social;
    }, 3000);
};
var el = document.getElementsByTagName("body")[0];
el.addEventListener("touchmove", function(){
    if(!window.isMove){
        window.isMove = 1;
        lp_update_token('event9', window.isMove);
    }
});
window.onbeforeunload = function() {
    var date1 = new Date();
    var end = date1.getTime();
    var timeOnLander = (end - window.start)/1000;
    if (timeOnLander > 600)  timeOnLander = 600;
    lp_update_token('event7', timeOnLander);
};
window.onmousemove = function() {
    if(!window.isMove){
        window.isMove = 1;
        lp_update_token('event9', window.isMove);
    }
};
window.onscroll = function() {
    if(!window.isMove){
        window.isMove = 1;
        lp_update_token('event9', window.isMove);
    }
};