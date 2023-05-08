$(document).ready(() => {
    var demonPopupTitle = 'Magyarországról származol? Várjon!';

    $('body').append('<div class="demon_popup">\n' +
        '        <div class="demon_overflow"></div>\n' +
        '        <div class="demon_popup_body">\n' +
        '            <span class="demon_close"></span>\n' +
        '            <h4 class="demon_popup_title">' + demonPopupTitle + '</h4>\n' +
        '            <img src="src/img/prod.png" alt="" style="width:28%">\n' +
        '            <p>Még mindig van egy speciális, korlátozott ajánlat az Ön számára</p>\n' +
        '            <p>Siess, hogy részt vegyen a programon és szerezze meg "' + '<span class="productName"></span>' + '" készlet szerint <span class="new_price_val"><span class="priceMain"></span></span>&nbsp;<span class="new_price_cur"><span class="currencyMain"></span></span><span style="color:#fff !important">!</span></p>\n' +
        '            <a href="{url}" class="popup_btn">tudj meg többet</a>\n' +
        '        </div>\n' +
        '    </div>');

    var closeElems = document.querySelectorAll('.demon_overflow, .demon_close'),
        demonPopup = document.getElementsByClassName('demon_popup')[0];
    for (let i = 0; i < closeElems.length; i++) {
        closeElems[i].onclick = function () {
        }
    }

    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            demonPopup.classList.add('active');
        }
    });

    $(".demon_overflow, .demon_close, .popup_btn").on("click", function () {
        demonPopup.classList.remove('active');
    })
})



