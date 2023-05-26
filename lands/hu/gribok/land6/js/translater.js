var new_lang = {
"lt00": "Tinedol vásárlása nem drágán. Árak, visszajelzések. Rendelje meg a Tinedol -et most!",
"lt0": "Ingyenes hívás kérése",
"lt1": "Tinedol használata",
"lt2": "Hatás",
"lt3": "Visszajelzések",
"lt4": "Egyszerű módszer legyőzni a gombát, viszketést és repedéseket!",
"lt5": "Gyógyítja a talp gombát és a köröm",
"lt6": "Leveszi a visszketés",
"lt7": "Eltávolítja az izzadást meg a kellemetlen szagot",
"lt8": "Visszaéleszti a sarok repedéseket",
"lt9": "Az akció végéíg maradt:",
"lt10": "<span class=\"for-win\">Límítált szállítány! Siessen!</span><br> Csak 120 csomag kis áron!",
"lt11": "Akció -50%",
"lt12": "speciális árón:",
"lt13": "Hogyan műkődik a Tinedol?",
"lt14": "Gyakori használatokkor, Tinedol eltávolít egyszere több problémát. Az aktív összetevői <span class=\"for-win\">klímbazol</span> és <span class=\"for-win\">farnezól</span> eltávolítják:",
"lt15": "Gomba",
"lt16": "Szag",
"lt17": "Izzadás",
"lt18": "Repedések",
"lt19": "<span class=\"for-win\">Klímbazol</span> — megálítja a gomba növekedését. Eltávolítja a viszketést. Romboló munkát végez a gomba selítjeire és blokkolja a fejlődését.",
"lt20": "<span class=\"for-win\">Farnezól</span> — “bekapcsolja” az izzadás csatornákat és megállítja a baktériák aktívítását, amiknek a segítségével még egy egészséges ember izzadása is kellemetlen szagot kap. Átmossa és lágyabbá teszi a bőrt, ad könnyű vitág illatot sokára.",
"lt21": "A krém tökéletesen <span class=\"for-win\"> nedvesítí </span> és <span class=\"for-win\"> táplálja </span> a láb bőrt, eltávolítja a foltokat meg a repedéseket.",
"lt22": "A szordástól eltérően, a Tinedol krém egyenletesen rendeződik el a talp teljes felületén.<span class=\"for-win\">Gyorsan beszívódik</span>és nem hagy nyomot a ruhán meg a neműn.",
"lt23": "A Tinedol összetevőibe adtunk <span class=\"for-win\">efír menta olajat</span> és <span class=\"for-win\">E vitamint</span>. A tokoferol hatásosan <span class=\"for-win\">küzd a nyomokkal</span> és <span class=\"for-win\">a lépés utányi megmaradtakkal</span>, a menta pedíg a bőrnek hűtést ad és konfortot a nehéz nap után.",
"lt24": "Tinedol. Egyszerű módszer legyőzni a gombát, viszketést és a repedéseket!",
"lt25": "Az akció végéíg maradt:",
"lt26": "<span class=\"for-win\">Limitált szállítmány! Siessen!</span><br>Csak 120 csomag olcsó árón!",
"lt27": "Akció -50%",
"lt28": "speciális árón:",
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