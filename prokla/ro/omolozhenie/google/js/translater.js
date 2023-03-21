var new_lang = {

"lt0": "Сremă de față anti-îmbătrânire INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Întinerire</div>·<div class=\"lBRvsb__item\">Anti-rid<</div>·<div class=\"lBRvsb__item\">Elasticitate crescută</div>·<div class=\"lBRvsb__item\">Tonifiere</div>·<div class=\"lBRvsb__item\">Restaurare cuprinzătoare</div>",

"lt3": "Crema strânge vizibil pielea, stimulează producerea de colagen și elastină, întărește și netezește relieful pielii. Componentele cremei pătrund adânc în straturile pielii, ceea ce vă permite să obțineți un efect vizibil în câteva săptămâni.",

"lt4": "Descrierea<span></span> ",

"lt5": "<a href=\"\">INTENSKIN</a> <br>Cremă anti-îmbătrânire cu efect de lifting",

"lt6": "Deschide un site web",

"lt7": "21 de comentarii",

"lt8": "5 stele",

"lt9": "20 de comentarii",

"lt10": "4 stele",

"lt11": "1 recenzie",

"lt12": "3 stele",

"lt13": "2 stele",

"lt14": "1 stea",

"lt15": "Cremă excelentă",

"lt17": "Traduce",

"lt18": "O cremă excelentă, se aplică pe piele foarte plăcut. După câteva utilizări, se observă modul în care pielea devine mai moale și mai fină. Crema este potrivită pentru tipurile de piele combinate.",

"lt19": "Valeria Ursu <span class=\"oGzEp\"></span> ",

"lt20": "Wow",

"lt22": "Traduce",

"lt23": "Livrarea a fost rapidă și gratuită! Ambalaj e foarte frumos, nu-ți poți lua ochii. Crema a fost perfectă pentru fața mea, am observat un efect de întinerire după 3 zile: ridurile nazolabiale au devenit mai puțin pronunțate:)",

"lt24": "Elena Postolache<span class=\"oGzEp\"></span> ",

"lt25": "Fabuloasă",

"lt27": "Traduce",

"lt28": "O cremă decentă, îmi place. Groasă, nu are miros, absorbită rapid. O utilizare de dimineață hidratează pielea până seara) În ceea ce privește efectului de întinerire, nu voi mai spune nimic, folosesc a doua zi.",

"lt29": "Numele este ascuns <span class=\"oGzEp\"></span> ",

"lt30": "Cea mai bună",

"lt32": "Traduce",

"lt33": "Cremă foarte bună! Ridurile au fost netezite pe față în câteva aplicări!! Nu am întâlnit încă astfel de mijloace eficiente. Am comandat mai multe cutii",

"lt34": "Veronica Rotaru <span class=\"oGzEp\"></span> ",

"lt36": "Traduce",

"lt37": "Este bine absorbită, efect rapid, pielea este delicată după aplicare, bine hidratată.",

"lt38": "Elisabeta Moscovici<span class=\"oGzEp\"></span> ",

"lt40": "Traduce",

"lt41": "Am cumpărat o cremă bazându-mă pe recenzii pe Internet. Până acum, aceasta este cea mai bună cremă pe care am folosit-o vreodată, chiar dacă este comparată cu cele mai scumpe. Se absoarbe foarte repede, pielea a început să arate diferit după câteva zile: tenul a devenit uniform, pielea a devenit hidratată, ridurile au fost netezite.",

"lt42": "Iuliana Sadoveanu<span class=\"oGzEp\"></span> ",

"lt43": "Structură excelentă",

"lt45": "Traduce",

"lt46": "Am cumpărat-o la recomandarea unui cosmetolog - poate de aceea crema mi s-a potrivit perfect. După mai multe aplicări, pielea a început să arate mai bine, pielea s-a luminat, aproape că nu au mai rămas riduri. Voi comanda un alt pachet pentru mine, cred că unul nu-mi va fi suficient",

"lt47": "Alexandra D. <span class=\"oGzEp\"></span> ",

"lt49": "Traduce",

"lt50": "Mi-a placut design de ambalaj, se remarcă puternic pe fundalul altor produse de pe raftul meu) După aplicarea înainte de a merge la culcare, pielea rămâne hidratată și fragedă până seara următoare",

"lt51": "Liliana Lașcu <span class=\"oGzEp\"></span> ",

"lt52": "Cremă uimitoare!!!",

"lt54": "Traduce",

"lt55": "Prieten mi-a dat crema, pentru care sunt foarte recunoscătoare) Am aplicat crema înainte de a merge la culcare timp de 14 zile, am pielea uscată. Rezultate: problemele cu uscăciunea au dispărut, ridurile din apropierea ochilor și pe frunte au fost netezite, tenul a devenit plăcut mat. De asemenea, am fost mulțumită de compoziția naturală, fără roșeață și iritație pe piele.",

"lt109": "Mai multe recenzii",

"lt110": "<a>Google Acasă</a><wbr><a>Programe de publicitate</a><wbr><a>Soluții de afaceri</a><wbr><a>Reguli și principii</a><wbr>",

"lt111": "Aceste magazine plătesc Google pentru publicitate, deci sunt în partea de sus a listei. Prețurile includ taxe şi impozite. Costul livrării depinde de adresa și metoda de livrare.",


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