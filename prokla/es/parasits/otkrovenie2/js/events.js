$(document).ready(function(){
    $('.comeback_close').on('click', function(el){
     $("#comeback").hide();
    });




    window.isShow = 0;
    var stateObj = {foo: "bar"};
    var curURL = window.location.href;
    var curTitle = document.title;
    history.pushState(stateObj, curTitle, curURL);
    window.onpopstate = function (event) {

        if (isShow == 0) {
            history.pushState(stateObj, curTitle, curURL);
            document.getElementById('comeback').style.display = 'block';
            isShow = 1;
        }
        ;
    };

    window.onload = function () {

        document.body.onmouseout = function (event) {
            if (event.clientY < 0 && isShow == 0) {
                document.getElementById('comeback').style.display = 'block';
                isShow = 1;
            }
            ;
        };

        document.getElementById('comeback').onclick = function (event) {
            if (event.target.id == "comeback") {
                document.getElementById('comeback').style.display = 'none'
            }
            ;
        };
    };


});