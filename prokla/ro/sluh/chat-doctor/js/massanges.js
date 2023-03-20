let now = new Date();
let mm = now.getMonth() + 1;
let day = now.getDate();
let year = now.getFullYear();
let date = '' + day + '.' + mm + '.' + year + '';
const massange = [{
    m: 'Bună ziua! Sunt Maria Adamache, un specialist de frunte în domeniul patologiilor auditive și asistent la Centrul de asistență al Organizației Sănătății. Până la ' + date + ' (inclusiv), implementăm un program PREFERENTIAL pentru a ajuta persoanele cu probleme de auz progresive. '
}, {
    m: 'Acest program se desfășoară cu sprijinul deplin al fundațiilor private și are o caracteristică cheie: oferim un complex complet de recuperare de surditate și complicații ale bolilor de auz, fără a fi nevoie de o procedură birocratică standard: examinare îndelungată și așteptare la rând pentru îngrijiri medicale. '
}, {
    m: 'Nu este nevoie să colectați certificatele medicale, să stați la cozi la policlinici și să așteptați câteva luni pentru ca rândul dvs. să primească beneficii. '
}, {
    m: 'Participând la programul PREFERENŢIAL, primiți ajutor imediat! '
}, {
    m: 'Dezvoltarea celui mai nou complex unic de recuperare și restaurare a auzului „'+offer_params.productName+'” a fost realizată cu sprijinul fundațiilor private, datorită cărora remediul este eliberat la un preț simbolic în cadrul unui beneficiu special. '
}, {
    m: '“'+offer_params.productName+'” este destinat pentru recuperarea și reabilitării complete a complicațiilor progresive și a pierderii auzului în orice stadiu al bolii. Eficacitatea produsului conform datelor cercetării este de 97,9% și, prin urmare, „'+offer_params.productName+'” pur și simplu nu are analogi, atât în ​​țara noastră, cât și în străinătate! '
}, {
    m: 'Deoarece numărul de BENEFICII pentru a obţine o formulă unică costisitoare de remediu este limitat, trebuie să rezervați un curs “'+offer_params.productName+'” până la ' + date + ' bazat pe  nevoile dvs. individuale de auz. Pentru a face acest lucru, vă rog să răspundeți sincer la câteva întrebări simple: '
}, {
    m: 'Sunteţi femeie sau bărbat? '
}, {
    m: 'Data dvs. de nastere? '
}, {
    m: 'Cât timp ați fost diagnosticat cu această tulburare de auz? '
}, {
    m: 'Cum se manifestă cel mai des simptomele bolii? '
}, {
    m: 'Purtați aparat auditiv? '
}, {
    m: 'Nu vreau să vă sperii, dar această etapă a bolii vorbește despre amenințarea unei pierderi auditive ireversibile și invalidante. Mulți medici și clinici fără scrupule ascund acest lucru pentru a putea câștiga bani pe rețete de medicamente suzete. Trebuie să vă avertizez sincer că, odată cu o astfel de dezvoltare a bolii, metodele clasice de tratament nu numai că vor fi ineficiente, dar vor provoca și daune ireparabile. '
}, {
    m: 'Dacă nu luați măsuri sau continuați să luați medicamente prescrise de medici obișnuiți, în următorul an ocazia de a auzi această lume se va pierde pentru totdeauna. '
}, {
    m: 'Cu toate acestea, din moment ce ați vizitat portalul deschis al Centrului de ajutor al Organizației Sănătății, vă voi ajuta să rezervați cursul de recuperare a auzului rapid și eficient până la ' + date + ' și să obțineţi “'+offer_params.productName+'” la un preț preferenţial. '
}, {
    m: 'Toate costurile sunt acoperite de Organizația Sănătății cu sprijinul programului fundațiilor private. Trebuie doar să completaţi formularul de participare la programul preferențial  pentru a obţine “'+offer_params.productName+'”. '
}, {
    m: 'Atrag atenția: Datele dvs. sunt transferate direct în Centrul de ajutor în confidențialitate deplină! '
}]
console.log(massange);
var mass_id = 0;
var length_mass = 0;
var lengt_num_mas = 0;
var text = '';
var process = true;
setTimeout(() => {
    const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-image"></div><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
    $('.chat-content-list').append(body_mas);
    const mas_inf = setInterval(function() {
        if (process == true) {
            if (lengt_num_mas != massange.length) {
                text += massange[lengt_num_mas].m[length_mass];
                length_mass++
                $('#mass' + lengt_num_mas + '').html(text);
                if (lengt_num_mas === 7 && length_mass === massange[lengt_num_mas].m.length - 1) {
                    appGender();
                    process = false;
                    genderNext();
                }
                if (lengt_num_mas === 8 && length_mass === massange[lengt_num_mas].m.length - 1) {
                    appAge()
                    process = false;
                    genderNext();
                }
                if (lengt_num_mas === 9 && length_mass === massange[lengt_num_mas].m.length - 1) {
                    process = false;
                    prevN();
                }
                if (lengt_num_mas === 10 && length_mass === massange[lengt_num_mas].m.length) {
                    funcChackBoc();
                    process = false;
                }
                if (lengt_num_mas === 11 && length_mass === massange[lengt_num_mas].m.length - 1) {
                    process = false;
                    prevN2();
                }
                if (length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++
                    mass_id++
                    length_mass = 0;
                    text = '';
                    console.log(lengt_num_mas);
                    app();
                    let proc_scroling = lengt_num_mas - 1;
                    let nev_div = $('#mass' + proc_scroling + '')[0].offsetParent.offsetTop;
                    console.log(nev_div)
                    scriplongBody(nev_div);
                }
            } else {
                console.log('verj');
                clearInterval(mas_inf);
                $('#mass' + lengt_num_mas + '').parent().parent().css('display', 'none');
                $('#cont_form').css('display', 'block');
            }
        } else {}
    }, 40)
}, 1000)

function app() {
    const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-image"></div><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
    $('.chat-content-list').append(body_mas);
}

function myMassange(userGend) {
    let mass = '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="users_mass">' + userGend + '</p></div></div></div>';
    $('.chat-content-list').append(mass)
}

function appGender() {
    $('.chat-content-list').append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Bărbat</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Femeie</span></div></div>');
}

function genderNext() {
    $('.chooseGenderM').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Bărbat');
        setTimeout(() => {
            process = true;
        }, 500)
    })
    $('.chooseGenderW').click(() => {
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Femeie');
        setTimeout(() => {
            process = true;
        }, 500)
    })
}
var chaked_true = '';

function funcChackBoc() {
    function chack() {
        return `
        <div id="chekBoxOne">
            <label for="chek1"><input type="checkbox" id="chek1" title="Durerea și inflamația urechii externe sau interne.">Durerea și inflamația urechii externe sau interne.</label>
            <label for="chek2"><input type="checkbox" id="chek2" title="Ameţeală.">Ameţeală.</label>
            <label for="chek3"><input type="checkbox" id="chek3" title="Zgomot în urechi.">Zgomot în urechi.</label>
            <label for="chek4"><input type="checkbox" id="chek4" title="Scăderea auzului.">Scăderea auzului.</label>
            <label for="chek5"><input type="checkbox" id="chek5" title="Hipoacuzie parțială.">Hipoacuzie parțială.</label>
        </div>
        `
    }
    $('#mass10').append(chack());
    $('.chat-content-list').append('<div class="chat-content-buttons-gender" > <div class="chat-content-buttons-gender-block"><span style="display: none" id="checkNextt" class="chooseGender">Următoarea întrebare</span></div> </div>');
    var checkOne = 0;
    $('#chekBoxOne > label > input').click(function(e) {
        let chack = $('#chekBoxOne > label > input');
        chaked_true = '';
        chack.map((e) => {
            if (chack[e].checked == true) {
                chaked_true += chack[e].title + ' / ';
            }
        })
        if (chaked_true !== '') {
            $('#checkNextt').css('display', 'block');
        } else {
            $('#checkNextt').css('display', 'none');
        }
        console.log(chaked_true)
    })
    $('#checkNextt').on('click', function() {
        $(this).css('display', 'none');
        process = true;
    })
}

function appAge() {
    $('.chat-content-list').append('<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">Zi</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Lună</option>undefined<option value="1">Ianuarie</option><option value="2">Februarie</option><option value="3">Martie</option><option value="4">Aprilie</option><option value="5">Mai</option><option value="6">Iunie</option><option value="7">Iulie</option><option value="8">August</option><option value="9">Septembrie</option><option value="10">Octombrie</option><option value="11">Noiembrie</option><option value="12">Decembrie</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">An</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div></form>');
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
            $('#form_opr').css('display', 'none');
        }
        console.log(empty_field, full_month, year);
    }, 500);
}

/*function Photofoot() {
    $('.chat-content-list').append('<div class="foot"><img src="images/1_стадия.jpg" id="foot1"><img src="images/2_стадия.jpg" id="foot2"><img src="images/3_стадия.jpg" id="foot3"></div>');
    sendImg();
}*/

function prevN() {
    function seopN() {
        return `
        <div class="chat-content-buttons-gender">
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Mai puțin de 1 an în urmă">Mai puțin de 1 an în urmă</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Acum 1 - 3 ani">Acum 1 - 3 ani</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Acum 3-5 ani">Acum 3-5 ani</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Mai mult de 5 ani">Mai mult de 5 ani</span>
            </div>
        </div>
        
        `
    }
    $('.chat-content-list').append(seopN());
    let title = $('.chooseGenderW');
    title.map((e) => {
        title[e].onclick = function() {
            console.log(this.title)
            $('.chat-content-buttons-gender').css('display', 'none');
            myMassange('' + this.title + '');
            process = true;
        }
    })
}

function prevN2() {
    function seopN2() {
        return `
        <div class="chat-content-buttons-gender">
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Da, port tot timpul">Da, port tot timpul</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Nu, nu port">Nu, nu port</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Folosesc când este necesar">Folosesc când este necesar</span>
            </div>
        </div>
        
        `
    }
    $('.chat-content-list').append(seopN2());
    let title = $('.chooseGenderW');
    title.map((e) => {
        title[e].onclick = function() {
            console.log(this.title)
            $('.chat-content-buttons-gender').css('display', 'none');
            myMassange('' + this.title + '');
            process = true;
        }
    })
}

function YsNo() {
    function seop() {
        return `
        <div class="chat-content-buttons-gender">
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Плоскостопие">Плоскостопие</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Вальгусная деформация стопы">Вальгусная деформация стопы</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Хромота">Хромота</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Боли и воспаления">Боли и воспаления</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Повреждения связок и суставов">Повреждения связок и суставов</span>
            </div>
        </div>
        
        `
    }
    $('.chat-content-list').append(seop());
    let title = $('.chooseGenderM');
    title.map((e) => {
        title[e].onclick = function() {
            console.log(this.title)
            $('.chat-content-buttons-gender').css('display', 'none');
            myMassange('' + this.title + '');
            process = true;
        }
    })
}
let top_scroling = 0;

function scriplongBody(x) {
    let ekac_x = x + 70;
    top_scroling += ekac_x;
    var set = setTimeout(() => {
        $('#page_chat').animate({
            scrollTop: top_scroling
        }, 1000);
    }, 300)
}
setInterval(function() {
    let user_mass = $('.users_mass');
    var user_full_info = '';
    user_mass.map((e) => {
        let full_info = user_mass[e].innerText + '/';
        user_full_info += full_info;
    })
    $('input[name=comments]').val('' + user_full_info + ' ' + chaked_true);
}, 500)
setInterval(() => {
    let val = $('#val').text();
    let cur = $('#cur').text();
    $('.new_price_val').text(val);
    $('.new_price_cur').text(cur);
    $('.new_price_sig').text('ron');
}, 200)


$(function () {
    $('.screenLock').css({ height: $(document).height() + "px" });
    $('a.order-btn').click(function () {
        $(this).closest('form').submit();
        return false;
    });
    $('.demon_close, .popup_btn').click(function () {
        $('.screenLock').fadeOut(300);
    });
    var flag = true;
    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.screenLock').fadeIn(300);
            flag = false;
        }
    });
});