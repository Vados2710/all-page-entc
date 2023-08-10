var new_lang = {

"lt0": "Crema viso ringiovanente INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Ringiovanimento</div>-<div class=\"lBRvsb__item\">Sulle rughe</div>-<div class=\"lBRvsb__item\">Consentire fermezza</div>-<div class=\"lBRvsb__item\">Tonazione</div>-<div class=\"lBRvsb__item\">Riparazione completa</div>",

"lt3": "La crema stringe visibilmente la pelle, stimola la produzione di collagene ed elastina, rassoda e uniforma il rilievo della pelle. I componenti della crema penetrano profondamente negli strati della pelle, permettendo un effetto evidente in poche settimane",

"lt4": "Descrizione <span></span> ",

"lt5": "<a href=\"x22\">INTENSKIN</a> <br> Crema ringiovanente con effetto lifting",

"lt6": "link aperto",

"lt7": "21 recensioni",

"lt8": "5 stelle",

"lt9": "20 recensioni",

"lt10": "4 stelle",

"lt11": "1 recensione",

"lt12": "3 stelle",

"lt13": "2 stelle",

"lt14": "1 stella",

"lt15": "crema superiore",

"lt17": "Traduci",

"lt18": "Ottima crema, si applica sulla pelle molto bene. Dopo un paio di usi si può notare come la pelle diventa più morbida e uniforme. La crema è adatta ai tipi di pelle misti",

"lt19": "Valeria V. <span class=\"oGzEp\"></span>.",

"lt20": "Wow",

"lt22": "Traduci",

"lt23": "La consegna è stata veloce e gratuita! Imballaggio molto bello, non si possono togliere gli occhi di dosso. La crema era perfetta per il mio viso, ho notato l'effetto ringiovanente dopo 3 giorni: le rughe vicino al naso e alle labbra sono diventate meno pronunciate:)",

"lt24": "Elena <span class=\"oGzEp\"></span>",

"lt25": "favoloso",

"lt27": "traduci",

"lt28": "Crema decente, mi piace. Densa, inodore, si assorbe rapidamente. L’ uso al mattino idrata la pelle fino alla sera) Non dirò nulla sull'effetto ringiovanente ancora, sono solo al secondo giorno",

"lt29": "Il nome è nascosto <span class=\"oGzEp\"></span>.",

"lt30": "Il migliore",

"lt32": "Traduci",

"lt33": "Crema molto buona! Ha levigato le rughe del mio viso in poche applicazioni!!! Non ho ancora incontrato prodotti così efficaci. Ho ordinato qualche altro pezzo",

"lt34": "Patrizia R. <span class=\"oGzEp\"></span>.",

"lt36": "Traduci",

"lt37": "si assorbe bene, effetto rapido, la pelle dopo l'applicazione è morbida, ben idratata",
"lt38": "Elizabeth <span class=\"oGzEp\"></span>",

"lt40": "Traduci",

"lt41": "Ho comprato la crema basandomi sulle recensioni online. Finora questa è la migliore crema che abbia mai usato, anche rispetto a quelle più costose. Si assorbe molto rapidamente, la mia pelle ha iniziato ad avere un aspetto diverso dopo pochi giorni: la mia carnagione è uniforme, la mia pelle secca è sparita, le rughe sono attenuate",

"lt42": "Ivana S. <span class=\"oGzEp\"></span>.",

"lt43": "Struttura eccellente",

"lt45": "tradurre",

"lt46": "Comprata su raccomandazione di un'estetista - forse è per questo che la crema ha funzionato perfettamente per me. Dopo alcuni usi di INTENSKIN ho un aspetto migliore, la mia pelle è più chiara, non ci sono quasi più rughe. Penso che ne comprerò un altro pacchetto",

"lt47": "Alessandra D. <span class=\"oGzEp\"></span>.",

"lt49": "Traduci",

"lt50": "Ho amato il design della confezione, si distingue fortemente dagli altri prodotti che ho sul mio scaffale) Dopo l’applicazione, che faccio prima di andare a letto, la mia pelle è idratata e morbida fino alla notte successiva",

"lt51": "Lina V. <span class=\"oGzEp\"></span>",

"lt52": "Crema incredibile!!!",

"lt54": "traduci",

"lt55": "La crema mi è stata data da un'amica, per la quale le sono molto grata) Ho applicato la crema prima di andare a letto per 14 giorni, sulla mia pelle  secca. I risultati: i problemi di secchezza sono spariti, le rughe vicino agli occhi e sulla fronte si sono attenuate e la carnagione non è opaca. Sono soddisfatta anche della composizione naturale, nessun rossore e irritazione sulla pelle",

"lt109": "Altre recensioni",

"lt110":"<a>Pagina iniziale di Google</a><wbr><a>Programmi pubblicitari</a><wbr><a>Soluzioni commerciali</a><wbr><a>Regole e principi</a><wbr>",

"lt111": "Questi negozi pagano Google per la pubblicità, quindi sono in cima alla lista. I prezzi sono comprensivi di tasse e imposte. Le spese di spedizione dipendono dall'indirizzo e dal metodo di spedizione",


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