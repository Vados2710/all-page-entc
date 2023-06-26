var new_lang = {
"lt00": "Koupit Tinedol levně. Ceny, recenze. Objednejte si Tinedol nyní!",
"lt0": "Kontaktovat bezplatnou linku",
"lt1": "Účinek Tinedol",
"lt2": "Efektivita",
"lt3": "Recenze",
"lt4": "Jednoduchý způsob porazit plíseň, svědění a praskliny!",
"lt5": "Léčí plíseň chodidel a nehtů",
"lt6": "Odstraňuje svědění a loupání kůže na nohou",
"lt7": "Odstraňuje pocení a zápach",
"lt8": "Zahojuje praskliny na patách",
"lt9": "Do konce akce zbývá:",
"lt10": "<span class=\"for-win\">Omezená řada! Pospěšte si!</span><br> Pouze 120 balení za speciální cenu!",
"lt11": "Sleva -50%",
"lt12": "za speciální cenu:",
"lt13": "Jak funguje Tinedol?",
"lt14": "Při pravidelném použití, Tinedol odstraňuje hned několik problémů. Obsahující složky ve složení <span class=\"for-win\">klimbazol</span> a <span class=\"for-win\">farnezol</span> odstraňují:",
"lt15": "Plíseň",
"lt16": "Zápach",
"lt17": "Pocení",
"lt18": "Praskliny",
"lt19": "<span class=\"for-win\">Klimbazol</span> — zabraňuje růstu a rozvíjení kvasinek a plísně. Odstraňuje svědění. Má ničivý účinek na buňky existující plísně a blokuje vznik nových.",
"lt20": "<span class=\"for-win\">Farnezol</span> — “vypíná” potní žlázy a zabraňuje aktivitě bakterií, díky kterým pot zdravého člověka brzy nepříjemně zapáchá. Dezinfikuje a dělá kůži měkčí, dodává lehkou květinkovou vůni na dlouhou dobu.",
"lt21": "Mast výborně <span class=\"for-win\"> zvlhčuje </span> a <span class=\"for-win\"> vyživuje </span> kůži na nohou, odstraňuje  otlačeninya ztvrdlé oblasti, oloupává, zahojuje praskliny.",
"lt22": "Na rozdíl od zásypu, mast Tinedol rovnoměrně se rozmísťuje po celém povrchu chodidla.<span class=\"for-win\">Rychle se vstřebává</span>a nezanechává skvrny na prostěradlu a oblečení.",
"lt23": "Do složení Tinedol jsme přidali <span class=\"for-win\">eterický olej máty</span> a <span class=\"for-win\">vitamín E</span>. Tokoferol efektivně <span class=\"for-win\">bojujue proti mozolům</span> a <span class=\"for-win\">otalčeninám</span>, a máta dodává kůži něžný chládek a pohodlí po těžkém dni.",
"lt24": "Tinedol. Jednoduchý způsob porazit plíseň, svědění a praskliny!",
"lt25": "Do konce akce zbývá:",
"lt26": "<span class=\"for-win\">Omezená řada! Pospěšte si!</span><br>Pouze 120 balení za speciální cenu!",
"lt27": "Sleva -50%",
"lt28": "za speciální cenu:",
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