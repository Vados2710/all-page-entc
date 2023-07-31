
setTimeout(function() {

    $('.header__right').addClass('pseudo');

    }, 1000);

"use strict";

var pop = document.querySelector('.ever-popup');



setTimeout(initSelect, 1000);



function initSelect() {

    var inputSelect = document.querySelector('.country-select'),

        customSelect = document.querySelectorAll('.custom-select'),

        customOptions = document.querySelectorAll('.options');



    var each = function each(arr, callback, thisArg) {

        var i,

            length = arr.length;

        for (i = 0; i < length; i = i + 1) {

            callback(arr[i], i, arr);

        }

    };





    var head = document.querySelectorAll('.header');



    each(head, function (e) {

        var hoverText = document.createElement('span');

        hoverText.classList.add('hover-text');

        hoverText.innerHTML = 'Посмотри как изменится твоя кожа';

        e.appendChild(hoverText);

    });  
    var handle = document.querySelectorAll('.beer-handle');

    each(handle, function (e) {

        var line = document.createElement('span'),

            hoverText = document.createElement('span');

        line.classList.add('line');

        hoverText.classList.add('hover-text');

        hoverText.innerHTML = 'Посмотри как изменится твоя кожа';

        e.appendChild(hoverText);

        e.appendChild(line);

    });

}

 


$(function() {
    $('#twenty').twentytwenty({

        no_overlay: true,

    });

    $('#twenty').addClass('makecha');



    $('#twenty1').twentytwenty({

        no_overlay: true,

    });

    $('#twenty1').addClass('makecha');
});

$(document).on('click', 'a[href^="#"]', function (event) {

    event.preventDefault();



    $('html, body').animate({

        scrollTop: $($.attr(this, 'href')).offset().top - 100

    }, 1500);

});
//=include ../components/b-ways/b-ways.js
document.querySelector('.video-control').addEventListener('click', function (event) {
        document.querySelector('.poster').style.display = 'none';
        this.style.display = 'none';
        document.querySelector('iframe').src += '?autoplay=1&amp;rel=0';
});
//=include ../components/d-effect/d-effect.js
$(document).ready(function () {
    $(".graph__button").on('click', function () {
        $(".graph__button").removeClass("active");
        $(this).addClass("active");
        $(this).parent().removeClass("tab1 tab2 tab3")
            .addClass("tab" + $(this)[0].getAttribute("data-tab"));
    });

    var canvas = document.getElementById('graph__canvas');
    var ctx = canvas.getContext('2d');
    var w = 900;
    var h = 500;
    canvas.width = w;
    canvas.height = h;

    function draw() {
        ctx.strokeStyle = '#f3f3f3';
        for(var i = 0;  i<= 1500; i+=25) {
            ctx.beginPath();
            ctx.moveTo(0, -900 + i);
            ctx.lineTo(1000, 1000 - 900 + i);
            ctx.stroke();
            ctx.closePath();
        }
    }
    draw();
});

$(document).ready(function () {
    $('.sliderr').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        prevArrow: $('.review_prev'),
        nextArrow: $('.review_next')
    });
    $('.sliderr').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (window.innerWidth > 1239) {
            var thumbN = $('.sliderr__thumb-next img');
            var thumbP = $('.sliderr__thumb-prev img');
            var newAtt = thumbN[0].getAttribute("src");
            var x = newAtt.split("");
            var xx = newAtt.split("");
            if (currentSlide === 9) {
                x[x.length - 5] = 0;
                xx[xx.length - 5] = currentSlide - 1;
            } else if (currentSlide === 0) {
                x[x.length - 5] = currentSlide + 1;
                xx[xx.length - 5] = 9;
            } else {
                x[x.length - 5] = currentSlide + 1;
                xx[xx.length - 5] = currentSlide - 1;
            }
            var y = x.join("");
            var yy = xx.join("");
            thumbN[0].setAttribute("src", y);
            thumbP[0].setAttribute("src", yy);
        }
    });

});
//=include ../components/g-use/g-use.js
$(document).ready(function () {
    var allSectXY = [];
    var currentS = 1;
    var initSect = function () {
        allSectXY = [0];
        var blocks = $(".ways, .how, .effect, .info, .review, .use, .order, .header2");
        for ( var i = 0; i < blocks.length; i++) {
            var xx = $(blocks[i]).offset().top;
            allSectXY.push(xx);
        }
        //console.log(allSectXY);
    };
    $(window).resize(function() {
        initSect();
    });
    initSect();
    $(".sideR__dots_dot").on('click', function () {
        var goTo = $(this)[0].getAttribute("data-b");
        $('html, body').animate({
            scrollTop: allSectXY[goTo - 1]
        }, 1000);
    });
    $(window).scroll(function() {
        var winScrollTop = window.pageYOffset;
        for (var i = 0 ; i < allSectXY.length; i++) {
            if (i === allSectXY.length - 1 && winScrollTop > allSectXY[i] - 100) {
                $(".sideR__number").text("0" + allSectXY.length);
                currentS = allSectXY.length;
                $(".sideR").removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9").addClass("b_" + currentS);
            }
            if (winScrollTop > allSectXY[i] - 100 && winScrollTop < allSectXY[i + 1] && currentS !== i+1) {
                $(".sideR__number").text("0" + (i + 1));
                currentS = i + 1;
                $(".sideR").removeClass("b_1 b_2 b_3 b_4 b_5 b_6 b_7 b_8 b_9").addClass("b_" + currentS);
            }
        }
    });
});

//=include ../components/i-header2/i-header2.js
//=include ../components/j-footer/j-footer.js
//=include ../components/k-pop/k-pop.js
