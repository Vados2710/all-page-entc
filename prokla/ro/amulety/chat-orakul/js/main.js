var url = window.cdn_path;
if (url === undefined) {
  url = '';
}
$(document).ready(function (e) {
  function t(e, t = !1, a = '') {
    var n = '',
      o = '',
      i = '';
    return (
      'manager' === e && (n = '<img class="chat-content-desc-image" src="img/avatar.png" alt="" />'),
      t && ((o = 'text-' + t), (i = ' class="p' + t + '"')),
      '<div class="chat-content-item ' +
        e +
        ' ' +
        o +
        '"><div class="chat-content-desc">' +
        n +
        '<div class="chat-content-desc-item ' +
        e +
        '"><p' +
        i +
        '>' +
        a +
        '</p></div></div></div>'
    );
  }
  function a(a) {
    $('.chat-content-buttons-gender').remove(),
      $('.chat-content-list').append(t('user')),
      $('.chat-content-item.user p').html(e.managerDialog[1][a].text),
      $('.chat-content-list').append(t('manager')),
      $('.chat-content-item.manager p').typed({
        strings: [e.managerDialog[2].text],
        showCursor: !1,
        callback: function () {
          setTimeout(function () {
            var n, o, r;
            $('.chat-content-list').append(
              '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">Nap</option>' +
                (function () {
                  for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++)
                    n += '<option value="' + i + '">' + i + '</option>';
                  return n;
                })() +
                '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">Hónap</option>' +
                ($.each(e.DateBirthday[0].month, function (e, t) {
                  o += '<option value="' + (e + 1) + '">' + t + '</option>';
                }),
                o) +
                '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">Év</option>' +
                (function () {
                  for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++)
                    r += '<option value="' + i + '">' + i + '</option>';
                  return r;
                })() +
                '</select></div></div></form>'
            ),
              e.Scroll();
            var c,
              s = [],
              d = $('form[name="questionForm"]');
            d.find('select').addClass('empty_field'),
              d.find('select').change(function () {
                if (
                  (d.find('select').each(function () {
                    '' != $(this).val() ? $(this).removeClass('empty_field') : $(this).addClass('empty_field'),
                      (s[this.name] = $(this).val());
                  }),
                  0 == d.find('.empty_field').size())
                ) {
                  d.remove();
                  var n = e.MonthVariantType[s.month - 1],
                    o = e.MonthVariant[n][0],
                    i = e.MonthVariant[n][1],
                    r = e.MonthVariant[n][2];
                  (c = [s.day, s.month]),
                    (c = e.getZodiak(c)),
                    (s.day = s.day.length > 1 ? s.day : '0' + s.day),
                    (s.month = s.month.length > 1 ? s.month : '0' + s.month),
                    $('.chat-content-list').append(t('user', 'date')),
                    $('.chat-content-item.user.text-date p').html(s.day + '.' + s.month + '.' + s.year);
                  var l = [],
                    m = [],
                    p = {
                      zodie: e.ZodiakName[c - 1].name,
                      date: s.day,
                      month1: o,
                      month2: i,
                      month3: r,
                      year: s.year,
                      number: e.randomIntFromInterval(4, 10),
                    };
                  $('.chat-content-list').append(t('manager', 'birthday'));
                  var u = e.userZodiak[0].text,
                    h = e.Replace(u, p);
                  $('.chat-content-item.manager p').typed({
                    strings: [h],
                    showCursor: !1,
                    callback: function () {
                      var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                      (l = $.merge(e.managerVariants[a][0][0], t)),
                        (l = $.merge(l, e.managerVariants[a][0][1])),
                        $.each(l, function (t, a) {
                          m.push(e.Replace(a.text, p));
                        }),
                        e.LoadListMessages(m, p.zodie);
                    },
                  });
                }
              });
          }, 1e3);
        },
      });
  }
  var n = document.querySelector('.country_action').innerHTML,
    o = offer_params.priceMain,
    r = offer_params.currencyMain;
  console.log(o),
    console.log(r),
    (e.randomIntFromInterval = function (e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }),
    (e.managerDialog = [
      {
        text:
          "Bună ziua, mă numesc <b style='color: rgb(134, 144, 254);'>Anna Johnson.</b> Sunt un oracol faimos american, deja am fost consilier al primelor persoane din SUA de mai multe ori." +
          'Bine ați venit pe site-ul meu oficial, unde organizez o consultație online și încerc să ajut oamenii să își rezolve problemele. <br> <br> Horoscopul meu nedefinit a uimit întreaga Europă. 3 semne ale zodiacului vor începe să se scalde în bani, iar 2 semne vor deveni cerșetori. <br><br> Pentru a obține un horoscop gratuit, răspundeți la 2 întrebări.',
      },
      { text: 'Sunteți femeie sau bărbat?', m: { text: 'Bărbat' }, w: { text: 'Femeie' } },
      { text: 'Când v-ați născut?' },
    ]),
    (e.userZodiak = [
      {
        text: "Mulțumesc. Conform horoscopului sunteți - {zodie}. <p class='hidden-zodie' style='display: none'>{zodie}</p>",
      },
    ]),
    (e.managerVariants = {
      w: [
        [
          [
            {
              text: 'Semn - {zodie} așteaptă o revoltă financiară în viitorul apropiat. Norocul financiar se află la fund în acest moment. V-ați refuzat de multe lucruri, datoriile vă bântuie. Sunteți însuși hotărât să respindeți banii și norocul financiar din viață.',
            },
            {
              text: 'Nu veți putea ieși din această groapă în următorii ani dacă nu faceți alegerea corectă, ceea ce va însemna o răsturnare financiară.',
            },
            {
              text: 'Sunteți acum pe drumul greșit. Ați ales deja calea pe care vă curge viața și nu există nici o cale de întoarcere. Nu vă place și încercați să-l schimbați sau să găsiți ajutor de la cineva care o poate face.',
            },
            {
              text: 'Văd clar că veți avea capacitatea nedefinită de a schimba vectorul ales. Această perioadă va fi favorabilă pentru schimbarea vieții sale, de la dungi negre la albe, până la sfârșitul vieți.',
            },
            {
              text: 'Totul în viața dvs. nu se întâmplă întâmplător. Semn {zodie} sunt foarte susceptibili la energie proastă. Trebuie să vă protejați și să atrageți norocul monetar către sine.',
            },
          ],
          [
            {
              text: 'Cum vă puteți proteja? Cum să atrageți banii și norocul către sine?',
            },
            {
              text: 'Vreau să vă avertizez imediat că, în situația dvs., conspirațiile obișnuite nu vor ajuta. Aici trebuie să fiți sigur și să vă uiți la rădăcina problemei. O simplă conspirație nu vă va rezolva problema, ci doar va înrăutăți situația.',
            },
            {
              text: 'Ajutorul meu constă în ceea că vă voi scăpa de semnul negru și vă voi curăța de influența jurământului de nefericire. Acest lucru va permite să vă eliberați norocul din captivitate.',
            },
            {
              text: 'Voi face o amuletă specială - mărgeaua Dzi cu nouă ochi cu o conspirație personală care vă va înlătura jurământul de nenorocire.',
            },
            { text: `Așa va arăta amuleta dvs.` },
            { text: `<p><img src='${url}prod.png'/></p>` },
            { text: '<b>De ce aveți nevoie de amuletă - mărgeaua Dzi cu nouă ochi.</b>' },
            {
              text: 'Această amuletă vă va schimba radical viața într-o lună - toate datoriile dvs. vor dispărea. Banii vă vor reveni din diferite surse, puteți uita de nenorocirile financiare și de economisirea banilor pentru tot restul vieții.',
            },
            {
              text:
                'Mă strădui mereu să îi ajut pe oameni să-și rezolve problemele sale și nu mă strădui niciodată să mă îmbogățesc pe contul ăsta. Anume de aceea, până la ' +
                ((d = new Date()),
                (p = new Date(d.getTime() - 0)),
                (monthA =
                  'január, február, március, április, május, június, július, augusztus, szeptember, október, november, december'.split(
                    ','
                  )),
                p.getDate() + ' ' + monthA[p.getMonth()]) +
                ' inclusiv, puteți primi o reducere de 90% pentru amuletă - mărgea Dzi cu nouă ochi. Preț cu reducere pentru doar <b class="new_price_val">' +
                o +
                '</b> <b class="new_price_cur">' +
                r +
                '</b>',
            },
            {
              text: 'Pentru a primi amuleta, doar înregistrați numele și numărul de telefon în formularul de comandă.',
            },
          ],
        ],
      ],
      m: [
        [
          [
            {
              text: 'A - {zodie} jegyre pénzügyi nehézségek várnak a közeljövőben. A pénzügyi szerencse most nem áll ön mellett. Ön sok mindenről lemond, az adósságok nem hagyják nyugodni. Ön saját maga taszítja ki életéből a pénzt és a szerencsét.',
            },
            {
              text: 'Az elkövetkező években ön nem tud kimászni ebből a gödörből, ha nem dönt helyesen, ami a pénzügyekbeli változást fogja jelenteni.',
            },
            {
              text: 'Most nem a helyes úton jár. Most már kiválasztotta azt az utat, amelyen keresztül az élete halad és nincs visszaút. Önnek ez nem tetszik és igyekszik megváltoztatni vagy megtalálni azt, aki segítséget nyújthat ennek a végrehajtásában.',
            },
            {
              text: 'Világosan látom, hogy önnek lehetősége lesz az ön által kiválasztott vektor megváltoztatására. Ez egy kedvező időszak lesz élete jobb irányba változtatására, élete végéig.',
            },
            {
              text: 'Életében semmi sem történik véletlenül. A Halak jegy nagyon fogékony a rossz energiára. Meg kell védenie magát és magához kell vonzania a pénzügyi szerencsét.',
            },
          ],
          [
            {
              text: 'Hogyan védheti meg magát? Hogyan vonzza magához a pénzt és a szerencsét?',
            },
            {
              text: 'Azonnal figyelmeztetni szeretném, hogy az ön helyzetében a hétköznapi ráolvasások nem segítenek. Itt magabiztosan kell cselekedni és a probléma gyökerét kell megvizsgálni. Egy egyszerű ráolvasás nem képes megoldani a problémáját, csak ront a helyzeten.',
            },
            {
              text: 'Segítségem abban fog állni, hogy megszabadítom önt a fekete igézettől és megtisztítom a szerencsétlenség rontásának befolyásától. Ez kiszabadítja szerencséjét a fogságból.',
            },
            {
              text: 'Készítek egy speciális kilenc szemű dzi gyöngy amulettet személyre szóló ráolvasással, amely leveszi önről a szerencsétlenség rontását.',
            },
            { text: `Így fog kinézni az ön amulettje. ` },
            { text: `<p><img src='${url}prod.png'/></p>` },
            { text: '<b>Miért van szüksége a kilenc szemű dzi gyöngy amulettre.</b>' },
            {
              text: 'Ez az amulett már egy hónap múlva kardinálisan megváltoztatja az életét – minden adóssága eltűnik. A pénz különböző forrásokból árad önhöz, ön élete végéig elfelejtheti a pénzügyi kudarcokat és a spórolást.',
            },
            {
              text:
                'Mindig igyekszem segíteni az embereknek problémáik megoldásában és sohasem igyekszem hasznot húzni ebből. Éppen ezért Ön ' +
                ((d = new Date()),
                (p = new Date(d.getTime() - 0)),
                (monthA =
                  'január, február, március, április, május, június, július, augusztus, szeptember, október, november, december'.split(
                    ','
                  )),
                p.getDate() + ' ' + monthA[p.getMonth()]) +
                '.-ig 90% kedvezményt kap a kilenc szemű dzi gyöngy amulettre. Az ár kedvezményesen mindössze.  <b class="new_price_val">' +
                o +
                '</b> <b class="new_price_cur">' +
                r +
                '</b>',
            },
            { text: 'Hogy megkapja az amulettet, csak írja be nevét és telefonszámát a megrendelőlapba.' },
          ],
        ],
      ],
    }),
    (e.socNumber = [
      {
        text:
          'Szent számod - {number}. Ez azt jelenti, hogy ' +
          ((d = new Date()),
          (p = new Date(d.getTime() - 0)),
          (monthA =
            'január, február, március, április, május, június, július, augusztus, szeptember, október, november, december'.split(
              ','
            )),
          p.getDate() + ' ' + monthA[p.getMonth()]) +
          ' az életed drámai módon javulhat.',
      },
    ]),
    (e.Forms = function (t) {
      e.FormsParams = {
        method: 'POST',
        action: '',
        inputs: [
          { name: 'name', value: '', placeholder: 'Adja meg nevét', type: 'text', required: !0 },
          { name: 'phone', value: '', placeholder: 'Írja be telefonját', type: 'tel', required: !0 },
        ],
        btn_text: 'Rendeljen kabala táskát',
        title: 'Rendelési űrlap <br> egy kabala táskához ' + o + r,
      };
      return function () {
        document.getElementById('cont_form').style.display = 'block';
      };
    }),
    (e.getZodiak = function (t) {
      var a = parseInt(t[0]);
      switch (parseInt(t[1])) {
        case 1:
          e.zodiak = a < 20 ? 10 : 11;
          break;
        case 2:
          e.zodiak = a < 19 ? 11 : 12;
          break;
        case 3:
          e.zodiak = a < 21 ? 12 : 1;
          break;
        case 4:
          e.zodiak = a < 20 ? 1 : 2;
          break;
        case 5:
          e.zodiak = a <= 21 ? 2 : 3;
          break;
        case 6:
          e.zodiak = a < 21 ? 3 : 4;
          break;
        case 7:
          e.zodiak = a < 23 ? 4 : 5;
          break;
        case 8:
          e.zodiak = a < 23 ? 5 : 6;
          break;
        case 9:
          e.zodiak = a < 23 ? 6 : 7;
          break;
        case 10:
          e.zodiak = a < 23 ? 7 : 8;
          break;
        case 11:
          e.zodiak = a < 22 ? 8 : 9;
          break;
        case 12:
          e.zodiak = a < 22 ? 9 : 10;
      }
      return e.zodiak;
    }),
    (e.ZodiakName = [
      { name: 'Kos', id: 1 },
      { name: 'Bika', id: 2 },
      { name: 'Ikrek', id: 3 },
      { name: 'Rák', id: 4 },
      { name: 'Oroszlán', id: 5 },
      { name: 'Szűz', id: 6 },
      { name: 'Mérleg', id: 7 },
      { name: 'Skorpió', id: 8 },
      { name: 'Nyilas', id: 9 },
      { name: 'Bak', id: 10 },
      { name: 'Vízöntő', id: 11 },
      { name: 'Halak', id: 12 },
    ]),
    (e.DateBirthday = [
      {
        day: [1, 31],
        month: [
          'január',
          'február',
          'március',
          'aprilis',
          'lehet',
          'június',
          'július',
          'augusztus',
          'szeptember',
          'október',
          'november',
          'december',
        ],
        year: [1940, 2019],
      },
    ]),
    (e.MonthVariantType = [
      'january',
      'fabruary',
      'march',
      'april',
      'may',
      'june',
      'august',
      'august',
      'september',
      'october',
      'november',
      'december',
    ]),
    (e.MonthVariant = {
      january: ['január', 'január', 'január'],
      fabruary: ['február', 'február', 'február'],
      march: ['március', 'március', 'március'],
      april: ['aprilis', 'április', 'április'],
      may: ['lehet', 'lehet', 'lehet'],
      june: ['június', 'június', 'június'],
      july: ['július', 'július', 'július'],
      august: ['augusztus', 'augusztus', 'augusztus'],
      september: ['szeptember', 'szeptember', 'szeptember'],
      october: ['október', 'október', 'október'],
      november: ['november', 'november', 'november'],
      december: ['december', 'december', 'december'],
    }),
    (e.Scroll = function () {
      $(document).ready(function () {
        !(function (e, t = function () {}, a = []) {
          (e = jQuery(e)), (t = t.bind(e));
          var n = -1,
            o = -1;
          setInterval(function () {
            (e.height() == n && e.width() == o) ||
              ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
          }, 100);
        })('.chat-content-container .chat-content-list', function (e) {}, []);
      });
    }),
    (e.Replace = function (e, t) {
      var a = e;
      return (
        Object.entries(t).forEach((e) => {
          var t = '{' + e[0] + '}',
            n = new RegExp(t, 'g');
          a = a.replace(n, e[1]);
        }),
        a
      );
    }),
    (e.LoadListMessages = function (a, n) {
      var o,
        i = 1,
        r = 1,
        c = { showCursor: !1 };
      for (o = a.length; i < o + 1; i++)
        (c.onStringTyped = function () {
          ++r < o + 1 &&
            ((c.array_id = r),
            (c.strings = [a[r - 1]]),
            $('.chat-content-list').append(t('manager', r)),
            $('.chat-content-item.manager p.p' + r).typed(c),
            e.Scroll()),
            r == o + 1 &&
              setTimeout(function () {
                $('.chat-content-list').append(e.Forms(n)), e.Scroll();
              }, 1500);
        }),
          1 == i &&
            ((c.array_id = i),
            (c.strings = [a[i - 1]]),
            $('.chat-content-list').append(t('manager', i)),
            $('.chat-content-item.manager p.p' + i).typed(c),
            e.Scroll());
    }),
    $(window).on('load', function () {
      $('.chat-content-list').append(t('manager')),
        e.Scroll(),
        $('.chat-content-item.manager p').typed({
          strings: [e.managerDialog[0].text],
          showCursor: !1,
          callback: function () {
            setTimeout(function () {
              $('.chat-content-list').append(t('manager')),
                e.Scroll(),
                $('.chat-content-item.manager p').typed({
                  strings: [e.managerDialog[1].text],
                  showCursor: !1,
                  callback: function () {
                    setTimeout(function () {
                      var t;
                      e.Scroll(),
                        $('.chat-content-list').append(
                          '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                            (t = e.managerDialog[1]).m.text +
                            '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                            t.w.text +
                            '</span></div></div>'
                        ),
                        e.Scroll(),
                        $('.chooseGender').on('click', function () {
                          a($(this).data('type'));
                        });
                    }, 1e3);
                  },
                });
            }, 1e3);
          },
        });
    });
});

if (document.body.classList.contains('ev-date')) {
  // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
  // Працює як в порядку спадання, так і в порядку зростання.
  document.addEventListener('DOMContentLoaded', Datee);

  function Datee() {
    var msInDay = 86400000,
      counterLength = 90,
      months,
      countryName = 'id', // Встановлюємо мову для місяців.
      isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
      localDate = new Date();

    switch (countryName) {
      case 'lv': // Latvia латышский
        months = [
          'Janvāris',
          'Februāris',
          'Marts',
          'Aprīlis',
          'Maijs',
          'Jūnijs',
          'Jūlijs',
          'Augusts',
          'Septembris',
          'Oktobris',
          'Novembris',
          'Decembris',
        ];
        break;
      case 'lt': // Litva литовский
        months = [
          'Sausis',
          'Vasaris',
          'Kovas',
          'Balandis',
          'Gegužės',
          'Birželis',
          'Liepa',
          'Rugpjūtis',
          'Rugsėjis',
          'Spalis',
          'Lapkritis',
          'Gruodis',
        ];
        break;
      case 'it': // Italy
        months = [
          'Gennaio',
          'Febbraio',
          'Marzo',
          'Aprile',
          'Maggio',
          'Giugno',
          'Luglio',
          'Agosto',
          'Settembre',
          'Ottobre',
          'Novembre',
          'Dicembre',
        ];
        break;
      case 'es': // Spain
        months = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ];
        break;
      case 'fr': // France
        months = [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre',
        ];
        break;
      case 'pt': // Portugal
        months = [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ];
        break;
      case 'de': // Germany
        months = [
          'Januar',
          'Februar',
          'März',
          'April',
          'Mai',
          'Juni',
          'Juli',
          'August',
          'September',
          'Oktober',
          'November',
          'Dezember',
        ];
        break;
      case 'bg': // Bulgaria
        months = [
          'Януари',
          'Февруари',
          'Март',
          'Април',
          'Май',
          'Юни',
          'Юли',
          'Август',
          'Септември',
          'Октомври',
          'Ноември',
          'Декември',
        ];
        break;
      case 'pl': // Poland
        months = [
          'Stycznia',
          'Lutego',
          'Marca',
          'Kwietnia',
          'Maja',
          'Czerwca',
          'Lipca',
          'Sierpnia',
          'Września',
          'Października',
          'Listopada',
          'Grudnia',
        ];
        break;
      case 'ro': // Romania
        months = [
          'Ianuarie',
          'Februarie',
          'Martie',
          'Aprilie',
          'Mai',
          'Iunie',
          'Iulie',
          'August',
          'Septembrie',
          'Octombrie',
          'Noiembrie',
          'Decembrie',
        ];
        break;
      case 'id': // Indonesia
        months = [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'Nopember',
          'Desember',
        ];
        break;
      case 'hu': // Hungary (Румунія)
        months = [
          'Január',
          'Február',
          'Március',
          'Április',
          'Május',
          'Június',
          'Július',
          'Augusztus',
          'Szeptember',
          'Október',
          'November',
          'December',
        ];
        break;
      case 'gr': // Greece
      case 'cy': // Cyprus (Кіпр)
        months = [
          'Ιανουάριος',
          'Φεβρουάριος',
          'Μάρτιος',
          'Απρίλιος',
          'Μάιος',
          'Ιούνιος',
          'Ιούλιος',
          'Αύγουστος',
          'Σεπτέμβριος',
          'Οκτώβριος',
          'Νοέμβριος',
          'Δεκέμβριος',
        ];
        break;
      case 'ar': // Арабский
        months = [
          'يناير',
          'فبراير',
          'مسيرة',
          'أبريل',
          'قد',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر',
        ];
        break;
      case 'th': // Тайский
        months = [
          'มกราคม',
          'กุมภาพันธ์',
          'มีนาคม',
          'เมษายน',
          'พฤษภาคม',
          'มิถุนายน',
          'กรกฎาคม',
          'สิงหาคม',
          'กันยายน',
          'ตุลาคม',
          'พฤศจิกายน',
          'ธันวาคม',
        ];
        break;
      case 'ru': // Русский
        months = [
          'Января',
          'Февраля',
          'Марта',
          'Апреля',
          'Мая',
          'Июня',
          'Июля',
          'Августа',
          'Сентября',
          'Октября',
          'Ноября',
          'Декабря',
        ];
        break;
      case 'ua': // Українська
        months = [
          'Січня',
          'Лютого',
          'Березня',
          'Квітня',
          'Травня',
          'Червня',
          'Липня',
          'Серпня',
          'Вересня',
          'Жовтня',
          'Листопада',
          'Грудня',
        ];
        break;
      case 'en': // Английский
        months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        break;
      case 'ge': // Грузинский
        months = [
          'იანვარი',
          'თებერვალი',
          'მარტი',
          'აპრილი',
          'მაისი',
          'ივნისი',
          'ივლისი',
          'აგვისტო',
          'სექტემბერი',
          'ოქტომბერი',
          'ნოემბერი',
          'დეკემბერი',
        ];
        break;
      case 'kz': // Казахский
        months = [
          'Қаңтар',
          'Ақпан',
          'Марш',
          'Сәуір',
          'Мүмкін',
          'Маусым',
          'Шілде',
          'Тамыз',
          'Қыркүйек',
          'Қазан',
          'Қараша',
          'Желтоқсан',
        ];
        break;
      case 'sk': // Словацкий
        months = [
          'január',
          'február',
          'marec',
          'apríl',
          'máj',
          'júna',
          'júl',
          'august',
          'septembra',
          'október',
          'november',
          'december',
        ];
        break;
      case 'cz': // Czech
        months = [
          'Leden',
          'Únor',
          'Březen',
          'Duben',
          'Květen',
          'Červen',
          'Červenec',
          'Srpen',
          'Září',
          'Říjen',
          'Listopad',
          'Prosinec',
        ];
        break;
      case 'hr': // Хорватский
        months = [
          'siječanj',
          'veljača',
          'ožujak',
          'travanj',
          'svibanj',
          'lipanj',
          'srpanj',
          'kolovoz',
          'rujan',
          'listopad',
          'studeni',
          'prosinac',
        ];
        break;
      case 'sl': // Словенский
        months = [
          'Januarja',
          'Februarja',
          'Marca',
          'Aprila',
          'Maja',
          'Junija',
          'Julija',
          'Avgusta',
          'Septembra',
          'Oktobra',
          'Novembra',
          'Decembra',
        ];
        break;
      case 'nl': // Нидерландский
        months = [
          'januari',
          'februari',
          'maart',
          'april',
          'mei',
          'juni',
          'juli',
          'augustus',
          'september',
          'oktober',
          'november',
          'december',
        ];
        break;
      case 'vi': // Вьетнамский
        months = [
          'tháng một',
          'tháng hai',
          'diễu hành',
          'tháng tư',
          'có thể',
          'tháng sáu',
          'tháng bảy',
          'tháng tám',
          'tháng chín',
          'tháng mười',
          'tháng mười một',
          'Tháng 12',
        ];
        break;
      case 'my': // Малайский
        months = [
          'Januari',
          'Februari',
          'Mac',
          'April',
          'Mei',
          'Jun',
          'Julai',
          'Ogos',
          'September',
          'Oktober',
          'November',
          'Disember',
        ];
        break;
      case 'mm': // Бирманский
        months = [
          'ဇန်နဝါရီ',
          'ဖေဖော်ဝါရီလ',
          'ချီတက်',
          '.ပြီလ',
          'မေ',
          'ဇွန်',
          'ဇူလိုင်',
          'သြဂုတ်',
          'စက်တင်ဘာ',
          'အောက်တိုဘာ',
          'နိုဝင်ဘာ',
          'ဒီဇင်ဘာ',
        ];
        break;
      case 'in': // Хинди (Индия)
        months = [
          'जनवरी',
          'फरवरी',
          'मार्च',
          'अप्रैल',
          'मई',
          'जून',
          'जुलाई',
          'अगस्त',
          'सितंबर',
          'अक्टूबर',
          'नवंबर',
          'दिसंबर',
        ];
        break;
      case 'tw': // Китайский (Тайвань)
        months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        break;
      case 'bd': // Бенгальский (Бангладеш)
        months = [
          'জানুয়ারী',
          'ফেব্রুয়ারি',
          'এপ্রিল',
          'মে',
          'জুন',
          'জুলাই',
          'অগাস্ট',
          'অগাস্ট',
          'সেপ্টেম্বর',
          'অক্টোবর',
          'নভেম্বর',
          'ডিসেম্বর',
        ];
        break;
    }
    if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
        months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
    }

    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = 'date-' + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() - counter * msInDay),
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
        if (/\btime\b/.test(nodeList[i].className)) {
          nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
          timeCounter++;
        }
      }
    }

    // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = 'date' + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() + counter * msInDay),
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
      }
    }

    function time(nodeList, reverse) {
      var timeArray = [];

      for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i].className.match(/\btime\b/)) {
          timeArray.push(timeRandom());
        }
      }

      if (reverse)
        timeArray.sort(function (a, b) {
          return b - a;
        });
      else
        timeArray.sort(function (a, b) {
          return a - b;
        });

      return timeArray;
    }

    function timeRandom() {
      return Math.round(0 + Math.random() * 1440);
    }

    function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
        var htemp = Math.floor(timearray[i] / 60),
          mtemp = timearray[i] % 60,
          hours = htemp < 10 ? '0' + htemp : htemp,
          minutes = mtemp < 10 ? '0' + mtemp : mtemp;
        array.push(hours + ':' + minutes);
      }

      return array;
    }

    function format(date, formatstring) {
      var innerDate = '',
        day = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        fo = formatstring || true;

      switch (fo) {
        case 'yyyy':
          innerDate += '' + year;
          return innerDate;

        case 'yyyy-1':
          innerDate += '' + year - 1;
          return innerDate;

        case 'yyyy-2':
          innerDate += '' + year - 2;
          return innerDate;

        case 'mm.dd.yyyy':
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.' + year;
          return innerDate;

        case 'month':
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

        case 'dd':
          innerDate += day < 10 ? '0' + day : day;
          return innerDate;

        case 'dd month':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

        case 'dd month yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          innerDate += ' ' + year;
          return innerDate;

        case 'day dd, month yyyy':
          var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
          innerDate += days[new Date(year, month - 1, day).getDay()];
          innerDate += ' ';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1];
          innerDate += ' ' + year;
          return innerDate;

        case 'dd/mm/yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '/';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '/' + year;
          return innerDate;

        case 'dd-mm-yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '-';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '-' + year;
          return innerDate;

        default:
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.' + year;
          return innerDate;
      }
    }
  }
}
$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});
