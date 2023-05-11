$(document).ready(function () {

//    Прокрутка по странице к форме заказа
  $('.scrollToForm').click(function () {
    $('html, body').stop().animate({scrollTop: ($('#zakaz').offset().top)}, 1500);
  });
});
  $(document).ready(function () {

//    Прокрутка по странице к форме заказа
  $('.scrollToForm_1').click(function () {
    $('html, body').stop().animate({scrollTop: ($('.otziv_vid').offset().top)}, 1500);
  });
});




  $(document).ready(function() {
    function getRandom(min, max) { var res = Math.floor(Math.random() * (max - min + 1) + min); if (res < 10) { return '0' + res; } else { return res; } }
    var peoplePerDay = 8800;
    var date = new Date();
    var totalPeople = Math.round((peoplePerDay / 1440) * (date.getHours() * 60 + date.getMinutes()));
    var zakazPeople = Math.round(totalPeople * 0.1564);
    var nowPeople = getRandom(10, 50);
    $('.totalPeople').text(totalPeople);
    $('.zakazPeople').text(zakazPeople);
    $('.nowPeople').text(nowPeople);
});