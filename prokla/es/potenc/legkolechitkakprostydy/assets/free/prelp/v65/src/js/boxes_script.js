"use strict";

var par = location.hash.slice(1).split('~');
var parl = par.length;


if (parl > 2) isp = par[4].replace(/\+/g, ' ');
if ("vibrate" in navigator) {
    var vibr = 1;
} else var vibr = 0;

var count = 1;
$(function () {
    $(".try").click(function () {
        if (count < 2) {
            $(this).attr("free/prelp/v65/src/img/gift-box-opened.png");
            count++;
            setTimeout(function () {
                var sc2 = document.getElementById("success02");
                sc2.className += " animate";
                var sctip02 = document.getElementById("successtip02");
                sctip02.className += " animateSuccessTip";
                var md2 = document.getElementById("modal02");
                md2.className += " visible";
                var cnt = document.getElementById("cntVal");
                var so = document.querySelector(".sweet-overlay");
                so.style.display = "block";
            }, 800);
        } else {
            var discountBlock = document.getElementById("discount");
            $(this).replaceWith(discountBlock);
            $(discountBlock).addClass('show');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 1000);

            setTimeout(function () {
                $('#boxes').slideUp();
                $('.order_block').slideDown();
                start_timer();
            }, 3500);
        }
    });
});
var counter = 1;
$(document).ready(function () {
    $('#update').on('click', function () {
        if (counter == 1) {
            counter++;
            $('#cntVal').html(function (i, val) {
                return +val - 1
            });
        }
    });
});

function hidemodal01() {
    if (vibr > 0) navigator.vibrate(70);
    var modal1 = document.getElementById("modal01").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}

function hidemodal02() {
    if (vibr > 0) navigator.vibrate(70);
    var modal2 = document.getElementById("modal02").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}