setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
  setTimeout("$('.main-desc').addClass('b-show')", 1500),
  setTimeout("$('body').addClass('add-scroll')", 3e3),
  setTimeout("$('html').addClass('add-scroll')", 3e3),
  $(".glow-button").on("click", function () {
    $(".comment-item").addClass("comment-item-show"),
      $(".glow-button").addClass("hide"),
      $(".shine-button").addClass("show");
  });
function getPathImg() {
  let img = document.querySelector("img");
  let src = img.src.split("/");
  src.pop();
  let result = src.join("/") + "/";
  return result;
}
const OFFER = "«"+offer_params.productName+"»";
let now = new Date(),
  mm = now.getMonth() + 1,
  day = now.getDate(),
  year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {
    m: "Bună ziua, numele meu este Amanda Barna. Sunt expert în domeniul dieteticii, nutriției și endocrinologiei, un specialist de frunte al clinicii private 'Sănătate și bunăstare'. Bine ați venit pe site-ul meu.",
  },
  {
    m: "Aici ofer diagnostice online gratuite și recomandări personale care au ajutat deja mii de clienți să slăbească.",
  },
  {
    m: "Pentru a obține sfatul meu de pierdere în greutate, răspundeți la câteva întrebări.",
  },
  {
    m: '<p class="quest">Câte kilograme doriți să dați jos?</p>',
  },
  {
    m: '<p class="quest">Ce părți ale corpului Dvs. au nevoie de corecție?</p>',
  },
  {
    m: '<p class="quest">Cât de activ este stilul Dvs. de viață?</p>',
  },
  {
    m: '<p class="quest">Mâncați bine?</p>',
  },
  {
    m: '<p class="quest">Vârsta Dvs.?</p>',
  },
  {
    m: '<p class="quest">Care este greutatea Dvs. actuală?</p>',
  },
  {
    m: '<p class="quest">Înălțimea Dvs.?</p>',
  },
  {
    m:
      "Mulțumesc! Sunteți într-adevăr supraponderal(ă), dar sunteți destul de capabil(ă) să atingeți obiectivul dorit de pierdere în greutate. Principala cauză a excesului de greutate este un metabolism lent. Acest lucru este valabil mai ales pentru grăsimea viscerală, care se acumulează pe părțile laterale și pe abdomen. <br><br>O recomandare pentru Dvs. personal. Utilizați guava, ceai verde și portocaliu amar.<br><br>Extractul de guava conține fibre, acizi grași saturați, dizaharide, pectină și proteine vegetale. Guava este capabilă să normalizeze sistemul digestiv, să îmbunătățească metabolismul și să satureze organismul cu substanțe nutritive.<br><br>Extractul de ceai verde este un puternic antioxidant. Conține multe ingrediente active, oligoelemente, cofeină, catechine și vitamine. Reglează nivelul zahărului din sânge și reduce nivelul colesterolului dăunător.<br><br>Extractul de portocală amară conține sinefrină, care are un efect de ardere a grăsimilor. Bioflavonoidele, taninurile și terpenoidele din extract pot îmbunătăți metabolismul, pot suprima pofta de mâncare și pot accelera descompunerea grăsimilor. Contribuie la regenerarea pielii și crește elasticitatea acesteia.<br><br>Ingredientele enumerate pot fi consumate separat, dar este mult mai convenabil și mai eficient să le folosiți ca parte a produsului "+offer_params.productName+". Este disponibil sub formă de capsule, care trebuie luate de două ori pe zi cu o jumătate de oră înainte de mese. Puteți obține o pierdere vizibilă în greutate în doar o lună.<br><br> Așa arată "+offer_params.productName+":  <img src='prod.png' alt='' class='product-img' style='width: 100%; max-width: 240px;'>",
  },
  {
    m: "<b>Care este unicitatea "+offer_params.productName+":</b><br><ul><li> conține o cantitate mare de fibre;</li><li> capabil să blocheze carbohidrații;</li><li>previne absorbția grăsimilor;</li><li>poate accelera metabolismul și poate activa funcțiile de divizare a grăsimilor, maximizând astfel arderea acestuia;</li><li>contribuie la îmbunătățirea sistemului digestiv;</li><li>previne problemele cu tractul gastro-intestinal;</li><li>contribuie la detoxifiere;</li><li>reduce foamea și îmbunătățește digestia;</li><li>capabil să prevină fluctuațiile bruște de greutate în viitor.</li></ul>Acest produs va ajuta la accelerarea metabolismului rapid și eficient, la arderea excesului de grăsime, la îmbunătățirea sistemului digestiv și la stimularea pierdere activă în greutate.",
  },
  {
    m: "Iată rezultatele clienților mei care au slăbit cu succes conform recomandărilor mele:",
  },
  {
    m:
      "<img src='" +
      getPathImg() +
      "comm2-92a-arb.jpeg' alt='' style='border-radius: 0px 10px 10px 10px'>",
  },
  {
    m:
      "<img src='" +
      getPathImg() +
      "comm-photo3-135-arb.jpeg' alt='' style='border-radius: 0px 10px 10px 10px'>",
  },
  {
    m:
      "<img src='" +
      getPathImg() +
      "comm6-abb-arb.jpeg' alt='' style='border-radius: 0px 10px 10px 10px'>",
  },
  {
    m: "Durata maximă a cursului, ținând cont de vârsta Dvs., indicele actual de masă corporală și stilul de viață, este în medie de aproximativ 30 de zile. Dar echipa mea alege un curs mai precis.",
  },
  {
    m: "În acest timp, "+offer_params.productName+" este capabil să curețe profund organismul, să normalizeze metabolismul și să accelereze descompunerea grăsimilor.",
  },
  {
    m: "Faceți clic pe butonul SPIN de mai jos și, dacă aveți noroc, veți putea comanda "+offer_params.productName+" la un preț mai mic decât de obicei. Numărul de seturi promoționale este limitat, așa că vă sfătuiesc să vă grăbiți.",
  },
];
var mass_id = 0,
  length_mass = 0,
  lengt_num_mas = 0,
  text = "",
  speedtext = 65,
  //65
  process = !0;
function app() {
  var e = new Date(),
    s = ("0" + e.getMinutes()).slice(-2),
    t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n);
  }
  const c =
    '<div class="chat-content-item manager "><div class="img-doc"><img src="' +
    getPathImg() +
    'header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">Amanda Barnané</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' +
    mass_id +
    '"></p></div><p class="message-time" id="time">' +
    t +
    "</p></div></div>";
  $(".chat-content-list").append(c),
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
  let contentHeight = $(".chat").height() + $(".header").height() + 70;

  if (contentHeight > $("body").height()) {
    $("html").addClass("height-auto");
  }
  $("html, body").animate(
    {
      scrollTop: $(".chat-content-list").height(),
    },
    700
  );
}

function myMassange(e) {
  var s = new Date(),
    t = ("0" + s.getMinutes()).slice(-2);
  let n =
    '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">Tu</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' +
    e +
    "</p></div>" +
    '<p className="message-time new_time" id="time">' +
    (("0" + s.getHours()).slice(-2) + ":" + t) +
    "</p></div></div>";
  $(".chat-content-list").append(n);

  $("html, body").animate(
    {
      scrollTop: $(".chat-content-list").height(),
    },
    700
  ),
    $("#scroll_id").addClass("hide");
}

function question1() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">maxim 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">de la 5 la 10 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">de la 10 la 15 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">mai mult de 15 kg</span></div></div>'
  );
}

function choise1() {
  $(".question1M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("maxim 5 kg"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question1W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("de la 5 la 10 kg"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question1P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("de la 10 la 15 kg"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question1T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("mai mult de 15 kg"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

function question2() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">talia și burta</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">șolduri și fesele</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">brațe sau picioare</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">vreau să slăbesc peste tot</span></div></div>'
  );
}

function choise2() {
  $(".question2M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("talia și burta"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question2W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("șolduri și fesele"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question2P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("brațe sau picioare"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question2T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("vreau să slăbesc peste tot"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

function question3() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">mă antrenez de 3-5 ori pe săptămână</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">mă antrenez de 1-3 ori pe săptămână</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">nu fac sport, uneori merg</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">stil de viață sedentar</span></div></div>'
  );
}

function choise3() {
  $(".question3M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("mă antrenez de 3-5 ori pe săptămână"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question3W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("mă antrenez de 1-3 ori pe săptămână"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question3P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("nu fac sport, uneori merg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question3T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("stil de viață sedentar"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

function question4() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">da, număr caloriile, urmez diete</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">despre 50/50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">ador alimente nesănătoase, fast food, dulciuri</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">consum produse nesănătoase</span></div></div>'
  );
}

function choise4() {
  $(".question4M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("da, număr caloriile, urmez diete"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question4W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("despre 50/50"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question4P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("ador alimente nesănătoase, fast food, dulciuri"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question4T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("consum produse nesănătoase"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

function question5() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">sub 20 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">peste 50 de ani</span></div></div>'
  );
}

function choise5() {
  $(".question5M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("sub 20 de ani"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question5W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("20-30 de ani"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question5P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("31-40 de ani"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question5T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("41-50 de ani"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
  $(".question5G").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("peste 50 de ani"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  });
}

function question6() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">până la 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">60-70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">71-80 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">81-90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">mai mult de 90 kg</span></div></div>'
  );
}

function choise6() {
  $(".question6M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("până la 60 kg"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question6W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("60-70 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question6P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("71-80 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question6T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("81-90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question6O").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("mai mult de 90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

function question7() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Mai puțin de 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">151-160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">mai mult de 180 cm</span></div></div>'
  );
}

function choise7() {
  $(".question7M").click(function () {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("mai puțin de 150 cm"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(function () {
        process = !0;
      }, 500);
  }),
    $(".question7W").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("150-160 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question7P").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("161-170 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question7T").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("171-180 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    }),
    $(".question7G").click(function () {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("mai mult de 180 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(function () {
          process = !0;
        }, 500);
    });
}

setTimeout(function () {
  var e = new Date(),
    s = ("0" + e.getMinutes()).slice(-2);
  const t =
    '<div class="chat-content-item manager "><div class="img-doc"><img src="' +
    getPathImg() +
    'header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">Amanda Barnané</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' +
    mass_id +
    '"></p></div><p class="message-time" id="time">' +
    (("0" + e.getHours()).slice(-2) + ":" + s) +
    "</p></div></div>";
  $(".chat-content-list").append(t),
    $("#scroll_id").click(function (e) {
      $(this).removeClass("hide-q"),
        $("html, body").animate(
          {
            scrollTop: $(".chat").height(),
          },
          700
        );
    });
  const n = setInterval(function () {
    if (1 == process)
      if (lengt_num_mas != massange.length) {
        if (
          ((text += massange[lengt_num_mas].m[length_mass]),
          length_mass++,
          $("#mass" + lengt_num_mas).html(text),
          3 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question1(),
            (process = !1),
            choise1(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          4 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question2(),
            (process = !1),
            choise2(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          5 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question3(),
            (process = !1),
            choise3(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          6 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question4(),
            (process = !1),
            choise4(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          7 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question5(),
            (process = !1),
            choise5(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          8 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question6(),
            (process = !1),
            choise6(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          9 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question7(),
            (process = !1),
            choise7(),
            $("#scroll_id").addClass("hide-q"),
            $("html, body").animate(
              {
                scrollTop: $(".chat").height(),
              },
              700
            ),
            $("#scroll_id").removeClass("hide-q")),
          length_mass == massange[lengt_num_mas].m.length)
        ) {
          lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app();
        }
      } else
        clearInterval(n),
          $("#mass" + lengt_num_mas)
            .parent()
            .parent()
            .parent()
            .css("display", "none"),
          $(".iframe-form").addClass("show"),
          $(".btn-top").addClass("show");
  }, speedtext);
}, 1e3),
  $(".content").scroll(function () {
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
  });
var $marker = $("#down-box");
$(".content").scroll(function () {
  $(".content").scrollTop() + $(".content").height() >=
  $(".chat").height() + 100
    ? ((document.getElementById("res").value = "0"),
      $("#scroll_id").addClass("hide"))
    : $("#scroll_id").removeClass("hide");
});

function viewDiv() {
  document.getElementById("div1").style.display = "block";
  document.querySelector(".content").style.opacity = "0.5";
}

function viewDiv2() {
  document.getElementById("div1").style.display = "none";
  document.querySelector(".content").style.opacity = "1";
}

function viewDiv3() {
  document.getElementById("div1").style.display = "none";
  document.querySelector(".content").style.opacity = "1";
}

function viewDiv4() {
  document.getElementById("div1").style.display = "block";
  document.querySelector(".content").style.opacity = "0.5";
}
