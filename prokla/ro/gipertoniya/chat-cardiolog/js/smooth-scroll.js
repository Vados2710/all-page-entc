/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
  !Element.prototype.closest &&
  (Element.prototype.closest = function (e) {
    var t,
      n = (this.document || this.ownerDocument).querySelectorAll(e),
      o = this;
    do {
      for (t = n.length; 0 <= --t && n.item(t) !== o; );
    } while (t < 0 && (o = o.parentElement));
    return o;
  }),
  (function () {
    if ('function' == typeof window.CustomEvent) return;
    function e(e, t) {
      t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
      var n = document.createEvent('CustomEvent');
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }
    (e.prototype = window.Event.prototype), (window.CustomEvent = e);
  })(),
  (function () {
    for (var r = 0, e = ['ms', 'moz', 'webkit', 'o'], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
      (window.requestAnimationFrame = window[e[t] + 'RequestAnimationFrame']),
        (window.cancelAnimationFrame =
          window[e[t] + 'CancelAnimationFrame'] || window[e[t] + 'CancelRequestAnimationFrame']);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (e, t) {
        var n = new Date().getTime(),
          o = Math.max(0, 16 - (n - r)),
          a = window.setTimeout(function () {
            e(n + o);
          }, o);
        return (r = n + o), a;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (e) {
          clearTimeout(e);
        });
  })(),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define([], function () {
          return t(e);
        })
      : 'object' == typeof exports
      ? (module.exports = t(e))
      : (e.SmoothScroll = t(e));
  })('undefined' != typeof global ? global : 'undefined' != typeof window ? window : this, function (q) {
    'use strict';
    var I = {
        ignore: '[data-scroll-ignore]',
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: 'easeInOutCubic',
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0,
      },
      F = function () {
        var n = {};
        return (
          Array.prototype.forEach.call(arguments, function (e) {
            for (var t in e) {
              if (!e.hasOwnProperty(t)) return;
              n[t] = e[t];
            }
          }),
          n
        );
      },
      r = function (e) {
        '#' === e.charAt(0) && (e = e.substr(1));
        for (var t, n = String(e), o = n.length, a = -1, r = '', i = n.charCodeAt(0); ++a < o; ) {
          if (0 === (t = n.charCodeAt(a)))
            throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
          (1 <= t && t <= 31) ||
          127 == t ||
          (0 === a && 48 <= t && t <= 57) ||
          (1 === a && 48 <= t && t <= 57 && 45 === i)
            ? (r += '\\' + t.toString(16) + ' ')
            : (r +=
                128 <= t ||
                45 === t ||
                95 === t ||
                (48 <= t && t <= 57) ||
                (65 <= t && t <= 90) ||
                (97 <= t && t <= 122)
                  ? n.charAt(a)
                  : '\\' + n.charAt(a));
        }
        return '#' + r;
      },
      L = function () {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      },
      x = function (e) {
        return e ? ((t = e), parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
        var t;
      },
      H = function (e, t, n, o) {
        if (t.emitEvents && 'function' == typeof q.CustomEvent) {
          var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } });
          document.dispatchEvent(a);
        }
      };
    return function (o, e) {
      var A,
        a,
        O,
        C,
        M = {};
      (M.cancelScroll = function (e) {
        cancelAnimationFrame(C), (C = null), e || H('scrollCancel', A);
      }),
        (M.animateScroll = function (i, c, e) {
          M.cancelScroll();
          var s = F(A || I, e || {}),
            u = '[object Number]' === Object.prototype.toString.call(i),
            t = u || !i.tagName ? null : i;
          if (u || t) {
            var l = q.pageYOffset;
            s.header && !O && (O = document.querySelector(s.header));
            var n,
              o,
              a,
              m,
              r,
              d,
              f,
              h,
              p = x(O),
              g = u
                ? i
                : (function (e, t, n, o) {
                    var a = 0;
                    if (e.offsetParent) for (; (a += e.offsetTop), (e = e.offsetParent); );
                    return (a = Math.max(a - t - n, 0)), o && (a = Math.min(a, L() - q.innerHeight)), a;
                  })(t, p, parseInt('function' == typeof s.offset ? s.offset(i, c) : s.offset, 10), s.clip),
              y = g - l,
              v = L(),
              w = 0,
              S =
                ((n = y),
                (a = (o = s).speedAsDuration ? o.speed : Math.abs((n / 1e3) * o.speed)),
                o.durationMax && a > o.durationMax
                  ? o.durationMax
                  : o.durationMin && a < o.durationMin
                  ? o.durationMin
                  : parseInt(a, 10)),
              E = function (e, t) {
                var n,
                  o,
                  a,
                  r = q.pageYOffset;
                if (e == t || r == t || (l < t && q.innerHeight + r) >= v)
                  return (
                    M.cancelScroll(!0),
                    (o = t),
                    (a = u),
                    0 === (n = i) && document.body.focus(),
                    a ||
                      (n.focus(),
                      document.activeElement !== n &&
                        (n.setAttribute('tabindex', '-1'), n.focus(), (n.style.outline = 'none')),
                      q.scrollTo(0, o)),
                    H('scrollStop', s, i, c),
                    !(C = m = null)
                  );
              },
              b = function (e) {
                var t, n, o;
                m || (m = e),
                  (w += e - m),
                  (d =
                    l +
                    y *
                      ((n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r),
                      'easeInQuad' === (t = s).easing && (o = n * n),
                      'easeOutQuad' === t.easing && (o = n * (2 - n)),
                      'easeInOutQuad' === t.easing && (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                      'easeInCubic' === t.easing && (o = n * n * n),
                      'easeOutCubic' === t.easing && (o = --n * n * n + 1),
                      'easeInOutCubic' === t.easing &&
                        (o = n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                      'easeInQuart' === t.easing && (o = n * n * n * n),
                      'easeOutQuart' === t.easing && (o = 1 - --n * n * n * n),
                      'easeInOutQuart' === t.easing && (o = n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                      'easeInQuint' === t.easing && (o = n * n * n * n * n),
                      'easeOutQuint' === t.easing && (o = 1 + --n * n * n * n * n),
                      'easeInOutQuint' === t.easing &&
                        (o = n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                      t.customEasing && (o = t.customEasing(n)),
                      o || n)),
                  q.scrollTo(0, Math.floor(d)),
                  E(d, g) || ((C = q.requestAnimationFrame(b)), (m = e));
              };
            0 === q.pageYOffset && q.scrollTo(0, 0),
              (f = i),
              (h = s),
              u ||
                (history.pushState &&
                  h.updateURL &&
                  history.pushState(
                    { smoothScroll: JSON.stringify(h), anchor: f.id },
                    document.title,
                    f === document.documentElement ? '#top' : '#' + f.id
                  )),
              'matchMedia' in q && q.matchMedia('(prefers-reduced-motion)').matches
                ? q.scrollTo(0, Math.floor(g))
                : (H('scrollStart', s, i, c), M.cancelScroll(!0), q.requestAnimationFrame(b));
          }
        });
      var t = function (e) {
          if (
            !e.defaultPrevented &&
            !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
            'closest' in e.target &&
            (a = e.target.closest(o)) &&
            'a' === a.tagName.toLowerCase() &&
            !e.target.closest(A.ignore) &&
            a.hostname === q.location.hostname &&
            a.pathname === q.location.pathname &&
            /#/.test(a.href)
          ) {
            var t, n;
            try {
              t = r(decodeURIComponent(a.hash));
            } catch (e) {
              t = r(a.hash);
            }
            if ('#' === t) {
              if (!A.topOnEmptyHash) return;
              n = document.documentElement;
            } else n = document.querySelector(t);
            (n = n || '#top' !== t ? n : document.documentElement) &&
              (e.preventDefault(),
              (function (e) {
                if (history.replaceState && e.updateURL && !history.state) {
                  var t = q.location.hash;
                  (t = t || ''),
                    history.replaceState(
                      { smoothScroll: JSON.stringify(e), anchor: t || q.pageYOffset },
                      document.title,
                      t || q.location.href
                    );
                }
              })(A),
              M.animateScroll(n, a));
          }
        },
        n = function (e) {
          if (
            null !== history.state &&
            history.state.smoothScroll &&
            history.state.smoothScroll === JSON.stringify(A)
          ) {
            var t = history.state.anchor;
            ('string' == typeof t && t && !(t = document.querySelector(r(history.state.anchor)))) ||
              M.animateScroll(t, null, { updateURL: !1 });
          }
        };
      M.destroy = function () {
        A &&
          (document.removeEventListener('click', t, !1),
          q.removeEventListener('popstate', n, !1),
          M.cancelScroll(),
          (C = O = a = A = null));
      };
      return (
        (function () {
          if (
            !(
              'querySelector' in document &&
              'addEventListener' in q &&
              'requestAnimationFrame' in q &&
              'closest' in q.Element.prototype
            )
          )
            throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
          M.destroy(),
            (A = F(I, e || {})),
            (O = A.header ? document.querySelector(A.header) : null),
            document.addEventListener('click', t, !1),
            A.updateURL && A.popstate && q.addEventListener('popstate', n, !1);
        })(),
        M
      );
    };
  });
var url = window.cdn_path;
if (url === undefined) {
  url = '';
}
window.addEventListener('load', function () {
  var MSG_DELAY = 1000;
  var TYPE_SPEED = 1; /* def 50*/

  var flow = [
    {
      type: 'text',
      content:
        'Bună ziua! Mă numesc Dragoș Păunescu. Sunt medic cardiolog, specialist principal al României. Bine ați venit pe site-ul meu oficial. ',
    },
    {
      type: 'text',
      content:
        'Aici efectuez diagnostice gratuite și ofer recomandări individuale care au ajutat sute de femei și bărbați să normalizeze tensiunea arterială. ',
    },
    {
      type: 'text',
      content: 'Pentru a primi recomandările mele, vă rog să răspundeți la câteva întrebări.  ',
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Ce tensiune arterială aveți?</span>',
      answers: ['Crescută', 'Scăzută', 'Valori diferite', 'Nu știu'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Cât de des aveți dificultăți de respirație?</span>',
      answers: ['Zilnic', 'O dată pe săptămână', 'O dată pe lună', 'Rareori'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Cât de des aveți tahicardie?</span>',
      answers: ['Zilnic', 'O dată pe săptămână', 'O dată pe lună', 'Rareori'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Aveți dureri în zona inimii?</span>',
      answers: ['Da', 'Nu', 'Deseori', 'Rareori'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Cât de des aveți cefalee?</span>',
      answers: ['Zilnic', 'O dată pe săptămână', 'O dată pe lună', 'Rareori'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Aveți zgomot în urechi?</span>',
      answers: ['Da', 'Nu', 'Zgomot constant', 'Uneori, un sunet ascuțit'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Aveți un regim alimentar corect?</span>',
      answers: [
        'Da, exclud mâncărurile prăjite și sărate',
        'În mare parte alimentație incorectă',
        'Uneori',
        'Mănânc multe dulciuri',
      ],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Ați luat vreun medicament?</span>',
      answers: ['Pastile', 'Siropuri', 'Injecții', 'Nimic'],
    },
    {
      type: 'single_choice',
      content: '<span class="quest">Ce vârstă aveți?</span>',
      answers: ['Până la 30 de ani', '31-50 de ani', '51-60 de ani', 'Peste 60 de ani'],
    },
    {
      type: 'text',
      content: 'Vă mulțumesc pentru răspunsuri. ',
    },
    {
      type: 'text',
      content:
        'Cazul dumneavoastră este unul complicat. Încercați să rețineți informațiile pe care le voi oferi acum. ',
    },
    {
      type: 'text',
      content: `Odată cu vârsta, în vasele de sânge se acumulează colesterol și alte substanțe, deoarece deseori avem o alimentație incorectă, consumăm alcool, fumăm, ne enervăm. Vasele de sânge se murdăresc asemeni țevilor ruginite. Pe pereți se depun straturi de colesterol, la fel se acumulează în sinuozități. <br> <img class='box-img' src='${url}images/content-3.jpg'>`,
    },
    {
      type: 'text',
      content: `Drept urmare, lumenul vaselor se îngustează, cantitatea de sânge transportată spre organe scade. Organele îndură foame și se îmbolnăvesc. Imaginați-vă ce s-ar întâmpla dacă ați începe să mâncați de 3, de 5 ori mai puțin decât acum. Organismul ar slăbi, același lucru se întâmplă și cu organele noastre interne.<br> <img class='box-img' src='${url}images/content-2.jpg'> `,
    },
    {
      type: 'text',
      content:
        'Pentru a normaliza tensiunea arterială și circulația sanguină în organe este necesar să curățăm vasele de sânge. Acesta e tot secretul.',
    },
    {
      type: 'text',
      content:
        'Înainte trebuia să comandați ierburi speciale de peste hotare, să preparați tincturi din ele și să curățați vasele luni de zile. Acum nu mai este nevoie, iar procesul de curățare durează doar 4 săptămâni!  ',
    },
    {
      type: 'text',
      content: 'Există un produs excelent numit '+offer_params.productName+'. Este special conceput pentru curățarea vaselor de sânge. Nu trebuie decât să utilizați produsul de 2 ori pe zi timp de o lună și atât. <br> <img class="box-img" src="prod.png">',
    },
    {
      type: 'text',
      content:
        'Am cercetat acest produs în laborator, în 4 săptămâni de utilizare curăță excelent vasele de sânge. Aș dori să vă demonstrez rezultatele studiilor:',
    },
    {
      type: 'text',
      content:
        '<ul><li>Vasele de sânge au fost curățate de colesterol și alte impurități - 96% dintre subiecți</li><li>A scăzut nivelul „colesterolului rău” din sânge - 98% dintre subiecți</li><li>Tensiunea arterială s-a stabilizat până la valori normale - 94% dintre subiecți</li><li>A dispărut cefaleea - 99% dintre subiecți</li><li>S-a îmbunătățit vederea - 74% dintre subiecți</li></ul>',
    },
    {
      type: 'text',
      content:
        'Așa deci, produsul are o acțiune complexă. Este destinat îmbunătățirii generale a sistemului cardiovascular.',
    },
    {
      type: 'text',
      content: 'Ați trecut diagnosticul online și ați devenit pacientul meu online cu numărul 2000!',
    },
    {
      type: 'text',
      content:
        'Astăzi, în cadrul promoției organizate de producător, aveți ocazia să primiți un „'+offer_params.productName+'” la reducere.',
    },
    {
      type: 'text',
      content:
        'Pentru a obține „'+offer_params.productName+'”, introduceți numele și numărul de telefon în formularul de comandă de mai jos. Datele dumneavoastră sunt transmise direct producătorului, nimeni altcineva nu are acces la ele.',
    },
    {
      type: 'text',
      content:
        'Unul din specialiști va lua legătura cu dumneavoastră și după clarificarea tuturor detaliilor vă vom trimite în aceeași zi coletul cu „'+offer_params.productName+'”.',
    },
    {
      type: 'text',
      content: 'Sănătate vă doresc! Cele bune.',
    },
    {
      type: 'form',
      templateId: 'orderForm',
      afterMount: function afterMount() {
          var productName = document.getElementsByClassName("productName");
          var priceMain = document.getElementsByClassName("priceMain");
          var priceOld = document.getElementsByClassName("priceOld");
          var currencyMain = document.getElementsByClassName("currencyMain");
          for (var i = 0; i < productName.length; i++) {
              productName[i].innerHTML = offer_params.productName;
          }
          for (var i = 0; i < priceMain.length; i++) {
              priceMain[i].innerHTML = offer_params.priceMain;
          }

          if (offer_params.customPriceOld) {
              for (var i = 0; i < priceOld.length; i++) {
                  priceOld[i].innerHTML = offer_params.customPriceOld;
              }
          } else {
              for (var i = 0; i < priceOld.length; i++) {
                  priceOld[i].innerHTML = offer_params.priceMain * 2;
              }
          }

          for (var i = 0; i < currencyMain.length; i++) {
              currencyMain[i].innerHTML = offer_params.currencyMain;
          }
      },
    },
  ];

  flow.reduce(function (acc, el) {
    return acc.then(function (prevAnswer) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          $('html, body').animate(
            {
              scrollTop: $(document).height() - $(window).height() + 450,
            },
            300
          );
          var $messagesContainer = $('.container2');
          if (prevAnswer) {
            var $answerContainer = $(`<div class="box answer-big">${prevAnswer}</div>`);
            $messagesContainer.append($answerContainer);
          }

          var id = 'rand_' + new Date().getTime();
          var $messageContainer = $("<div id='".concat(id, '\' class="box"></div>'));
          $messagesContainer.append($messageContainer);

          switch (el.type) {
            case 'single_choice':
              new Typed('#'.concat(id), {
                strings: [el.content],
                showCursor: false,
                typeSpeed: TYPE_SPEED,
                onComplete: function onComplete() {
                  var $singleChoiceForm = createSingleChoiceForm(el.answers);
                  $singleChoiceForm.find('[data-answer]').click(function (event) {
                    $('html, body').animate(
                      {
                        scrollTop: $(document).height() - $(window).height() + 550,
                      },
                      300
                    );
                    let $answer = $(event.target);
                    $answer.addClass('active');
                    $singleChoiceForm.find('.answer').hide();
                    resolve($answer.text());
                  });
                  $messageContainer.append($singleChoiceForm);
                  el.afterMount && el.afterMount();
                },
              });
              break;

            case 'form':
              var formHtml = $('template#'.concat(el.templateId)).html();
              $messageContainer.append(formHtml);
              el.afterMount && el.afterMount();
              resolve();
              getValueQuest();
              break;

            case 'text':
              new Typed('#'.concat(id), {
                strings: [el.content],
                showCursor: false,
                typeSpeed: TYPE_SPEED,
                onComplete: function onComplete() {
                  $(`#${id} img.box-img`)
                    .toArray()

                    .reduce((acc, img) => {
                      return acc.then(() => {
                        return new Promise((resolveImg) =>
                          setTimeout(() => {
                            $(img).show();
                            resolveImg();
                          }, MSG_DELAY)
                        );
                      });
                    }, Promise.resolve())

                    .then(() => {
                      el.afterMount && el.afterMount();
                      resolve();
                    });
                },
              });
          }
        }, MSG_DELAY);
      });
    });
  }, Promise.resolve());

  function createSingleChoiceForm(answers) {
    var answersHtml = answers.reduce(function (result, answer) {
      return result + '<button type="button" class="answer" data-answer>'.concat(answer, '</button>');
    }, '');
    return $('<div class="answers">'.concat(answersHtml, '</div>'));
  }

  function getValueQuest() {
    var quest = document.querySelectorAll('.quest'),
      answ = document.querySelectorAll('.answer-big'),
      arr = [];
    for (var i = 0; i < quest.length; i++) {
      arr.push({
        q: quest[i].innerHTML,
        a: answ[i].innerHTML,
      });
    }

    $('form').find("input[name='question_answer']").val(JSON.stringify(arr));
  }
});

