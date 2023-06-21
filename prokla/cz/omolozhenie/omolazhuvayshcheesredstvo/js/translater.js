var new_lang = {

"lt0": "Omlazující krém na obličej INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Omlazení</div>·<div class=\"lBRvsb__item\">Proti vráskám</div>·<div class=\"lBRvsb__item\">Zlepšení zpevnění</div>·<div class=\"lBRvsb__item\"> Tónování</div>·<div class=\"lBRvsb__item\">Komplexní regenerace</div>",

"lt3": "Krém viditelně zpevňuje pokožku, stimuluje produkci kolagenu a elastinu, posiluje a vyrovnává povrch pokožky. Složky krému hluboko pronikají do vrstev pokožky, což vám umožní dosáhnout znatelného účinku během několika týdnů.",

"lt4": "Popis <span></span> ",

"lt5": " <a href=\"\">INTENSKIN</a> <br>Krém proti stárnutí s liftingovým účinkem ",

"lt6": "Otevřít web",

"lt7": "21 recenzí",

"lt8": "5 hvězdíček",

"lt9": "20 recenzí",

"lt10": "4 hvězdíčky",

"lt11": "1 recenze",

"lt12": "3 hvězdíčky",

"lt13": "2 hvězdíčky",

"lt14": "1 hvězdička",

"lt15": "Vynikající krém",

"lt17": "Přeložit",

"lt18": " Vynikající krém, velmi příjemně se aplikuje na pokožku. Po několika použitích je viditelné, jak je pokožka měkčí a hladší. Krém je vhodný pro smíšené typy pleti.",

"lt19": "Gabriela N. <span class=\"oGzEp\"></span> ",

"lt20": "Wow",

"lt22": "Přeložit",

"lt23": "Dodání bylo rychlé a zdarma! Velmi pěkné balení, nemůžete odtrhnout oči. Krém byl perfektní pro můj obličej, po 3 dnech jsem si všimla omlazujícího účinku: vrásky v blízkosti nosu a rtů byly méně výrazné :)",

"lt24": "Eliška <span class=\"oGzEp\"></span> ",

"lt25": "Nádherný",

"lt27": "Přeložit",

"lt28": "Slušný krém, líbí se mi. Hustý, bez zápachu, rychle se vstřebává. Jedno ranní použití zvlhčuje pokožku až do večera) Ohledně omlazujícího účinku zatím nic neřeknu, používám druhý den.",

"lt29": "Jméno skryté <span class=\"oGzEp\"></span> ",

"lt30": "Nejlepší",

"lt32": "Přeložit",

"lt33": "Velmi dobrý krém! Vrásky byly vyhlazeny na obličeji za několik aplikací !! Nikdy jsem neviděla tak účinné prostředky. Objednala jsem si pár dalších balení",

"lt34": "Nikola P. <span class=\"oGzEp\"></span> ",

"lt36": "Přeložit",

"lt37": "Dobře se vstřebává, rychle působí, pokožka po aplikaci je jemná, dobře hydratovaná.",

"lt38": "Radka <span class=\"oGzEp\"></span> ",

"lt40": "Přeložit",

"lt41": "Koupila jsem krém na základě recenzí na internetu. Zatím je nejlepší krém, jaký jsem kdy použila, i ve srovnání s dražšími. Vstřebává se velmi rychle, pokožka začala po několik dní vypadat jinak: pleť se vyrovnala, suchost zmizela, vrásky se vyhladily.",

"lt42": "Hanka F. <span class=\"oGzEp\"></span> ",

"lt43": "Super složení",

"lt45": "Přeložit",

"lt46": "Koupila jsem ho na doporučení kosmetičky - možná proto mi krém dokonale vyhovoval. Po několika aplikacích INTENSKIN jsem začala vypadat lépe, pokožka byla světlejší a nezůstaly téměř žádné vrásky. Objednám si ještě jedno balení, myslím, že jedno nestačí",

"lt47": "Lenka K. <span class=\"oGzEp\"></span> ",

"lt49": "Přeložit",

"lt50": " Moc se mi líbil design obalu, silně vyniká na pozadí ostatních produktů na mé polici) Po aplikaci před spaním zůstává pokožka zvlhčená a jemná až do dalšího večera",

"lt51": "Linda B. <span class=\"oGzEp\"></span> ",

"lt52": "Fascinující krém!!!",

"lt54": "Přeložit",

"lt55": "Krém mi darovala kamarádka, za což je velmi vděčná) Krém jsem nanášela před spaním po dobu 14 dnů, moje pokožka je suchá. Výsledky: problémy se suchosti zmizely, vrásky v blízkosti očí a na čele se vyhladily, pleť byla příjemně matná. Také mě potěšilo přírodní složení, žádné zarudnutí a podráždění pokožky.",

"lt109": "Další recenze",

"lt110": "<a>Úvodní stránka Google</a>‎<wbr><a>Reklamní kampaně</a>‎<wbr><a>Řešení pro byznys</a>‎<wbr><a>Pravidla a principy</a>‎<wbr>",

"lt111": "Tyto obchody platí Googlu za reklamu, takže jsou v horní části seznamu. Ceny jsou včetně daní a poplatků. Náklady na dopravu závisí na adrese a způsobu doručení.",


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
 };