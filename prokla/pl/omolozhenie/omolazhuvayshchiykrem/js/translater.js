var new_lang = {

"lt0": "Odmładzający krem do twarzy INTENSKIN 50 ml",

"lt2": "<div class=\"lBRvsb__item\">Odmłodzenie</div>·<div class=\"lBRvsb__item\">Na zmarszczki</div>·<div class=\"lBRvsb__item\">Lepsza sprężystość</div>·<div class=\"lBRvsb__item\">Tonowanie</div>·<div class=\"lBRvsb__item\">Kompleksowa regeneracja</div>",

"lt3": "Krem widocznie napina skórę, stymuluje produkcję kolagenu i elastyny, wzmacnia i przynosi ukojenie skórze. Składniki kremu głęboko wnikają w warstwy skóry, co pozwala osiągnąć zauważalny efekt w ciągu kilku tygodni.",

"lt4": "Opis <span></span> ",

"lt5": " <a href=\"\">INTENSKIN</a> <br>Odmładzający krem z efektem liftingu",

"lt6": "Otwórz stronę",

"lt7": "21 opinii",

"lt8": "5 gwiazdek",

"lt9": "20 opinii",

"lt10": "4 gwiazdki",

"lt11": "1 opinia",

"lt12": "3 gwiazdki",

"lt13": "2 gwiazdki",

"lt14": "1 gwiazdka",

"lt15": "Wspaniały krem",

"lt17": "Przetłumaczyć",

"lt18": "Doskonały krem, bardzo przyjemna aplikacja na skórę. Po kilku użyciach skóa jest zauważalnie bardziej miękka i gładsza. Krem nadaje się do cery mieszanej.",

"lt19": "Hanna W. <span class=\"oGzEp\"></span> ",

"lt20": "Wow",

"lt22": "Przetłumaczyć",

"lt23": "Dostawa była szybka i bezpłatna! Bardzo ładne opakowanie, nie można oderwać oczu. Krem idealny dla mojej twarzy, po 3 dniach zauważyłam efekt odmładzający: zmarszczki przy nosie i ustach stały się mniej wyraźne:)",

"lt24": "Agnieszka <span class=\"oGzEp\"></span> ",

"lt25": "Cudowny",

"lt27": "Przetłumaczyć",

"lt28": "Przyzwoity krem, lubię go. Gęsty, bezzapachowy, szybko się wchłania. Jedna aplikacja rano nawilża skórę aż do wieczora) Jeśli chodzi o efekt odmładzający na razie nic nie powiem, stosuje drugi dzień.",

"lt29": "Anonimowy <span class=\"oGzEp\"></span> ",

"lt30": "Najlepszy",

"lt32": "Przetłumaczyć",

"lt33": "Bardzo dobry krem! Zmarszczki na twarzy wygładzone po kilku aplikacjach!! Nigdy nie widziałam tak skutecznego preparatu. Zamówiłam jeszcze kilka sztuk ",

"lt34": "Róża N. <span class=\"oGzEp\"></span> ",

"lt36": "Przetłumaczyć",

"lt37": "Dobrze się wchłania, szybki efekt, skóra po aplikacji jest delikatna, dobrze nawilżona.",

"lt38": "Marlena <span class=\"oGzEp\"></span> ",

"lt40": "Przetłumaczyć",

"lt41": "Kupiłam krem na podstawie opinii w internecie. Do tej pory to najlepszy krem, jakiego kiedykolwiek używałam, nawet w porównaniu z tymi drogimi. Bardzo szybko się wchłania, skóra po kilku dniach zaczęła wyglądać inaczej: jest wyrównana, zniknęła suchość , zmarszczki są wygładzone.",

"lt42": "Karolina S. <span class=\"oGzEp\"></span> ",

"lt43": "Wspaniała konsystencja",

"lt45": "Przetłumaczyć",

"lt46": "Kupiłam go z polecenia kosmetyczki – może dlatego krem idealnie mi odpowiadał. Po kilku aplikacjach INTENSKIN zaczął działać, skóra stała się jaśniejsza, prawie nie ma zmarszczek. Zamówię sobie jeszcze jedno opakowanie, jedna to za mało",

"lt47": "Kamila D. <span class=\"oGzEp\"></span> ",

"lt49": "Przetłumaczyć",

"lt50": "Bardzo spodobał mi się design opakowania, mocno wyróżnia się na tle innych produktów na mojej półce) Po nałożeniu na noc skóra pozostaje nawilżona i delikatna do następnego wieczora",

"lt51": "Gabriela K. <span class=\"oGzEp\"></span> ",

"lt52": "Niesamowity krem!!!",

"lt54": "Przetłumaczyć",

"lt55": "Krem podarowała mi koleżanka, za co jestem jej bardzo wdzięczna) Nakładałam krem przed pójściem spać przez 14 dni, mam suchą skórę. Efekty: zniknęły problemy z suchością, zmarszczki pod oczami i na czole wygładzone, cera stała się przyjemnie matowa. Ucieszył mnie również naturalny skład, brak zaczerwienień i podrażnień.",

"lt109": "Więcej opinii",

"lt110": "<a>Strona główna Google</a>‎<wbr><a>Programy reklamowe</a>‎<wbr><a>Rozwiązania dla biznesu</a>‎<wbr><a>Zasady</a>‎<wbr>",

"lt111": "Te sklepy płacą Google za reklamę, więc znajdują się na początku listy. Ceny zawierają podatek i opłaty. Koszt wysyłki uzależnione są od adresu i sposobu dostawy."


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