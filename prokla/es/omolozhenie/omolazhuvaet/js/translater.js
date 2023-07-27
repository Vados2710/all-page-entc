var new_lang = {

"lt0": "Crema facial rejuvenecedora INTENSKIN 50 ml",

"lt2": "<div class=\"lbrvsb__item\">Rejuvenecimiento</div>·<div class=\"lbrvsb__item\">Antiarrugas</div>·<div class=\"lbrvsb__item\">Rejuvenecimiento</div>·<div class=\"lbrvsb__item\">Recuperación Integral</div>",

"lt3": "La crema tonifica notablemente la piel, estimula la producción de colágeno y elastina, fortalece y nivela el relieve de la piel. Los componentes de la crema penetran profundamente en las capas de la piel, lo que permite lograr un efecto notable en unas pocas semanas.",

"lt4": "Descripción<span></span> ",

"lt5":"<a href=\"\">INTENSKIN</a><br>Crema rejuvenecedora con efecto lifting",

"lt6": "Abrir sitio",

"lt7": "21 comentarios",

"lt8": "5 estrellas",

"lt9": "20 comentarios",

"lt10": "4 estrellas",

"lt11": "1 opinión",

"lt12": "3 estrellas",

"lt13": "2 estrellas",

"lt14": "1 estrellas",

"lt15": "Excelente crema",

"lt17": "Traducir",

"lt18": "Excelente crema, se aplica perfectamente a la piel. Después de un par de usos, es notable cómo la piel se vuelve más suave y uniforme. La crema es adecuada para tipo de piel mixta.",

"lt19": "Valeria M. <span class=\"oGzEp\"></span> ",

"lt20": "Qué guaai",

"lt22": "Traducir",

"lt23": "¡La entrega fue rápida y gratis! Una caja muy linda, dan ganas de mirarla. La crema fue perfecta para mi cara, el efecto rejuvenecedor se notó después de 3 días: las arrugas cerca de la nariz y los labios se volvieron menos pronunciadas:)",

"lt24": "Elena <span class=\"oGzEp\"></span> ",

"lt25": "Fabuloso",

"lt27": "Traducir",

"lt28": "Una crema decente, me gusta. Espesa, sin olor, se absorbe rápidamente. La uso en la mañana e hidrata la piel hasta la noche) respecto al efecto rejuvenecedor por ahora no digo nada, es mi segundo día.",

"lt29": "Nombre oculto <span class=\"oGzEp\"></span> ",

"lt30": "La mejor",

"lt32": "Traducir",

"lt33": "¡Muy buena crema! ¡Las arrugas se suavizaron en la cara en unos pocos usos!! No he encontrado otros productos así de efectivos. Ordené unas cuantas más",

"lt34": "Gabriela Р. <span class=\"oGzEp\"></span> ",

"lt36": "Traducir",

"lt37": "Se absorbe bien, el efecto es rápido, la piel después de la aplicación es suave, bien hidratada.",

"lt38": "Elizabeth <span class=\"oGzEp\"></span> ",

"lt40": "Traducir",

"lt41": "Compré la crema según las opiniones en Internet. Hasta ahora, esta es la mejor crema que he usado, incluso si se compara con las más caras. Se absorbe muy rápidamente, la piel comenzó a verse diferente después de unos días: la tez se volvió uniforme, se fue la piel seca, se suavizaron las arrugas.",

"lt42": "Juliana С. <span class=\"oGzEp\"></span> ",

"lt43": "Qué excelente estructura",

"lt45": "Traducir",

"lt46": "La compré por recomendación de un esteticista, tal vez por eso la crema me vino perfectamente. Después de usar varias veces INTENSKIN, comencé a verme mejor, la piel se iluminó, casi no quedan arrugas. Me ordenaré otro paquete, creo que no puedo solo con uno",

"lt47": "Alexandra D. <span class=\"oGzEp\"></span> ",

"lt49": "Traducir",

"lt50": "Me gustó mucho el diseño de la caja, en comparación con los otros productos en mi estante se destaca mucho) Después de la aplicación antes de acostarme, la piel permanece hidratada y suave hasta la noche siguiente",

"lt51": "Lina R. <span class=\"oGzEp\"></span> ",

"lt52": "¡Es una crema increíble !!!",

"lt54": "Traducir",

"lt55": "Una amiga me regaló la crema, por lo que le estoy muy agradecida) La aplico la crema antes de acostarme durante 14 días, tengo piel seca. Resultados: desaparecieron los problemas de sequedad, se suavizaron las arrugas cerca de los ojos y en la frente, la tez tomó un agradable tono mate. También estoy satisfecha con la composición natural, no hay ni enrojecimiento e irritación en la piel.",

"lt109": "Más opiniones",

"lt110": "<a>Página principal de Google</a><wbr><a> Programas publicitarios</a><wbr><a>Soluciones empresariales</a><wbr> < a>Reglas y principios</a> <wbr>",

"lt111": "Estas tiendas pagan a Google por anuncios, por lo que están en la parte superior de la lista. Los precios incluyen impuestos y tasas. El costo de envío depende de la dirección y el método de envío.",


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