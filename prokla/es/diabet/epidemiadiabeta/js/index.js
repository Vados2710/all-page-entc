$(document).ready(function () {
    var $arryDay = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    var $arryMont = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var $arryMontRU = ['РЇРЅРІР°СЂСЊ', 'Р¤РµРІСЂР°Р»СЊ', 'РњР°СЂС‚', 'РђРїСЂРµР»СЊ', 'РњР°Р№', 'РСЋРЅСЊ', 'РСЋР»СЊ', 'РђРІРіСѓСЃС‚', 'РЎРµРЅС‚СЏР±СЂСЊ', 'РћРєС‚СЏР±СЂСЊ', 'РќРѕСЏР±СЂСЊ', 'Р”РµРєР°Р±СЂСЊ'];

    /* РїСЂРѕСЃС‚Р°РІР»СЏРµРј РґР°С‚Сѓ РІ РєРѕРјРјРёС‚Р°С… */
    dataComments('commits__date', $arryDay, $arryMont);

    /* РїСЂРѕСЃС‚Р°РІР»СЏРµРј РґР°С‚Сѓ */
    dataFull('data', $arryDay, $arryMont);

    /* РїСЂРѕСЃС‚Р°РІР»СЏРµРј С‚РµРєСѓС‰РёР№ РіРѕРґ */
    dataYear('year');

    /* С„РѕСЂРјР° РѕС‚РїСЂР°РІРєРё РєРѕРјРјРёС‚Р° */
    sendMessage('send-message', 'commits__add-btn', 'commits__field-name', 'commits__field-message', 'commits__sucses');

    /* 
    РјР°СЃСЃРёРІ РјРµСЃСЏС†РµРІ ----------------------------------
    РјР°СЃСЃРёРІ РґРЅРµР№ ---------------------------          |
    РєР»Р°СЃСЃ РєРѕРјРјРёС‚РѕРІ -------------          |          |
                                |         |          |*/
    function dataComments(className, $arryDay, $arryMont) {
        var className = $('.' + className);
        for (var i = className.length - 1; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - randomInteger(i, i + 1));
            className.eq(className.length - i - 1).text($arryDay[d.getDate() - 1] + '.' + $arryMont[d.getMonth()] + '.' + d.getFullYear());
        }
    }

    /* СЂР°РЅРґРѕРјРЅРѕРµ С‡РёСЃР»Рѕ */
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    /* РїРѕР»РЅР°СЏ РґР°С‚Р° */
    function dataFull(className, $arryDay, $arryMont) {
        var d = new Date(),
            myClass = $('.' + className);
        myClass.text($arryDay[d.getDate() - 1] + '.' + $arryMont[d.getMonth()] + '.' + d.getFullYear());
    }

    /* РіРѕРґ */
    function dataYear(className) {
        var myClass = $('.' + className);
        myClass.text(new Date().getFullYear());
    }

    /* 
    РєР»Р°СЃСЃ Р±Р»РѕРєР° РІ РєРѕС‚РѕСЂРѕРј Р±СѓРґРµС‚ СЃРѕРѕР±С‰РµРЅРёРµ РѕР± СѓСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅРѕРј РєРѕРјРјРёС‚Рµ -----
    РєР»Р°СЃСЃ РїРѕР»СЏ СЃ СЃРѕРѕР±С‰РµРЅРёРµРј -------------------------------------             |
    РєР»Р°СЃСЃ РїРѕР»СЏ СЃ РёРјРµРЅРµРј -----------------------------            |            |
    РєР»Р°СЃСЃ РєРЅРѕРїРєРё РѕС‚РїСЂР°РІРєРё -------------              |           |            |
    РєР»Р°СЃСЃ СЃ С„РѕСЂРјРѕР№ ---------           |             |           |            |
                            |          |             |           |            |*/
    function sendMessage(classForm, classButton, classInput, classTextarea, $sucses) {
        classInput = $('.' + classInput);
        classTextarea = $('.' + classTextarea);
        sucses = $('.' + $sucses);
        $('.' + $sucses).hide();

        $('.' + classButton).click(function () {
            if (classInput.length) {
                if (classInput.val() == '') {
                    classInput.css('outline', '1px solid red');
                    if (classTextarea.length) {
                        if (classTextarea.val() == '') {
                            classTextarea.css('outline', '1px solid red');
                        } else {
                            classTextarea.css('outline', '1px solid green');
                        }
                    }
                } else {
                    classInput.css('outline', '1px solid green');
                    if (classTextarea.length) {
                        if (classTextarea.val() == '') {
                            classTextarea.css('outline', '1px solid red');
                        } else {
                            classTextarea.css('outline', '1px solid green');
                            $('.' + classForm).hide();
                            $('.' + $sucses).fadeIn();
                        }
                    } else {
                        $('.' + classForm).hide();
                        $('.' + $sucses).fadeIn();
                    }
                }
            }
        })
    }
});