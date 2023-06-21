var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  $('html, body').animate(
    2000
  );
});

$(document).mouseup(function (e) {
  var container = $('.spin-result-wrapper');
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});  const widgetDoorsSale = '50%';
                                const widgetDoorsGood = 'Oculax';
								let doors = document.querySelectorAll(".door");
                                let doorSales = document.querySelectorAll(".door__sales");
                                let doorWrapper = document.querySelector(".door__wrapper");
                                let customDoorsForm = 'cz';

                                let spinResultWrapper = document.querySelector(".spin-result-wrapper");
                                let spinResultBtn = document.querySelector(".pop-up-button");
                                let orderBlock = document.querySelector(".order_block");

                                let door1 = document.getElementById("door__1");
                                let door2 = document.getElementById("door__2");
                                let door3 = document.getElementById("door__3");

                                let doorSale1 = document.getElementById("door__sales1");
                                let doorSale2 = document.getElementById("door__sales2");
                                let doorSale3 = document.getElementById("door__sales3");

                                let customTitle = '';


                                doors.forEach(function (door) {
                                    door.addEventListener("click", openDoor);

                                });

                                function openDoor(e) {
                                    e.currentTarget.classList.add("open");


                                    doorSales.forEach(function (sale) {

                                        if (door1.classList.contains("open")) {
                                            doorSale1.innerHTML = widgetDoorsSale;

                                            doorSale2.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ?
                                                widgetDoorsSale2 : "25%";

                                            doorSale3.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ?
                                                widgetDoorsSale3 : "10%";
                                        } else if (door2.classList.contains("open")) {
                                            doorSale2.innerHTML = widgetDoorsSale;

                                            doorSale1.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ?
                                                widgetDoorsSale3 : "25%";

                                            doorSale3.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ?
                                                widgetDoorsSale2 : "10%";
                                        } else if (door3.classList.contains("open")) {
                                            doorSale1.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ?
                                                widgetDoorsSale2 : "25%";

                                            doorSale3.innerHTML = widgetDoorsSale;

                                            doorSale2.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ?
                                                widgetDoorsSale3 : "10%";
                                        }

                                    });

                                    for (let i = 0; i < doors.length; i++) {
                                        if (!doors[i].classList.contains("open")) {
                                            setTimeout(function () {
                                                doors[i].classList.add("open");
                                            }, 1500);
                                        }
                                    }

                                    for (let j = 0; j < doors.length; j++) {
                                        doors[j].removeEventListener("click", openDoor);
                                    }

                                    showResultWindow();
                                    showForm();
                                }

                                function showResultWindow() {
                                    setTimeout(function () {
                                        $('.spin-result-wrapper').css('display', 'block');
                                    }, 2000);
                                };

                                function showForm() {
                                    setTimeout(function () {
                                        $('.door__wrapper').slideUp();
                                        $('.order_block').slideDown();
                                        start_timer();
                                    }, 3000);
                                };

                                if (typeof customDoorsForm !== "undefined") {
                                    $('.default_order-block').remove();
                                    $('.default_spin-result-wrapper').remove();

                                    switch (customDoorsForm) {
                                        case 'id':
                                            customTitle = 'Tebak pintu mana yang ada diskon ' + widgetDoorsSale;
                                            break;
                                        case 'ph':
                                            customTitle = 'HUlaan KUNG ANONG PINTO ANG ' + widgetDoorsSale + ' OFF';
                                            break;
                                        case 'th':
                                            customTitle = 'เดาว่าประตูไหนลด ' + widgetDoorsSale;
                                            break;
                                        case 'ro':
                                            customTitle = 'GHICI CARE UȘĂ ARE O REDUCERE DE ' + widgetDoorsSale;
                                            break;
                                        case 'pe':
                                            customTitle = 'ADIVINA QUÉ PUERTA DESCUENTO ' + widgetDoorsSale;
                                            break;
                                        case 'es':
                                            customTitle = 'ADIVINE DETRÁS DE QUE PUERTA ESTÁ EL DESCUENTO DEL ' +
                                                widgetDoorsSale;
                                            break;
                                        case 'cz':
                                            customTitle = 'HÁDEJTE, KTERÉ DVEŘE JSOU SE SLEVOU ' +
                                                widgetDoorsSale;
                                            break;
                                        case 'ru':
                                            customTitle = 'Угадай за какой дверью скидка ' + widgetDoorsSale;
                                            break;
                                        default:
                                            customTitle = 'Guess which door the discount is behind ' + widgetDoorsSale;
                                    }

                                    $('.door__title').text(customTitle);
                                }(function(){

    var isFirst = true;

    window.vitBack = function(backLink){
        backInFrame(backLink);
    };


    function backInFrame(backLink) {
        if (getUrlVar('frame') === 1 || isInIframe()) return;

        let url = new URL(location.href);
        backLink = backLink.replace(/{([^}]*)}/gm, function(all,key) {
            if (url.searchParams.has(key)){
                return url.searchParams.get(key);
            }
            return ``;
        });
        console.log(backLink);

        var frame = document.createElement('iframe');
        frame.style.width = '100%';
        frame.id = 'newsFrame';
        frame.name = 'newsFrame';
        frame.style.height = '100vh';
        frame.style.position = 'fixed';
        frame.style.top = 0;
        frame.style.left = 0;
        frame.style.border = 'none';
        frame.style.zIndex = 999997;
        frame.style.display = 'none';
        frame.style.backgroundColor = '#fff';
        document.body.append(frame);


        //window.history.pushState({EVENT: "MIXER"}, "", window.location);
        //for (var t = 0; 20 > t; ++t){
        if (!isIos()) {
            checkUserGesture(function () {
                for (var t = 0; 20 > t; ++t) window.history.pushState({EVENT: "MIXER"}, "", window.location);
            });
        } else {
            for (var t = 0; 20 > t; ++t) window.history.pushState({EVENT: "MIXER"}, "", window.location);
        }


        window.onpopstate = function (t) {
            console.log("t.state", t.state);
            var url = getUrl(backLink, isFirst);
            console.log("backLink", url);
            console.log("isIos", isIos());
            if (!isIos() && !!!t.state) return;

            document.body.style.overflow = 'hidden';
            frame.style.display="block";
            document.querySelectorAll("body > *:not(#newsFrame)").forEach(function(e){
                e.setAttribute('style', 'display:none;');
            });


            console.log('back url in frame', url);
            frames['newsFrame'].window.location.replace(url);
            isFirst = false;
        };
    }


    function getUrl(backLink, isFirst) {
        var url = backLink;

        url += "&frame=1";
        url += "&type=back";
        url += "&rnd=" + Math.random();

        if (isFirst) {
            url += "&is_visitor=1";
        } else {
            url += "&is_visitor=0";
        }

        return url;
    }


    function getQuery() {
        var url = location.search;
        var qs = url.substring(url.indexOf('?') + 1).split('&');
        for(var i = 0, result = {}; i < qs.length; i++) {
            qs[i] = qs[i].split('=');
            try {
                result[qs[i][0]] = (qs[i][1] !== null)  ?
                    decodeURIComponent(qs[i][1]) : '';
            } catch (e) {
                result[qs[i][0]] = qs[i][1];
            }
        }
        return result;
    }

    function backNotUserGesture(backLink) {
        window.history.pushState({EVENT: "MIXER"}, "", window.location);
        window.onpopstate = function () {
            window.location.replace(backLink);
        }
    }

    function getUrlVar(key)
    {
        var p = window.location.search;
        p = p.match(new RegExp('[?&]{1}(?:'+key + '=([^&$#=]+))'));
        return p ? p[1] : '';
    }

    function isInIframe () {
        try {
            return window != window.top || document != top.document || self.location != top.location;
        } catch (e) {
            return true;
        }
    }


    function checkUserGesture(callback) {

        var st = setInterval(function () {
            var audio = document.createElement('audio');
            var playPromise = audio.play();
            if(playPromise instanceof Promise) {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
                playPromise.then(function(e) {

                }).catch(function(error) {

                });
            } else {
                if (!audio.paused) {
                    clearInterval(st);
                    callback();
                }
            }
        },100);
    }


    function isIos() {

        console.log("navigator.platform", navigator.platform);
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod',
            'Macintosh',
            'MacIntel',
            'MacPPC',
            'Mac68K',
            'Mac68K'
        ].some(function (exactPlatformString) {
            return navigator.platform === exactPlatformString
        });
    }

})(window);

let result = {}
let urlSaveLog = './script/review.php'
window.visionTest = {
    next_show: () => {
        $('.first-btn').click(() => {
            $(".limit").slideToggle("slow")
            $(".pewpewpew").slideToggle("slow")
        })
    },
    interview: () => {
        $('.less').click(function () {
            result['user_response'] = $(this).text();
            // result['user_response'] = `less 50`;
            window.visionTest.hide()
            window.visionTest.show()
        })
        $('.more').click(function () {
            result['user_response'] = $(this).text();
            // result['user_response'] = `more 50`;
            window.visionTest.hide()
            window.visionTest.show()
        })
    },
    hide: () => {
        $(".step_one").slideToggle("slow")
        // $('.step_one').css('display', 'none');
    },
    //test_two
    show: () => {
        $(".step_two").slideToggle("slow")
        window.visionTest.next_step()
    },
    next_step: () => {
        $('.complaint__button').click(function () {
            window.visionTest.show_step_three()
            $(".step_two").css('display', 'none');
        })
    },
    show_step_three: () => {
        $(".step_three").slideToggle("slow")
        window.visionTest.next_step_four()
    },

    next_step_four: () => {
        $('.test_button').click(function () {
            $(".step_three__test_two").slideToggle("slow")
            $(".test_button").css('display', 'none');
            $(".step_three__test_one").css('display', 'none');
            //задержка в несколько сек
            setTimeout(() => {
                $(".step_three").slideToggle("slow")
                $(".response").css('display', 'block');
                window.visionTest.set()
            }, 5100)
        })
    },
    set: () => {
        setTimeout(() => {
            $(".response").slideToggle("slow")
            $(".step_four").slideToggle("slow")
        }, 5000)
    },

    rand_int: (max = 35, min = 25) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    render_rand_int: () => {
        $('.randomPersent').text(window.visionTest.rand_int())
    },

}

$(document).ready(function () {
    window.visionTest.interview()
    window.visionTest.render_rand_int()
    window.visionTest.next_show()
})

var reviews = function() {
    var e = $(".input-file"),
        t = $(".input-file"),
        n = $(".reviews-popup"),
        o = $(".reviews-form__file-text"),
        r = $(".inputName"),
        a = $(".inputText");
    e.change((function(e) {
        o.html("Foto subida"), t.addClass("rloaded")
    })), $(".reviews-form").submit((function() {
        event.preventDefault(), n.fadeIn(), setTimeout((function() {
            n.fadeOut()
        }), 2e3), o.html("Subir foto"), t.removeClass("rloaded"), r.val(""), a.val("")
    }))
};
reviews(), $(document).ready((function() {
    var e = !0;
    $(window).width() > 1023 && ($(window).mouseout((function(t) {
        t.pageY - $(window).scrollTop() < 1 && 1 == e && ($(".modal").fadeIn(300), e = !1)
    })), $(".modal-flex").on("click", (function(e) {
        ($(e.target).is($(".modal-flex")) || $(e.target).is(".modal-close")) && $(".modal").fadeOut(300)
    })))
}));
var close = document.querySelector(".modal-close"),
    button = document.querySelector(".modal-btn");

function hidePopup() {
    $(".modal").fadeOut(300)
}
 setTimeout(function () {
    $("a[href^='#']").removeAttr("onclick");
    }, 4000);
	  let commentContainer = document.querySelector(".comment_container");
        let commentButton = document.querySelector(".btn-accept");
        commentContainer.style.display = "none";
        commentButton.onclick = function () {
            $('.comment_container').slideDown();
            $("html, body").animate({
                scrollTop: $('#btn-submit').offset().top + "px"
            });
        }
		function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[A-Za-zА-Яа-я\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
window.onload = function () {
  var fiveMinutes = 60 * 25,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};