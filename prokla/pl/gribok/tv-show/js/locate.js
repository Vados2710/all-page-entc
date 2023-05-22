function getURLParameter(name, url) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var results = new RegExp('[?&]' + name + '=?([^&#]*)').exec(url || window.location.href);
    return results == null ? null : results[1] || true;
}


let country_data = setInterval(() => {
    country_data = $('select[name^="country"]')[0]
}, 20);

let countr = getURLParameter('country', window.location.href);
$(".countr").html(getURLParameter('country', window.location.href))

setInterval(() => {

    if (countr == "RU" || country_data.value == "RU") {
        
        $(".countr").html("России");
        $(".countr2").html("России");
        $(".countr3").html("Российских");
        $(".countr4").html("Российской");
        $(".countr5").html("Российские");
        $(".countr6").html("Российская");
        $(".countr7").html("Российским");
        $(".countr8").html("Российский");
        $(".countr9").html("Российском");
        $(".countr10").html("Россиянам");
        $(".countr11").html("Россиянин");
        $(".countr12").html("Россия");
        $(".countr13").html("Россиян");
        $(".countr14").html("Россией");
        $(".countr15").html("Россию");
        $(".countr16").html("Российско");
        $(".countr17").html("Российскую");

        $(".city").html("Москва");
        $(".city2").html("Москве");
        $(".city3").html("Москву");
        $(".city4").html("Москвы");
        $(".city5").html("Москвой");
        $(".city6").html("Московских");
        $(".city7").html("Московской");
        $(".city8").html("Московские");
        $(".city9").html("Московский");
        $(".city10").html("Московская");
        $(".city11").html("Московскую");
        $(".city12").html("Московского");
    }
    if (countr == "UA" || country_data.value == 'UA') {
        $(".countr").html("Украины");
        $(".countr2").html("Украине");
        $(".countr3").html("Украинских");
        $(".countr4").html("Украинской");
        $(".countr5").html("Украинские");
        $(".countr6").html("Украинская");
        $(".countr7").html("Украинским");
        $(".countr8").html("Украинский");
        $(".countr9").html("Украинском");
        $(".countr10").html("Украинцам");
        $(".countr11").html("Украинец");
        $(".countr12").html("Украина");
        $(".countr13").html("Украинцев");
        $(".countr14").html("Украиной");
        $(".countr15").html("Украину");
        $(".countr16").html("Украинско");
        $(".countr17").html("Украинскую");

        $(".city").html("Киев");
        $(".city2").html("Киеве");
        $(".city3").html("Киеву");
        $(".city4").html("Киева");
        $(".city5").html("Киевской");
        $(".city6").html("Киевских");
        $(".city7").html("Киевской");
        $(".city8").html("Киевские");
        $(".city9").html("Киевский");
        $(".city10").html("Киевская");
        $(".city11").html("Киевскую");
        $(".city12").html("Киевского");
    }
    if (countr == "BY" || country_data.value == 'BY') {
        $(".countr").html("Беларуси");
        $(".countr2").html("Беларусии");
        $(".countr3").html("Беларусских");
        $(".countr4").html("Беларусской");
        $(".countr5").html("Беларусские");
        $(".countr6").html("Беларусская");
        $(".countr7").html("Беларусским");
        $(".countr8").html("Беларусский");
        $(".countr9").html("Беларусском");
        $(".countr10").html("Беларуссам");
        $(".countr11").html("Беларус");
        $(".countr12").html("Беларусь");
        $(".countr13").html("Беларуссов");
        $(".countr14").html("Беларуссией");
        $(".countr15").html("Беларуссию");
        $(".countr16").html("Беларусско");
        $(".countr17").html("Беларусскую");

        $(".city").html("Минск");
        $(".city2").html("Минске");
        $(".city3").html("Минску");
        $(".city4").html("Минска");
        $(".city5").html("Минской");
        $(".city6").html("Минкских");
        $(".city7").html("Минской");
        $(".city8").html("Минские");
        $(".city9").html("Минский");
        $(".city10").html("Минская");
        $(".city11").html("Минскую");
        $(".city12").html("Минского");
    }
    if (countr == "KZ" || country_data.value == 'KZ') {
        $(".countr").html("Казахстана");
        $(".countr2").html("Казахстане");
        $(".countr3").html("Казахских");
        $(".countr4").html("Казахской");
        $(".countr5").html("Казахские");
        $(".countr6").html("Казахская");
        $(".countr7").html("Казахским");
        $(".countr8").html("Казахский");
        $(".countr9").html("Казахском");
        $(".countr10").html("Казахам");
        $(".countr11").html("Казахам");
        $(".countr12").html("Казахстан");
        $(".countr13").html("Казахцев");
        $(".countr14").html("Казахстаном");
        $(".countr15").html("Казахстан");
        $(".countr16").html("Казахско");
        $(".countr17").html("Казахстанскую");

        $(".city").html("Нур-Султан");
        $(".city2").html("Нур-Султане");
        $(".city3").html("Нур-Султану");
        $(".city4").html("Нур-Султана");
        $(".city5").html("Нур-Султанской");
        $(".city6").html("Нур-Султанских");
        $(".city7").html("Нур-Султанской");
        $(".city8").html("Нур-Султанские");
        $(".city9").html("Нур-Султанский");
        $(".city10").html("Нур-Султанская");
        $(".city11").html("Нур-Султанскую");
        $(".city12").html("Нур-Султанского");
    }
    if (countr == "UZ" || country_data.value == 'UZ') {
        $(".countr").html("Узбекистана");
        $(".countr2").html("Узбекистане");
        $(".countr3").html("Узбекских");
        $(".countr4").html("Узбекской");
        $(".countr5").html("Узбекские");
        $(".countr6").html("Узбекская");
        $(".countr7").html("Узбекским");
        $(".countr8").html("Узбекский");
        $(".countr9").html("Узбекском");
        $(".countr10").html("Узбекам");
        $(".countr11").html("Узбек");
        $(".countr12").html("Узбекистан");
        $(".countr13").html("Узбеков");
        $(".countr14").html("Узбекистаном");
        $(".countr15").html("Узбекистан");
        $(".countr16").html("Узбекско");
        $(".countr17").html("Узбекистанскую");

        $(".city").html("Ташкент");
        $(".city2").html("Ташкенте");
        $(".city3").html("Ташкенту");
        $(".city4").html("Ташкента");
        $(".city5").html("Ташкентской");
        $(".city6").html("Ташкентских");
        $(".city7").html("Ташкентской");
        $(".city8").html("Ташкентские");
        $(".city9").html("Ташкентский");
        $(".city10").html("Ташкентская");
        $(".city11").html("Ташкентскую");
        $(".city12").html("Ташкентского");
    }

    if (countr == "GE" || country_data.value == 'GE') {
        $(".countr").html("Грузии");
        $(".countr2").html("Грузии");
        $(".countr3").html("Грузинских");
        $(".countr4").html("Грузинской");
        $(".countr5").html("Грузинские");
        $(".countr6").html("Грузинская");
        $(".countr7").html("Грузинским");
        $(".countr8").html("Грузинский");
        $(".countr9").html("Грузинском");
        $(".countr10").html("Грузинам");
        $(".countr11").html("Грузин");
        $(".countr12").html("Грузия");
        $(".countr13").html("Грузинов");
        $(".countr14").html("Грузией");
        $(".countr15").html("Грузию");
        $(".countr16").html("Грузинско");
        $(".countr17").html("Грузинскую");

        $(".city").html("Тбилиси");
        $(".city2").html("Тбилиси");
        $(".city3").html("Тбилиси");
        $(".city4").html("Тбилиси");
        $(".city5").html("Тбилисской");
        $(".city6").html("Тбилисских");
        $(".city7").html("Тбилисской");
        $(".city8").html("Тбилисские");
        $(".city9").html("Тбилисский");
        $(".city10").html("Тбилисская");
        $(".city11").html("Тбилисскую");
        $(".city12").html("Тбилисского");
    }
    if (countr == "AM" || country_data.value == 'AM') {
        $(".countr").html("Армении");
        $(".countr2").html("Армении");
        $(".countr3").html("Армянских");
        $(".countr4").html("Армянской");
        $(".countr5").html("Армянские");
        $(".countr6").html("Армянская");
        $(".countr7").html("Армянским");
        $(".countr8").html("Армянский");
        $(".countr9").html("Армянском");
        $(".countr10").html("Армянам");
        $(".countr11").html("Армян");
        $(".countr12").html("Армения");
        $(".countr13").html("Армян");
        $(".countr14").html("Арменией");
        $(".countr15").html("Армению");
        $(".countr16").html("Армянско");
        $(".countr17").html("Армянскую");

        $(".city").html("Ереван");
        $(".city2").html("Ереване");
        $(".city3").html("Еревану");
        $(".city4").html("Еревана");
        $(".city5").html("Ереванской");
        $(".city6").html("Ереванских");
        $(".city7").html("Ереванской");
        $(".city8").html("Ереванские");
        $(".city9").html("Ереванский");
        $(".city10").html("Ереванская");
        $(".city11").html("Ереванскую");
        $(".city12").html("Ереванского");
    }
    if (countr == "KG" || country_data.value == 'KG') {
        $(".countr").html("Кыргызстана");
        $(".countr2").html("Кыргызстане");
        $(".countr3").html("Кыргызских");
        $(".countr4").html("Кыргызской");
        $(".countr5").html("Кыргызские");
        $(".countr6").html("Кыргызская");
        $(".countr7").html("Кыргызским");
        $(".countr8").html("Кыргызский");
        $(".countr9").html("Кыргызском");
        $(".countr10").html("Кыргызов");
        $(".countr11").html("Кыргыз");
        $(".countr12").html("Кыргызстан");
        $(".countr13").html("Кыргызов");
        $(".countr14").html("Кыргызстаном");
        $(".countr15").html("Кыргызстан");
        $(".countr16").html("Кыргызско");
        $(".countr17").html("Кыргызскую");

        $(".city").html("Бишкек");
        $(".city2").html("Бишкеке");
        $(".city3").html("Бишкеку");
        $(".city4").html("Бишкека");
        $(".city5").html("Бишкекской");
        $(".city6").html("Бишкекских");
        $(".city7").html("Бишкекской");
        $(".city8").html("Бишкекские");
        $(".city9").html("Бишкекский");
        $(".city10").html("Бишкекская");
        $(".city11").html("Бишкекскую");
        $(".city12").html("Бишкекского");
    }

    // console.log("changed")

}, 200);