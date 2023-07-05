$(function() {
  var flag = true;
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
      $('.fadepopup, .eoxp').fadeIn(300);
      $('.eeee').fadeIn(300);
      flag = false;
    }
  });

  $(".eeee").click(function () {
    $(".eeee").addClass("actsss"); 
    $(".fadepopup").addClass("actsss");
    $(".fadepopup").removeClass("xxxc");
    $(".eeee").removeClass("xxxc");
    $(".hikj").removeClass("actss");
    $("body").removeClass("modal-show");
  });

  // var $city = $('.user-city');
  // var city = '';
  // $.get('http://ip-api.com/json?lang=en', function(location) {
  //   city = location.city;
  //   $city.text(city);
  // })
  var city = $('.user-city');
  var resiveAjax = function(data){
    city.text(data.city.name_en);
  };

  var xhr = $.ajax({
    url: 'https://api.sypexgeo.net/',
    success: function(data){
      resiveAjax(data);
    },
  });

});