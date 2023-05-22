







// purl.min

!function (factory) {
    "function" == typeof define && define.amd ? define(factory) : window.purl = factory()
}(function () {
    function parseUri(url, strictMode) {
        for (var str = decodeURI(url), res = parser[strictMode ? "strict" : "loose"].exec(str), uri = {
            attr: {},
            param: {},
            seg: {}
        }, i = 14; i--;) uri.attr[key[i]] = res[i] || "";
        return uri.param.query = parseString(uri.attr.query), uri.param.fragment = parseString(uri.attr.fragment), uri.seg.path = uri.attr.path.replace(/^\/+|\/+$/g, "").split("/"), uri.seg.fragment = uri.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"), uri.attr.base = uri.attr.host ? (uri.attr.protocol ? uri.attr.protocol + "://" + uri.attr.host : uri.attr.host) + (uri.attr.port ? ":" + uri.attr.port : "") : "", uri
    }

    function getAttrName(elm) {
        var tn = elm.tagName;
        return "undefined" != typeof tn ? tag2attr[tn.toLowerCase()] : tn
    }

    function promote(parent, key) {
        if (0 === parent[key].length) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        return parent[key] = t, t
    }

    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (part) {
            var obj = parent[key] = parent[key] || [];
            "]" == part ? isArray(obj) ? "" !== val && obj.push(val) : "object" == typeof obj ? obj[keys(obj).length] = val : obj = parent[key] = [parent[key], val] : ~part.indexOf("]") ? (part = part.substr(0, part.length - 1), !isint.test(part) && isArray(obj) && (obj = promote(parent, key)), parse(parts, obj, part, val)) : (!isint.test(part) && isArray(obj) && (obj = promote(parent, key)), parse(parts, obj, part, val))
        } else isArray(parent[key]) ? parent[key].push(val) : parent[key] = "object" == typeof parent[key] ? val : "undefined" == typeof parent[key] ? val : [parent[key], val]
    }

    function merge(parent, key, val) {
        if (~key.indexOf("]")) {
            var parts = key.split("[");
            parse(parts, parent, "base", val)
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t
            }
            "" !== key && set(parent.base, key, val)
        }
        return parent
    }

    function parseString(str) {
        return reduce(String(str).split(/&|;/), function (ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, " "))
            } catch (e) {
            }
            var eql = pair.indexOf("="),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);
            return val = val.substr(val.indexOf("=") + 1, val.length), "" === key && (key = pair, val = ""), merge(ret, key, val)
        }, {base: {}}).base
    }

    function set(obj, key, val) {
        var v = obj[key];
        "undefined" == typeof v ? obj[key] = val : isArray(v) ? v.push(val) : obj[key] = [v, val]
    }

    function lastBraceInKey(str) {
        for (var brace, c, len = str.length, i = 0; len > i; ++i)
            if (c = str[i], "]" == c && (brace = !1), "[" == c && (brace = !0), "=" == c && !brace) return i
    }

    function reduce(obj, accumulator) {
        for (var i = 0, l = obj.length >> 0, curr = arguments[2]; l > i;) i in obj && (curr = accumulator.call(void 0, curr, obj[i], i, obj)), ++i;
        return curr
    }

    function isArray(vArg) {
        return "[object Array]" === Object.prototype.toString.call(vArg)
    }

    function keys(obj) {
        var key_array = [];
        for (var prop in obj) obj.hasOwnProperty(prop) && key_array.push(prop);
        return key_array
    }

    function purl(url, strictMode) {
        return 1 === arguments.length && url === !0 && (strictMode = !0, url = void 0), strictMode = strictMode || !1, url = url || window.location.toString(), {
            data: parseUri(url, strictMode),
            attr: function (attr) {
                return attr = aliases[attr] || attr, "undefined" != typeof attr ? this.data.attr[attr] : this.data.attr
            },
            param: function (param) {
                return "undefined" != typeof param ? this.data.param.query[param] : this.data.param.query
            },
            fparam: function (param) {
                return "undefined" != typeof param ? this.data.param.fragment[param] : this.data.param.fragment
            },
            segment: function (seg) {
                return "undefined" == typeof seg ? this.data.seg.path : (seg = 0 > seg ? this.data.seg.path.length + seg : seg - 1, this.data.seg.path[seg])
            },
            fsegment: function (seg) {
                return "undefined" == typeof seg ? this.data.seg.fragment : (seg = 0 > seg ? this.data.seg.fragment.length + seg : seg - 1, this.data.seg.fragment[seg])
            }
        }
    }

    var tag2attr = {a: "href", img: "src", form: "action", base: "href", script: "src", iframe: "src", link: "href"},
        key = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
        aliases = {anchor: "fragment"},
        parser = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        },
        isint = /^[0-9]+$/;
    return purl.jQuery = function ($) {
        null != $ && ($.fn.url = function (strictMode) {
            var url = "";
            return this.length && (url = $(this).attr(getAttrName(this[0])) || ""), purl(url, strictMode)
        }, $.url = purl)
    }, purl.jQuery(window.jQuery), purl
});

//// animated massange
setTimeout(() => {
    // let c3 = document.querySelector('.country_name12').innerHTML;
    let c1 = document.querySelector('.new_price_val').innerHTML;
    let c2 = document.querySelector('.new_price_sig').innerHTML;
    // let form = document.querySelector('#cont_form');
    // form.classList.add('hidden');
   
    const massange = [
        {
            m: 'Witam, jestem dr Kazimierz Wybraniec. '
        },
        {
            m: 'Prowadzę bezpłatne porady internetowe w ramach Narodowego Projektu Zdrowia. Ten miesiąc poświęcony jest walce z mimowolnym oddawaniem moczu. '
        },
        {
            m: 'Aby uzyskać bezpłatną konsultację, należy odpowiedzieć na kilka pytań.'
        },
        {
            m: 'Jesteś mężczyzną czy kobietą? '
        },
        {
            m: 'Kiedy się urodziłeś/łaś?'
        },
        {
            m: 'Czy od czasu do czasu zdarza Ci się mimowolny wyciek moczu?'
        },
        {
            m: 'Proszę kliknąć na obrazek, który według Ciebie najlepiej opisuje objawy mimowolnego oddawania moczu. '
        },
    
    
    ]
    
    
    
    var mass_id = 0;
    var length_mass = 0; // tateatr avelacnelu hamar
    var lengt_num_mas = 0;// depi ahort smsy
    var text = '';
    var process = true;
    setTimeout(() => {
        const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
        $('.chat-content-list').append(body_mas);
        const mas_inf = setInterval(function () {
            if (process == true) {
                if (lengt_num_mas != massange.length) {
                    text += massange[lengt_num_mas].m[length_mass];
                    length_mass++
                    $('#mass' + lengt_num_mas + '').html(text);
                    if (lengt_num_mas === 3 && length_mass === massange[lengt_num_mas].m.length - 1) {
                        appGender();
                        process = false;
                        genderNext();
                    }
                    if (lengt_num_mas === 4 && length_mass === massange[lengt_num_mas].m.length - 1) {
                        appAge()
                        process = false;
                        genderNext();
                    }
                    if (lengt_num_mas === 5 && length_mass === massange[lengt_num_mas].m.length - 1) {
                        process = false;
                        YsNo();
                    }
                    if (lengt_num_mas === 6 && length_mass === massange[lengt_num_mas].m.length - 1) {
                        process = false;
                        Photofoot();
                        setTimeout(() => {
                            let sc_top = $('#foot1');
                            $('#page_chat').animate({scrollTop: sc_top[0].offsetTop}, 500);
                        }, 1000)
    
                    }
                    if (massange.length == 15 && lengt_num_mas === 11 && length_mass === massange[lengt_num_mas].m.length) {
                        $('#mass11').append('<img src="prod.png" style="display: block; width: 280px">');
                    }
                    if (massange.length == 16 && lengt_num_mas === 12 && length_mass === massange[lengt_num_mas].m.length) {
                        $('#mass12').append('<img src="prod.png" style="display: block; width: 280px">');
                    }
    
                    if (massange.length == 15 && lengt_num_mas === 13 && length_mass === massange[lengt_num_mas].m.length) {
                        $('#mass13').append('<b class="new_price_val"></b> <b class="new_price_sig"></b>.');
                    }
                    if (massange.length == 16 && lengt_num_mas === 14 && length_mass === massange[lengt_num_mas].m.length) {
                        $('#mass14').append('<b class="new_price_val"></b> <b class="new_price_sig"></b>.');
                    }
    
                    //for closed Set Interval
                    if (length_mass == massange[lengt_num_mas].m.length) {
                        lengt_num_mas++
                        mass_id++
                        length_mass = 0;
                        text = '';
                        
                        app();
                        let proc_scroling = lengt_num_mas - 1;
                        let nev_div = $('#mass' + proc_scroling + '')[0].offsetParent.offsetTop;
                        
                        scriplongBody(nev_div);
                    }
                } else {
                    
                    startTime();
                    clearInterval(mas_inf);
                    $('#mass' + lengt_num_mas + '').parent().parent().css('display', 'none');
                    $('#cont_form').css('display', 'block');
                }
            } else {
                //
            }
        }, 90)
    }, 2000)
    
    function startTime(){
        var age = $.url().param('utm_term');
        if (age) {
            $('.user-age').text(age);
        }
        var number_objects;
        var displayObject = $('.left-pack');
        function loadRandom() {
            number_objects = 54 + Math.floor(Math.random() * 1);
        }
        function decreaseRandom() {
            number_objects -= Math.floor(Math.random() * 2) + 1;
        }
        function showRandom() {
            displayObject.text(number_objects);
        }
        loadRandom(); // load the value
        showRandom(); // initial display
        var interval = setInterval(function () {
            decreaseRandom();
            showRandom();
            if (number_objects <= 5) {
                clearInterval(interval);
            }
        }, 7500);
    }
    
    function app() {
        const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
        $('.chat-content-list').append(body_mas);
    }
    
    // my massange
    function myMassange(userGend) {
        let mass = '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="users_mass">' + userGend + '</p></div></div></div>';
        $('.chat-content-list').append(mass)
    }
    
    // gender append
    
    function appGender() {
        $('.chat-content-list').append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Mężczyzną</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Kobietą</span></div></div>');
    }
    
    function genderNext() {
        $('.chooseGenderM').click(() => {
            document.querySelector('.chat-content-buttons-gender').style.display = 'none';
            myMassange('Mężczyzną');
            setTimeout(() => {
                process = true;
            }, 500)
        })
        $('.chooseGenderW').click(() => {
            document.querySelector('.chat-content-buttons-gender').style.display = 'none';
            myMassange('Kobietą');
            setTimeout(() => {
                process = true;
            }, 500)
        })
    }
    
    // Age append
    function appAge() {
        $('.chat-content-list').append('<div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">Dzień</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Miesiąc</option>undefined<option value="1">stycznia</option><option value="2">lutego</option><option value="3">marca</option><option value="4">kwietnia</option><option value="5">maja</option><option value="6">czerwca</option><option value="7">lipca</option><option value="8">sierpnia</option><option value="9">września</option><option value="10">października</option><option value="11">listopada</option><option value="12">grudnia</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Rok</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div>');
    
    
        let data = setInterval(() => {
            let empty_field = $('.select-day').val();
            let full_month = $('.select-month').val();
            let year = $('.select-year').val();
            if (empty_field != '' && full_month != '' && year != '') {
                let selectS = '' + empty_field + '.' + full_month + '.' + year + '';
                myMassange(selectS);
                $(this).css('display', 'none');
                process = true;
                clearInterval(data);
            }
            
        }, 500)
    
    
    }
    
    // append yeas and no
    
    function YsNo() {
        $('.chat-content-list').append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM" id="yeas">Tak</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW" id="no">Nie</span></div></div>');
        $('#yeas').click(() => {
            $('.chat-content-buttons-gender').css('display', 'none');
            myMassange('Tak');
            process = true;
    
        })
        $('#no').click(() => {
            $('.chat-content-buttons-gender').css('display', 'none');
            myMassange('Nie');
            process = true;
        })
    }
    
    // append photos foot
    
    function Photofoot() {
        $('.chat-content-list').append('<div class="foot"><img class="fot_for" src="img/1_stage.jpg" id="foot1" alt=""><img class="fot_for" src="img/2_stage.jpg" id="foot2" alt=""><img class="fot_for" src="img/3_stage.jpg" id="foot3" alt=""></div>');
        sendImg();
    }
    
    // клики для нажали картикнку
    var ostr = '';
    function sendImg() {
        $('#foot1').one('click', function(){
            ostr += 'Podczas ćwiczeń, kaszel'
            massange.push({m: 'Jest to wydalenie moczu w wyniku nagłego wzrostu ciśnienia wewnątrzbrzusznego (np. podczas kaszlu, kichania, śmiechu, schylania się lub podnoszenia przedmiotów). Objętość wysięku jest zwykle niewielka lub umiarkowana.'})
            
            process = true;
            addArray();
            $('#foot2').off('click');
            $('#foot3').off('click');
            // $('#foot1, #foot2, #foot3').css('display', 'none');
        })
        $('#foot2').one('click', function(){
            ostr += 'Niepełne opróżnianie'
            massange.push({m: 'Zatrzymanie moczu może być bezobjawowe lub powodować częste oddawanie moczu, uczucie niepełnego opróżnienia pęcherza i nietrzymanie moczu z naglącym parciem lub z powodu przepełnienia pęcherza. Przedłużające się zatrzymanie moczu predysponuje do infekcji dróg moczowych i może prowadzić do zwiększenia ciśnienia w pęcherzu moczowym, powodując uropatię obturacyjną. '})
            $('#foot1').off('click');
            $('#foot3').off('click');
            process = true;
            addArray();
        })
        $('#foot3').one('click', function(){
            ostr += 'Budzenie się z powodu pragnienia'
            massange.push({m: 'Jest to niekontrolowany wypływ moczu (o umiarkowanej lub dużej objętości), który występuje natychmiast po ostrym, niekontrolowanym parciu na pęcherz. Często występuje potrzeba wstawania kilka razy w nocy w celu oddania moczu (nykturia) oraz nocne nietrzymanie moczu. '})
            $('#foot2').off('click');
            $('#foot1').off('click');
            process = true;
            addArray();
        })
    }
    
    function addArray() {
        end_massange1 = {
            m: `Ja oraz moi znajomi z zagranicy polecamy ` + offer_params.productName + `. Jest to suplement na bazie ziół, który pomaga uporać się z nietrzymaniem moczu w możliwie najkrótszym czasie i nie dopuszcza do nawrotu problemu. Nie ma skutków ubocznych i jest odpowiedni w każdym wieku, zarówno dla kobiet, jak i mężczyzn. Skuteczność preparatu ` + offer_params.productName + ` została potwierdzona w licznych badaniach klinicznych: spośród 10 000 pacjentów z problemami z oddawaniem moczu 9 746 całkowicie pozbyło się nietrzymania moczu. `
          };
        end_massange2 = {m: 'Tak wygląda opakowanie kapsułek ' + offer_params.productName + ': '};
        end_massange3 = {m: '<img src="prod.png" style="width: 280px">'};
        end_massange4 = {m: 'Kuracja preparatem ' + offer_params.productName + ' normalizuje pracę układu moczowo-płciowego i likwiduje towarzyszące mu stany zapalne.'};
        end_massange5 = {
            m: `Cena suplementu wynosi tylko … ` + offer_params.priceMain + `` + offer_params.currencyMain + ` przy zakupie pełnego zestawu.`
        };
    
        /*if ($("select[name='country']").val() == "KZ") {
            end_massange5 = {
              m: 'Цена препарата всего 830 тнг'
            };
          }   else {
            end_massange5 = {
              m: 'Цена препарата всего 149 руб.'
            };
          }*/
      
    
        end_massange6 = {m: 'Aby otrzymać ' + offer_params.productName + ', należy wpisać swoje nazwisko i numer telefonu w formularzu zamówienia. '};
        massange.push(end_massange1, end_massange2, end_massange3, end_massange4, end_massange5, end_massange6);
        // const form = document.querySelector('#cont_form');
        // form.classList.remove('hidden');
        
    }
    
    // for scroll on button
    let top_scroling = 0;
    
    function scriplongBody(x) {
        let ekac_x = x + 70;
        top_scroling += ekac_x;
        var set = setTimeout(() => {
            // let objDiv = document.getElementById('page_chat');
            // objDiv.scrollTop.animate =  5000;
            $('#page_chat').animate({scrollTop: top_scroling}, 1000);
        }, 300)
    }
    
    
    $( document ).ready(function() {
      let val = $('#val').text();
      let cur = $('#cur').text();
      let sig = $('#sig').text();
      $('.new_price_val').text(val);
      $('.new_price_cur').text(cur);
      $('.new_price_sig').text(sig);
    });
    
    setInterval(function (){
        let user_mass = $('.users_mass');
        var user_full_info = '';
        user_mass.map((e)=>{
            let full_info = user_mass[e].innerText+'default.htm';
            user_full_info += full_info;
        })
        $('input[name=comments]').val("Marcin Bajdur"+''+user_full_info+''+ostr+'');
    },500)
}, 1000)
