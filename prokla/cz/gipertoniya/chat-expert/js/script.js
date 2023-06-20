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
        m: "Dobrý den, jmenuji se Jiří Král. Jsem odborník v oblasti cévního a srdečního zdraví, vedoucí odborník soukromé kliniky \"Zdravé cévy\". Vítejte na mých webových stránkách.",
    },
    {
        m: "Zde nabízím bezplatnou online konzultaci všem, kteří trpí vysokým krevním tlakem nebo se obávají, že se u nich hypertenze může objevit. Budete si moci nechat zdarma provést online diagnostiku a já vám na míru doporučím, jak udržet vaše srdce a cévy zdravé.",
    },
    {
        m: "Moje poradenství již pomohlo tisícům lidí. Chcete-li získat konzultaci, odpovězte na několik otázek.",
    },
    {
        m: '<p class="quest">Jaký je váš obvyklý krevní tlak?</p>',
    },
    {
        m: '<p class="quest">Váš věk:</p>',
    },
    {
        m: '<p class="quest">Máte některý z následujících příznaků:</p>',
    },
    {
        m: '<p class="quest">Máte nadváhu?</p>',
    },
    {
        m: '<p class="quest">Jsou ve vašem každodenním jídelníčku tyto produkty?</p>',
    },
    {
        m: '<p class="quest">Jaká je vaše fyzická aktivita?</p>',
    },
    {
        m: '<p class="quest">Jak hodnotíte stav svého nervového systému?</p>',
    },
    {
        m: '<p class="quest">Jaké máte zlozvyky?</p>',
    },
    {
        m: '<p class="quest">Trpěl někdo z vašich příbuzných hypertenzí?</p>',
    },
    {
        m: "Děkuji. Analýza vašich odpovědí ukázala, že můžete mít problém s vysokým krevním tlakem.",
    },
    {
        m: "Musíte se vyhýbat stresovým situacím, stanovit si režim spánku a bdění a hlídat si váhu.",
    },
    {
        m: "Mějte také na paměti, že optimalizace stravy výrazně snižuje riziko vzniku hypertenze. Denně byste měli jíst následující potraviny.",
    },
    {
      m: "Oleje (například slunečnicový, řepkový), semena, ořechy, mandle, chléb, avokádo, paprika jsou velmi bohaté na vitamin E. Tento vitamin, nepostradatelný pro cévy, zabraňuje oxidaci tuků a tvorbě volných radikálů, které ničí tkání srdečního svalu a krevních cév." +
            '<div class="comp comp--1"><picture><source srcset="' + imgPath + 'images/comp1.webp"><img src="' + imgPath + 'images/comp1.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
      m: "Tyto produkty obsahují vitamíny skupiny B, které ničí špatný cholesterol, normalizují funkci cév a aktivují metabolismus lipidů." +
            '<div class="comp comp--2"><picture><source srcset="' + imgPath + 'images/comp3.webp"><img src="' + imgPath + 'images/comp3.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
      m: "Bílé a červené ryby, mořské plody, kachní maso, játra, křepelčí vejce, ale i brokolice, kukuřice, salát. Obsahují chrom, který pomáhá snižovat krevní tlak. Pomáhá také snižovat tvorbu „špatného“ cholesterolu a předcházet tvorbě plaku na stěnách tepen." +
            '<div class="comp comp--3"><picture><source srcset="' + imgPath + 'images/comp4.webp"><img src="' + imgPath + 'images/comp4.png" alt="" class="component" style="display: block; margin-top: 15px; width: 100%; max-width: 200px;"></picture></div>',
    },
    {
      m: "Obsahují všechny složky nezbytné pro zdraví cév (vitamín C, vitamíny skupiny B, vitamín E, chrom, dále výtažky z ibišku a echinacey).",
    },
    {
        m: "Přípravek "+offer_params.productName+" se užívá dvakrát denně po 1 tobolce. Doporučená doba užívání přípravku "+offer_params.productName+" je 3 měsíce.",
    },
    {
        m: "Takto vypadá "+offer_params.productName+":",
    },
    {
        m: '<div class="chat-product"><picture><img src="' + imgPath + 'prod.png" alt="" class="product-img" style="width: 100%; max-width: 240px;"></picture></div>',
    },
    {
        m: ""+offer_params.productName+" obsahuje pouze přírodní složky, které pomáhají snižovat hladinu cholesterolu a cukru v krvi, zvyšují pružnost cévních stěn a posilují nervový systém.",
    },
    {
        m: ""+offer_params.productName+" má výrazný vazodilatační účinek, ale je také bezpečný pro vaše zdraví a nezpůsobuje alergie.",
    },
    {
        m: "Přípravek "+offer_params.productName+" vám tak nejen pomůže snížit krevní tlak, ale také zmírnit příznaky vysokého krevního tlaku: bolesti hlavy a slabost, bušení srdce, rychlou únavu a problémy se spánkem.",
    },
    {
        m: "Lék má dlouhodobý účinek, což znamená, že jeho pozitivní účinky přetrvávají ještě dlouho po skončení kurzu.",
    },
    {
        m: "Klikněte na tlačítko ROZTOČIT níže a budete-li mít štěstí, můžete si objednat "+offer_params.productName+" za nižší cenu než obvykle. Množství je omezené, proto vám doporučuji si pospíšit.",
    },
];

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 5550,
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
        '<div class="chat-content-item manager "><div class="img-doc"><picture><source type="image/webp" srcset="' + imgPath + 'images/header-ava-eac-arb.webp"><img src="' + imgPath + 'images/header-ava-eac-arb.png" width="35" height="35" alt=""></picture></div><div class="chat-content-desc"><span class="doc-name">Jiří Král</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"><span class="process-text">píše zprávu<span class="dot dot--first">.</span><span class="dot dot--second">.</span><span class="dot dot--third">.</span></span></p></div><p class="message-time" id="time">' +
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
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">110/70 – 100/60</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">130/85 – 139/89</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">140\90 a více</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Žádná změna krevního tlaku</span></div></div>'
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
                myMassange("140/90 a více"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question1T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Žádná změna krevního tlaku"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question2() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">do 30 let</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">30-40 let</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">40-50 let</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Věk nad 50 let</span></div></div>'
    );
}

function choise2() {
    $(".question2M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("do 30 let"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question2W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("30-40 let"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question2P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("40-50 let"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question2T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Věk nad 50 let"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question3() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Bolest hlavy, závratě</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Bušení srdce a bolest v oblasti srdce</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Dušnost</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Zvýšená únava</span></div><div class="chat-content-buttons-gender-block"><span class="question3T1">Všechny nebo více následujících příznaků</span></div><div class="chat-content-buttons-gender-block"><span class="question3T2">Žádný z uvedených příznaků</span></div></div>'
    );
}

function choise3() {
    $(".question3M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Bolest hlavy, závratě"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question3W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Bušení srdce a bolest v oblasti srdce"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Dušnost"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Zvýšená únava"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Všechny nebo více následujících příznaků"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question3T2").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Žádný z uvedených příznaků"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        });
}

function question4() {
    $(".chat-content-list").append(
        '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Ne</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Více než 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Více než 10 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Více než 20 kg</span></div></div>'
    );
}

function choise4() {
    $(".question4M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Ne"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question4W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Více než 5 kg"),
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
                    "Více než 10 kg"
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
                myMassange("Více než 20 kg"),
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
        '<div class="chat-content-buttons-gender-block"><span class="question5M">Tučné maso</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5W">Uzené maso</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5P">Smažená jídla</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5T">Sladké sycené nápoje</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G">Připravené potraviny</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G1">Polotovary</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G2">Moučné výrobky</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G3">Cukr a moučníky</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G4">Žádná z těchto položek</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question5G5">Dvě nebo více z následujících možností</span></div>' +
        '</div>'
    );
}

function choise5() {
    $(".question5M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Tučné maso"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question5W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Uzené maso"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Smažená jídla"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Sladké sycené nápoje"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Připravené potraviny"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Polotovary"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G2").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Moučné výrobky "),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G3").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Cukr a moučníky"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G4").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Žádná z těchto položek"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question5G5").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Dvě nebo více z následujících možností"),
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
        '<div class="chat-content-buttons-gender-block"><span class="question6M">Každodenní cvičení (nebo fyzický trénink)</span></div>' +
        // '<br>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6W">Cvičení (nebo fyzický trénink) 2 až 3krát týdně</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6P">Cvičení (nebo fyzický trénink) jednou týdně</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question6T">Vůbec necvičíte, máte sedavý způsob života</span></div>' +
        '</div>'
    );
}

function choise6() {
    $(".question6M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Každodenní cvičení (nebo fyzický trénink)"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question6W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Cvičení (nebo fyzický trénink) 2 až 3krát týdně"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question6P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Cvičení (nebo fyzický trénink) jednou týdně"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question6T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Vůbec necvičíte, máte sedavý způsob života"),
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
        '<div class="chat-content-buttons-gender-block"><span class="question7M">Často podrážděný</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7W">Mám záchvaty paniky</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7P">Často si dělám starosti a pláču</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7T">V noci špatně spím</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7G">Více než jedna položka ze seznamu</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question7G1">Žádná z těchto položek</span></div>' +
        '</div>'
    );
}

function choise7() {
    $(".question7M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Často podrážděný"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question7W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Mám záchvaty paniky"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Často si dělám starosti a pláču"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("V noci špatně spím"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7G").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Více než jedna položka ze seznamu"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question7G1").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Žádná z těchto položek"),
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
        '<div class="chat-content-buttons-gender-block"><span class="question8M">Kouření</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8W">Pití alkoholu častěji než jednou měsíčně</span></div>' +
        '<br/>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8P">Pití a kouření</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question8T">Nemějte žádné špatné zvyky</span></div>' +
        '</div>'
    );
}

function choise8() {
    $(".question8M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Kouření"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question8W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Pití alkoholu častěji než jednou měsíčně"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question8P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Pití a kouření"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question8T").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nemějte žádné špatné zvyky"),
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
        '<div class="chat-content-buttons-gender-block"><span class="question9M">Ano</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question9W">Ne</span></div>' +
        '<div class="chat-content-buttons-gender-block"><span class="question9P">Nevím</span></div>' +
        '</div>'
    );
}

function choise9() {
    $(".question9M").click(function () {
        (document.querySelector(".chat-content-buttons-gender").style.display =
            "none"),
            myMassange("Ano"),
            $(".chat-content-buttons-gender").css("display", "none"),
            setTimeout(function () {
                process = !0;
            }, 1000);
        app()
    }),
        $(".question9W").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Ne"),
                $(".chat-content-buttons-gender").css("display", "none"),
                setTimeout(function () {
                    process = !0;
                }, 1000);
            app()
        }),
        $(".question9P").click(function () {
            (document.querySelector(".chat-content-buttons-gender").style.display =
                "none"),
                myMassange("Nevím"),
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
        '<div class="chat-content-item manager "><div class="img-doc"><picture><source type="image/webp" srcset="' + imgPath + 'images/header-ava-eac-arb.webp"><img src="' + imgPath + 'images/header-ava-eac-arb.png" width="35" height="35" alt=""></picture></div><div class="chat-content-desc"><span class="doc-name">Jiří Král</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"><span class="process-text">píše zprávu<span class="dot dot--first">.</span><span class="dot dot--second">.</span><span class="dot dot--third">.</span></span></p></div><p class="message-time" id="time">' +
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
