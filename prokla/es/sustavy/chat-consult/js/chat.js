function setDate() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    $(".js_time").text(`${hours}.${minutes}`);
}

let ii = 0;
let dialogForm = document.getElementById("form");
//let wheel = document.getElementById("wheel");
//let wheelImage = document.querySelector('.wheel-image');

const messageLoad = $(".message-loading");

const showImage = () => {
    if (
        $(".js_text").prop("scrollHeight") >= $(".dialog__image").prop("offsetTop")
    ) {
        $(".product__image").addClass("active");
    }
};

async function sendMessage(...arr) {
    const scrollBottom = (id) => {
        const element = $(id);
        const lastElem = $(".js_text").children().last();

        if (
            element.prop("scrollHeight") - $(lastElem).innerHeight() - 100 <=
            element.prop("scrollTop") + element.prop("clientHeight")
        )
            element.animate(
                {
                    scrollTop: element.prop("scrollHeight"),
                },
                800
            );
    };

    function loading(d) {
        setTimeout(() => {
            if (d === false) {
            } else {
                $(messageLoad).show();
                $(".js_text").append($(messageLoad));
            }
        }, d);
    }

    function delay(t) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve($(messageLoad).hide());
            }, t);
        });
    }

    const check = () => {
        return new Promise((resolve) => {
            $(".select__item").on("click", function (e) {
                $(this)
                    .css("pointer-events", "none")
                    .siblings(".select__item")
                    .css("pointer-events", "none");
                $(".js_text").append(
                    `<div class="dialog__reply"><div class="current-time current-time-right js_time"></div>${$(
                        this
                    ).text()}</div>`
                );
                setTimeout(() => {
                    $(".dialog__reply").addClass("active");
                }, 100);
                resolve();
            });
        });
    };



    for (let ii of arr) {
        showImage();

        await setDate();
        await loading(ii.load);
        await delay(ii.time);
        let newMessage = `<div class=${ii.selectorClass} style="width:${ii.width}px"><div class="current-time current-time-left js_time"></div>${ii.text}</div>`;

        if (ii.text === undefined) {
        } else {
            $(".js_text").append($(newMessage));
            setTimeout(() => {
                $(".dialog__message").addClass("active");
            }, 100);
        }

        if (ii.image === undefined) {
        } else {
            $(".js_text").append(
                $(
                    `<img class="dialog__image img-fluid" style="width:${ii.width}px" src="${ii.image}" alt="">`
                )
            );
            setTimeout(() => {
                $(".dialog__image").addClass("active");
            }, 100);
        }

        if (ii.form === undefined) {
        } else {
            $(dialogForm).removeClass("hidden").css("pointer-events", "initial");
            $(".js_text").append(dialogForm);
        }

        if (ii.wheel === undefined) {
        } else {
            $(wheel).removeClass("hidden").css("pointer-events", "initial");
            $(".js_text").append(wheel);

            //await spin();
        }

        if (ii.action === undefined) {
        } else {
            let obj = [...ii.action];
            const selectItem = (item, width, display) => {
                if (!width) {
                    $(".js_text").append(
                        `<div class="select__item" style="display:${display}">${item}</div>`
                    );
                } else if (!display) {
                    $(".js_text").append(
                        `<div class="select__item" style="width:${width}px">${item}</div>`
                    );
                } else if (!width && !display) {
                    $(".js_text").append(`<div class="select__item">${item}</div>`);
                } else {
                    $(".js_text").append(
                        `<div class="select__item" style="display:${display}; width:${width}px">${item}</div>`
                    );
                }
            };

            for (let x = 0; x < ii.action.length; x++) {
                selectItem(obj[x].text, obj[x].width, obj[x].display);
                setTimeout(() => {
                    $(".select__item").addClass("active");
                }, 50);
            }
            await check();
        }
        await scrollBottom(".js_text");
    }
}

sendMessage(
    {
        load: 100,
        time: 1500,
        text: "Bienvenido a nuestro sitio web. Aquí puede tener una consulta gratuita con nuestros especialistas con más de 20 años de experiencia ayudando a las personas a mejorar el dolor articular y muscular.",
        width: 659,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 2500,
        text: "Hola. Mi nombre es Luis y llevo 20 años ayudando a personas a mejorar el dolor articular y muscular. Me alegra tener esta oportunidad y poder ayudarte a vivir una vida más feliz . El dolor articular es grave y se considera una epidemia que afecta a millones de personas (incluidos los jóvenes). Se está volviendo más común ahora que hace 50 años debido a la falta de actividad física en nuestras nuevas generaciones. Independientemente de la edad y los niveles de condición física, el dolor articular y muscular puede afectarlo de más maneras de las que piensa. Responda a estas sencillas preguntas para que pueda darle mi recomendación personal. Esto te ayudará a mejorarte de los dolores articulares o musculares en poco tiempo.",
        width: 659,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 1000,
        text: "¿Cuántos años tiene?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "18-25"},
            {text: "26-35"},
            {text: "36-45"},
            {text: "46-60"},
            {text: "60+"},
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Qué tan físicamente activa eres a diario?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Actividad mínima: Ni siquiera salgo de mi habitación."},
            {text: "Actividad simple: camino un poco en el parque."},
            {text: "Actividad media: hago caminatas y me gusta dar largos paseos al aire libre."},
            {text: "Mucha actividad: corro, hago caminatas y disfruto de los desafíos físicos."},
            {text: "Actividad extrema: Soy un deportista devoto."},
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Con qué frecuencia tiene dolores articulares/musculares después de la actividad física?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Cada vez."},
            {text: "A veces."},
            {text: "Casi nunca."},
            {text: "Nunca."}
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Cuánto duran tus dolores articulares/musculares?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Pocas horas como máximo."},
            {text: "Uno o dos días."},
            {text: "Una semana o más."},
            {text: "Un mes o más."}
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Tus dolores articulares/musculares te dificultan dormir?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Sí."},
            {text: "No."},
            {text: "No sé."}
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Qué haces para mejorar los dolores articulares/musculares?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Nada. solo espero"},
            {text: "Remedio casero sencillo."},
            {text: "Los remojo en agua tibia."},
            {text: "Yo uso una crema para las articulaciones."}
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿Cuánto tiempo ha tenido dolor en las articulaciones/músculos?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Aproximadamente 2 semanas."},
            {text: "Alrededor de 3 meses."},
            {text: "Más de 1 año."},
            {text: "Alrededor de 6 meses."}
        ],
    },
    {
        load: 100,
        time: 1000,
        text: "¿El dolor suele comenzar antes o después de la actividad física?",
        width: 630,
        selectorClass: "question",
    },
    {
        load: 0,
        time: 500,
        action: [
            {text: "Antes."},
            {text: "Después"}
        ],
    },
    {
        load: 100,
        time: 3000,
        text: "Entonces, según sus respuestas, es posible que sufra dolor en las articulaciones o los músculos debido a la falta de aceites esenciales y nutrientes. Además, está usando la solución incorrecta para mejorar el dolor, por eso no se alivia  de los dolores. Sin embargo, ¡no te preocupes! Esto se puede arreglar con un remedio simple.",
        width: 630,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 3000,
        text: "Recientemente, los Especialistas crearon un nuevo remedio llamado "+offer_params.productName+" que apareció en el mercado  para personas con síntomas similares a los tuyos.",
        width: 758,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 3000,
        text: `Este es un producto completamente natural hecho de plantas. Algunos de sus ingredientes han sido utilizados históricamente por antiguos curanderos. Sin embargo, gracias a las nuevas tecnologías finalmente hemos podido aprovechar todo el potencial de los ingredientes y convertirlos en una crema conveniente que se puede aplicar fácilmente en casa. Los pasos son simples: frota la crema en el área problemática hasta que el dolor mejore¡Funciona en poco tiempo como magia!`,
        width: 758,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 2000,
        text: 'Déjame explicarte un poco cómo funciona '+offer_params.productName+'.<br> <img src="prod.png">',
        width: 758,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 2000,
        text: "Está repleto de aceites esenciales como el aceite de menta que tienen efectos terapéuticos eficaz   en el cuerpo. No solo ayudan a mejorar el dolor, sino que también te ayudan a relajarte para que tu mente pueda concentrarse en otras tareas, distrayéndote del dolor y permitiéndote vivir una vida más tranquila (¡o dormir bien por la noche!).",
        width: 758,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 2000,
        text: "La crema también tiene otros componentes derivados de plantas, como la glicerina vegetal, que hacen maravillas en la piel y ayudan a que las propiedades terapéuticas se absorban en el área que duele. El uso rutinario del remedio tiene un efecto permanente en el cuerpo, lo que mejora su capacidad para reducir el dolor en el futuro. Esto es ideal para usted ya que ha estado sintiendo dolor durante bastante tiempo sin mejorar, por lo que significa que su actual uso es maravilloso.",
        width: 630,
        selectorClass: "dialog__message",
    },
    {
        load: 100,
        time: 1500,
        form: true,
    },
);

