const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// comment-form

let showCommentForm = document.getElementById('commnetCreate');
let commentFormWrapper = document.getElementById('commnetCreateWrapper');
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let city = document.getElementById('commentCity');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');

commentImage.addEventListener('change', function(event){
    event.preventDefault();
    if(needPhoto.classList.contains("show")) {
        needPhoto.classList.remove("show");
    }
    if(!addedPhoto.classList.contains("show")) {
        addedPhoto.classList.add("show");
    }
    if(commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Fénykép feltöltve';
    } else {
        document.getElementById('commentFoto').innerHTML = 'Fénykép feltöltése';
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && city.value.trim() && text.value.trim()) {
        message.innerHTML = 'Köszönjük! Visszajelzését elküldtük moderációra.';
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Töltsön ki minden mezőt!'
    }  
    message.classList.add('show');
});


showCommentForm.addEventListener('click', function (event) {
    showCommentForm.classList.remove("show");
    commentFormWrapper.classList.add("show");
});


// popup
function popUp() {
    var a = rand(321, 769);
    localStorage.setItem("___rp", a);
    shwMsg(popupsMsg[settings.lang].message02, "", a);
    setTimeout(function () {
        var b = parseInt(localStorage.getItem("___lp"));
        if (b <= 5) {
            if (flag_five) {
                shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                flag_five = false;
                setTimeout(function () {
                    showPopupEnd()
                }, 12000)
            }
        } else {
            var c = JSON.parse(localStorage.getItem("___sp"));
            showPopupBegin(b, c)
        }
    }, 12000)
}

function showPopupBegin(e, b) {
    var a = orderName();
    var g;
    var c;
    var i;
    var f;
    var h;
    var d;
    if ((b.length == 2) && (flag_phone)) {
        shwMsg(popupsMsg[settings.lang].message03, a, 0);
        flag_phone = false;
        setTimeout(function () {
            h = e;
            showPopupBegin(h, b)
        }, 13000)
    } else {
        g = Math.floor(Math.random() * (b.length));
        c = b[g];
        i = parseInt(window.price777) * parseInt(c) + window.curr777;
        f = parseInt(localStorage.getItem("___cp")) + 1;
        h = e - c;
        if ((price == 0) || (price == 1)) {
        } else {
            // d = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name">' + a + '</span></span>, сделал(а) заказ на сумму ' + i + ', заказано <span class="bay">' + c + '</span> <span class="paced">упаковок</span><br><span class="package_left"> Осталось <span class="pacedNamed"></span> по акции <span class="blink_me">' + h + "</span></span></p></div>";
            changeBlink(h);
        }
        b.splice(g, 1);
        localStorage.setItem("___lp", h);
        localStorage.setItem("___sp", JSON.stringify(b));
        localStorage.setItem("___cp", f);
        $(count_class).text(f);
        $(lastpack_class).text(h);
        shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
        setTimeout(function () {
            if (h > 5) {
                showPopupBegin(h, b)
            } else {
                if (flag_five) {
                    shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                    flag_five = false;
                    setTimeout(function () {
                        showPopupEnd()
                    }, 12000)
                } else {
                    showPopupEnd()
                }
            }
        }, 13000)
    }
}

function showPopupEnd() {
    var b = true;
    var a = "";
    setInterval(function () {
        var c = new Array(0, 1);
        var d = c[Math.floor(Math.random() * (c.length))];
        if (d == 0) {
            kindx = rand(1, 33);
            rp = parseInt(localStorage.getItem("___rp"));
            if (b) {
                rp = rp + kindx;
                b = false
            } else {
                rp = rp - kindx;
                b = true
            }
            localStorage.setItem("___rp", rp);
            var nextMsg = Math.round(Math.random());
            if (nextMsg == 0) {

                shwMsg(popupsMsg[settings.lang].message02, "", rp)
            } else {
                shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
            }
        } else {
            a = orderName();
            shwMsg(popupsMsg[settings.lang].message03, a, 0)
        }
    }, 13000)
}

var wheel = document.querySelector('.wheel-img');
var resultWrapper = document.querySelector('.spin-result-wrapper');
// направляем все ссылки на форму, если это ленд

// запускаем колесо по клику
$('.cursor-text').click(function () {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
});

$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('.toform').offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});


//Блок формы

if ($('.order_form').length == 0) {
    $('.features-wrapper').prepend(genLocalForm());

    var timerFlag = 0;
    $(window).scroll(function () {
        var timerOffset = $('.order_form').offset().top - $(window).height() * 1.5;
        if ($(this).scrollTop() > timerOffset && timerFlag === 0) {
            start_timer();
            ++timerFlag;
        }
    })
}


$('a').click(function (e) {
    var top = $('.toform').offset().top - 40;
    e.preventDefault();
    $('body,html').animate({
        scrollTop: top
    }, 800);
})

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}


function tick() {
    time = time - 1
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
    $("#min").html(mins);
    $("#sec").html(secs);
}