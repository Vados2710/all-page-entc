var new_lang = {

"lt0": "Jums ir 18 gadi?",
"lt1": "Jā",
"lt2": "Nē",
"lt3": "Diemžēl, jums ir liegta piekļuve.",
"lt4": "Erogan",
"lt5": "Erogan<br>LĪDZEKLIS NR 1<br>EREKCIJAS UZLABOŠANAI",
"lt6": "Pasūtot Erogan, jūs saņemsiet:",
"lt7": "<span class=\"teksts\">1</span>Akmensstingru erekciju, kad vien vēlaties",
"lt8": "<span class=\"teksts\">2</span>Ievērojamu libido paaugstināšanos",
"lt9": "<span class=\"teksts\">3</span>Dzimumakta ilguma kontroli.",
"lt10": "<span class=\"teksts\">4</span>Spermatozoīdu daudzuma palielināšanos",
"lt11": "<b>Atlaide</b>50%",
"lt12": "PASŪTĪT TAGAD"



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