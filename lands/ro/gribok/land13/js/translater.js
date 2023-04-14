var new_lang = {
"lt00": "Cumpărați Tinedol cu preț redus. Prețuri, opinii. Comandați Tinedol acum!",
"lt0": "Comandați un apel gratuit",
"lt1": "Acțiunea Tinedol",
"lt2": "Eficacitate",
"lt3": "Opinii",
"lt4": "O metodă simplă de a învinge micoza, mâncărimile și fisurile!",
"lt5": "Vindecă micoza picoiarelor și unghiilor",
"lt6": "Elimină mâncărimea și descuamarea pielii",
"lt7": "Înlătură transpirația și mirosul",
"lt8": "Cicatrizează fisurile de pe călcâie",
"lt9": "Până la sfârșitul promoției au rămas:",
"lt10": "<span class=\"for-win\">Serie limitată! Grăbiți-vă!</span><br> Doar 120 de cutii la preț special!",
"lt11": "Reducere -50%",
"lt12": "la preț special:",
"lt13": "Cum acționează Tinedol?",
"lt14": "La o utilizare periodică, Tinedol vă rezolvă câteva probleme concomitent. Substanțele active ce intră în compoziție <span class=\"for-win\">climbazol</span> и <span class=\"for-win\">farnesol</span> elimină:",
"lt15": "Micoza",
"lt16": "Mirosul",
"lt17": "Transpirația",
"lt18": "Fisurile",
"lt19": "<span class=\"for-win\">Climbazolul</span> suprimă creșterea și dezvoltarea fungilor și ciupercilor. Are un efect distrugător asupra celulelor ciuperclor deja existente și blochează apariția noilor colonii.",
"lt20": "<span class=\"for-win\">Farnezolul</span> — “deconectează” glandele sudoripare și reprimă activiatea bacteriilor, datorită cărora,  chiar și transpirația unui om sănătos, obține un miros neplăcut. Dezinfectează și catifelează pielea, oferă o ușoară aromă florală pentru mult timp.",
"lt21": "Unguentul  <span class=\"for-win\"> hidratează </span> și <span class=\"for-win\"> hrănește</span> excelent pielea picioarelor, elimină bătăturile și zonele înăsprite, înlătură descuamarea, cicatrizează fisurile.",
"lt22": "Spre deosebire de prafuri, unguentul Tinedol se distribuie în mod egal pe toată suprafața piciorului.<span class=\"for-win\">Se absoarbe repede</span> și nu lasă urme pe lenjeria de pat și pe haine.",
"lt23": "În compoziția unguentului Tinedol am adăugat <span class=\"for-win\">ulei de mentă</span> și<span class=\"for-win\">vitamina E</span>. Tocoferolul <span class=\"for-win\"> luptă eficient cu pielea îngroșată</span> și <span class=\"for-win\">bătăturile</span>, iar menta oferă pielii o  răcoreală gingașă și comfort după o zi grea de muncă.",
"lt24": "Tinedol. O metodă simplă de a învinge micoza, mâncărimile și fisurile!",
"lt25": "Până la finalul promoției au rămas:",
"lt26": "<span class=\"for-win\">Serie limitată! Grăbiți-vă!</span><br>Doar 120 de cutii la preț special",
"lt27": "Reducere -50%",
"lt28": "la preț special:",
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