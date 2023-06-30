/*LOCALIZATION VARAIBLES*/
// var countryCodeLocation = "RU"; // "RU", "UA", "RO", "TL"

// var nameList,
//     madeOrderOnSum,
//     wasOrdered,
//     left,
//     shared,
//     usersOnline,
//     orderedCallback,
//     packsLeft,
//     codeEmpty,
//     codeOk,
//     codeWrong,
//     packName,
//     discountPack,
//     leftSingle,
//     oneDollarPacktext,
//     strarSign,
//     allready,
//     peopleGotForOneDollar,
//     madeOrderOnCount;

// /* END LOCALIZATION VARAIBLES*/


// /* Общие настройки */

// var productQuantity = 60; // Желательно > 50.

// var intervalTime = 22000; // Задержка папапов.
// var mobileFormBreakPoint = 767; //В случае наличия разыных форм для мобилы и десктопа - тут можно указать разрешение, на котором форма будет меняться.



// var genderNames = 'both'; // 'men' если нужны только мужские имена. или 'women' если только женские. или 'both' если и те и те.


// /*Теги для попапов заказов*/

// var tagOnlineStart = '<div><i class="everad-sprite everad-sprite-online_user"></i><span>';
// var tagCartStart = '<div><i class="everad-sprite everad-sprite-bucket"></i><span>';
// var tagCallBackStart = '<div><i class="everad-sprite everad-sprite-callback"></i><span>';
// var tagStartSpan = '<span>';
// var tagEndSpan = '</span>';
// var tagEndDivAndSpan = '</span></div>';
// var tagBlinkSpan = '<span class="blink_me">';
// var tagBlinkAnim = '<span class="blink">';

// /*Конец тегов*/


// /*Включатели функций*/

// var modalsClone = true; // клонирование модалок с формой.
// var orderPopups = true; // всплывающие попапы с заказами.
// var checkCode = false;
// var todaySold = false; // #todayBay -wrap



// var localization = {
//     RU: {
//         men: [
//             'Валерий Фе****',
//             'Владислав Ко****',
//             'Владимир Ма****',
//             'Валентин Ди****',
//             'Валерий Ще******',
//             'Иван Ба*****',
//             'Вячеслав Ку****',
//             'Михаил Ро*****',
//             'Сергей Во*****',
//             'Дмитрий Де*****',
//             'Вячеслав Шу****',
//             'Дима Ав*****',
//             'Денис Ми***',
//             'Евгений Ма*****',
//             'Виталий Ми****',
//             'Даниил Те*****',
//             'Влад Бу*****',
//             'Иван Гр*****',
//             'Алексей Ре*****',
//             'Владимир Су****',
//             'Вадим Тр*****',
//             'Вадим Га*****',
//             'Евгений Го****',
//             'Евгений Ба****',
//             'Сергей Жу***',
//             'Влад Че*****',
//             'Владислав Ни****',
//             'Виктор Че*****',
//             'Олег Як*****',
//             'Дмитрий Гл*****',
//             'Василий Кр****',
//             'Антон За****',
//             'Антон Бе****',
//             'Илья Со****',
//             'Сергей Ми****',
//             'Дмитрий Да****',
//             'Владислав Ра****',
//             'Дмитрий Вл*****',
//             'Иван Ма*****',
//             'Павел Пр*****',
//             'Никита Ки****',
//             'Максим Ша*****',
//             'Ярослав Ко****',
//             'Илья См*****',
//             'Андрей Ле****',
//             'Андрей Ни*****',
//             'Артём Ре****',
//             'Анатолий Ти*****',
//             'Ярослав За*****',
//             'Василий Гу****'
//         ],
//         women: [
//             'Анна Па*****',
//             'Алина Ер*****',
//             'Александра Ло****',
//             'Елена Бы****',
//             'Марина Ел****',
//             'Анна Мо****',
//             'Ксения Кр*****',
//             'Алена Бо****',
//             'Виктория Ка****',
//             'Маргарита Бе****',
//             'Анна Ры*****',
//             'Дарья Са*****',
//             'Алла Кр*****',
//             'Евгения Ко****',
//             'Антонина Пе****',
//             'Ирина Со****',
//             'Алена Во****',
//             'Валентина Бу****',
//             'Вика Др****',
//             'Валерия Ло****',
//             'Кристина Со****',
//             'Наталья Го*****',
//             'Марина Ма*****',
//             'Катерина Ля****',
//             'Анастасия Ле*****',
//             'Екатерина Во*****',
//             'Наталья Ло****',
//             'Валентина Ля****',
//             'Вероника Ан****',
//             'Викуся Пр*****',
//             'Мария Ша****',
//             'Василиса Ма****',
//             'Ольга Дм****',
//             'Виктория Ни****',
//             'Дарья Пе****',
//             'Татьяна Ко****',
//             'Валентина Ко****',
//             'Оля Са******',
//             'Лилия Ма*****',
//             'Ирина Пе*****',
//             'Анна Да*******',
//             'Анастасия Во****',
//             'Полина Гр****',
//             'Мария Ко****',
//             'Кристина До****',
//             'Юлия Пу****',
//             'Татьяна Ла****',
//             'Валерия Лу****',
//             'Анастасия Шп****',
//             'Алёна Ши****'
//         ],
//         beforenametext: '',
//         madeOrderOnSum: ', сделал(а) заказ на сумму ',
//         wasOrdered: ', заказано ',
//         left: ' Осталось упаковок',
//         shared: ' по акции ',
//         usersOnline: 'Количество посетителей на сайте: ',
//         orderedCallback: ', сделал(а) заявку на обратный звонок',
//         packsLeft: 'Осталось упаковок по акции ',
//         codeEmpty: 'Введите, пожалуйста, код.',
//         codeOk: 'Данный код верен. Cпасибо, что выбрали нашу продукцию!',
//         codeWrong: 'К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.',
//         packName: ' шт.',
//         discountPack: ' акционных упаковок. ',
//         leftSingle: 'Осталось ',
//         oneDollarPacktext: '"Цена со скидкой 1&nbsp',
//         strarSign: '*" ',
//         allready: 'Уже ',
//         peopleGotForOneDollar: ' человек получили упаковку за 1 ',
//         madeOrderOnCount: ', сделал(а) заказ на '
//     },
//     UA: {
//         men: [
//             'Валерій Фе****',
//             'Владислав Ко****',
//             'Володимир Ма****',
//             'Валентин Ди****',
//             'Валерій Ще******',
//             'Іван Ба*****',
//             'Ярослав Ку****',
//             'Михайло Ро*****',
//             'Сергій Во*****',
//             'Дмитро Де*****',
//             'Олег Шу****',
//             'Діма Ав*****',
//             'Денис Ми***',
//             'Євгеній Ма*****',
//             'Виталій Ми****',
//             'Данило Те*****',
//             'Влад Бу*****',
//             'Іван Гр*****',
//             'Олексій Ре*****',
//             'Володимир Су****',
//             'Вадим Тр*****',
//             'Вадим Га*****',
//             'Євгеній Го****',
//             'Євгеній Ба****',
//             'Сергій Жу***',
//             'Влад Че*****',
//             'Владислав Ни****',
//             'Віктор Че*****',
//             'Олег Як*****',
//             'Дмитро Гл*****',
//             'Василь Кр****',
//             'Антон За****',
//             'Антон Бе****',
//             'Ілля Со****',
//             'Сергій Ми****',
//             'Дмитро Да****',
//             'Владислав Ра****',
//             'Дмитро Вл*****',
//             'Іван Ма*****',
//             'Павло Пр*****',
//             'Нікіта Ки****',
//             'Максим Ша*****',
//             'Ярослав Ко****',
//             'Ілля См*****',
//             'Андрій Ле****',
//             'Андрій Ни*****',
//             'Артем Ре****',
//             'Анатолій Ти*****',
//             'Ярослав За*****',
//             'Василь Гу****'
//         ],

//         women: [
//             'Анна Па*****',
//             'Аліна Ер*****',
//             'Олександра Ло****',
//             'Олена Би****',
//             'Марина Мі****',
//             'Анна Мо****',
//             'Ксенія Кр*****',
//             'Олена Бо****',
//             'Віктория Ка****',
//             'Маргарита Бе****',
//             'Анна Ри*****',
//             'Дарина Са*****',
//             'Алла Кр*****',
//             'Євгенія Ко****',
//             'Антоніна Пе****',
//             'Ірина Со****',
//             'Олена Во****',
//             'Валентина Бу****',
//             'Віка Др****',
//             'Валерія Ло****',
//             'Христина Со****',
//             'Наталя Го*****',
//             'Марина Ма*****',
//             'Катерина Ля****',
//             'Анастасія Ле*****',
//             'Катерина Во*****',
//             'Наталя Ло****',
//             'Валентина Ля****',
//             'Вероніка Ан****',
//             'Вікуся Пр*****',
//             'Марія Ша****',
//             'Василіса Ма****',
//             'Ольга Дм****',
//             'Вікторя Ни****',
//             'Дарина Пе****',
//             'Тетяна Ко****',
//             'Валентина Ко****',
//             'Оля Са******',
//             'Лілія Ма*****',
//             'Ірина Пе*****',
//             'Анна Да*******',
//             'Анастасія Во****',
//             'Поліна Гр****',
//             'Марія Ко****',
//             'Христина До****',
//             'Юлія Пу****',
//             'Тетяна Ла****',
//             'Валерія Лу****',
//             'Анастасія Шп****',
//             'Олена Ши****'
//         ],

//         beforenametext: '',
//         madeOrderOnSum: ', зробив(ла) замовлення на суму ',
//         wasOrdered: ', замовлено ',
//         left: ' Залишилось упаковок',
//         shared: ' по акції ',
//         usersOnline: 'Кількість відвідувачів на сайті: ',
//         orderedCallback: ', зробив(ла) заявку на зворотній дзвінок',
//         packsLeft: 'Залишилось упаковок по акції',
//         codeEmpty: 'Введіть, будь ласка, код.',
//         codeOk: 'Даний код вірний. Дякуємо, що вибрали нашу продукцію!',
//         codeWrong: 'На жаль, даний код не знайдений! Найімовірніше, ви придбали підроблений продукт.',
//         packName: ' шт.',
//         discountPack: ' акційних упаковок. ',
//         leftSingle: 'Залишилось ',
//         oneDollarPacktext: '"Ціна зі знижкою 1&nbsp',
//         strarSign: '*" ',
//         allready: 'Вже ',
//         peopleGotForOneDollar: ' людей отримали упаковку за 1 ',
//         madeOrderOnCount: ', зробив(ла) замовлення на '
//     },
//     TL: {
//         men: [
//             'Nampong Nakorn',
//             'Natwatcharaphon Samrong',
//             'Atthophol Rostham',
//             'Whatcharakorn Sonnuwat',
//             'Sorrasak Tujinda',
//             'Weerasuk Chimi Permphasook',
//             'Phunaphot Ketlekha',
//             'Phimrawi Ditthaneat',
//             'Chayaphon Purathane',
//             'Tik Jung',
//             'Nuttapol Chuasart',
//             'Passakon Yangsouy',
//             'Wuthiphan Jojo Ungkubkeaw',
//             'Jakkit Prachompol',
//             'Khanong Yotarat',
//             'Soisakul Paitoon',
//             'Abhithan Limboriboon',
//             'Siriphong Kasiphochana',
//             'Apichat Daengkongkho',
//             'Molakrai Wanachai',
//             'Attapon Pantu',
//             'Chalit Laknoy',
//             'Aeknarin Reuangsamut',
//             'Warayut Chaninsi',
//             'Turbohuahin Rattananakin',
//             'Ratithon Mark Chankomol',
//             'Kriengkrai Wongngernpet',
//             'Sanit Nitld Supjarussang',
//             'Rungsun Meeprasart',
//             'Somchai Paithumsut'
//         ],
//         women: [
//             'Kantima Juicharoen',
//             'Kawinthip Chanthaniyom',
//             'Tippawan Lasonti',
//             'Thanyathip Srisanyos',
//             'Sunantha Phansawat',
//             'Parngporn Chainarong',
//             'Chaninrat Thongsri',
//             'Watchara Imjai',
//             'Panita Sornthian',
//             'Warangkana Wongchompoo',
//             'Baifern Natthaphatsorn',
//             'Natchaya Wirojwatanakul',
//             'Thidathip Noosing',
//             'Vimwipa Klaviggarn',
//             'Sasisumon Yangchumchuen',
//             'Wilawan Kitcharoenwong',
//             'Phachara Num Phusudsung',
//             'Aew Junjira',
//             'Trairat Wittayapreechaku',
//             'Jantira Jamjaroen',
//             'Saitharn Prasansee',
//             'Aomaom Panisara Onnim',
//             'Tripaporn Jantarawijit',
//             'Numpeung Hongsakun',
//             'Patcharadanai Kaewprasaet',
//             'Roongnapa Pungpun',
//             'Maneerat Manosansophon',
//             'Phetcharat Charayut',
//             'Rinrada Pairot',
//             'Sudaporn Sonthong'
//         ],
//         beforenametext: 'คุณ ',
//         madeOrderOnSum: ' ได้สั่งสินค้าเป็นจำนวนเงิน ',
//         wasOrdered: ' สั่งซื้อเรียบร้อยแล้ว ',
//         left: ' มีสินค้าโปรโมชั่นเหลือ ',
//         shared: ' กล่อง ',
//         usersOnline: 'จำนวนผู้เข้าชมเวปไซต์ ',
//         orderedCallback: ' แจ้งให้เจ้าหน้าที่ติดต่อกลับเรียบร้อยแล้ว',
//         packsLeft: 'มีสินค้าโปรโมชั่นเหลือ ',
//         codeEmpty: 'กรุณาใส่รหัส',
//         codeOk: 'รหัสสินค้าถูกต้อง ขอบคุณที่เลือกใช้ผลิตภัณฑ์ของเรา',
//         codeWrong: 'ขออภัย ไม่พบรหัส เป็นไปได้ว่าสินค้าที่คุณซื้อไปอาจเป็นของปลอม',
//         invalidNameText: 'กรุณาระบุชื่อที่ถูกต้อง',
//         invalidPhoneText: 'กรุณาระบุหมายเลขโทรศัพท์ที่ถูกต้อง ไม่เช่นนั้นเราจะไม่สามารถติดต่อกับคุณได้',
//         packName: ' กล่อง',
//         discountPack: ' акционных упаковок. ',
//         leftSingle: 'Осталось ',
//         oneDollarPacktext: '"Цена со скидкой 1&nbsp',
//         strarSign: '*" ',
//         allready: 'Уже ',
//         peopleGotForOneDollar: ' человек получили упаковку за 1 ',
//         madeOrderOnCount: ', сделал(а) заказ на '
//     },
//     RO: {
//         men: [
//             'Stefan Ma****',
//             'Brandusa Ione****',
//             'Nicolae Gheor****',
//             'Florin Rox****',
//             'Catalin Pope****',
//             'Ioan R****',
//             'Adrian Constan****',
//             'Mihai Cos****',
//             'Dan P****',
//             'Dumitru Ser****',
//             'Gabriel Preoșe****',
//             'Dumitru Poste****',
//             'David B****',
//             'Florin Namgale****',
//             'Mircea Cov****',
//             'Daniel O****',
//             'Eugen Merin****',
//             'Ioan Petr****',
//             'Alexandru P****',
//             'Lazar Ione****',
//             'Brandușa Gheor****',
//             'Dorin Merin****',
//             'Eduard Ma****',
//             'Neculai Mazile****',
//             'Lucian Merin****',
//             'Matei Pope****',
//             'Gabriel Petr****',
//             'Mircea Curcan****',
//             'Adrian R****',
//             'Dumitru Constan****',
//             'Vasile S****',
//             'Dorin M****',
//             'Miron Brașovi****',
//             'Ionuț Anghe****',
//             'Iustin Cojoc****',
//             'Dumitru Cojoca****',
//             'Ignat Cozme****',
//             'Dumitru Mi****',
//             'Ioan Pe****',
//             'Florentin Pope****',
//             'Constantin Catar****',
//             'Matei Car****',
//             'Gabriel Ig****',
//             'Ion Constan****',
//             'Andrei Ser****',
//             'Andrei Gheor****',
//             'Eugen P****',
//             'Brandusa Chirileanu',
//             'Miron Ione****',
//             'Vasile Ma****',
//             'Alexandru Mazile****',
//             'Gheorghe Grosu'
//         ],
//         women: ['Ana Pope****',
//             'Floarea Mazile****',
//             'Andreea Chirile****',
//             'Elena Andr****',
//             'Mariana Ione****',
//             'Ana Mir****',
//             'Marina Poste****',
//             'Elena Oroș****',
//             'Alina Go****',
//             'Mariana Gheor****',
//             'Ana Constan****',
//             'Alexandra S****',
//             'Cristina Ma****',
//             'Ioana P****',
//             'Andreea Chir****',
//             'Aglaia Maco****',
//             'Elena And****',
//             'Georgiana ****',
//             'Mihaela R****',
//             'Felicia R****',
//             'Carolina Munte****',
//             'Horea Ser****',
//             'Mariana Insura****',
//             'Felicia Ione****',
//             'Dana Ra****',
//             'Ioana Ha****',
//             'Dorina Pope****',
//             'Eleonora Cu****',
//             'Viorica Chirilean****',
//             'Alexandra P****',
//             'Maria Dimo****',
//             'Viorica Timo****',
//             'Ioana Paval****',
//             'Aglaia Pavl****',
//             'Denisa Cojoc****',
//             'Doina Mo****',
//             'Monica Gheor****',
//             'Magda Ma****',
//             'Floarea Pope****',
//             'Alina Ione****',
//             'Ana Mazile****',
//             'Ana-Maria R****',
//             'Denisa Mor****',
//             'Maria Ser****',
//             'Georgiana Craiove****',
//             'Camelia S****',
//             'Magdalena Constan****',
//             'Viorica Țep****',
//             'Ana-Maria Lepa****',
//             'Elena B****',
//         ],
//         beforenametext: '',
//         madeOrderOnSum: ', un ordin pentru suma de ',
//         wasOrdered: ', au comandat ',
//         left: 'Au ramas ',
//         shared: ' pe reducere ',
//         usersOnline: 'Numărul de vizitatori ai site-ului: ',
//         orderedCallback: ', a făcut o cerere pentru un apel de retur',
//         packsLeft: 'Au ramas cutii pe reducere ',
//         codeEmpty: 'Scrieți vă rog, codul.',
//         codeOk: 'Acest cod este drept. Mulțumesc că ați ales producția noastră.',
//         codeWrong: 'Cu părere de rău acest cod nu poate fi găsit! Cel mai probabil, ați cumpărat un produs contrafăcut.',
//         packName: ' cutii',
//         discountPack: ' акционных упаковок. ',
//         leftSingle: 'Осталось ',
//         oneDollarPacktext: '"Цена со скидкой 1&nbsp',
//         strarSign: '*" ',
//         allready: 'Уже ',
//         peopleGotForOneDollar: ' человек получили упаковку за 1 ',
//         madeOrderOnCount: ', сделал(а) заказ на '
//     }
// }

// /* Доп функция */
// String.prototype.replaceAt = function(index, character) {
//     return this.substr(0, index) + character + this.substr(index + character.length);
// }

// /* Добавляем звездочки */
// function addStars(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var trimName = arr[i];
//         var startStars = trimName.indexOf(' ') + 3;
//         var cutStr = trimName.slice(0, startStars);
//         var newItem = cutStr.replaceAt(startStars, "*****");
//         arr.splice(i, 1, newItem);
//     }
// }

// function concatMenAndWoman(arr1, arr2) {
//     var concatedArray = arr1.concat(arr2);
//     addStars(concatedArray);
//     return concatedArray;
// }

// function setLocalization(localiz) {

//     if (genderNames == 'men') {
//         nameList = concatMenAndWoman(localization[localiz].men, []);
//     } else if (genderNames == 'women') {
//         nameList = concatMenAndWoman(localization[localiz].women, []);
//     } else {
//         nameList = concatMenAndWoman(localization[localiz].men, localization[localiz].women);
//     }
//     beforenametext = localization[localiz].beforenametext;
//     madeOrderOnSum = localization[localiz].madeOrderOnSum;
//     wasOrdered = localization[localiz].wasOrdered;
//     left = localization[localiz].left;
//     shared = localization[localiz].shared;
//     usersOnline = localization[localiz].usersOnline;
//     orderedCallback = localization[localiz].orderedCallback;
//     packsLeft = localization[localiz].packsLeft;
//     codeEmpty = localization[localiz].codeEmpty;
//     codeOk = localization[localiz].codeOk;
//     codeWrong = localization[localiz].codeWrong;
//     packName = localization[localiz].packName;
//     discountPack = localization[localiz].discountPack;
//     leftSingle = localization[localiz].leftSingle;
//     oneDollarPacktext = localization[localiz].oneDollarPacktext;
//     strarSign = localization[localiz].strarSign;
//     allready = localization[localiz].allready;
//     peopleGotForOneDollar = localization[localiz].peopleGotForOneDollar;
//     madeOrderOnCount = localization[localiz].madeOrderOnCount;
// }

// setLocalization(countryCodeLocation);


$(document).ready(function() {

    // function timer() {
    //     curr_time = new Date();
    //     curr_hour = curr_time.getHours();
    //     curr_min = curr_time.getMinutes();
    //     curr_sec = curr_time.getSeconds();
    //     hour = 23 - curr_hour;
    //     min = 60 - curr_min;
    //     sec = 60 - curr_sec;
    //     if (hour < 10) {
    //         hour = "0" + hour;
    //     }
    //     if (min < 10) {
    //         min = "0" + min;
    //     }
    //     if (sec < 10) {
    //         sec = "0" + sec;
    //     }
    //     if (hour == 24) {
    //         hour = "00";
    //     }
    //     if (min == 60) {
    //         min = "00";
    //     }
    //     if (sec == 60) {
    //         sec = "00";
    //     }
    //     $(".hours").html(hour);
    //     $(".minutes").html(min);
    //     $(".seconds").html(sec);
    // }
    // timer();
    // setInterval(function() { timer() }, 1000);

    var d = new Date();
    var p = new Date(d.getTime() - 0 * 86400000);
    var months = ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris']
    // montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
    date_html = (p.getDate() > 10 ? p.getDate() : '0' + p.getDate()) + ' ' + months[p.getMonth()];

    $('.today').html(date_html);
    var months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris']
});
