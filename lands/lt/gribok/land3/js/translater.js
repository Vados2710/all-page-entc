var new_lang = {

    "lt00": "Pirkti Tinedol nebrangu. Kainos, atsiliepimai. Užsakykite Tinedol dabar!",
"lt0": "Užsakyti nemokamą skambutį",
"lt1": "Tinedol veikimas",
"lt2": "Efektingumas",
"lt3": "Atsiliepimai",
"lt4": "Paprastas būdas nugalėti grybelį, niežėjimą ir įtrūkimus!",
"lt5": "Gydo padų ir nagų grybelį",
"lt6": "Pašalina niežėjimą ir lupimąsi",
"lt7": "Pašalina prakaitavimą ir kvapą",
"lt8": "Užgydo kulnų įtrūkimus",
"lt9": "Iki akcijos pabaigos liko:",
"lt10": "<span class=\"for-win\">Ribota serija! Skubėkite!</span><br> Tik 120 pakuočių specialia kaina!",
"lt11": "Nuolaida -50 proc.",
"lt12": "specialia kaina:",
"lt13": "Kaip veikia Tinedol?",
"lt14": "Naudojant reguliariai, Tinedol pašalina iš karto keletą problemų. Sudėtyje esantys aktyvūs komponentai <spanclass=\"for-win\">klimbazolas</span> ir <spanclass=\"for-win\">farnezolas</span> pašalina:",
"lt15": "Grybelį",
"lt16": "Kvapą",
"lt17": "Prakaitavimą",
"lt18": "Įtrūkimus",
"lt19": "<spanclass=\"for-win\"> Klimbazolas </span> — slopina mielių ir grybų augimą ir vystymąsi. Pašalina niežėjimą. Turi griaunamąjį poveikį jau esančio grybelio ląsteles ir blokuoja naujų kolonijų atsiradimą.",
"lt20": "<spanclass=\"for-win\"> Farnezolas </span> — “išjungia” prakaito liaukas ir slopina bakterijų, dėl kurių net sveikiausio žmogaus prakaitas įgyja nemalonų kvapą, aktyvumą. Dezinfikuoja ir sušvelnina odą, duoda lengvą gėlinį kvapą ilgam.",
"lt21": "Tepalas puikiai <spanclass=\"for-win\"> drėkina</span> ir <spanclass=\"for-win\"> maitina </span> kojų odą, pašalina nuospaudas ir suragėjusią odą, užgydo įtrūkimus.",
"lt22": "Skirtingai nuo kitų vaistų, tepalas Tinedol tolygiai pasiskirsto po visą pado paviršių.<spanclass=\"for-win\">Greitai įsigeria</span>ir nelieka pėdsakų ant patalynės ir drabužių.",
"lt23": "Į tepalo Tinedol sudėtį mes pridėjome <spanclass=\"for-win\">mėtos eterinį aliejų </span> ir <spanclass=\"for-win\">vitaminą Е</span>. Tokoferolis efektyviai <spanclass=\"for-win\">kovoja su nuospaudomis </span> ir <spanclass=\"for-win\">suragėjusia oda</span>, o mėta odai duoda švelnaus vėsumo ir komforto pojūtį po sunkios dienos.", 
"lt24": "Tinedol. Paprastas būdas nugalėti grybelį, niežėjimą ir įtrūkimus!",
"lt25": "Iki akcijos pabaigos liko:",
"lt26": "<span class=\"for-win\">Ribota serija! Skubėkite!</span><br>Tik 120 pakuočių specialia kaina!",
"lt27": "Nuolaida -50 proc.",
"lt28": "specialia kaina:",
    
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