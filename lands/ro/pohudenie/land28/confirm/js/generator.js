$(document).ready(function () {
    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.demon_popup').fadeIn(300);
            flag = false;
        }
    })


    $('.demon_close, .popup_btn').click(function () {
        $('.demon_popup').fadeOut(300);
    });

    $('.demon_popup').click(function (e) {
        e.stopPropagation();
    });
    $('#pop-up-disappear').on('click' ,function () {
        $('.demon_popup').fadeOut(300);
});
});

window.onload = function () {
    var userCity = $(".user-city");

    function checkCity(city) {
        if (!city) {
            return 'Москва'
        }
        return city;
    }
    if (window.ymaps && window.ymaps.geolocation.city) {
        userCity.text(checkCity(ymaps.geolocation.city));
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://click.lucky.online/click/ip-location.html', false);
        xhr.send();
        if (xhr.status != 200) {
            userCity.text(checkCity(null));
        } else {
            var response = JSON.parse(xhr.responseText);
            userCity.text(checkCity(response.city));
        }
    }
};

$(function () {
    var e = new XMLHttpRequest;
    if (e.open("GET", "https://click.lucky.online/click/ip-location.html", !1), e.send(), 200 === e.status) {
        var t = JSON.parse(e.responseText);
        ! function (t, r) {
            $(".country").text(t), document.getElementsByTagName("body")[0], n(r)
        }(t.country, t.code)
    }

    function n(e) {
        var t, n = 0;
        $("select").change(function () {
            0 == n && (n = 1, $(this.children).each(function () {
                    this.selected && (sel = $(this).val())
                }), "undefined" == typeof sel && (sel = "RU"),
                "RU" == sel && ($(".country_name").text("Российские"),
                 $(".country_name1").text("Российскому"),
                  $(".country_name2").text("России"),
                   $(".country_name3").text("Россию"),
                    $(".country_name4").text("Российских"),
                     $(".country_name5").text("Российской"),
                      $(".country_name6").text("Российским"),
                       $(".country_name7").text("Российскому"),
                        $(".country_name8").text("Российскую"),
                         $(".country_name9").text("Российские"),
                          $(".country_name10").text("Российский"),
                           $(".country_name11").text("России"),
                            $(".country_name12").text("России"),
                             $(".country_name13").text("Российская"),
                              $(".country_name14").text("Российской"),
                               $(".country_name18").text("Россия"),
                               $(".country_com7").text("Маричева Анна Николаевна"),
                               $(".country_com8").text("Игорь Сагитов"),
                               $(".country_com9").text("Светлана Скорик"),
                               $(".country_com10").text("Маргарита Абдурахманова"),
                               $(".country_com11").text("Елизавета Казанцева "),

                               $('.product-i1').attr('src','confirm/images/doc_ru.png'),
                               $('.product-i2').attr('src','confirm/images/feed-img1.png'),
                               $('.product-i3').attr('src','confirm/images/feed-img2.png'),
                               $('.product-i4').attr('src','confirm/images/feed-img3.jpg'),
                               $('.product-i5').attr('src','confirm/images/feed-img4.png'),

                    document.getElementsByTagName("body")[0]),
                "KZ" == sel && ($(".country_name").text("Казахстанские"), $(".country_name1").text("Казахстанскому"), $(".country_name2").text("Казахстане"), $(".country_name3").text("Казахстан"), $(".country_name4").text("Казахстанских"), $(".country_name5").text("Казахстанской"), $(".country_name6").text("Казахстанским"), $(".country_name7").text("Казахстанскому"), $(".country_name8").text("Казахстанскую"), $(".country_name9").text("Казахстанские"), $(".country_name10").text("Казахстанский"), $(".country_name11").text("Казахстану"), $(".country_name12").text("Казахстана"), $(".country_name13").text("Казахстанская"), $(".country_name14").text("Казахстанской"), $(".country_name18").text("Казахстан"),
                $(".country_com7").text("Кенже Азатовна Шаяхметова"),
                $(".country_com8").text("Мансур Ким"),
                $(".country_com9").text("Закария Балиева "),
                $(".country_com10").text("Жанар Сагатова"),
                $(".country_com11").text("Алтын Оразалина"),
                $('.product-i1').attr('src','confirm/images/KZ/doc_kz.jpg'),
                $('.product-i2').attr('src','confirm/images/KZ/1.jpeg'),
                $('.product-i3').attr('src','confirm/images/KZ/2.png'),
                $('.product-i4').attr('src','confirm/images/KZ/3.jpg'),
                $('.product-i5').attr('src','confirm/images/KZ/4.jpg'),


                    document.getElementsByTagName("body")[0]),
                "BY" == sel && ($(".country_name").text("Беларусские"), $(".country_name1").text("Беларусскому"), $(".country_name2").text("Беларуси"), $(".country_name3").text("Беларусь"), $(".country_name4").text("Беларусских"), $(".country_name5").text("Беларусской"), $(".country_name6").text("Беларусским"), $(".country_name7").text("Беларусскому"), $(".country_name8").text("Беларусскую"), $(".country_name9").text("Беларусские"), $(".country_name10").text("Беларусский"), $(".country_name11").text("Беларуси"), $(".country_name12").text("Беларуси"), $(".country_name13").text("Беларусская"), $(".country_name14").text("Беларусской"), $(".country_name18").text("Беларусь"),
                $(".country_com7").text("Маричева Анна Николаевна"),
                $(".country_com8").text("Игорь Сагитов"),
                $(".country_com9").text("Светлана Скорик"),
                $(".country_com10").text("Маргарита Абдурахманова"),
                $(".country_com11").text("Елизавета Казанцева "),

                $('.product-i1').attr('src','confirm/images/doc_ru.png'),
                $('.product-i2').attr('src','confirm/images/feed-img1.png'),
                $('.product-i3').attr('src','confirm/images/feed-img2.png'),
                $('.product-i4').attr('src','confirm/images/feed-img3.jpg'),
                $('.product-i5').attr('src','confirm/images/feed-img4.png'),


                    document.getElementsByTagName("body")[0]),
                "UA" == sel && ($(".country_name").text("Украинские"), $(".country_name1").text("Украинскому"), $(".country_name2").text("Украине"), $(".country_name3").text("Украину"), $(".country_name4").text("Украинских"), $(".country_name5").text("Украинской"), $(".country_name6").text("Украинским"), $(".country_name7").text("Украинскому"), $(".country_name8").text("Украинскую"), $(".country_name9").text("Украинские"), $(".country_name10").text("Украинский"), $(".country_name11").text("Украине"), $(".country_name12").text("Украины"), $(".country_name13").text("Украинская"), $(".country_name14").text("Украинской"), $(".country_name18").text("Украина"),
                    document.getElementsByTagName("body")[0]),
                "KG" == sel && ($(".country_name").text("Киргизские"), $(".country_name1").text("Киргизскому"), $(".country_name2").text("Киргизии"), $(".country_name3").text("Киргизию"), $(".country_name4").text("Киргизских"), $(".country_name5").text("Киргизской"), $(".country_name6").text("Киргизским"), $(".country_name7").text("Киргизскому"), $(".country_name8").text("Киргизскую"), $(".country_name9").text("Киргизские"), $(".country_name10").text("Киргизский"), $(".country_name11").text("Киргизии"), $(".country_name12").text("Киргизии"), $(".country_name13").text("Киргизская"), $(".country_name14").text("Киргизской"), $(".country_name18").text("Киргизия"),


                    document.getElementsByTagName("body")[0]),
                "AM" == sel && ($(".country_name").text("Армянские"), $(".country_name1").text("Армянскому"), $(".country_name2").text("Армении"), $(".country_name3").text("Армению"), $(".country_name4").text("Армянских"), $(".country_name5").text("Армянской"), $(".country_name6").text("Армянским"), $(".country_name7").text("Армянскому"), $(".country_name8").text("Армянскую"), $(".country_name9").text("Армянские"), $(".country_name10").text("Армянский"), $(".country_name11").text("Армении"), $(".country_name12").text("Армении"), $(".country_name13").text("Армянская"), $(".country_name14").text("Армянской"), $(".country_name18").text("Армения"),
                $(".country_com7").text("Егине Петросовна Енгорян"),
                $(".country_com8").text("Арман Суварян"),
                $(".country_com9").text("Мегрануш Ширинян "),
                $(".country_com10").text("Нана Сароян"),
                $(".country_com11").text("Зепур Даманян"),
                $('.product-i1').attr('src','confirm/images/AM/doc_am.jpg'),
                $('.product-i2').attr('src','confirm/images/AM/1.jpg'),
                $('.product-i3').attr('src','confirm/images/AM/2.jpg'),
                $('.product-i4').attr('src','confirm/images/AM/3.jpg'),
                $('.product-i5').attr('src','confirm/images/AM/4.jpg'),


                    document.getElementsByTagName("body")[0]),     
                "MD" == sel && ($(".country_name").text("Молдавские"), $(".country_name1").text("Молдавскому"), $(".country_name2").text("Молдавии"), $(".country_name3").text("Молдавию"), $(".country_name4").text("Молдавских"), $(".country_name5").text("Молдавской"), $(".country_name6").text("Молдавским"), $(".country_name7").text("Молдавскому"), $(".country_name8").text("Молдавскую"), $(".country_name9").text("Молдавские"), $(".country_name10").text("Молдавский"), $(".country_name11").text("Молдавии"), $(".country_name12").text("Молдавии"), $(".country_name13").text("Молдавская"), $(".country_name14").text("Молдавской"), $(".country_name18").text("Молдавия"),
                    document.getElementsByTagName("body")[0]),
                "GE" == sel && ($(".country_name").text("Грузинские"), $(".country_name1").text("Грузинскому"), $(".country_name2").text("Грузии"), $(".country_name3").text("Грузию"), $(".country_name4").text("Грузинских"), $(".country_name5").text("Грузинской"), $(".country_name6").text("Грузинским"), $(".country_name7").text("Грузинскому"), $(".country_name8").text("Грузинскую"), $(".country_name9").text("Грузинские"), $(".country_name10").text("Грузинский"), $(".country_name11").text("Грузии"), $(".country_name12").text("Грузии"), $(".country_name13").text("Грузинская"), $(".country_name14").text("Грузинской"), $(".country_name18").text("Грузия"),
                    document.getElementsByTagName("body")[0]),
                "AZ" == sel && ($(".country_name").text("Азербайджанские"), $(".country_name1").text("Азербайджанскому"), $(".country_name2").text("Азербайджане"), $(".country_name3").text("Азербайджан"), $(".country_name4").text("Азербайджанских"), $(".country_name5").text("Азербайджанской"), $(".country_name6").text("Азербайджанским"), $(".country_name7").text("Азербайджанскому"), $(".country_name8").text("Азербайджанскую"), $(".country_name9").text("Азербайджанские"), $(".country_name10").text("Азербайджанский"), $(".country_name11").text("Азербайджану"), $(".country_name12").text("Азербайджана"), $(".country_name13").text("Азербайджанская"), $(".country_name14").text("Азербайджанской"), $(".country_name18").text("Азербайджан"),
                    document.getElementsByTagName("body")[0]),
                "UZ" == sel && ($(".country_name").text("Узбекистанские"),
                 $(".country_name1").text("Узбекистанскому"),
                  $(".country_name2").text("Узбекистане"),
                   $(".country_name3").text("Узбекистану"),
                    $(".country_name4").text("Узбекистанских"),
                     $(".country_name5").text("Узбекистанской"),
                      $(".country_name6").text("Узбекистанским"),
                       $(".country_name7").text("Узбекистанскому"),
                        $(".country_name8").text("Узбекистанскую"),
                         $(".country_name9").text("Узбекистанские"),
                          $(".country_name10").text("Узбекистанский"),
                           $(".country_name11").text("Узбекистану"),
                            $(".country_name12").text("Узбекистана"),
                             $(".country_name13").text("Узбекистанская"),
                              $(".country_name14").text("Узбекистанской"),
                               $(".country_name18").text("Узбекистан"),
                               $(".country_com7").text("Эльмира Маратовна Азамова"),
                               $(".country_com8").text("Мавлет Гурбасбаев"),
                               $(".country_com9").text("Гульбиби Гамамаева "),
                               $(".country_com10").text("Ширин Мамаева"),
                               $(".country_com11").text("Зухра Олантаева"),
                               $('.product-i1').attr('src','confirm/images/UZ/doc_uz.jpg'),
                               $('.product-i2').attr('src','confirm/images/UZ/1.jpeg'),
                               $('.product-i3').attr('src','confirm/images/UZ/2.png'),
                               $('.product-i4').attr('src','confirm/images/UZ/3.jpg'),
                               $('.product-i5').attr('src','confirm/images/UZ/4.jpg'),

                    document.getElementsByTagName("body")[0]),
                n = 0)
        }).change();
    }
});