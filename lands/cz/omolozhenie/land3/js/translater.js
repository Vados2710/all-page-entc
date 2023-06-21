var new_lang = {

"lt2": "Injekce – minulé století!",

"lt3": "XX – omlazení dostupné za domácích podmínek",

"lt4": " <span class=\"pink bold\">Аlternativa</span> botoxu",

"lt5": " <span class=\"pink bold\">Viditelný</span> účinek",

"lt6": " <span class=\"pink bold\">Bezpečné</span> a přírodní",

"lt7": "Akce trvá pouze 1 den",

"lt8": "Při objednání dnes",

"lt9": "XX za částku <span class=\"price_main\">347</span> ",

"lt11": "Objednat",

"lt12": "Pozor! Počet zboží za akční cenu je omezen",

"lt13": " <span class=\"yellow bold\">Zpevňuje</span> tvar&nbsp;obličeje",

"lt14": " <span class=\"yellow bold\">Vyhlazuje</span> nasolabiální záhyby",

"lt15": " <span class=\"yellow bold\">Zkracuje</span> vrásky na čele a kolem oči",

"lt16": "Druhé mládí<br>bez operaci",

"lt17": " <b>XX&nbsp;–</b> inovace ve světě kosmetiky!&nbsp;Dermatologicky testovaný vzorec XX  vyvíjeny pro zpevnění obličeje a vyhlazení vrásek.",

"lt18": "XX je bezpečnou alternativou „injekce krásy“ a chirurgického zpevnění konturu obličeje.",

"lt19": "Úžasný účinek XX&nbsp;díky:",

"lt20": "Výtažek z mořských řas",

"lt21": "Minerální složení řas je zabudováno do fyziologických procesů a spouští regeneraci tkání na buněčné úrovni. Stimuluje lymfodrenáž, zpevňuje kontury obličeje, snižuje projevy vrásek obličeje.",

"lt22": "Koloidní zlato",

"lt23": "Proniká skrz keratinovou vrstvu epidermy, zlepšuje krevní oběh a urychluje procesy obnovy buněk. Vrací pružnost pokožky, spouští intenzivní regeneraci buněk. Opakovaně zvyšuje účinek dalších složek.",

"lt24": "Šnečí extrakt",

"lt25": " Zmrazuje procesy stárnutí buněk, aktivuje funkci kolagenu a elastinu. Zkracuje hluboké vrásky spojené s věkem, zastavuje výskyt mimických vrásků na obličeji.",

"lt26": " Extrakt z čínských přízí",

"lt27": " Zpomaluje stárnutí epidermy a jemně pečuje o suchou nebo poškozenou pokožku. Obnovuje rovnováhu vody a solí v buňkách, zvyšuje pružnost pokožky a vyrovnává tón.",

"lt28": "Výsledek teď a tady!",

"lt29": "Eliška,",

"lt30": "35 let",

"lt31": "«XX zcela neviditelný a učinkuje prostě skvěle. Zdá se mi, že do jisté míry nahrazuje plastickou chirurgii - ihned po aplikaci – ihned jiná tvář. <b>O 10 let mladší!</b> »",

"lt32": "Аnička,",

"lt33": "56 let",

"lt34": "«XX se mi perfektně hodí! Produkt vyhladí všechny vrásky na tváři, zpevní kontury obličeje a vypadám svěží a mladší. Pro mě je to nejlepší řešení, protože teď už nemusíte kupovat spoustu přípravků a běžet do salónů, abyste se nějak dát dohromady!»",

"lt35": "Мonika,",

"lt36": "38 let",

"lt37": "«XX mě překvapil! To je ideální způsob pro vycházku ven. Naneste tenkou vrstvu - a tvář se změní před vašimi očima. Pokožka je napnutá, vrásky jsou vyhlazeny, všechny vady okamžitě zmizí. Zpevňující účinek trvá až 8 hodin!»",

"lt38": "Daniela,",

"lt39": "41 let",

"lt40": "«Mám ráda kosmetiku, kde je vidět hned účinek. Takže XX&nbsp;mi sedí ideálně. Aplikovala jsem&nbsp;– zmizely otoky, vrásky, pokožka je svěží, hladká a rovná».",

"lt55": "Jak používat XX?",

"lt56": "Vyčistěte pokožku obličeje obvyklým způsobem",

"lt57": "Naneste malé množství XX na obličej",

"lt58": "Rozetřete jemnými kruhovými pohyby až se to celé vstřebá",

"lt59": " <span>Používejte</span> XX ráno a večer během celé kúry",

"lt60": "Užívejte mladou jasnou tvář bez vrásek!",

"lt61": "XX – omlazení dostupné za domácích podmínek",

"lt62": " <span class=\"pink bold\">Аlternativa</span> botoxu",

"lt63": " <span class=\"pink bold\">Viditelný</span> účinek",

"lt64": " <span class=\"pink bold\">Bezpečné</span> a přírodní",

"lt65": "Аkce trvá pouze 1 den",

"lt66": "Při objednání dnes",

"lt67": "XX za částku <span class=\"price_main\">347</span> ",

"lt69": "Objednat",

"lt70": "Pozor! Počet zboží za akční cenu je omezen",

"lt71": "© 2012 - <span class=\"footer-date\">2020</span> , Všechna práva vyhrazena. Opakovaný tisk, kopírování a jakékoli jiné formy použití materiálů z těchto stránek jsou povoleny pouze se souhlasem držitele autorských práv.",

};
function Translater () {
 for (class_name in new_lang) {
 var elements = document.getElementsByClassName(class_name);
 if (elements.length) {
 for (key in elements) {
 elements[key].innerHTML = new_lang[class_name];
 }
 }
 }
 };s