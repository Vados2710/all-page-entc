var new_lang = {

"lt0": "Verjüngende Gesichtscreme INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Verjüngung</div>-<div class=\"lBRvsb__item\">Gegen Falten</div>-<div class=\"lBRvsb__item\">Erhöhte Straffheit</div>-<div class=\"lBRvsb__item\">Tonisierung</div>-<div class=\"lBRvsb__item\">Umfassende Regeneration</div>",

"lt3": "Die Creme strafft die Haut sichtbar, stimuliert die Kollagen- und Elastinproduktion, festigt und gleicht das Hautrelief aus. Die Bestandteile der Creme dringen tief in die Hautschichten ein, so dass sich bereits nach wenigen Wochen ein spürbarer Effekt einstellt.",

 "lt4": "Beschreibung <span></span> ",

"lt5": " <a href=\"\">INTENSKIN</a> <br> Verjüngungscreme mit Lifting-Effekt",

"lt6": "Seite öffnen",

"lt7": "21 Bewertungen",

"lt8": "5 Sterne",

"lt9": "20 Bewertungen",

"lt10": "4 Sterne",

"lt11": "1 Bewertung",

"lt12": "3 Sterne",

"lt13": "2 Sterne",

"lt14": "1 Stern",

"lt15": " hervorragende Creme",

"lt17": "Übersetzen",

"lt18": "Ausgezeichnete Creme, lässt sich sehr gut auf der Haut verteilen. Nach ein paar Anwendungen können Sie feststellen, wie die Haut weicher und gleichmäßiger wird. Die Creme ist für gemischte Hauttypen geeignet.",

"lt19": "Valeria W. <span class=\"oGzEp\"></span>.",

"lt20": "Wow.",

"lt22": "Übersetzen",

"lt23": "Die Lieferung war schnell und kostenlos! Sehr schöne Verpackung, konnte die Augen nicht von ihr lassen. Die Creme war perfekt für mein Gesicht, ich habe den Verjüngungseffekt nach 3 Tagen bemerkt: Falten in der Nähe der Nase und der Lippen wurden weniger ausgeprägt:)",

"lt24": "Lena <span class=\"oGzEp\"></span>",

"lt25": "Fabelhaft",

"lt27": "Übersetzen",

"lt28": "Anständige Creme, ich mag sie. Dickflüssig, geruchlos, zieht schnell ein. Eine Anwendung am Morgen befeuchtet die Haut bis zum Abend) Über die verjüngende Wirkung will ich noch nichts sagen, verwenden Sie den zweiten Tag.",

"lt29": "Name ist ausgeblendet <span class=\"oGzEp\"></span>.",

"lt30": " Die Beste",

"lt32": "Übersetzen",

"lt33": "Sehr gute Creme! Glättet die Falten in meinem Gesicht in wenigen Anwendungen!!! Ich habe noch keine so effektiven Produkte kennengelernt. Ich habe noch ein paar Stück bestellt.",

"lt34": "Mareike R. <span class=\"oGzEp\"></span>.",

"lt36": "Übersetzen",

"lt37": "Zieht gut ein, schnelle Wirkung, Haut nach der Anwendung weich und gut durchfeuchtet.",

"lt38": "Elizabeth <span class=\"oGzEp\"></span>",

"lt40": "Übersetzen",

"lt41": "Ich habe die Creme aufgrund von Online-Bewertungen gekauft. Bis jetzt ist dies die beste Creme, die ich je benutzt habe, selbst im Vergleich zu teureren Cremes. Es zieht sehr schnell ein, meine Haut sah schon nach wenigen Tagen anders aus: mein Teint ist ebenmäßig, meine trockene Haut ist weg, Falten sind geglättet.",

"lt42": "Ramona S. <span class=\"oGzEp\"></span>.",

"lt43": "Ausgezeichnete Struktur.",

"lt45": "Übersetzen",

"lt46": "Gekauft auf Empfehlung einer Kosmetikerin - vielleicht hat die Creme deshalb bei mir perfekt funktioniert. Nach ein paar Anwendungen sieht mein INTENSKIN besser aus, meine Haut ist heller, es gibt fast keine Falten. Ich denke, ich werde eine weitere Packung verwenden",

"lt47": "Alexandra D. <span class=\"oGzEp\"></span>.",

"lt49": "Übertragung",

"lt50": "Ich liebe das Design der Verpackung, sie hebt sich stark von den anderen Produkten in meinem Regal ab) Nach der Anwendung vor dem Schlafengehen ist meine Haut noch bis zur nächsten Nacht mit Feuchtigkeit versorgt und weich.",

"lt51": "Lina V. <span class=\"oGzEp\"></span>",

"lt52": "Erstaunliche Creme!!!",

"lt54": "Übersetzen",

"lt55": "Die Creme wurde mir von einer Freundin geschenkt, wofür ich ihr sehr dankbar bin) Ich habe die Creme 14 Tage lang vor dem Schlafengehen aufgetragen, meine Haut ist trocken. Das Ergebnis: Trockenheitsprobleme sind verschwunden, die Falten um die Augen und auf der Stirn sind geglättet, der Teint ist schön matt. Auch mit der natürlichen Zusammensetzung zufrieden, keine Rötungen und Irritationen auf der Haut.",

"lt109": "Weitere Bewertungen",

"lt110":"<a>Google-Startseite</a><wbr><a>Werbeprogramme</a><wbr><a>Geschäftslösungen</a><wbr><a>Regeln und Grundsätze</a><wbr>",

"lt111": "Diese Shops bezahlen Google für Werbung, daher stehen sie ganz oben auf der Liste. Die Preise sind inklusive Steuern und Gebühren. Die Versandkosten sind abhängig von Adresse und Versandart.",



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