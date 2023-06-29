var new_lang = {

"lt0": "Atjaunojošs sejas krēms INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\>Atjaunošana</div>·<div class=\"lBRvsb__item\>No grumbām</div>·<div class=\"lBRvsb__item\>Elastības paaugstināšana</div>·<div class=\"lBRvsb__item\>Tonizēšana</div>·<div class=\"lBRvsb__item\">Kompleksa atjaunošana</div>",

"lt3": "Krēms ievērojami nostiepj ādu, stimulē kolagēna un elastīna veidošanos, nostiprina un izlīdzina ādas reljefu. Krēma sastāvdaļas dziļi iekļūst ādas slāņos, kas ļauj sasniegt acīmredzamu efektu dažu nedēļu laikā.",

"lt4": "Apraksts <span></span> ",

"lt5": "<a href=\"\">INTENSKIN </a> <br>Atjaunojošs krēms ar liftinga efektu",

"lt6": "Atvērt mājas lapu",

"lt7": "21 atsauksme",

"lt8": "5 zvaigznes",

"lt9": "20 atsauksmes",

"lt10": "4 zvaigznes",

"lt11": "1 atsauksme",

"lt12": "3 zvaigznes",

"lt13": "2 zvaigznes",

"lt14": "1 zvaigzne",

"lt15": "Lielisks krēms",

"lt17": "Tulkot",

"lt18": "Lielisks krēms, klājas uz ādas ļoti patīkami. Pēc pāris izmantošanām kļūst pamanāmas, ka āda kļūst maigāka un gludāka. Krēms ir piemērots jaukta tipa ādai.",

"lt19": "Vita V. <span class=\"oGzEp\"></span> ",

"lt20": "Wow",

"lt22": "Tulkot",

"lt23": "Piegāde bija ātra un bezmaksas! Ļoti skaists iepakojums, acis nevar atraut. Krēms ideāli derēja manai sejai, atjauninošu efektu pamanīju pēc 3 dienām: grumbas pie deguna un lūpām kļuva mazāk izteiktas:)",

"lt24": "Elīna <span class=\"oGzEp\"></span> ",

"lt25": "Pasakains",

"lt27": "Tulkot",

"lt28": "Ievērības cienīgs krēms, man patīk. Biezs, bez smaržas, ātri iesūcas. Viena rīta lietošana mitrina ādu līdz pašam vakaram) Par atjaunojošo efektu pagaidām neko neteikšu, izmantoju otro dienu.",

"lt29": "Vārds slēpts <span class=\"oGzEp\"></span> ",

"lt30": "Labākais",

"lt32": "Tulkot",

"lt33": "Ļoti labs krēms! Grumbas izlīdzinājās uz sejas dažu pielietojumu laikā!! Tik efektīvu līdzekli es vēl neesmu satikusi. Pasūtīju vēl dažus gabalus",

"lt34": "Vaira <span class=\"oGzEp\"></span> ",

"lt36": "Tulkot",

"lt37": "Labi iesūcas, ātrs efekts, āda pēc uzklāšanas maiga, labi mitrināta.",

"lt38": "Elizabete <span class=\"oGzEp\"></span> ",

"lt40": "Tulkot",

"lt41": "Nopirku krēmu pēc atsauksmēm internetā. Pagaidām tas ir labākais krēms, kuru jebkad esmu lietojusi, pat ja salīdzināt ar dārgāku. Iesūcas ļoti ātri, āda sāka izskatīties citādi jau pēc dažām dienām: sejas krāsa kļuva līdzena, pazuda ādas sausums, krunciņas izlīdzinājās.",

"lt42": "Ullija S. <span class=\"oGzEp\"></span> ",

"lt43": "Lieliska struktūra",

"lt45": "Tulkot",

"lt46": "Nopirku pēc kosmetologa ieteikuma – varbūt tāpēc krēms derēja man ideāli. Pēc dažām INTENSKIN lietošanas reizēm sāku labāk izskatīties, āda kļuva gaišāka, grumbiņu gandrīz nav atlicis. Pasūtīt sev vēl vienu iepakojumu, domāju, ka viena nepietiks",

"lt47": "Alexandra D. <span class=\"oGzEp\"></span> ",

"lt49": "Tulkot",

"lt50": "Ļoti patika iepakojuma dizains, kas uz pārējo līdzekļu fona manā plauktā stipri izceļas) Pēc uzklāšanas pirms gulētiešanas āda paliek vēl līdz nākamajam vakaram, mitrināta un maiga",

"lt51": "Līna V. <span class=\"oGzEp\"></span> ",

"lt52": "Brīnumains krēms!!!",

"lt54": "Tulkot",

"lt55": "Krēmu man uzdāvināja draudzene, par ko esmu viņai ļoti pateicīga) Uzklāju krēmu pirms gulētiešanas 14 dienu laikā, āda man bija sausa. Rezultāti: izzudušas problēmas ar sausumu, krunciņas pie acīm un uz pieres izlīdzinājušās, sejas krāsa kļuvusi patīkami matēta. Vēl iepriecināja dabīgs sastāvs, nekādu apsārtumu un kairinājumu uz ādas.",

"lt109": "Vēl atsauksmes",

"lt110": "<a>Sākumlapa Google</a><wbr><a>Reklāmas programmas</a><wbr><a>Risinājumi biznesam,</a><wbr><a>Noteikumi un principi</a><wbr>",

"lt111": "Šie veikali maksā Google par reklāmu, tāpēc tie atrodas saraksta sākumā. Cenas norādītas ieskaitot nodokļus un nodevas. Piegādes cena ir atkarīga no adreses un piegādes veida.",


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