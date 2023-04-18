$(function () {

  /* Стилизация списков */
  var i = 1;
  $('#body .central_part ol li').each(function(){
    $(this).append('<span class="circle_style">' + i + '</span>');
    i++;

    var parent = $(this).parents('ol');

    if($(this).index() == $(parent).find('li').length - 1) i = 1;
  });

  $('#body .central_part ul li').each(function(){
    if($(this).parents('.top_block').length) return;

    $(this).append('<span class="circle_style"></span>');
  });


  /* Таймер */
  if ($('#timer').length) {

    var _currentDate = new Date();
    var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + parseInt($('#timer').html()), 1);

    $('#timer').countdown({
      until: _toDate,
      format: 'HMS',
      compact: true,
      layout: '<div>{h10}<span>ore</span></div><div class="margin">{h1}</div>' +
              '<div>{m10}<span>minute</span></div><div class="margin">{m1}</div>' +
              '<div>{s10}<span>secunde</span></div><div>{s1}</div>'

    }).removeClass('hidden');
  }


  /* Выравнивание изображений исходя из размеров родительского элемента */
  $('.img_wrap').overflowed();

})


