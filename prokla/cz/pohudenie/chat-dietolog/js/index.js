
    var url = window.cdn_path;
    if (url === undefined) {
      url = "";
    }
    const MSG_DELAY = 1, TYPE_SPEED = 1;
    let flow = [{
        type: "text",
        content: "Dobrý den, jmenuji se Julia Bastrigina. Jsem odborníce na výživu, odborníce na funkční a integrační medicínu. Vítejte na mých oficiálních stránkách."
    }, {
        type: "text",
        content: "Zde provádím bezplatnou online diagnostiku a dávám osobní doporučení, která pomohla zbavit se nadváhy stovkám žen a mužů."
    }, {
        type: "text",
        content: "Chcete-li získat moje doporučení pro hubnutí, odpovězte na několik otázek."
    }, {

        type: "single_choice",
        content: "O kolik kilogramů chcete zhubnout?",
        answers: ["Do 5 kg", "5 až 10 kg", "10 až 15 kg", "Více než 15 kg"]
    }, {
        type: "single_choice",
        content: "Jaké části vašeho těla vyžadují korekci?",
        answers: ["Pas a břicho", "Boky a hýždě", "Ruce a nohy", "Chci zhubnout všude"]
    }, {
        type: "single_choice",
        content: "Jak aktivní životní styl máte?",
        answers: ["Cvičím 3 až 5 krát týdně", "Cvičím 1 až 3 krát týdně", "Necvičím, ale snažím se chodit pěšky", "Sedavý životní styl"]
    }, {
        type: "single_choice",
        content: "Jíte správně?",
        answers: ["Ano, počítám kalorie, nejím sladké a moučné výrobky", "50/50", "Mám rád \"škodlivé\" jídlo, rychlé občerstvení a sladkosti", "Jím především to, na co mám dostatek peněz"]
    }, {

        type: "single_choice",
        content: "Váš věk?",
        answers: ["do 20 let", "20 až 30 let", "31 až 40 let", " 41 až 50 let", "Nad 50 let"]
    }, {
        type: "single_choice",
        content: "Vaše aktuální váha?",
        answers: ["Do 60 kg", "60 až 70 kg", "71 až 80 kg", "Více než 90 kg"]
    }, {
        type: "single_choice",
        content: "Váš růst?",
        answers: ["Pod 150 cm", "150 až 160 cm", "161 až 170 cm", "171 až 180 cm", "Nad 180 cm"]
    }, {
        type: "text",
        content: "Děkuji. Opravdu máte nadváhu, ale můžete dosáhnout požadovaného cíle."
    }, {
        type: "text",
        content: "Nyní aby se dostat do formy, nemusíte se trápit dietami a cvičením. Prvním doporučením, které funguje vždy, je pít alespoň 2 litry vody denně. Voda pomůže normalizovat trávení a očistit tělo od toxinů."
    }, {
        type: "text",
        content: "Chcete-li zvýšit účinek, pijte více zeleného čaje. Čajové listy obsahují katechiny, které aktivují metabolismus v těle a odstraňují strusky a soli těžkých kovů. hořký pomeranč přispívá ke snížení hladiny lipidů a cholesterolu."
    }, {
        type: "text",
        content: "Chcete-li spustit proces spalování tuků, nutně potřebujete hořký pomeranč, který dodává mastné kyseliny v mitochondriích a pomáhá je recyklovat na energii."
    }, {
        type: "text",
        content: "Tyto složky můžete konzumovat samostatně, ale jsou mnohem pohodlnější a efektivnější jako součást doplňku stravy "+offer_params.productName+". hořký pomeranč a zelený čaj jsou tam ve formě intenzivních extraktů s maximální koncentrací užitečných látek."
    },
        {
        type: "text",
        content: "Pro výrazné hubnutí stačí užívat 1 kapsli 2x denně 30 minut před jídlem a za měsíc můžete dosáhnout cíle."
    },
        {
        type: "text",
        content: "Takhle to vypadá: <br><br> <img src='"+ url +"prod.png' style='width:80%;max-width:230px'> "
    }, {
        type: "text",
        content: "Při intenzivním štěpení tuků pomocí kapslí "+offer_params.productName+" se uvolňuje energie, která dává vám silný impuls, odstraňující depresivní stav, apatii a smutku a tím zvyšuje účinnost přípravku. Analogy tohoto inovačního komplexu zatím neexistují!"
    }, {
        type: "text",
        content: ""+offer_params.productName+" velmi účinně odbourává a odstraňuje viscerální tuk, který obklopuje stěny vnitřních orgánů a brání jim v normálním fungování, odemkne metabolismus tím, že vyčistí organismus od \"odpadu\" a toxinů."
    }, {
        type: "text",
        content: "V důsledku toho se tělo začne zbavovat přebytečného tuku a začne ho používat jako zdroj energie. Začnete jíst méně, a přestanete cítit hlad, což také zvyšuje účinek hubnutí!"
    }, {
        type: "text",
        content: "Zde jsou výsledky mých klientů, kteří úspěšně zhubli s mými doporučeními: <br> <img src='"+ url +"images/c1.jpg'> <br> <img src='"+ url +"images/c2.jpg'> <br> <img src='"+ url +"images/c3.jpg'>"
    }, {
        type: "text",
        content: "Optimální délka kurzu, která zohledňuje váš věk, aktuální index váhy a váš životní styl, je 30 dní."
    }, {
        type: "text",
        content: "Během této doby dojde k hlubokému očištění těla a normalizaci metabolismu."
    }, {
        type: "text",
        content: "A mám pro vás další skvělou zprávu. Prošli jste online diagnostikou a stali jste se mým 2-tisícovým klientem!"
    }, {
        type: "text",
        content: "Teprve dnes máte možnost získat "+offer_params.productName+" se slevou 50% v rámci akce od výrobce."
    }, {
        type: "text",
        content: "Chcete-li získat "+offer_params.productName+", zadejte své jméno a telefonní číslo do objednávkového formuláře níže. Vaše data jsou odesílána přímo výrobci, nikdo jiný k nim nemá přístup."
    }, {
        type: "text",
        content: "Zavolá vám odborník a po upřesnění všech detailů ve stejný den vám zašlou balíček s kúrou "+offer_params.productName+"."
    }, {
        type: "text",
        content: "Počet balení na akci je omezen, takže doporučuji spěchat s objednávkou."
    }, {type: "form", templateId: "orderForm"}];


    function createSingleChoiceForm(t) {
        let e = t.reduce((t, e) => t + `<button type="button" class="answer" data-answer>${e}</button>`, "");
        return $(`<div class="answers">${e}</div>`)
    }

    $(document).ready(function () {
      flow.reduce((t, e) => t.then(() => new Promise(t => {
        t.Scroll = function () {
            $(document).ready(function () {
                !function (t, e = function () {
                }, n = []) {
                    t = jQuery(t), e = e.bind(t);
                    var o = -1, c = -1;
                    setInterval(function () {
                        t.height() == o && t.width() == c || (o = t.height(), c = t.width(), t.parent().animate({scrollTop: o}, 50), e.apply(null, n))
                    }, 100)
                }(".chat-content-container .chat-content-list", function (t) {
                }, [])
            })
        }, setTimeout(() => {
            let n = "rand_" + (new Date).getTime(), o = $(`<div id='${n}' class="box"></div>`);
            switch ($(".container2").append(o), e.type) {
                case"single_choice":
                    new Typed(`#${n}`, {
                        strings: [e.content], showCursor: !1, typeSpeed: 50, onComplete: () => {
                            let n = createSingleChoiceForm(e.answers);
                            n.find("[data-answer]").click(e => {
                                $(e.target).addClass("active"), n.find("[data-answer]:not(.active)").attr("disabled", !0), t()
                            }), o.append(n), e.afterMount && e.afterMount()
                        }
                    });
                    break;
                case"form":
                    let c = $(`template#${e.templateId}`).html();
                    o.append(c), e.afterMount && e.afterMount(), t();
                    break;
                case"text":
                    new Typed(`#${n}`, {
                        strings: [e.content], showCursor: !1, typeSpeed: 50, onComplete: () => {
                            e.afterMount && e.afterMount(), t(), t.Scroll()
                        }
                    })
            }
        }, 50)
    })), Promise.resolve());
    });
