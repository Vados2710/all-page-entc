// "use strict";
// typeSpeed: 1, //35
{
    /* <span id="vall1" class="new_price_val" style="display: none;"> </span>
    <span id="vall2" class="new_price_cur" style="display: none;"> </span>
    <span id="vall3" class="new_price_sig" style="display: none;"> </span>
    <span id="vall4" class="names1" style="display: none;"> </span>
    <span id="vall5" class="" style="display: none;"> </span>

    <input type="hidden" id="vall1" class="new_price_val">
    <input type="hidden" id="sig1" class="new_price_sig">
    <input type="hidden" id="cur1" class="new_price_cur">
    <span id="val1" class="new_price_val" style="color:red"></span> 
    {
            // Перво-наперво Вам необходимо пересмотреть свой образ жизни: снизить уровень холестерина и глюкозы в крови, соблюдать режим сна и бодрствования, исключить стрессовые факторы, полноценно отдыхать, а также повысить физическую активность.
            type: "text",
            content: "Самым эффективным решением для повышения выработки тестостерона и восстановления потенции МЕНЬШЕ ЧЕМ ЗА 2 НЕДЕЛИ на сегодняшний день является только один препарат —  «Гипертенс». <br> <img src='img/order_tube.png' style='width: 80%; max-width: 289px;'> "
        }
        {
            type: "text",
            content: 'Поскольку Вы уже являетесь участником Программы мужского здоровья, то получить курс препарата «Гипертенс» Вы можете совершенно бесплатно до ' + date + ' (включительно) для этого нужно заполнить форму, вписав свое имя и контактный телефон.'
        },
       */
}

function getURLParameter(name, url) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var results = new RegExp('[?&]' + name + '=?([^&#]*)').exec(url || window.location.href);
    return results == null ? null : results[1] || true;
}


let country_data = setInterval(() => {
    country_data = $('select[name^="country"]')[0]
}, 20);

// let countr = getURLParameter('country', window.location.href);
// $(".countr").html(getURLParameter('country', window.location.href))

// setInterval(() => {
//     $(".countr").html("России");
//     $(".countr2").html("России");
//     $(".countr3").html("Российских");
//     $(".countr4").html("Российской");
//     $(".countr5").html("Российские");
//     $(".countr6").html("Российская");
//     $(".countr7").html("Российским");
//     $(".countr8").html("Российский");
//     $(".countr9").html("Российском");
//     $(".countr10").html("Россиянам");
//     $(".countr11").html("Россиянин");
//     $(".countr12").html("Россия");
//     $(".countr13").html("Россиян");
//     $(".countr14").html("Россией");
//     $(".countr15").html("Россию");
//     $(".countr16").html("Российско");
//     $(".countr17").html("Российскую");

//     $(".city").html("Москва");
//     $(".city2").html("Москве");
//     $(".city3").html("Москву");
//     $(".city4").html("Москвы");
//     $(".city5").html("Москвой");
//     $(".city6").html("Московских");
//     $(".city7").html("Московской");
//     $(".city8").html("Московские");
//     $(".city9").html("Московский");
//     $(".city10").html("Московская");
//     $(".city11").html("Московскую");
//     $(".city12").html("Московского");

//     if (countr == "RU" || country_data.value == "RU") {

//         $(".countr").html("России");
//         $(".countr2").html("России");
//         $(".countr3").html("Российских");
//         $(".countr4").html("Российской");
//         $(".countr5").html("Российские");
//         $(".countr6").html("Российская");
//         $(".countr7").html("Российским");
//         $(".countr8").html("Российский");
//         $(".countr9").html("Российском");
//         $(".countr10").html("Россиянам");
//         $(".countr11").html("Россиянин");
//         $(".countr12").html("Россия");
//         $(".countr13").html("Россиян");
//         $(".countr14").html("Россией");
//         $(".countr15").html("Россию");
//         $(".countr16").html("Российско");
//         $(".countr17").html("Российскую");

//         $(".city").html("Москва");
//         $(".city2").html("Москве");
//         $(".city3").html("Москву");
//         $(".city4").html("Москвы");
//         $(".city5").html("Москвой");
//         $(".city6").html("Московских");
//         $(".city7").html("Московской");
//         $(".city8").html("Московские");
//         $(".city9").html("Московский");
//         $(".city10").html("Московская");
//         $(".city11").html("Московскую");
//         $(".city12").html("Московского");
//     }
//     if (countr == "UA" || country_data.value == 'UA') {
//         $(".countr").html("Украины");
//         $(".countr2").html("Украине");
//         $(".countr3").html("Украинских");
//         $(".countr4").html("Украинской");
//         $(".countr5").html("Украинские");
//         $(".countr6").html("Украинская");
//         $(".countr7").html("Украинским");
//         $(".countr8").html("Украинский");
//         $(".countr9").html("Украинском");
//         $(".countr10").html("Украинцам");
//         $(".countr11").html("Украинец");
//         $(".countr12").html("Украина");
//         $(".countr13").html("Украинцев");
//         $(".countr14").html("Украиной");
//         $(".countr15").html("Украину");
//         $(".countr16").html("Украинско");
//         $(".countr17").html("Украинскую");

//         $(".city").html("Киев");
//         $(".city2").html("Киеве");
//         $(".city3").html("Киеву");
//         $(".city4").html("Киева");
//         $(".city5").html("Киевской");
//         $(".city6").html("Киевских");
//         $(".city7").html("Киевской");
//         $(".city8").html("Киевские");
//         $(".city9").html("Киевский");
//         $(".city10").html("Киевская");
//         $(".city11").html("Киевскую");
//         $(".city12").html("Киевского");
//     }
//     if (countr == "BY" || country_data.value == 'BY') {
//         $(".countr").html("Беларуси");
//         $(".countr2").html("Беларусии");
//         $(".countr3").html("Беларусских");
//         $(".countr4").html("Беларусской");
//         $(".countr5").html("Беларусские");
//         $(".countr6").html("Беларусская");
//         $(".countr7").html("Беларусским");
//         $(".countr8").html("Беларусский");
//         $(".countr9").html("Беларусском");
//         $(".countr10").html("Беларуссам");
//         $(".countr11").html("Беларус");
//         $(".countr12").html("Беларусь");
//         $(".countr13").html("Беларуссов");
//         $(".countr14").html("Беларуссией");
//         $(".countr15").html("Беларуссию");
//         $(".countr16").html("Беларусско");
//         $(".countr17").html("Беларусскую");

//         $(".city").html("Минск");
//         $(".city2").html("Минске");
//         $(".city3").html("Минску");
//         $(".city4").html("Минска");
//         $(".city5").html("Минской");
//         $(".city6").html("Минкских");
//         $(".city7").html("Минской");
//         $(".city8").html("Минские");
//         $(".city9").html("Минский");
//         $(".city10").html("Минская");
//         $(".city11").html("Минскую");
//         $(".city12").html("Минского");
//     }
//     if (countr == "KZ" || country_data.value == 'KZ') {
//         $(".countr").html("Казахстана");
//         $(".countr2").html("Казахстане");
//         $(".countr3").html("Казахских");
//         $(".countr4").html("Казахской");
//         $(".countr5").html("Казахские");
//         $(".countr6").html("Казахская");
//         $(".countr7").html("Казахским");
//         $(".countr8").html("Казахский");
//         $(".countr9").html("Казахском");
//         $(".countr10").html("Казахам");
//         $(".countr11").html("Казахам");
//         $(".countr12").html("Казахстан");
//         $(".countr13").html("Казахцев");
//         $(".countr14").html("Казахстаном");
//         $(".countr15").html("Казахстан");
//         $(".countr16").html("Казахско");
//         $(".countr17").html("Казахстанскую");

//         $(".city").html("Нур-Султан");
//         $(".city2").html("Нур-Султане");
//         $(".city3").html("Нур-Султану");
//         $(".city4").html("Нур-Султана");
//         $(".city5").html("Нур-Султанской");
//         $(".city6").html("Нур-Султанских");
//         $(".city7").html("Нур-Султанской");
//         $(".city8").html("Нур-Султанские");
//         $(".city9").html("Нур-Султанский");
//         $(".city10").html("Нур-Султанская");
//         $(".city11").html("Нур-Султанскую");
//         $(".city12").html("Нур-Султанского");
//     }
//     if (countr == "UZ" || country_data.value == 'UZ') {
//         $(".countr").html("Узбекистана");
//         $(".countr2").html("Узбекистане");
//         $(".countr3").html("Узбекских");
//         $(".countr4").html("Узбекской");
//         $(".countr5").html("Узбекские");
//         $(".countr6").html("Узбекская");
//         $(".countr7").html("Узбекским");
//         $(".countr8").html("Узбекский");
//         $(".countr9").html("Узбекском");
//         $(".countr10").html("Узбекам");
//         $(".countr11").html("Узбек");
//         $(".countr12").html("Узбекистан");
//         $(".countr13").html("Узбеков");
//         $(".countr14").html("Узбекистаном");
//         $(".countr15").html("Узбекистан");
//         $(".countr16").html("Узбекско");
//         $(".countr17").html("Узбекистанскую");

//         $(".city").html("Ташкент");
//         $(".city2").html("Ташкенте");
//         $(".city3").html("Ташкенту");
//         $(".city4").html("Ташкента");
//         $(".city5").html("Ташкентской");
//         $(".city6").html("Ташкентских");
//         $(".city7").html("Ташкентской");
//         $(".city8").html("Ташкентские");
//         $(".city9").html("Ташкентский");
//         $(".city10").html("Ташкентская");
//         $(".city11").html("Ташкентскую");
//         $(".city12").html("Ташкентского");
//     }

//     if (countr == "GE" || country_data.value == 'GE') {
//         $(".countr").html("Грузии");
//         $(".countr2").html("Грузии");
//         $(".countr3").html("Грузинских");
//         $(".countr4").html("Грузинской");
//         $(".countr5").html("Грузинские");
//         $(".countr6").html("Грузинская");
//         $(".countr7").html("Грузинским");
//         $(".countr8").html("Грузинский");
//         $(".countr9").html("Грузинском");
//         $(".countr10").html("Грузинам");
//         $(".countr11").html("Грузин");
//         $(".countr12").html("Грузия");
//         $(".countr13").html("Грузинов");
//         $(".countr14").html("Грузией");
//         $(".countr15").html("Грузию");
//         $(".countr16").html("Грузинско");
//         $(".countr17").html("Грузинскую");

//         $(".city").html("Тбилиси");
//         $(".city2").html("Тбилиси");
//         $(".city3").html("Тбилиси");
//         $(".city4").html("Тбилиси");
//         $(".city5").html("Тбилисской");
//         $(".city6").html("Тбилисских");
//         $(".city7").html("Тбилисской");
//         $(".city8").html("Тбилисские");
//         $(".city9").html("Тбилисский");
//         $(".city10").html("Тбилисская");
//         $(".city11").html("Тбилисскую");
//         $(".city12").html("Тбилисского");
//     }
//     if (countr == "AM" || country_data.value == 'AM') {
//         $(".countr").html("Армении");
//         $(".countr2").html("Армении");
//         $(".countr3").html("Армянских");
//         $(".countr4").html("Армянской");
//         $(".countr5").html("Армянские");
//         $(".countr6").html("Армянская");
//         $(".countr7").html("Армянским");
//         $(".countr8").html("Армянский");
//         $(".countr9").html("Армянском");
//         $(".countr10").html("Армянам");
//         $(".countr11").html("Армян");
//         $(".countr12").html("Армения");
//         $(".countr13").html("Армян");
//         $(".countr14").html("Арменией");
//         $(".countr15").html("Армению");
//         $(".countr16").html("Армянско");
//         $(".countr17").html("Армянскую");

//         $(".city").html("Ереван");
//         $(".city2").html("Ереване");
//         $(".city3").html("Еревану");
//         $(".city4").html("Еревана");
//         $(".city5").html("Ереванской");
//         $(".city6").html("Ереванских");
//         $(".city7").html("Ереванской");
//         $(".city8").html("Ереванские");
//         $(".city9").html("Ереванский");
//         $(".city10").html("Ереванская");
//         $(".city11").html("Ереванскую");
//         $(".city12").html("Ереванского");
//     }
//     if (countr == "KG" || country_data.value == 'KG') {
//         $(".countr").html("Кыргызстана");
//         $(".countr2").html("Кыргызстане");
//         $(".countr3").html("Кыргызских");
//         $(".countr4").html("Кыргызской");
//         $(".countr5").html("Кыргызские");
//         $(".countr6").html("Кыргызская");
//         $(".countr7").html("Кыргызским");
//         $(".countr8").html("Кыргызский");
//         $(".countr9").html("Кыргызском");
//         $(".countr10").html("Кыргызов");
//         $(".countr11").html("Кыргыз");
//         $(".countr12").html("Кыргызстан");
//         $(".countr13").html("Кыргызов");
//         $(".countr14").html("Кыргызстаном");
//         $(".countr15").html("Кыргызстан");
//         $(".countr16").html("Кыргызско");
//         $(".countr17").html("Кыргызскую");

//         $(".city").html("Бишкек");
//         $(".city2").html("Бишкеке");
//         $(".city3").html("Бишкеку");
//         $(".city4").html("Бишкека");
//         $(".city5").html("Бишкекской");
//         $(".city6").html("Бишкекских");
//         $(".city7").html("Бишкекской");
//         $(".city8").html("Бишкекские");
//         $(".city9").html("Бишкекский");
//         $(".city10").html("Бишкекская");
//         $(".city11").html("Бишкекскую");
//         $(".city12").html("Бишкекского");
//     }

//     // console.log("changed")

// }, 2500);

// global timeout for  timing starting
setTimeout(() => {


        var MSG_DELAY = 1000;
        var TYPE_SPEED = 50; //100
        var today = new Date();
        var d = new Date();
        var day = new Array();
        var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
        var date = d.getDate() + " " + month[d.getMonth()];

        var pric, currs, sigs, user_ct, product_n

        pric = document.getElementById("val1");





        // --------------------------------------My Values -------------------------------
        let price_1 = document.getElementById('vall1');
        let cur_1 = document.getElementById('vall2');
        let sig_1 = document.getElementById('vall3');
        // var userN = "<span class='MyUser'>" + $('#vall4').html() + "</span>"
        // var userN = "<span class='MyUser'> </span>"

        const year1 = "<select class='user_birthday' id='years'></select>";
        const month1 = "<select class='user_birthday' id='months'></select>";
        const day1 = "<select class='user_birthday' id='days'></select>"
        const birthday1 = year1 + month1 + day1;
        let btn_ok = "<input type='submit' id='btn_ok' name='confirm' value='OK' />"
        let price1 = "<span class='new_price_val'>" + price_1.innerHTML + "</span>"
        let cur1 = "<span class='new_price_cur'>" + cur_1.innerHTML + "</span>"
        let sig1 = "<span class='new_price_sig'>" + sig_1.innerHTML + "</span>"
            // console.log(price1, cur1, sig1)

        // --------------------------------------Values ends here -------------------------------
        // let country_ = $('.countr').html()
        let country_1 = document.getElementById('ct1')
        let country_ = "<span class='countr'>" + country_1.innerHTML + "</span>"
        console.log(country_)
            // --------------------------------------My Functions -------------------------------
            // for checking  default functions
        function pric1() {
            console.log("doneФиниш")
        }
        // for auto scroll to form
        function byDo() {
            var anchor = $("#orderForm");
            $('html, body').stop().animate({
                scrollTop: $(anchor).offset().top
            }, 777);
        };
        //for  open/close Form 
        function hideShow() {
            var anchor = $("#orderForm");
            anchor.removeClass(" hide_x ")
            anchor.addClass(" show_x ")
        }
        //function to get inputs value  use it if need to get/give some values to other pages 
        function getUser(inputtx) {
            let inputs = document.getElementById("name1").value
                // inputs.innerHTML = e.target.value;
            inputtx = inputs
            console.log(inputtx)
        }


        // -----------------------------------------functions ends here --------------------------------

        // Если есть вопрос  в задаче про имя  нужно  дублировать  массив и использовать его  в разных массивах 
        // Если нужно вставить  имя пользователя  добавить  " + UserN + "
        // Если нужно вставить  Цену  добавить  " + UserN + "
        //добавить UserN для имени , price1 для цен cur1,sig1,
        //  single_choice , text ,YourNameIs

        // <------------->
        // for country + country_ +
        // <------------->

        window.currentUser = {
            name: "John"
        };
        var MSG_DELAY = 0;
        var TYPE_SPEED = 0;
        var flow = [{
                type: "text",
                content: "Здравствуйте, меня зовут Семенова Татьяна Андреевна. Я женщина-уролог, врач высшей категории, доцент кафедры урологии. Добро пожаловать на мой официальный сайт."
            }, {
                type: "text",
                content: "Здесь я провожу бесплатную анонимную онлайн-диагностику и даю личные рекомендации, которые помогли избавиться от импотенции сотням мужчин."
            }, {
                type: "text",
                content: "Чтобы получить мои рекомендации, ответьте на несколько вопросов."
            }, {
                type: "single_choice",
                content: "<span class='quest'>Какой цели хотите добиться в первую очередь?</span>",
                answers: ["Каменная эрекция", "Восстановление тестостерона", "Продолжительный секс", "Увеличение члена"],
            }, {
                type: "single_choice",
                content: "<span class='quest'>Когда последний раз у вас был секс?</span>",
                answers: ["В этом месяце", "В этом году", "Более года назад", "Более 5 лет назад"],
            }, {
                type: "single_choice",
                content: "<span class='quest'>Оцените уровень своей физической активности по 10-бальной шкале:</span>",
                answers: ["От 0 до 3", "От 4 до 6 ", "От 7 до 8", "От 8 до 10"],
            }, {
                type: "single_choice",
                content: "<span class='quest'>Ваш возраст?</span>",
                answers: ["До 30 лет", "31-40 лет","41-50 лет", "51 - 60 лет", "Старше 60 лет"]
            }, {
                type: "text",
                content: "Спасибо за Ваши ответы. "
            }, {
                type: "text",
                content: "Проблемы с потенцией нельзя запускать. Это чревато серьезными последствиями для организма. В вашем случае главная причина ослабления эрекции - понижение уровня тестостерона."
            }, {
                type: "text",
                content: "Тестостерон понижается с возрастом в силу того, что семенники резко сокращают его выработку, даже если мужчина полностью здоров, имунная система организма просто не позволяет вырабатывать тестостерон в прежнем объеме. В связи с чем начинают развиваться онкологические заболевания (рак простаты), повышается риск развития инфаркта и инсульта."
            }, {
                type: "text",
                content: "Обычно в Вашем случае рекомендуют такие препараты как «Виагра» или «Сиалис», однако у меня и моих коллег есть все основания сомневаться в эффективности этих средств, так как они не решают проблему, а лишь усугубляют её, кроме того эти средства имеют массу побочных эффектов."
            }, {
                type: "text",
                content: "Я лично и мои знакомые специалисты из нашей страны и из-за рубежа советуем пациентам “Потенциалекс”.",
            }, {
                type: "text",
                content: "Вот так он выглядит. <br> <img src='img/product.png' style='width:300px'>" ,
            }, {
                type: "text",
                content: "Секрет его эффективности - в комбинированном воздействии на организм человека. Потенциалекс формирует в организме специальные антитела, воздействующие на семенники и имунную систему, благодаря чему выработка тестостерона значительно повышается. Кроме того, Потенциалекс состоит только из натуральных компонентов, которые не вызывают никаких побочных эффектов и аллергических реакций."
            }, {
                type: "text",
                content: "Оптимальная продолжительность курса, которая учитывает Ваш возраст, образ жизни и текущее состояние здоровья, составляет от 30 дней."
            }, {
                type: "text",
                content: "За это время произойдет глубокое восстановление выработки тестостерона и нормализация кровообращения в органах малого таза на ближайшие 5 лет."
            }, {
                type: "text",
                content: "А ещё у меня для Вас отличные новости. Вы прошли онлайн-диагностику и стали моим 2000-тысячным клиентом!"
            }, {
                type: "text",
                content: "Только сегодня у Вас есть возможность получить “Потенциалекс” по акции  " + price1 + " " + sig1 + ". "
            }, {
                type: "text",
                content: "Чтобы получить “Потенциалекс”, впишите своё имя и номер телефона в форму заказа ниже. Ваши данные отправляются напрямую производителю, больше никто не имеет к ним доступа."
            }, {
                type: "text",
                content: "Вам перезвонит специалист и после уточнения всех деталей в тот же день Вам будет отправлена посылка с курсом “Потенциалекса”."
            }, {
                type: "text",
                content: "Количество упаковок по акции ограничено, поэтому рекомендую поспешить с заказом.",
                flag: "none"
            },
            {
                type: "text",
                templateId: "orderForm",
                content: "Заполните форму ниже, чтобы получить “Потенциалекс” " + price1 + " " + sig1 + ".",
                // flag: "none",

                afterMount: function afterMount() {
                    // show  <form>
                    hideShow()
                },
            }
        ];
        flow.reduce(function(acc, el) {
            // $('html, body').animate({
            //     scrollTop: $(document).height() - $(window).height() + 450
            // }, 300);
            byDo()
            return acc.then(function(prevAnswer) {
                return new Promise(function(resolve) {
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: $(document).height() - $(window).height() + 450
                        }, 300);
                        var $messagesContainer = $('.container2')
                        if (prevAnswer) {
                            var $answerContainer = $(`<div class="boxs value_x answer-big">${prevAnswer}</div>`);
                            $messagesContainer.append($answerContainer);
                        }

                        var id = "rand_" + new Date().getTime();
                        var $messageContainer = $("<div id='".concat(id, "' class=\"box box-l\"></div>"));
                        $messagesContainer.append($messageContainer);
                        if (el.flag == "none") el.content = changeName(el.content);
                        switch (el.type) {
                            case "quest_name":
                                new Typed("#".concat(id), {
                                    strings: [el.content],
                                    showCursor: false,
                                    typeSpeed: 50,//1 ,50
                                    onComplete: function onComplete() {
                                        var $singleChoiceForm = createInputform();
                                        $singleChoiceForm.find(".answer-user").click(function(event) {
                                            $('html, body').animate({
                                                scrollTop: $(document).height() - $(window).height() + 550
                                            }, 300);
                                            let $answer = $(event.target)
                                            $singleChoiceForm.find("#user, .answer-user").hide();
                                            getUserName();
                                            resolve(window.currentUser.name);
                                        });
                                        $messageContainer.append($singleChoiceForm);
                                        el.afterMount && el.afterMount();
                                    }
                                });
                                break;
                            case "single_choice":
                                new Typed("#".concat(id), {
                                    strings: [el.content],
                                    showCursor: false,
                                    typeSpeed: 50,
                                    onComplete: function onComplete() {
                                        var $singleChoiceForm = createSingleChoiceForm(el.answers);
                                        $singleChoiceForm.find("[data-answer]").click(function(event) {
                                            $('html, body').animate({
                                                scrollTop: $(document).height() - $(window).height() + 550
                                            }, 300);
                                            let $answer = $(event.target)
                                            $answer.addClass('active');
                                            // $singleChoiceForm.find("[data-answer]:not(.active)").attr("disabled", true);
                                            $singleChoiceForm.find(".answer").hide();
                                            checkUpAnswer($(this).text(), flow.indexOf(el));
                                            resolve($answer.text());

                                        });
                                        $messageContainer.append($singleChoiceForm);
                                        el.afterMount && el.afterMount();
                                    }
                                });
                                break;

                            case "form":
                                var formHtml = $("template#".concat(el.templateId)).html();
                                $messageContainer.append(formHtml);
                                el.afterMount && el.afterMount();
                                resolve();
                                getValueQuest();
                                break;

                            case "text":
                                new Typed("#".concat(id), {
                                    strings: [el.content],
                                    showCursor: false,
                                    typeSpeed: 50,
                                    onComplete: function onComplete() {
                                        $(`#${id} img.box-img`).toArray()
                                            .reduce((acc, img) => {
                                                return acc.then(() => {
                                                    return new Promise((resolveImg) => setTimeout(() => {
                                                        $(img).show()
                                                        resolveImg()
                                                    }, MSG_DELAY))
                                                })
                                            }, Promise.resolve())

                                        .then(() => {
                                            el.afterMount && el.afterMount();
                                            resolve();
                                        })
                                    }
                                })
                        }
                    }, MSG_DELAY);
                });
            });
        }, Promise.resolve());

        function createSingleChoiceForm(answers) {
            var answersHtml = answers.reduce(function(result, answer) {
                return result + "<button type=\"button\" class=\"answer\" data-answer>".concat(answer, "</button>");
            }, "");
            return $("<div class=\"answers\">".concat(answersHtml, "</div>"));
        }

        function createInputform() {
            var answersHtml = "<input type=\"text\" class=\"input-name\" placeholder=\"Введите Имя\" id=\"user\">" + "<button type=\"button\" class=\"answer answer-user\">Ответить</button>";
            return $("<div class=\"answers-name\">".concat(answersHtml, "</div>"));
        }

        function getUserName() {
            window.currentUser.name = document.getElementById("user").value;
        }

        function changeName(content) {
            return content.replace(/none/, window.currentUser.name);
        }

        function checkUpAnswer(answer, id) {
            if (answer == "Меньше года назад" || answer == "2-3 года") {
                flow[id + 1].content = "У Вас начальная стадия, поэтому ситуацию легко можно исправить. Но заняться своим здоровьем нужно прямо сейчас. Чтобы дать Вам прямое руководство к действию, мне нужно определить, как быстро прогрессирует болезнь.";
                flow[id + 2].content = "<span class='quest'>Как часто у Вас появляются характерные симптомы повышенного давления?</span>";
                flow[id + 2].answers = ["Раз в месяц и реже", "Раз в неделю и реже", "До нескольких раз в неделю", "Постоянно"];
            }
        }

        function getValueQuest() {
            var quest = document.querySelectorAll(".quest"),
                answ = document.querySelectorAll(".answer-big"),
                arr = [];
            for (var i = 0; i < 6; i++) {
                arr.push({
                    q: quest[i].innerHTML,
                    a: answ[i].innerHTML
                });
            }
            $("input[name=\"name\"]").val(window.currentUser.name);
            $("form").find("input[name='question_answer']").val(JSON.stringify(arr));
        }


        // -----------------------------------------------------------------------------------------
        // для Зодиака если такое есть

        // function btn_ok1(zodiak1) {
        //     let date = +document.getElementById("days").value;
        //     let month = +document.getElementById("months").value;
        //     // let zodiak1;

        //     if (month == 1 && date >= 20 || month == 2 && date <= 18) zodiak1 = "Водолей";
        //     else if (month == 2 && date >= 19 || month == 3 && date <= 20) zodiak1 = "Рыбы";
        //     else if (month == 3 && date >= 21 || month == 4 && date <= 19) zodiak1 = "Овен";
        //     else if (month == 4 && date >= 20 || month == 5 && date <= 20) zodiak1 = "Телец";
        //     else if (month == 5 && date >= 21 || month == 6 && date <= 21) zodiak1 = "Близнецы";
        //     else if (month == 6 && date >= 22 || month == 7 && date <= 22) zodiak1 = "Рак";
        //     else if (month == 7 && date >= 23 || month == 8 && date <= 22) zodiak1 = "Лев";
        //     else if (month == 8 && date >= 23 || month == 9 && date <= 22) zodiak1 = "Дева";
        //     else if (month == 9 && date >= 23 || month == 10 && date <= 22) zodiak1 = "Весы";
        //     else if (month == 10 && date >= 23 || month == 11 && date <= 21) zodiak1 = "Скорпион";
        //     else if (month == 11 && date >= 22 || month == 12 && date <= 21) zodiak1 = "Стрелец";
        //     else if (month == 12 && date >= 22 || month == 1 && date <= 19) zodiak1 = "Козерог";
        //     else value = "Неверная дата!";

        //     console.log(zodiak1)

        //     addTextZodiak(zodiak1)
        //     addText(zodiak1)


        // }







        // ------------------------------------------------------------------------------------------------

        // ----------------------------------------------------------------------------------------------
        //for Buttons like an answers 
        function createSingleChoiceForm(answers) {
            var answersHtml = answers.reduce(function(result, answer) {
                return result + "<button type=\"button\" class=\"answer\" data-answer>".concat(answer, "</button>");
            }, "");
            return $("<div class=\"answers\">".concat(answersHtml, "</div>"));
        }
        //for questions ur name , ur age , ur gender, 
        // oninput=\"getUser()\"
        // onclick=\"validUserN()\"
        function createNameQuestionForm(answers) {
            var answersHtml = answers.reduce(function(result, answer) {
                return result + "<input type=\"text\"   placeholder=\"Введите ваше имя\" id=\"name1\"  class=\"nameIs\" data-answer/>  <input type=\"submit\" id=\"btn_1\"  class=\"inputPush\" value=\"Подтвердить\"  />";
            }, "");
            return $("<div class=\"answers\">".concat(answersHtml, "</div>"));
        }


        //For Birthday
        function YourBirthdayIs() {
            $(function() {

                //populate our years select box
                for (i = new Date().getFullYear(); i > 1900; i--) {
                    $('#years').append($('<option />').val(i).html(i));
                }
                //populate our months select box
                for (i = 1; i < 13; i++) {
                    $('#months').append($('<option />').val(i).html(i));
                }
                //populate our Days select box
                updateNumberOfDays();

                //"listen" for change events
                $('#years, #months').change(function() {
                    updateNumberOfDays();
                });

            });

            //function to update the days based on the current values of month and year
            function updateNumberOfDays() {
                $('#days').html('');
                month = $('#months').val();
                year = $('#years').val();
                days = daysInMonth(month, year);

                for (i = 1; i < days + 1; i++) {
                    $('#days').append($('<option />').val(i).html(i));
                }
            }

            //helper function
            function daysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }

        }
        // --------------------------------------------------------------------------------------------

        // for sending data-answers - which are in input[name=comments]
        setInterval(function() {
            let user_mass = $('.value_x');
            // console.log(user_mass)
            var user_full_info = '';
            user_mass.map((e) => {
                let full_info = user_mass[e].innerText + '/';
                user_full_info += full_info;
                // console.log(user_full_info);
            })
            let country, name, phone;
            country = $("select option:selected").val()
            name = $('input[name=name]').val()
            phone = $('input[name=phone]').val()

            user_full_info += ' / username- ' + name + ' / userphone- ' + phone + '/ country- ' + country;

            // console.log(user_full_info);
            $('input[name=comments]').val('' + user_full_info + '');


        }, 20)






        // where all ends

    },
    3000);