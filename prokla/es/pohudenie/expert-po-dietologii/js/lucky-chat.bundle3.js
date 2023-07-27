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
let dialogSlider = document.getElementById("slider")
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
    const element = $('.chat-block');
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
        $(".img-mass").addClass("active");
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
    if (ii.slider === undefined) {
    } else {
      $(slider).removeClass("hidden").css("pointer-events", "initial");
      $(".js_text").append(dialogSlider);
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
      time: 1000,
      text: "¿Cuántos años tiene??",
      width: 328,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "18-25 años" },
        { text: "25-35 años" },
        { text: "35-45 años" },
        { text: "45+ años" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Cuál es tu género?",
      width: 283,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "Masculino" },
        { text: "Femenino" },
        { text: "Otro" },
        { text: "Prefiero no decirlo" },
      ],
    },
    {
      load: 100,
      time: 1500,
      text: "¿Cuanto mides?",
      width: 167,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
          { text: "130-150cm" },
        { text: "150-165cm" },
        { text: "165-175cm" },
        { text: "175cm+" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Cuánto pesas?",
      width: 332,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "50 - 65 kg" },
        { text: "65 - 75 kg" },
        { text: "75 - 90 kg" },
        { text: "90kg+" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Cada cuanto te ejercitas?",
      width: 332,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "Nunca" },
        { text: "Casi nunca" },
        { text: "Una o dos veces a la semana" },
        { text: "Activamente, 5 veces a la semana o más" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Cuál es tu peso objetivo?",
      width: 332,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "50-60 kg" },
        { text: "60-70 kg" },
        { text: "70-80 kg" },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¿Estás en una dieta estricta?",
      width: 332,
      selectorClass: "question",
    },
    {
      load: 0,
      time: 500,
      action: [
        { text: "No." },
        { text: "Sí." },
        { text: "A veces." },
      ],
    },
    {
      load: 100,
      time: 1000,
      text: "¡Perfecto! Muchas gracias por completar el formulario. La solución es sencilla según sus respuestas. Si has leído la publicación, sabrás que estoy en contra de las píldoras y cualquier tipo de medicamento o receta para perder peso rápidamente. Sus respuestas indican que es relativamente más saludable que la mayoría de las personas que completan esta encuesta, lo que implica que no necesita una prescripción estricta de esteroides ni medicamentos nocivos. Mantenga su régimen actual y comience a beber "+offer_params.productName+" una o dos veces al día. ¡Te garantizo que notarás los resultados en solo dos semanas! ¡Mantén tu régimen y no te saltes "+offer_params.productName+"!",
      width: 334,
      selectorClass: "question",
    },
    {
      load: 100,
      time: 1000,
      text: "<img src='prod.png' alt=''>",
      width: 334,
      selectorClass: "img-mass",
    },
    {
      load: 100,
      time: 1500,
      form: true,
    }

);
