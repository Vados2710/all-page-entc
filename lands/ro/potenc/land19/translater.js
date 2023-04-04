var new_lang = {
    
"lt0": "XX",

"lt1": "AUMENTAR O PÉNIS EM 6 CM EM APENAS 1 SEMANA <br> 100% EFICAZ 100%!",

"lt2": "+6cm",

"lt3": "em 1<br>semana",

"lt4": "<span class=\"num\">1</span>Em apenas 1 semana o pénis será aumentado em 6-9 cm.",

"lt5": "<span class=\"num\">2</span>Ereção sólida",

"lt6": "<span class=\"num\">3</span>100% eficaz",

"lt7": "<span class=\"num\">4</span>100% conteúdo natural",

"lt8": "<span class=\"num\">5</span>A quantidade de espermatozoides aumenta",

"lt9": "<span class=\"num\">6</span>Sensações inesquecíveis",

"lt14": "horas",

"lt15": "minutos",

"lt16": "segundos",

"lt17": "Portugal",








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