document.addEventListener('DOMContentLoaded', function(){
    var forms = document.querySelectorAll('form[action="/order/"]');
    var common_footer = document.getElementById('common-footer');
    var input_phone = document.querySelectorAll('form[action="/order/"] input[type="tel"]');
    var input_name = document.querySelectorAll('form[action="/order/"] input[name="name"]');
    

    var ordered = false;
    for(var i = 0; i < forms.length; i++){
        if (input_phone[i]) {
            if (input_phone.length > 0) {
                input_phone[i].value = '';
            }
        }
        
        if (input_name[i]) {
            if (input_name.length > 0) {
                input_name[i].value = '';
            }
        }
        

        forms[i].addEventListener('submit', function(e){
            if(ordered != false){
                e.preventDefault();
            }else{
                ordered = true;
                setTimeout(function(){
                    ordered = false;
                }, 5000);
            }
        });
    }
    
    for(var i = 0; i < input_name.length; i++){
        input_name[i].addEventListener('keydown', function(e){
            e.currentTarget.classList.remove('error');
        });
    }
    
    for(var i = 0; i < input_phone.length; i++){
        input_phone[i].addEventListener('keydown', function(e){
            e.currentTarget.classList.remove('error');
            if ( e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27 || 
                (e.keyCode == 65 && e.ctrlKey === true) || 
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     return;
            }
            else {
                if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 ) && e.keyCode != 13) {
                    e.preventDefault(); 
                }   
            }
        });
    }

    var country_code = document.getElementById('user_country').value;

    if(country_code.length == 2){
        country_code = country_code.toLowerCase();
    }

    function change_prices(code){
        var old_amount = document.querySelectorAll('.old-amount');
        var tot_amount = document.querySelectorAll('.tot-amount');
        var tot_amount_x3 = document.querySelectorAll('.tot-amount-x3');
        var init_price_txt = document.querySelectorAll('.init_price-txt');
        if (prices[code] == undefined) {
            code = 'ru';
            if (prices[code] == undefined) {
                code = 'ua';
                if (prices[code] == undefined) {
                    var res = [];
                    for (var i in prices) {
                        res.push(i);
                    }

                    code = res[0];
                }
            }
        }

        var price_txt
        switch(code){
            case 'BLR':
            case 'by':
                price_txt = ' бел.руб.'; break;
            case 'RUS':
            case 'ru':
                price_txt = ' руб.'; break;
            case 'KAZ':
            case 'kz':
                price_txt = ' тенге'; break;
            case 'UKR':
            case 'ua':
                price_txt = ' грн.'; break;
            case 'MDA':
            case 'md':
                price_txt = ' лей'; break;
            case 'AZE':
            case 'az':
                price_txt = ' manat'; break;
            case 'USA':
            case 'us':
                price_txt = ' $'; break;
            case 'KGZ':
            case 'kg':
                price_txt = ' сом'; break;
            case 'GEO':
            case 'ge':
                price_txt = ' lari'; break;
            case 'EST':
            case 'ee':
                price_txt = ' euro'; break;
            case 'DEU':
            case 'de':
                price_txt = ' euro'; break;
            case 'ITA':
            case 'it':
                price_txt = ' euro'; break;
            case 'AUT':
            case 'at':
                price_txt = ' euro'; break;
            case 'POL':
            case 'pl':
                price_txt = ' злот.'; break;
            case 'LVA':
            case 'lv':
                price_txt = ' euro'; break;
            case 'LTU':
            case 'lt':
                price_txt = ' euro'; break;
            case 'GBR':
            case 'gb':
                price_txt = ' фунтов'; break;
            case 'NLD':
            case 'nl':
                price_txt = ' euro'; break;
            case 'FRA':
            case 'fr':
                price_txt = ' euro'; break;
            case 'HUN':
            case 'hu':
                price_txt = ' форинт'; break;
            case 'SVK':
            case 'sk':
                price_txt = ' euro'; break;
            case 'CZE':
            case 'cz':
                price_txt = ' крон'; break;
            case 'CYP':
            case 'cy':
                price_txt = ' euro'; break;
            case 'ESP':
            case 'es':
                price_txt = ' euro'; break;
            case 'PRT':
            case 'pt':
                price_txt = ' euro'; break;
            case 'ROU':
            case 'ro':
                price_txt = ' лей'; break;
            case 'GRC':
            case 'gr':
                price_txt = ' euro'; break;
            case 'UZB':
            case 'uz':
                price_txt = ' sum'; break;
            case 'BEL':
            case 'be':
                price_txt = ' euro'; break;
            case 'BGR':
            case 'bg':
                price_txt = ' лев'; break;
            case 'LUX':
            case 'lu':
                price_txt = ' euro'; break;
            case 'POR':
            case 'pt':
                price_txt = ' euro'; break;
            case 'SVN':
            case 'si':
                price_txt = ' euro'; break;
                
            case 'HRV':
            case 'hr':
                price_txt = ' hrk'; break;
            case 'SWE':
            case 'se':
                price_txt = ' cron'; break;
            case 'CHE':
            case 'ch':
                price_txt = ' chf'; break;
                
            case 'ARM':
            case 'am':
                price_txt = ' dram';
            default:
                price_txt = ' руб';
                code = 'RUS';
        }

        for(var i = 0; i < tot_amount.length; i++){
            tot_amount[i].innerHTML = '<span class="init_price-num">' + prices[code] + '</span>';
        }

        if(tot_amount_x3.length > 0){
            for(var i = 0; i < tot_amount_x3.length; i++){
                tot_amount_x3[i].innerHTML = '<span class="init_price-num">' + prices[code]*3 + '</span>';
            }
        }

        for(var i = 0; i < init_price_txt.length; i++){
            init_price_txt[i].textContent = price_txt;
        }

        if(oldPrices[code] != undefined && oldPrices[code] != 0){
            for(var i = 0; i < old_amount.length; i++){
                old_amount[i].innerHTML = '<span class="init_price-num">' + oldPrices[code] + '</span>';
            }
        }else{
            for(var i = 0; i < old_amount.length; i++){
                old_amount[i].innerHTML = '<span class="init_price-num">' + prices[code]*2 + '</span>';
            }
        }
    }
    change_prices(country_code);
    
    //-- Select country || change prices
    var select_country = document.querySelectorAll('select[name="country"]');
    
    function change_country(country_code){
        if(prices[country_code] == undefined){
            country_code = 'RUS';
        }
        
        var options = document.querySelectorAll('#country option');
        for(var i = 0; i < options.length; i++){
            options[i].selectIndex = -1;
            options[i].removeAttribute('selected');
            if(options[i].getAttribute('value') == country_code){
                options[i].setAttribute('selected', 'selected');
            }
        }    
    }
    
    for(var i = 0; i < select_country.length; i++){
        select_country[i].addEventListener('change', function(){
            var country_code = this.value;
            change_country(country_code);
            change_prices(country_code);
            
        });
    }
        
    change_country(country_code);
    //-- Select country || change prices
    //-- 
    
    
    
    for(var i = 0; i < forms.length; i++){
        var name = forms[i].querySelector('input[name="name"]');
        var phone = forms[i].querySelector('input[name="telephone"]');
        if(name =! null){
            name.value = '';
        }
        phone.value = '';
    }

//COUNTER

var timer_box = document.getElementsByClassName('timer-box');
function initializeTimer() {
    if(timer_box.length == 0){
        return;
    }else{
        var endDate = new Date().setHours(23, 59, 59);  var currentDate = new Date();
        var seconds = (endDate-currentDate) / 1000;
        if (seconds > 0) {
            var minutes = seconds/60;
            var hours = minutes/60;
            minutes = (hours - Math.floor(hours)) * 60;
            hours = Math.floor(hours);
            seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
            minutes = Math.floor(minutes);
            
            // console.log(hours);

            setTimePage(hours,minutes,seconds);
            
            function secOut() {
            if (seconds == 0) {
                if (minutes == 0) {
                    if (hours == 0) {
                        showMessage(timerId);
                    }
                    else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }
                else {
                    minutes--;
                    seconds = 59;
                }
            }
            else {
                seconds--;
            }
            setTimePage(hours,minutes,seconds);
            }
            timerId = setInterval(secOut, 1000)
        }
        else {
            alert("Установленая дата уже прошла");
        }
    }
}

function setTimePage(h,m,s) {
    var timer_hour = document.querySelector(".timer-hour_num");
    var timer_minutes = document.querySelector(".timer-minutes_num");
    var timer_seconds = document.querySelector(".timer-seconds_num");

    console.log(timer_box.length);
    for(var i = 0; i < timer_box.length; i++){
        var hours;
        var minutes;
        var seconds;
        var timer_hour = timer_box[i].querySelector(".timer-hour_num");
        var timer_minutes = timer_box[i].querySelector(".timer-minutes_num");
        var timer_seconds = timer_box[i].querySelector(".timer-seconds_num");

        if(h < 10){
            hours = '0' + h;
        } else {
            hours = h;
        }

        if(m < 10){
            minutes = '0' + m;
        } else {
            minutes = m;
        }

        if(s < 10){
            seconds = '0' + s;
        } else {
            seconds = s;
        }

        timer_hour.innerHTML = hours;
        timer_minutes.innerHTML = minutes;
        timer_seconds.innerHTML = seconds;
    }

}

function showMessage(timerId) {
    clearInterval(timerId);
}

initializeTimer();

//END of COUNTER
//DELIVERY


(function(){
    var delivery_icons;
    var delivery_wrapper = document.querySelector('.delivery-wrapper');

    if(delivery_wrapper == null) return;

    var delivery_icons = '<li class="delivery-icons"><div></div><div></div><div></div></li>';
    var delivery_label = '<li class="delivery-label"><p>Доставка почтой</p> <p>или курьером</p></li>';
    var delivery_confidence = '<li class="delivery-confidence"><p>Конфиденциальность гарантирована.</p><p>Оплата при получении.</p></li>';
    var delivery_box = '<div class="delivery-box"><ul>' + delivery_icons + delivery_label + delivery_confidence + '</ul</div>';
    
    delivery_wrapper.innerHTML = delivery_box;
    change_delivery_country(country_code);
    
    delivery_icons = document.querySelector('.delivery-icons').children;
    setTimeout(function(){
        for(var i = 0; i < delivery_icons.length; i++){
            var width = delivery_icons[i].offsetHeight;
            if(width == 0){
                delivery_icons[i].style.margin = '0'
            }
        }
    }, 3000);
}());

//END of DELIVERY
//CHANGE DELIVERY

function change_delivery_country(value){
    var delivery_icons = document.querySelector('.delivery-icons');
    delivery_icons.classList.value = delivery_icons.classList.value.replace(/\bdelivery_.*?\b/g, '');

    delivery_icons.classList.add('delivery_' + value);
}

for(var i = 0; i < select_country.length; i++ ){
    select_country[i].addEventListener('change', function(){
        var country_code = this.value;
        var delivery_icons = document.querySelector('.delivery-icons');
        to_local_footer(country_code);
        if(delivery_icons != null){
            change_delivery_country(country_code);
        }
    });
}

//END of CHANGE DELIVERY
//FOOTER LOCAL
    function to_local_footer(code){
        var contacts_phone;
        var contacts_addr;
        var phone_box = document.querySelector('#common-footer .phones .phone');
        var addr_box = document.querySelector('#common-footer .top-line .addr');
        if (prices[code] == undefined) {
            code = 'ru';
            if (prices[code] == undefined) {
                code = 'ua';
                if (prices[code] == undefined) {
                    var res = [];
                    for (var i in prices) {
                        res.push(i);
                    }

                    code = res[0];
                }
            }
        }
        switch(code){
            case 'BLR':
            case 'by':
                contacts_phone = '+375 29 6067778';
                contacts_addr = '220100, Минск, Загородный пер., д. 20, стр. 2, офис 608';
                break;
            case 'UKR':
            case 'ua':
                contacts_phone = '+380 68 494 3266';
                contacts_addr = '03150, Киев, ул. Великая Васильевская, 100. Оф. 1609';
                break;
            case 'RUS':
            case 'ru':
                contacts_phone = '+7 (499) 918 74 55';
                contacts_addr = '29301, Москва, ул. Космонавтов, д. 9, стр. 2, офис';
                break;
            case 'KAZ':
            case 'kz':
                contacts_phone = '+7 717 272 8080';
                contacts_addr = '0100020, Астана, ул. 13 Абай даңғылы 13, к. 30';
                break;
            case 'GEO':
            case 'ge':
                contacts_phone = '+995 322 31 76934';
                contacts_addr = '0100020, Тбилиси Ул. Коте Апхази 25, оф. 305Л';
                break;
            case 'AZE':
            case 'az':
                contacts_phone = '+250 99 01';
                contacts_addr = '02976 Тбилиси, Пр. Агмашенебели, 61. Оф. 1206/В';
                break;
            case 'LVA':
            case 'lv':
                contacts_phone = '+27750550';
                contacts_addr = '02976 Рига, ул. Ганибу дамбис 31. Оф. 193/К';
                break;
            case 'LTU':
            case 'lt':
                contacts_phone = '+250 99 01';
                contacts_addr = '04347 Адрес:Vilnius ,Sausio 13-osios gatvė 10 0029';
                break;
            case 'UZB':
            case 'uz':
                contacts_phone = '+998712699393';
                contacts_addr = '100084 Ташкент, 107 Б Амир Темур шоҳ кўчаси оф. 4939';
                break;
            case 'MDA':
            case 'md':
                contacts_phone = '+373 22 223 161';
                contacts_addr = 'Bulevardul Ștefan cel Mare și Sfînt 202, Chișinău, Moldova of. 499/4';
                break;
            case 'KGZ':
            case 'kg':
                contacts_phone = '+996 (312) 62-31-20';
                contacts_addr = 'г. Бишкек, ул. Панфилова , 237 ул.Фрунзе 499F';
                break;
            case 'DEU':
            case 'de':
                contacts_phone = '+49 (30) 6767382-93';
                contacts_addr = 'Potsdamer Platz | Tiegarten, 10785 Berlin, Germany of. 899/Y';
                break;
            case 'ITA':
            case 'it':
                contacts_phone = '+39 34563680003';
                contacts_addr = 'Milan, str. Via Dante 23';
                break;
            case 'AUT':
            case 'at':
                contacts_phone = '+39 44 0566789334';
                contacts_addr = 'Dist. 15 - Rudolfsheim-Fünfhaus k 4782';
                break;
            default:
                contacts_phone = '+7 (499) 918 74 55';
                contacts_addr = '29301, Москва, ул. Космонавтов, д. 9, стр. 2, офис';
        }
        
        if (phone_box != null && addr_box != null) {
            phone_box.textContent = contacts_phone;
            addr_box.innerHTML = "<p>" + contacts_addr + "</p> <p> ИНН 7717732040, КПП, 771701001, ОГРН 1127746656290 </p>";
        }
    }
    if(common_footer != null){
        to_local_footer(country_code);
    }
    
    
    for(var i = 0; i < forms.length; i++){
        forms[i].addEventListener('submit', function(e){
            
            var this_form = e.currentTarget;
            if (this.querySelector('button[type="submit"]')) {
                this.querySelector('button[type="submit"]').disabled = true;
            }
            if (this.querySelector('input[type="submit"]')) {
                this.querySelector('input[type="submit"]').disabled = true;
            }
            
            
            var this_name = this_form.querySelectorAll('input[name="name"]');
            var this_phone = this_form.querySelectorAll('input[name="telephone"]');
            
            if(this_name.value == ''){
                this_name.closest('div').classList.add('error');
                e.preventDefault();
            }

            if(this_phone.value == ''){
                this_phone.closest('div').classList.add('error');
                e.preventDefault();
            }
            
            
        });
    };
//END of FOOTER LOCAL
//FOOTER COMMON
    var footer_toggle_btn = document.querySelectorAll('.to-toggle-btn');;
    var footer_open = document.querySelector('.to-open-footer');
    var footer_close = document.querySelector('.to-close-footer');
    var footer_hidden = document.querySelector('footer .hidden-box');
    var footer_hidden_box = document.querySelector('footer .hidden-box .content');
    var footer_hidden_wrap = document.querySelector('footer .hidden-box-wrap');
    var footer_confidence_link = document.querySelector('footer .confidence p');
    var footer_popup_wrap = document.querySelector('.footer-popup-wrap');
    var footer_popup_close = document.querySelector('.footer-popup-wrap .close');
    var footer_to_top = document.querySelector('footer .to-up');
    
    if(footer_hidden_wrap != null){
    var h = footer_hidden_wrap.offsetHeight;
    
    var minheight = 0;
    var maxheight = h;
    var time = 20;
    var timer = null;
    var toggled = false;
    
    var slider = footer_hidden_box;
    slider.style.height = minheight + 'px'; //not so imp,just for my example

        for(var i = 0; i < footer_toggle_btn.length; i++){
            footer_toggle_btn[i].onclick = function(e){
                var hidden_height = footer_hidden_wrap.offsetHeight;
                
                footer_open.classList.toggle('disabled');
                footer_close.classList.toggle('disabled');
                footer_close.classList.toggle('active');
                //footer_hidden.classList.toggle('active');
                //footer_hidden_box.classList.toggle('active');
    
                if(footer_open.classList.contains('disabled') == true){
                    footer_hidden_box.style.height = hidden_height + 'px';
                }else{
                    footer_hidden_box.style.height = '0';
                }
                ///
                clearInterval(timer);
                e.currentTarget.classList.toggle('open');
                var instanceheight = parseInt(slider.style.height);  // Current height
                var init = (new Date()).getTime(); //start time
                var height = (toggled = !toggled) ? maxheight: minheight; //if toggled
    
                var top = document.body.scrollTop;
    
                var scr = setInterval(function () {
                    top += 4;
                    window.scrollBy(0, top);
                    
                    if (top > document.body.scrollTop + h) {
                        clearInterval(scr);
                    }
                }, 1);
                
                var disp = height - parseInt(slider.style.height);
                timer = setInterval(function() {
                    var instance = (new Date()).getTime() - init; //animating time
                    if(instance <= time ) { //0 -> time seconds
                        var pos = instanceheight + Math.floor(disp * instance / time);
                        slider.style.height =  pos + 'px';
                    }else {
                        slider.style.height = height + 'px'; //safety side ^^
                        clearInterval(timer);
                    }
                }, 17);
            }
        }
        
        footer_confidence_link.onclick = function(e){
            footer_popup_wrap.classList.add('active');
        }
    
        footer_popup_close.onclick = function(){
            footer_popup_wrap.classList.remove('active');
        };
    
        footer_to_top.onclick = function(){
            // scrollTo(document.body, 0, 50);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        
        function scrollTo(element, to, duration) {
            if (duration < 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 2;
            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                scrollTo(element, to, duration - 2);
            }, 10);
        }
    }

//END of FOOTER COMMON
//OFFER DATE
    var date_wrap = document.querySelectorAll('.offer-date');
    if(date_wrap.length > 0){
        var date = new Date();
        var day = date.getDate();

        if(day < 10){
            day = '0' + day;
        }

        var month = date.getMonth() + 1;
        if(month < 10){
            month = '0' + month;
        }
        var year = date.getFullYear();
        var dateString = day + '.' + month + '.' + year
        for(var i = 0; i < date_wrap.length; i++){
            date_wrap[i].textContent = dateString;
        }
    }
//END of OFFER DATE
//AUTOFOCUS

    function getCoords(elem) { //<-- расчёт позиции элемента относительно документа
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset, //<-- расчёт позиции сверху
            left: box.left + pageXOffset //<-- расчёт позиции слева
        };
    }

    (function(){
        if(window.innerWidth > 1024){
            var wh = window.innerHeight; //<-- высота окна
            var dh = document.innerHeight; //<-- высота документа
            var form = document.querySelectorAll('form[action="/order/"]'); //<-- коллекция форм
            if(form.length > 0){
                window.addEventListener('scroll', function(){
                    var pointEnter = window.pageYOffset + wh / 1.4; //<-- расчёт отступа сверху от формы для фокуса
                    for(var i = 0; i < form.length; i++){
                        if(getCoords(form[i]).top < pointEnter && window.pageYOffset < getCoords(form[i]).top){ //<-- если верхняя граница видимой области совпадает с pointEnter И если верхняя граница видимой области выше формы ТО делаем фокус
                            form[i].querySelector('input[name="name"]').focus();
                        }
                    }
                });
            }
        }
    }());    

//END of AUTOFOCUS
//REMAINING
    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    (function(){
        var remaining = document.querySelectorAll('.remaining');

        if(remaining.length > 0){
            var number = remaining[0].textContent;
            function reduce () {
                var number_wrap = document.querySelectorAll('.remaining');

                number -= 1;

                for(var i = 0; i < remaining.length; i++){
                    var word = number_wrap[i].closest('*').parentElement;
                    var finit_word;

                    switch(number){
                        case 41:
                        case 31:
                        case 21:
                        case 1: finit_word = 'упаковка'; break;
                        case 44:
                        case 43:
                        case 42:
                        case 34:
                        case 33:
                        case 32:
                        case 24:
                        case 23:
                        case 22:
                        case 4:
                        case 3:
                        case 2: finit_word = 'упаковки'; break;
                        case 50:
                        case 49:
                        case 48:
                        case 47:
                        case 46:
                        case 45:
                        case 40:
                        case 39:
                        case 38:
                        case 37:
                        case 36:
                        case 35:
                        case 30:
                        case 29:
                        case 28:
                        case 27:
                        case 26:
                        case 25:
                        case 20:
                        case 19:
                        case 18:
                        case 17:
                        case 16:
                        case 15:
                        case 14:
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 5: finit_word = 'упаковок'; break;
                    }

                    if(number <= 2){
                        clearInterval(reduceInterval);
                    }
                    
                    word.innerHTML = word.innerHTML.replace(/упаков(ок|ки|ка)/, finit_word);
                    document.querySelectorAll('.remaining')[i].textContent = number;
                }
            }
            var reduceInterval = setInterval(reduce, getRandom(15000, 35000));
            // var reduceInterval = setInterval(reduce, getRandom(3000, 4000));
        }
    }());
//END of REMAINING
});