setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
    setTimeout("$('.main-desc').addClass('b-show')", 1500),
    setTimeout("$('body').addClass('add-scroll')", 3e3),
    setTimeout("$('html').addClass('add-scroll')", 3e3),
    $(".glow-button").on("click", function () {
        $(".comment-item").addClass("comment-item-show"),
            $(".glow-button").addClass("hide"),
            $(".shine-button").addClass("show");
    });

const OFFER = "«"+offer_params.productName+"»";

let now = new Date(),
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;

const imgPath = window.cdn_path || ''

const massange = [
    {
        m: "Buna ziua, numele meu este Andrew Barnes. Sunt expert în domeniul sănătății vasculare și cardiace, un expert de frunte al clinicii private \"Vase sănătoase\". Bine ați venit pe site-ul meu.",
    },
    {
        m: "Aici ofer o consultație online gratuită oricui suferă de hipertensiune arterială sau se teme că ar putea dezvolta hipertensiune. Veți putea fi supus unui diagnostic online gratuit, în funcție de rezultatele căruia vă voi face recomandări personale pentru a păstra sănătatea inimii și a vaselor de sânge.",
    },
    {
        m: "Consultările mele au ajutat deja mii de oameni. Pentru a primi sfaturi, răspundeți la câteva întrebări.",
    },
    {
        m: '<p class="quest">Care este indicatorul dvs. obișnuit al tensiunii arteriale?</p>',
    },
    {
        m: '<p class="quest">Vârsta Dvs.:</p>',
    },
    {
        m: '<p class="quest">Aveți următoarele simptome:</p>',
    },
    {
        m: '<p class="quest">Sunteți supraponderal?</p>',
    },
    {
        m: '<p class="quest">Sunt prezente următoarele alimente în dieta dvs. zilnică:</p>',
    },
    {
        m: '<p class="quest">Care este activitatea dvs. fizică?</p>',
    },
    {
        m: '<p class="quest">Cum evaluați starea sistemului nervos:</p>',
    },
    {
        m: '<p class="quest">Care sunt obiceiurile dvs. proaste?</p>',
    },
    {
        m: '<p class="quest">A suferit vreuna dintre rudele dvs. de hipertensiune?</p>',
    },
    {
        m: "Mulțumesc! Analiza răspunsurilor dvs. a arătat că este posibil să aveți probleme cu hipertensiunea arterială.",
    },
    {
        m: "Trebuie să evitați situațiile stresante, să vă normalizați somnul și starea de veghe și să vă monitorizați greutatea.",
    },
    {
        m: "De asemenea, rețineți că optimizarea nutriției reduce semnificativ riscul de hipertensiune arterială. Trebuie să mâncați aceste alimente zilnic:",
    },
    {
        m: "Uleiurile (de exemplu, de floarea soarelui, de rapită), semințele, nucile, migdalele, pâinea, avocado, boia de ardei sunt foarte bogate în vitaminele E. Această vitamină, indispensabilă vaselor de sânge, previne oxidarea grăsimilor și formarea radicalilor liberi care distrug țesuturile mușchiului inimii și ale vaselor de sânge." +
            '<div class="comp comp--1"><picture><source srcset="' + imgPath + 'images/comp1.webp"><img src="' + imgPath + 'images/comp1.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
        m: "Mazăre, semințe de dovleac, semințe de susan, arahide, nuci și nuci de pin, carne de porc, migdale, ouă de pui, file de pui, brânză de vaci, carne de vită. Aceste produse conțin vitamine din grupul B, care distrug colesterolul rău, normalizează funcția vasculară și activează metabolismul lipidic." +
            '<div class="comp comp--2"><picture><source srcset="' + imgPath + 'images/comp3.webp"><img src="' + imgPath + 'images/comp3.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
        m: "Măceșe, coacăz negru, portocală, broccoli, pătrunjel, ardei roșu dulce. Aceste alimente conțin vitamina C, care este cel mai puternic antioxidant. Contribuie la întărirea vaselor de sânge, normalizează permeabilitatea pereților lor, reduce riscul de ateroscleroză și, de asemenea, ajută la întărirea sistemului nervos." +
            '<div class="comp comp--3"><picture><source srcset="' + imgPath + 'images/comp2.webp"><img src="' + imgPath + 'images/comp2.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
        m: "Pește alb și roșu, fructe de mare, carne de rață, ficat, ouă de prepeliță, precum și broccoli, porumb, salată verde. Toate acestea conțin crom, care ajută la scăderea tensiunii arteriale. De asemenea, ajută la reducerea producției de colesterol „rău” și la prevenirea formării plăcii pe pereții arterelor." +
            '<div class="comp comp--4"><picture><source srcset="' + imgPath + 'images/comp4.webp"><img src="' + imgPath + 'images/comp4.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
        m: "Dacă nu puteți consuma în mod regulat produsele de mai sus, capsulele "+offer_params.productName+" sunt o cale bună de ieșire. Acestea conțin toate ingredientele necesare sănătății vasculare (vitamina C, vitaminele din grupul B, vitamina E, Crom, precum și extracte de hibiscus și echinaceea).",
    },
    {
        m: ""+offer_params.productName+" trebuie administrat de 2 ori pe zi, câte 1 capsulă. Pentru dvs., cursul recomandat de "+offer_params.productName+" - 3 luni.",
    },
    {
        m: "Iată cum arată "+offer_params.productName+":",
    },
    {
        m: '<div class="chat-product"><picture><img src="' + imgPath + 'prod.png" alt="" class="product-img" style="width: 100%; max-width: 240px;"></picture></div>',
    },
    {
        m: ""+offer_params.productName+" conține numai ingrediente naturale care ajută la reducerea colesterolului și a zahărului din sânge, la creșterea elasticității pereților vaselor de sânge, la întărirea sistemului nervos.",
    },
    {
        m: ""+offer_params.productName+" are un efect vasodilatator pronunțat, dar, în același timp, este sigur pentru sănătate și nu provoacă alergii.",
    },
    {
        m: "Ca urmare, "+offer_params.productName+" va ajuta nu numai la reducerea tensiunii arteriale, ci și la eliminarea simptomelor hipertensiunii arteriale: dureri de cap și slăbiciune, ritm cardiac crescut, oboseală, probleme de somn.",
    },
    {
        m: "Remediul are un efect prelungit, ceea ce înseamnă că efectul său pozitiv persistă mult timp după terminarea cursului.",
    },
    {
        m: "Faceți clic pe butonul SPIN de mai jos și, dacă aveți noroc, veți putea comanda "+offer_params.productName+" la un preț mai mic decât de obicei. Numărul de articole promoționale este limitat, așa că vă sfătuiesc să vă grăbiți.",
    },
];

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 5500,
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
        '<div class="chat-content-item manager "><div class="img-doc"><img src="' + imgPath + 'images/header-ava-eac-arb.png" alt=""></div><div class="chat-content-desc"><span class="doc-name">Andrew Barnes</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"><span class="process-text">Tastează mesajul<span class="dot dot--first">.</span><span class="dot dot--second">.</span><span class="dot dot--third">.</span></span></p></div><p class="message-time" id="time">' +
        t +
        "</p></div></div>";
    $(".chat-content-list").append(c),
        "0" == document.getElementById("res").value
            ? $("#scroll_id").addClass("aba")
            : $("#scroll_id").removeClass("aba");
}

function myMassange(e) {
    var s = new Date(),
        t = ("0" + s.getMinutes()).slice(-2);
    let n =
        '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">Tú</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' +
        e +
        "</p></div>" +
        '<p className="message-time new_time" id="time">' +
        (("0" + s.getHours()).slice(-2) + ":" + t) +
        "</p></div></div>";
    $(".chat-content-list").append(n),
        $(".content").animate(
            {
                scrollTop: $(".chat-content-list").height(),
            },
            700
        ),
        $("#scroll_id").addClass("hide");
}

function question1() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">110/70 – 100/60</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">130/85 – 139/89</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">140/90 și mai sus</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Nu verific tensiunea arterială</span></div></div>'
    );
}

function choise1() {
    $(".question1M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("110/70 – 100/60"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question1W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("130/85 – 139/89"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question1P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("140/90 și mai sus"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question1T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu verific tensiunea arterială"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question2() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Până la 30 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">30-40 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">40-50 de ani</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Peste 50 de ani</span></div></div>'
    );
}

function choise2() {
    $(".question2M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Până la 30 de ani"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question2W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("30-40 de ani"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question2P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("40-50 de ani"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question2T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Peste 50 de ani"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question3() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Dureri de cap, amețeli</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Palpitații și dureri în zona inimii</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Dispnee</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Oboseală crescută</span></div><div class="chat-content-buttons-gender-block"><span class="question3T1">Toate sau mai mult de 1 dintre simptomele enumerate</span></div><div class="chat-content-buttons-gender-block"><span class="question3T2">Niciunul dintre simptomele enumerate nu este prezent</span></div></div>'
    );
}

function choise3() {
    $(".question3M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Dureri de cap, amețeli"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question3W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Palpitații și dureri în zona inimii"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Dispnee"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Oboseală crescută"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Toate sau mai mult de 1 dintre simptomele enumerate"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T2").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Niciunul dintre simptomele enumerate nu este prezent"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question4() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Nu</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Mai mult de 5 kilograme</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Mai mult de 10 kilograme</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Mai mult de 20 de kilograme</span></div></div>'
    );
}

function choise4() {
    $(".question4M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Nu"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question4W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Mai mult de 5 kilograme"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question4P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange(
                    "Mai mult de 10 kilograme"
                ),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question4T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Mai mult de 20 de kilograme"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question5() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender">' +
        '<div class="chat-content-buttons-gender-block"><span class="question5M">Carne grasă</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5W">Carne afumată</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5P">Alimente prajite</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5T">Băuturi carbogazoase dulci</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G">Produse semifinite</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G1">Produse din făină</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G2">Dulciuri</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G3">Murături</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G4">Nici una dintre cele de mai sus</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G5">Două sau mai multe dintre cele de mai sus</span></div>' +
        '</div>'
    );
}

function choise5() {
    $(".question5M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Carne grasă"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question5W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Carne afumată"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Alimente prajite"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Băuturi carbogazoase dulci"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Produse semifinite"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Produse din făină"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G2").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Dulciuri"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G3").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Murături"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G4").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nici una dintre cele de mai sus"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G5").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Două sau mai multe dintre cele de mai sus"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question6() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender">' +
        '<div class="chat-content-buttons-gender-block"><span class="question6M">Fac sport în fiecare zi sau lucrez fizic</span></div>' +
        // '<br>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6W">Fac sport (sau lucrez fizic) de 2-3 ori pe săptămână</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6P">Fac sport (sau lucrez fizic) 1 dată pe săptămână</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6T">Nu fac deloc sport, duc un stil de viață sedentar</span></div>' +
        '</div>'
    );
}

function choise6() {
    $(".question6M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Fac sport în fiecare zi sau lucrez fizic"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question6W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Fac sport (sau lucrez fizic) de 2-3 ori pe săptămână"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question6P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Fac sport (sau lucrez fizic) 1 dată pe săptămână"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question6T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu fac deloc sport, duc un stil de viață sedentar"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question7() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender">' +
        '<div class="chat-content-buttons-gender-block"><span class="question7M">Mă enervez des</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7W">Am atacuri de panică</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7P">De multe ori îmi fac griji, plâng</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7T">Nu dorm bine noaptea</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7G">Mai mult de un punct din cele de mai sus</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7G1">Nici una dintre cele de mai sus</span></div>' +
        '</div>'
    );
}

function choise7() {
    $(".question7M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Mă enervez des"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question7W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Am atacuri de panică"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("De multe ori îmi fac griji, plâng"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu dorm bine noaptea"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7G").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Mai mult de un punct din cele de mai sus"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7G1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nici una dintre cele de mai sus"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question8() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender">' +
        '<div class="chat-content-buttons-gender-block"><span class="question8M">Fumez</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8W">Beau alcool mai mult de 1 dată pe lună</span></div>' +
        '<br/>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8P">Beau și fumez</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8T">Nu am obiceiuri proaste</span></div>' +
        '</div>'
    );
}

function choise8() {
    $(".question8M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Fumez"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question8W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Beau alcool mai mult de 1 dată pe lună"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question8P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Beau și fumez"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question8T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu am obiceiuri proaste"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question9() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender">' +
        '<div class="chat-content-buttons-gender-block"><span class="question9M">Da</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question9W">Nu</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question9P">Nu știu</span></div>' +
        '</div>'
    );
}

function choise9() {
    $(".question9M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Da"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question9W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question9P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nu știu"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

setTimeout(function () {
    var e = new Date(),
        s = ("0" + e.getMinutes()).slice(-2);
    const t =
        '<div class="chat-content-item manager "><div class="img-doc"><img src="' + imgPath + 'images/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">Andrew Barnes</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"><span class="process-text">Tastează mesajul<span class="dot dot--first">.</span><span class="dot dot--second">.</span><span class="dot dot--third">.</span></span></p></div><p class="message-time" id="time">' +
        (("0" + e.getHours()).slice(-2) + ":" + s) +
        "</p></div></div>";
    $(".chat-content-list").append(t),
        $("#scroll_id").click(function (e) {
            $(this).removeClass("hide-q"),
                $(".content").animate(
                    {
                        scrollTop: $(".chat").height(),
                    },
                    700
                );
        });
    const start = setInterval(function () {
        if (process) {
            if (lengt_num_mas !== massange.length) {

                text = massange[lengt_num_mas].m
                $("#mass" + lengt_num_mas).html(text)
                process = true

                if (lengt_num_mas === 3) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question1()
                    choise1()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 4) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question2()
                    choise2()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 5) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question3()
                    choise3()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 6) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question4()
                    choise4()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 7) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question5()
                    choise5()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 8) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question6()
                    choise6()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 9) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question7()
                    choise7()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 10) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question8()
                    choise8()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else if (lengt_num_mas === 11) {
                    mass_id++
                    lengt_num_mas++

                    process = false;
                    question9()
                    choise9()
                    $("#scroll_id").addClass("hide-q")
                    $(".content").animate(
                        {
                            scrollTop: $(".chat").height(),
                        },
                        700
                    )
                    $("#scroll_id").removeClass("hide-q")
                } else {
                    lengt_num_mas++
                    mass_id++
                    length_mass = 0
                    text = ""
                    app();
                }
            } else {
                clearInterval(start)
                process = false
                $("#mass" + lengt_num_mas).parent().parent().parent().css("display", "none")

                $(".iframe-form").addClass("show")
                $(".btn-top").addClass("show")
                $("#scroll_id").addClass("hide-q")
                $(".content").animate(
                    {
                        scrollTop: $(".chat").height(),
                    },
                    700
                )
                $("#scroll_id").removeClass("hide-q")
            }
        }
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
