var new_lang = {

"lt0": "<span class="productName"></span> fiatalító arckrém 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Fiatalítás</div>·<div class=\"lBRvsb__item\">A ráncoktól</div>·<div class=\"lBRvsb__item\">Feszesebb bőr</div>·<div class=\"lBRvsb__item\">Ellenálóbb</div>·<div class=\"lBRvsb__item\">Komplex helyreállítás</div>",

"lt3": "A krém láthatóan feszesíti a bőrt, serkenti a kollagén és az elasztin termelését, erősíti és kiegyenlíti a bőr barázdáit. A krém összetevői a bőr mélyébe hatolnak, ami lehetővé teszi, hogy szemmel látható hatást érjen el néhány hét alatt.",

"lt4": "Leírás<span></span> ",

"lt5": "<a href=\"\"><span class="productName"></span></a> <br>Lifting hatású öregedésgátló krém",

"lt6": "Honlap megnyitása",

"lt7": "21 vélemény",

"lt8": "5 csillag",

"lt9": "20 vélemény",

"lt10": "4 csillag",

"lt11": "1 vélemény",

"lt12": "3 csillag",

"lt13": "2 csillag",

"lt14": "1 csillag",

"lt15": "Szuper krém",

"lt17": "Fordítás",

"lt18": "Kitűnő krém. Tiszta bőrre kell felvinni. Néhány használat után már látható, hogy a bőr puhábbá és simábbá vált. A krém vegyes bőrtípusnál is használható. ",

"lt19": "U. Viktória <span class=\"oGzEp\"></span> ",

"lt20": "Azta!",

"lt22": "Fordítás",

"lt23": "Gyorsan kihozták és a szállítás ingyenes volt! Nagyon szép a csomagolása. A krém tökéletesen megfelel az én arcomnak, már 3 nap után észrevehető volt a fiatalító hatása: az orr és az ajkak közelében lévő ráncok halványodtak :)",

"lt24": "Edit<span class=\"oGzEp\"></span> ",

"lt25": "Mesébeillő",

"lt27": "Fordítás",

"lt28": "Nem fogtok csalódni benne, nekem nagyon bejött. Sűrű, szagtalan, gyorsan felszívódik. Egy reggeli használattal estig hidratálja a bőrt. :) A fiatalító hatásról még nem tudok nyilatkozni, csak második napja használom.",

"lt29": "Rejtett név <span class=\"oGzEp\"></span> ",

"lt30": "A legjobb",

"lt32": "Fordítás",

"lt33": "Nagyon jó krém. Már pár használat után kisimultak az arcomon a ráncok!! Még soha nem láttam ilyen hatékony készítményt. Rendeltem még néhány csomaggal belőle",

"lt34": "Papp Beáta<span class=\"oGzEp\"></span> ",

"lt36": "Fordítás",

"lt37": "Az használat után azonnal felszívódik, nem ragad és nem hagy nyomot a ruhán",

"lt38": "Imola<span class=\"oGzEp\"></span> ",

"lt40": "Fordítás",

"lt41": "Az interneten található vélemények alapján vettem meg ezt a krémet. Eddig ez a legjobb krém, amit valaha használtam, még a drágábbakhoz képest is sokkal hatékonyabb. Nagyon gyorsan felszívódik, a bőr néhány nap múlva másképp kezd kinézni: az arcszínem egyenletessé vált, a bőrszárazság eltűnt, a ráncaim kisimultak.",

"lt42": "Sz. Nikolett <span class=\"oGzEp\"></span> ",

"lt43": "Szuper összetétel",

"lt45": "Fordítás",

"lt46": "Kozmetikus ajánlására vettem meg, talán ezért is illik hozzám tökéletesen ez a krém. A <span class="productName"></span> többszöri használta után jobban kezdtem kinézni, a bőröm világosabbá vált, és szinte semmilyen ránc nem maradt az arcomon. Rendelek magamnak még egy csomaggal, azt hiszem, egy nem lesz elég",

"lt47": "D. Alexandra <span class=\"oGzEp\"></span> ",

"lt49": "Fordítás",

"lt50": "Nagyon tetszik a csomagolás, kitűnik a polcomon lévő többi termék közül. :) Az esti felvitel után a bőr még másnap estig is hidratált és puha marad.",

"lt51": "V. Edit <span class=\"oGzEp\"></span> ",

"lt52": "Hihetetlen egy krém!!!",

"lt54": "Fordítás",

"lt55": "Egy barátom ajánlotta nekem ezt a krémet, amiért nagyon hálás vagyok neki :) 14 napig használtam lefekvés előtt száraz bőrre. Az eredmények: a szárazsággal kapcsolatos problémák eltűntek, a szem környékén és a homlokon lévő ráncok kisimultak, az arcom kellemesen matt lett. Örültem a természetes összetételnek is, nincs bőrpír és irritáció.",

"lt109": "Még több vélemény",

"lt110": "<a>Google Főoldal</a>‎<wbr><a>Reklámprogramok</a>‎<wbr><a>Üzleti megoldások</a>‎<wbr><a>Elvi szabályok</a>‎<wbr>",

"lt111": "Ezek az üzletek fizetnek a Google-nek a reklámozásért, így azok a lista tetejére kerülne. Az árak tartalmazzák az adókat és az illetékeket. A szállítási költségek a cím és a szállítási mód függvényében változhatnak."


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